import { Product } from "@/models/product";
import { dbConnect } from "../../../lib/db";
import { Order } from "../../../models/order";
import Stripe from "stripe";

export async function POST(req) {
  try {
    await dbConnect();
    const { name, email, city, postCode, streetAddress, state, cartProducts } =
      await req.json();

    const productsIds = cartProducts;
    const uniqueIds = [...new Set(productsIds)];

    // Use find with async/await or exec to retrieve productInfos
    const productInfos = await Product.find({ _id: { $in: uniqueIds } });

    let line_items = [];
    let totalAmount = 0;
    for (const productId of uniqueIds) {
      const productInfo = productInfos.find(
        (p) => p._id.toString() === productId
      );
      const quantity =
        productsIds.filter((id) => id === productId)?.length || 0;
      if (quantity > 0 && productInfo) {
        line_items.push({
          quantity,
          price_data: {
            currency: "inr",
            product_data: { name: productInfo.title },
            unit_amount: quantity * productInfo.price * 100,
          },
        });
      }
    }

    line_items.forEach((item) => {
      totalAmount += item.price_data.unit_amount;
    });

    const newOrder = new Order({
      line_items,
      name,
      totalAmount,
      email,
      city,
      postCode,
      streetAddress,
      state,
      paid: false,
    });
    await newOrder.save();

    const stripe = new Stripe(process.env.STRIPE_SK);
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      currency: "INR",
      payment_method_types: ["card"],
      success_url: process.env.PUBLIC_URL + "/payment?payment_success=true",
      cancel_url: process.env.PUBLIC_URL + "/payment?payment_success=false",
      metadata: { orderId: newOrder._id.toString() },
    });
    return Response.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message || "Internal Server Error" });
  }
}

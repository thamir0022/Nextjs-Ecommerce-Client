import { dbConnect } from "@/lib/db";
import { Product } from "@/models/product";

export async function POST(req) {
  try {
    await dbConnect();

    const _id = await req.json();

    if (_id) {
      const products = await Product.find({ _id });

      if (products.length > 0) {
        return Response.json( {products} );
      } else {
        return Response.json("Can't find products");
      }
    } else {
      return Response.json("Product ID is required!");
    }
  } catch (error) {
    console.error("Error in GET request:", error);
    return Response.json({ error: error.message });
  }
}
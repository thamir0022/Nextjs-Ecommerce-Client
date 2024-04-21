import LatestProducts from "@/components/LatestProducts";
import FeaturedProduct from "../components/FeaturedProduct";
import Header from "../components/Header";
import Footer from '../components/Footer';
import { dbConnect } from "../lib/db";
import { Product } from "../models/product";
import BackToTop from "../components/BackToTop";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import User from "../models/user";
const { getUser, isAuthenticated } = getKindeServerSession();

export default async function Home() {
  await dbConnect();
  const featuredProduct = await getFeaturedProduct();
  const latestProducts = await getLatestProducts();
  await createUser();
  return (
    <>
      <Header />
      <FeaturedProduct product={featuredProduct || null} />
      <LatestProducts latestProducts={latestProducts || null} />
      <BackToTop />
      <Footer/>
    </>
  );
}

async function getFeaturedProduct() {
  try {
    const featuredProduct = await Product.findOne({ isFeatured: true }).lean();
    return JSON.parse(JSON.stringify(featuredProduct)) || null;
  } catch (error) {
    return { error: error.message };
  }
}

const getLatestProducts = async () => {
  try {
    const products = await Product.find()
      .sort({ updatedAt: -1 })
      .limit(12)
      .lean();
    return JSON.parse(JSON.stringify(products)) || null;
  } catch (error) {
    return { error: error.message };
  }
};

const createUser = async () => {
  try {
    if (isAuthenticated) {
      const { email, given_name, picture, id } = await getUser();
      const user = await User.findOne({ email });
      if (!user) {
        const newUser = new User({
          email: email,
          name: given_name,
          picture: picture,
          kindeId: id,
        });
        await newUser.save();
        const newCart = new Cart({
          userId: newUser._id.toString(),
          kindeId: newUser.kindeId,
        });
        await newCart.save();
      }
    }
  } catch (error) {
    return { error: error.message };
  }
};

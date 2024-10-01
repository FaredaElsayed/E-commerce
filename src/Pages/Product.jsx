import { useContext } from "react";
import styles from "./CSS/Product.module.css";
import { ShopContext } from "../Contexts/ShopContext";
import { useParams } from "react-router-dom";
import ProductItem from "../Componnents/ProductItem/ProductItem";
import ProductDisplay from "../Componnents/ProductDisplay/ProductDisplay";
import Description from "../Componnents/Description/Description";
import Footer from "../Componnents/Footer/Footer";
import RelatedProducts from "../Componnents/RelatedProducts/RelatedProducts";
import React from "react";
export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product not found</div>; // Handle missing products
  }

  return (
    <div className={styles.product}>
      <ProductItem product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProducts/>
      <Footer />
    </div>
  );
}

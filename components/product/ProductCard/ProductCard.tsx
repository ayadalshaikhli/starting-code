import { Product } from "@common/types/product";
import React, { FC, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./ProductCard.module.css";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Props {
  product: Product;
  variant?: "simple" | "slim";
}
const placeholderImage = "/product-image-placeholder.svg";
const ProductCard: FC<Props> = ({ product, variant = "simple" }) => {

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".product",
      start: "top 50%",
      end: "bottom 0%",

      onEnter: () => {
        gsap.to(".body", {
          duration: 1.0,
          backgroundColor: "#F4B4B8",
          
        });
      },

      onLeaveBack: () => {
        gsap.to(".body", {
          duration: 1.0,
          backgroundColor: "#B7B8BA",
        });
      },
    });
  });


  return (
    <Link href={`/products/${product.slug}`}>
      <a className={s.root}>
        {variant === "slim" ? (
          <>
            <div className="inset-0 flex items-center justify-center absolute z-20">
              <span className="bg-black text-white p-3 font-bold text-xl">
                {product.name}
              </span>
            </div>
            {product.images && (
              <Image
                className={s.productImage}
                alt={product.name ?? "Product image"}
                src={product.images[0].url ?? placeholderImage}
                height={320}
                width={320}
                quality="85"
                layout="fixed"
              />
            )}
          </>
        ) : (
          <>
      
              <div className="product flex flex-col">
                <div className="product1 flex flex-col">
                  <div className="text-left p-5">
                    <h3 className="p-2">
                      <span>{product.name}</span>
                    </h3>
                    <span className={s.productPrice}>
                      {product.price.value} {product.price.currencyCode}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  {product.images && (
                    <Image
                      className={s.productImage}
                      alt={product.name ?? "Product image"}
                      src={product.images[0].url ?? placeholderImage}
                      height={240}
                      width={240}
                      quality="85"
                      layout="intrinsic"
                    />
                  )}
                </div>
              </div>
            
          </>
        )}
      </a>
    </Link>
  );
};

export default ProductCard;

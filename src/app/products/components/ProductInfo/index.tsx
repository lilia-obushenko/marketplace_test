import { Product } from "@/api";
import Image from "next/image";
import React from "react";

interface ProductInfoProps {
  product?: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className="flex gap-[24px] lg:flex-row flex-col mb-[20px]">
      <div className="p-[15px] rounded-[10px] bg-[#F4F4F4] flex lg:flex-row flex-col-reverse gap-[15px] basis-[50%]">
        <img
          src={product?.images[0]}
          alt="product variant"
          className="rounded-[10px] w-full h-full object-cover"
        />
      </div>

      <div className="p-[15px] rounded-[10px] bg-[#F4F4F4] flex basis-[50%] flex-col">
        <p className="font-bold text-[26px] mb-[8px]">{product?.title}</p>
        <p className="text-[16px] text-gray-500 mb-[16px]">#{product?.sku}</p>
        <p className="font-bold text-[20px] mb-[16px]">
          <span className="text-gray-500">Price:</span> {product?.price} $
        </p>

        <p className="font-bold text-[20px] mb-[16px]">
          <span className="text-gray-500">Brand:</span> {product?.brand ?? "-"}{" "}
        </p>

        <div className="font-bold text-[20px] mb-[16px] flex gap-[8px] items-center">
          <span className="text-gray-500">Rating:</span> {product?.rating}{" "}
          <Image
            src="/assets/icons/full_star.svg"
            alt="Star"
            width={20}
            height={20}
          />
        </div>

        <p className="font-bold text-[20px] mb-[16px]">
          <span className="text-gray-500">Shipping information:</span>{" "}
          {product?.shippingInformation ?? "-"}{" "}
        </p>

        <p className="text-[18px]">
          <span className="text-gray-500 font-bold text-[20px]">
            Description:{" "}
          </span>
          {product?.description}
        </p>
      </div>
    </div>
  );
};

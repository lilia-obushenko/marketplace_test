"use client";

import Image from "next/image";
import { BuyButton } from "..";
import { Product } from "@/api";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();

  const handleNavigate = useCallback(() => {
    router.push(`/products/${product.id}`);
  }, [router, product]);

  return (
    <div
      className="bg-white card-shadow hover:shadow-lg transition-all rounded-2xl p-[12px] 
      md:max-h-[450px] max-h-full flex flex-col justify-between custom-hover-effect gap-4 cursor-pointer"
      onClick={handleNavigate}
    >
      <div className="relative mb-3 w-full md:h-[210px] aspect-square">
        <Image
          className="rounded-xl overflow-hidden object-cover"
          src={product.images[0]}
          alt={`${product.title} image`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-[18px] font-medium break-words line-clamp-2">
            {product.title}
          </p>
          <span className="font-semibold text-[#BBBFB0] text-[12px]">
            ART:{product.sku}
          </span>
          <p className="font-semibold text-[20px] text-[#424531]">
            {product.price} $
          </p>
        </div>
        <BuyButton onClick={handleNavigate} textSize="text-[16px]" />
      </div>
    </div>
  );
};

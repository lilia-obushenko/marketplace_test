"use client";

import { useProductQuery } from "@/api/queries/useProductsQuery";
import { Loader } from "@/components";
import { useParams } from "next/navigation";
import { ProductInfo, Reviews } from "../components";

const ProductPage = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useProductQuery(Number(id));

  if (isLoading) {
    return (
      <div className="flex w-full justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="py-[90px] md:px-[80px] px-[20px] max-w-[1440px] w-full">
      <ProductInfo product={product?.data} />
      <Reviews reviews={product?.data.reviews ?? []} />
    </div>
  );
};

export default ProductPage;

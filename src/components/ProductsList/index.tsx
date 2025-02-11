import Image from "next/image";
import React from "react";
import { Pagination } from "..";
import { Product } from "@/api";
import { ProductCard } from "../ProductCard";
import { TOTAL_PAGES } from "@/constant";

interface ProductsListProps {
  page: number;
  products: Product[];
  handleChangePage: (newPage: number) => void;
}

export const ProductsList = ({
  products,
  page,
  handleChangePage,
}: ProductsListProps) => {
  return (
    <>
      {!products.length ? (
        <div className="flex justify-center items-center">
          <Image
            src="/assets/icons/no_data.webp"
            alt="No data"
            height={100}
            width={100}
          />
        </div>
      ) : (
        <>
          <div className="grid gap-4 justify-center items-stretch w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-[30px]">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination
            selectedPage={page}
            onPageSelect={handleChangePage}
            totalPages={TOTAL_PAGES}
          />
        </>
      )}
    </>
  );
};

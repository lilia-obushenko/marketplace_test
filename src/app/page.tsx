"use client";

import { useProductsQuery } from "@/api/queries/useProductsQuery";
import { Loader, Dropdown, SearchInput, ProductsList } from "@/components";
import { PRODUCTS_LIMIT, SORT_BUTTON_OPTIONS } from "@/constant";
import { useDebouncedQuery, usePagination } from "@/hooks";
import { DropDownOption } from "@/types";
import { useMemo, useState } from "react";

export default function Home() {
  const [sortValue, setSortValue] = useState<DropDownOption>(
    SORT_BUTTON_OPTIONS[0]
  );

  const { page, handleChangePage } = usePagination();
  const { query, setQuery, debouncedQuery } = useDebouncedQuery();

  const skip = useMemo(() => {
    return (page - 1) * PRODUCTS_LIMIT;
  }, [PRODUCTS_LIMIT, page]);

  const { data: products, isLoading } = useProductsQuery({
    q: debouncedQuery,
    limit: 12,
    skip,
    order: sortValue.value,
  });

  return (
    <div className="lg:px-[80px] px-[20px] py-[90px] max-w-[1440px] w-full min-h-[100%]">
      <div className="flex md:flex-row flex-col gap-[16px] mb-[24px]">
        <SearchInput query={query} setQuery={setQuery} />
        <Dropdown
          selectedOption={sortValue}
          options={SORT_BUTTON_OPTIONS}
          onSelectOption={setSortValue}
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <ProductsList
          products={products?.data.products ?? []}
          page={page}
          handleChangePage={handleChangePage}
        />
      )}
    </div>
  );
}

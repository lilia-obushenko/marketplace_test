import { useQuery } from "@tanstack/react-query";
import { apiHandlers } from "../apiHandlers";
import { QUERY_KEYS } from "@/constant";
import { SearchParams } from "..";

export const useProductsQuery = ({ q, limit, skip, order }: SearchParams) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS, q, limit, skip, order],
    queryFn: () =>
      apiHandlers.products.list({
        q,
        limit,
        skip,
        order,
      }),
  });
};

export const useProductQuery = (id: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCT, id],
    queryFn: () => apiHandlers.products.getOne(id),
    enabled: !!id,
  });
};

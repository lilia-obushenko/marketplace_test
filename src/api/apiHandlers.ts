import {
  AxiosResponseSuccess,
  Product,
  SearchParams,
  apiPaths,
  getData,
} from ".";

export const apiHandlers = {
  products: {
    list({
      q,
      limit,
      skip,
      order,
    }: SearchParams): AxiosResponseSuccess<{
      products: Product[];
      total: number;
    }> {
      return getData<{ products: Product[]; total: number }>(
        apiPaths.products.getProducts(),
        {
          params: {
            q,
            limit,
            skip,
            order,
            sortBy: "title",
          },
        }
      );
    },
    getOne(id: number): AxiosResponseSuccess<Product> {
      return getData<Product>(apiPaths.products.getOneProduct(id));
    },
  },
};

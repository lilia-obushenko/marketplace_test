export const apiPaths = {
  products: {
    getProducts: () => "/products/search",
    getOneProduct: (id: number) => `/products/${id}`,
  },
};

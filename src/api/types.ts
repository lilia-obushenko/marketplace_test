import { AxiosError, AxiosResponse } from "axios";

export type BackendErrorInfo = {
  error: {
    code: string;
    message: string;
  };
};

export type AxiosResponseError = AxiosError<BackendErrorInfo>;

export type AxiosResponseSuccess<Data> = Promise<AxiosResponse<Data>>;

export type SearchParams = {
  q: string;
  limit: number;
  skip: number;
  order: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  minimumOrderQuantity: number;
  availabilityStatus: string;
  returnPolicy: string;
  warrantyInformation: string;
  shippingInformation: string;
  sku: string;
  weight: number;
  images: string[];
  thumbnail: string;
  tags: string[];
  reviews: {
    user: string;
    rating: number;
    comment: string;
  }[];
};

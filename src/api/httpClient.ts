import axios, { AxiosRequestConfig } from "axios";
import { AxiosResponseSuccess } from ".";

function createHttpClient() {
  return axios.create({
    baseURL: "https://dummyjson.com",
  });
}

export const httpClient = createHttpClient();

export async function makeHttpRequest<SuccessPayload>(
  config: AxiosRequestConfig
): AxiosResponseSuccess<SuccessPayload> {
  return httpClient.request<SuccessPayload>({
    ...config,
  });
}

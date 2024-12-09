import { mainApi } from "../../mainApi";
import { IProduct } from "../../../utils/types";
import { PER_PAGE } from "../../../utils/const";

interface getAllProductRequest {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}

const productsApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query<getAllProductRequest, void>({
      query: () =>
        `products?limit=0`,
    }),
    getCategorys: build.query<string[], void>({
      query: () =>
        'products/category-list',
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllProductsQuery, useGetCategorysQuery } = productsApi;

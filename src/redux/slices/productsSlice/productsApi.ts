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
    getAllProducts: build.query<getAllProductRequest, number>({
      query: (page) =>
        `products?limit=${PER_PAGE}&skip=${(page-1) * PER_PAGE}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllProductsQuery } = productsApi;

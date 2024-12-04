import { mainApi } from "../../mainApi";
import { IProduct } from "../../../utils/types";

interface getAllProductRequest {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}

const productsApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query<getAllProductRequest, void>({
      query: () => "products",
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllProductsQuery } = productsApi;

import { mainApi } from "../../mainApi";
import { IProduct } from "../../../utils/types";

interface getDetails {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}

const detailsApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getDetails: build.query<getDetails, string | undefined>({
      query: (id) => `products/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetDetailsQuery } = detailsApi;
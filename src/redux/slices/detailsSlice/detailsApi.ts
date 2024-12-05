import { mainApi } from "../../mainApi";
import { IProduct } from "../../../utils/types";

const detailsApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getDetails: build.query<IProduct, string | undefined>({
      query: (id) => `products/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetDetailsQuery } = detailsApi;
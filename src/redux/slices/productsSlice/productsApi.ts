import { mainApi } from '../../mainApi';
import { IProduct } from '../../../utils/types';

const productsApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query<IProduct, void>({
      query: () => 'products',
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllProductsQuery } = productsApi;
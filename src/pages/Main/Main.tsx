import { useEffect } from "react";
import Controls from "../../components/Controls/Controls";
import ProductsList from "../../components/ProductsList/ProductsList";
import { useGetAllProductsQuery } from "../../redux/slices/productsSlice/productsApi";
import { useAppDispatch } from "../../redux/store";
import { setProductsList } from "../../redux/slices/productsSlice/productsSlice";
import Preloader from "../../components/Preloader/Preloader";

import styles from "./Main.module.scss";

export default function Main() {
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess } = useGetAllProductsQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setProductsList(data.products));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  return (
    <div>
      <Controls />
      {isLoading ? <Preloader /> :<ProductsList />}
    </div>
  );
}

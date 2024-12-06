import Controls from "../../components/Controls/Controls";
import ProductsList from "../../components/ProductsList/ProductsList";
import Preloader from "../../components/Preloader/Preloader";

import styles from "./Main.module.scss";

interface IMainProps {
  isLoading: boolean;
}

export default function Main({ isLoading }: IMainProps) {

  return (
    <div>
      <Controls />
      {isLoading ? <Preloader /> : <ProductsList />}
    </div>
  );
}

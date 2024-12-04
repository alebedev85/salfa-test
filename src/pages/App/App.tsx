import RecipeReviewCard from "../../components/RecipeReviewCard/RecipeReviewCard";
import { useGetAllProductsQuery } from "../../redux/slices/productsSlice/productsApi";

import styles from "./App.module.scss";

function App() {
  const { data, isLoading, isSuccess } = useGetAllProductsQuery();
  console.log(data);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      </main>
    </div>
  );
}

export default App;

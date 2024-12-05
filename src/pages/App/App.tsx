import { Routes, Route } from "react-router-dom";
import Details from "../Details/Details";
import Main from "../Main/Main";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/:id" element={<Details />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

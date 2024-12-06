import { useNavigate } from "react-router-dom";
import { Checkbox, InputAdornment, Input } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  setSearch,
  setSelecteFilter,
} from "../../redux/slices/filtersSlice/filtersSlice";
import { useDispatch } from "react-redux";

import styles from "./Controls.module.scss";

export default function Controls() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className={styles.controls}>
      <div className={styles.search}>
        <Input
          onChange={(e) => dispatch(setSearch(e.target.value))}
          placeholder="Поиск"
          type="text"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          size="large"
          onChange={() => dispatch(setSelecteFilter())}
        />
      </div>

      <Button variant="contained" onClick={() => navigate('/create-product')}>
        Создать новый товар
      </Button>
    </div>
  );
}

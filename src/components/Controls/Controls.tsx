import { useNavigate } from "react-router-dom";
import {
  Checkbox,
  InputAdornment,
  Input,
  Autocomplete,
  Button,
  TextField,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  setSearchFilter,
  setSelecteFilter,
  setCategoreFilter,
} from "../../redux/slices/filtersSlice/filtersSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { categoresSelector } from "../../redux/slices/productsSlice/productsSlice";

import styles from "./Controls.module.scss";
import { useState } from "react";

export default function Controls() {
  const navigate = useNavigate();
  const categores = useAppSelector(categoresSelector);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.controls}>
      <div className={styles.search}>
        <Input
          className={styles.input}
          onChange={(e) => dispatch(setSearchFilter(e.target.value))}
          placeholder="Поиск"
          type="text"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        <Autocomplete
          disablePortal
          options={categores}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Категории" />}
          onChange={(e, newValue: string | null) => dispatch(setCategoreFilter(newValue))}
        />
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          size="large"
          onChange={() => dispatch(setSelecteFilter())}
        />
      </div>

      <Button variant="contained" onClick={() => navigate("/create-product")}>
        Создать новый товар
      </Button>
    </div>
  );
}

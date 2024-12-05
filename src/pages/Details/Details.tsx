import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { useGetDetailsQuery } from "../../redux/slices/detailsSlice/detailsApi";
import {
  setDetails,
  resetDetails,
} from "../../redux/slices/detailsSlice/detailsSlice";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Info from "../../components/Info/Info";
import Preloader from "../../components/Preloader/Preloader";

import styles from "./Details.module.scss";

export default function Details() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data, isLoading, isSuccess } = useGetDetailsQuery(id);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setDetails(data));
    }
    return () => {
      dispatch(resetDetails());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, data]);
  return (
    <div>
      <IconButton aria-label="delete" size="large" onClick={() => navigate(-1)}>
        <ArrowBackIosIcon fontSize="inherit" /> Back
      </IconButton>
      {isLoading ? <Preloader /> : <Info />}
    </div>
  );
}

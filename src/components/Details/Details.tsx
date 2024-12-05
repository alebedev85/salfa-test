import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useGetDetailsQuery } from "../../redux/slices/detailsSlice/detailsApi";

import styles from "./Details.module.scss";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Info from "../Info/Info";

export default function Details() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data, isLoading, isSuccess } = useGetDetailsQuery(id);
  console.log(data);
  return (
    <div>
      <IconButton aria-label="delete" size="large" onClick={() => navigate(-1)}>
        <ArrowBackIosIcon fontSize="inherit" /> Back
      </IconButton>
      {/* {currentCountry && <Info info={currentCountry} />} */}
      <Info />
    </div>
  );
}

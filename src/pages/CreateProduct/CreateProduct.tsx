import { Button, FormHelperText, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { addProduct } from "../../redux/slices/productsSlice/productsSlice";
import { NewProductType } from "../../utils/types";

import styles from "./CreateProduct.module.scss";

export default function CreateProduct() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProductType>({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      price: 0,
      discountPercentage: 0,
      brand: "",
      warrantyInformation: "",
      thumbnail: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: NewProductType) => {
    dispatch(addProduct(data));
    navigate("/", { replace: true });
  };
  return (
    <div>
      <IconButton aria-label="delete" size="large" onClick={() => navigate(-1)}>
        <ArrowBackIosIcon fontSize="inherit" /> Back
      </IconButton>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <b>Название товара:</b>
          <input
            type="text"
            {...register("title", {
              required: "is required",
              minLength: {
                value: 2,
                message: "Minimum 2 symbols",
              },
            })}
          />
          <FormHelperText
            className={styles.error}
            error
            sx={{ textAlign: "left", margin: "0" }}
          >
            {errors.title?.message}
          </FormHelperText>
        </div>
        <div className={styles.field}>
          <b>Изображение товара:</b>
          <input
            type="text"
            {...register("thumbnail", {
              required: "is required",
              minLength: {
                value: 2,
                message: "Minimum 2 symbols",
              },
            })}
          />
          <FormHelperText
            className={styles.error}
            error
            sx={{ textAlign: "left", margin: "0" }}
          >
            {errors.thumbnail?.message}
          </FormHelperText>
        </div>
        <div className={styles.field}>
          <b>Описание:</b>
          <input
            type="text"
            {...register("description", {
              required: "is required",
              minLength: {
                value: 2,
                message: "Minimum 2 symbols",
              },
            })}
          />
          <FormHelperText
            className={styles.error}
            error
            sx={{ textAlign: "left", margin: "0" }}
          >
            {errors.description?.message}
          </FormHelperText>
        </div>
        <div className={styles.field}>
          <b>Бренд:</b>
          <input
            type="text"
            {...register("brand", {
              required: "is required",
              minLength: {
                value: 2,
                message: "Minimum 2 symbols",
              },
            })}
          />
          <FormHelperText
            className={styles.error}
            error
            sx={{ textAlign: "left", margin: "0" }}
          >
            {errors.brand?.message}
          </FormHelperText>
        </div>
        <div className={styles.field}>
          <b>Категория товара:</b>
          <input
            type="text"
            {...register("category", {
              required: "is required",
              minLength: {
                value: 2,
                message: "Minimum 2 symbols",
              },
            })}
          />
          <FormHelperText
            className={styles.error}
            error
            sx={{ textAlign: "left", margin: "0" }}
          >
            {errors.category?.message}
          </FormHelperText>
        </div>
        <div className={styles.field}>
          <b>Цена:</b>
          <input
            type="number"
            {...register("price", {
              required: "is required",
              minLength: {
                value: 1,
                message: "Minimum 1 symbols",
              },
            })}
          />
          <FormHelperText
            className={styles.error}
            error
            sx={{ textAlign: "left", margin: "0" }}
          >
            {errors.price?.message}
          </FormHelperText>
        </div>
        <div className={styles.field}>
          <b>Скидка в процентах:</b>
          <input
            type="number"
            {...register("discountPercentage", {
              required: "is required",
              minLength: {
                value: 1,
                message: "Minimum 1 symbols",
              },
            })}
          />
          <FormHelperText
            className={styles.error}
            error
            sx={{ textAlign: "left", margin: "0" }}
          >
            {errors.discountPercentage?.message}
          </FormHelperText>
        </div>
        <div className={styles.field}>
          <b>Гарантия:</b>
          <input
            type="text"
            {...register("warrantyInformation", {
              required: "is required",
              minLength: {
                value: 2,
                message: "Minimum 2 symbols",
              },
            })}
          />
          <FormHelperText
            className={styles.error}
            error
            sx={{ textAlign: "left", margin: "0" }}
          >
            {errors.warrantyInformation?.message}
          </FormHelperText>
        </div>
        <Button type="submit" variant="contained">
          Создать товар
        </Button>
      </form>
    </div>
  );
}

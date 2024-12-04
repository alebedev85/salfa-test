import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import { ProductStateType } from "../../redux/slices/productsSlice/productsSlice";
import { useAppDispatch } from "../../redux/store";
import {
  selecteProduct,
  deleteProduct,
} from "../../redux/slices/productsSlice/productsSlice";

interface IProductCardProps {
  product: ProductStateType;
}

export default function ProductCard({ product }: IProductCardProps) {
  const dispatch = useAppDispatch();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={product.thumbnail}
        alt={`${product.title} picture`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => dispatch(selecteProduct(product.id))}
        >
          {product.selected ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <IconButton aria-label="delete" onClick={() => dispatch(deleteProduct( product.id ))}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

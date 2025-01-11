import { FC } from "react";
import { Grid, Box, Typography, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface Product {
  id:number;
  title_tm:string;
  title_ru:string;
  title_en:string;
  desc_tm:string;
  desc_ru:string;
  desc_en:string;
  price:number;
  old_price:number;
  discount_percentage:number;
  discounted_price:number;
  stock:number;
  is_active:boolean;
  weight:number;
  width:number;
  height:number;
  depth:number;
  images:string[];
  size:string;
  color:string;
  tags:string;
  views:number;
  rating:number;
  brand_id:number;
  category_id:number;
  segment_id:number;
  created_at:string;
  updated_at:string;
  brand:{
      id:number;
      imageUrl:string;
      title_tm:string;
      title_ru:string;
      title_en:string;
      desc_tm:string;
      desc_ru:string;
      desc_en:string;
  };
  category:{
      id:number;
      imageUrl:string;
      title_tm:string;
      title_ru:string;
      title_en:string;
      desc_tm:string;
      desc_ru:string;
      desc_en:string;
      category_id:number;
  };
    segment:{
        id:number;
        imageUrl:string;
        title_tm:string;
        title_ru:string;
        title_en:string;
        desc_tm:string;
        desc_ru:string;
        desc_en:string;
        subcategory_id:number;
    };
  properties:any[]

}
interface CategoryProductsBoxProps {
  products: Product[];
  totalProducts: number; // Add totalProducts to the props
}

const CategoryProductsBox: FC<CategoryProductsBoxProps> = ({
  products,
  totalProducts, // Destructure totalProducts from props
}) => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Box sx={{ border: "1px solid #ddd", padding: 2, borderRadius: 2 }}>
            <img
              onClick={() => navigate(`/product/${product.id}`)}
              src={product.images[0] || "./images/placeholder.png"}
              alt={product.title_en}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                cursor: "pointer",
              }}
              loading="lazy"
            />
            <Stack direction="column" my={2}>
              <Typography
                variant="h6"
                sx={{ cursor: "pointer" }}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {product.title_en}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {product.brand?.title_en}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {product.price} m.
              </Typography>
              {/* Display stock availability */}
              <Typography variant="body2" color="textSecondary">
                {product.stock > 0
                  ? `${product.stock} in stock`
                  : "Out of stock"}
              </Typography>
              <Button
                variant="contained"
                endIcon={<LocalGroceryStoreOutlinedIcon />}
                fullWidth
                sx={{ mt: 2 }}
                disabled={product.stock === 0} // Disable button if out of stock
              >
                Sebede goş
              </Button>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button sx={{ textTransform: "none" }}>
                <img src="./icons/compare.svg" alt="Compare" /> Deňeşdirmek
              </Button>
              <Button
                startIcon={
                  <FavoriteBorderIcon
                    sx={{
                      fontWeight: 300,
                      width: "12px",
                      marginRight: "-10px",
                    }}
                  />
                }
                sx={{ textTransform: "none" }}
              >
                Saýlanan
              </Button>
            </Stack>
          </Box>
        </Grid>
      ))}
      {/* Display the total products count */}
      {totalProducts !== null && (
        <Typography variant="h6" mt={3}>
          Total Products: {totalProducts}
        </Typography>
      )}
    </Grid>
  );
};

export default CategoryProductsBox;
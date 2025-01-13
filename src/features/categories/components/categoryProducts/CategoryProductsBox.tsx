import { FC, useState } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Grid from "@mui/material/Grid2";
import {
  addStoreDiscountGoodButton,
  compareDiscountGoodsCostButton,
  discountGoodCodeText,
  discountGoodCompanyTitle,
  discountGoodCost,
  discountGoodLastCount,
  discountGoodTitle,
} from "../../../home/components/discountedGoods/styles/discoutGoodsStyle";

interface Product {
  id: number;
  title_tm: string;
  title_ru: string;
  title_en: string;
  desc_tm: string;
  desc_ru: string;
  desc_en: string;
  price: number;
  old_price: number;
  discount_percentage: number;
  discounted_price: number;
  stock: number;
  is_active: boolean;
  weight: number;
  width: number;
  height: number;
  depth: number;
  images: string[];
  size: string;
  color: string;
  tags: string;
  views: number;
  rating: number;
  brand_id: number;
  category_id: number;
  segment_id: number;
  created_at: string;
  updated_at: string;
  brand: {
    id: number;
    imageUrl: string;
    title_tm: string;
    title_ru: string;
    title_en: string;
    desc_tm: string;
    desc_ru: string;
    desc_en: string;
  };
  category: {
    id: number;
    imageUrl: string;
    title_tm: string;
    title_ru: string;
    title_en: string;
    desc_tm: string;
    desc_ru: string;
    desc_en: string;
    category_id: number;
  };
  segment: {
    id: number;
    imageUrl: string;
    title_tm: string;
    title_ru: string;
    title_en: string;
    desc_tm: string;
    desc_ru: string;
    desc_en: string;
    subcategory_id: number;
  };
  properties: any[];
}
interface CategoryProductsBoxProps {
  products: Product[];
  totalProducts: number; // Add totalProducts to the props
}

const CategoryProductsBox: FC<CategoryProductsBoxProps> = ({ products }) => {
  const navigate = useNavigate();
  const [compareStates, setCompareStates] = useState<Record<number, boolean>>(
    {}
  );
  const [favoriteStates, setFavoriteStates] = useState<Record<number, boolean>>(
    {}
  );
  const handleCompareClick = (productId: number) => {
    setCompareStates((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  const handleFavoriteClick = (productId: number) => {
    setFavoriteStates((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }} key={product.id}>
          <Box>
            <Box
              sx={{
                width: "100%",
                height: {
                  lg: "200px",
                  md: "200px",
                  sm: "180px",
                  xs: "150px",
                },
                overflow: "hidden",
                background: "#f7f7f7",
                p: 2,
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                onClick={() => navigate(`/product/${product.id}`)}
                src={product.images[0] || "./images/placeholder.png"}
                alt={product.title_en}
                style={{
                  width: "90%",
                  height: "90%",
                  objectFit: "cover",
                  display: "block",
                }}
                loading="lazy"
              />
            </Box>
            <Stack my={2}>
              <Typography
                sx={discountGoodTitle}
                noWrap
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {product.title_en}
              </Typography>
              <Typography sx={discountGoodCompanyTitle}>
                {product.brand?.title_en || "No Brand"}
              </Typography>
              <Stack direction="row" spacing={1} my={1}>
                <Typography sx={discountGoodCodeText}>Haryt kody:</Typography>
                <Typography sx={discountGoodCodeText}>
                  {product.stock || "N/A"}
                  {/* here need to product code instead stock */}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography sx={discountGoodCost}>
                  {product.price} m.
                </Typography>
                <Button variant="contained" sx={discountGoodLastCount}>
                  Nagt {product.stock || 0}
                </Button>
              </Stack>
            </Stack>
            <Button
              variant="contained"
              fullWidth
              endIcon={<LocalGroceryStoreOutlinedIcon />}
              sx={addStoreDiscountGoodButton}
            >
              Sebede goş
            </Button>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                onClick={() => handleCompareClick(product.id)}
                sx={{
                  ...compareDiscountGoodsCostButton,
                  backgroundColor: compareStates[product.id]
                    ? "#C3000E"
                    : "transparent",
                  color: compareStates[product.id] ? "#fff" : "#929292",
                  "&:hover": {
                    backgroundColor: compareStates[product.id]
                      ? "#C3000E"
                      : "#f0f0f0",
                  },
                }}
              >
                <img
                  src={
                    compareStates[product.id]
                      ? "/icons/compare white.svg"
                      : "/icons/compare.svg"
                  }
                  alt="compare-icon"
                  style={{ marginRight: "5px" }}
                />
                Deňeşdir
              </Button>
              <Button
                onClick={() => handleFavoriteClick(product.id)}
                sx={{
                  ...compareDiscountGoodsCostButton,
                  backgroundColor: favoriteStates[product.id]
                    ? "#C3000E"
                    : "transparent",
                  color: favoriteStates[product.id] ? "#fff" : "#929292",
                  "&:hover": {
                    backgroundColor: favoriteStates[product.id]
                      ? "#C3000E"
                      : "#f0f0f0",
                  },
                }}
              >
                <FavoriteBorderIcon
                  sx={{
                    fontWeight: 300,
                    width: "12px",
                    color: favoriteStates[product.id] ? "#fff" : "#929292",
                  }}
                />
                Saýla
              </Button>
            </Stack>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryProductsBox;

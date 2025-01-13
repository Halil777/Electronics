import { FC, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  addStoreDiscountGoodButton,
  compareDiscountGoodsCostButton,
  discountGoodCodeText,
  discountGoodCompanyTitle,
  discountGoodCost,
  discountGoodLastCount,
  discountGoodsSeeAllButton,
  discountGoodsTitle,
  discountGoodTitle,
} from "../../discountedGoods/styles/discoutGoodsStyle";

const OfferedGoodsBox: FC = () => {
  const staticProducts = [
    {
      id: 1,
      title_en: "Product 1",
      brand: "Brand A",
      product_code: "P12345",
      price: 100,
      stock: 10,
      images: ["/images/auction1.png"],
    },
    {
      id: 2,
      title_en: "Product 2",
      brand: "Brand B",
      product_code: "P12346",
      price: 150,
      stock: 5,
      images: ["/images/present1.png"],
    },
    {
      id: 3,
      title_en: "Product 3",
      brand: "Brand C",
      product_code: "P12347",
      price: 200,
      stock: 8,
      images: ["/images/auction1.png"],
    },
    {
      id: 4,
      title_en: "Product 4",
      brand: "Brand D",
      product_code: "P12348",
      price: 250,
      stock: 3,
      images: ["/images/banner2.png"],
    },
  ];

  const [products] = useState<any[]>(staticProducts);
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
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography sx={discountGoodsTitle}>Hödürlenýän harytlar</Typography>
        <Button
          sx={discountGoodsSeeAllButton}
          endIcon={<KeyboardArrowRightIcon sx={{ width: "12px" }} />}
        >
          Hemmesini görmek
        </Button>
      </Stack>
      <Grid container spacing={2} my={3}>
        {products.map((product: any) => (
          <Grid key={product.id} size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
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
                  src={product.images[0] || "fallback-image.jpg"}
                  style={{
                    width: "90%",
                    height: "90%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  alt={product.title_en || "Product"}
                />
              </Box>

              <Stack my={2}>
                <Typography sx={discountGoodTitle} noWrap>
                  {product.title_en || "No Title"}
                </Typography>
                <Typography sx={discountGoodCompanyTitle}>
                  {product.brand || "No Brand"}
                </Typography>
                <Stack direction="row" spacing={1} my={1}>
                  <Typography sx={discountGoodCodeText}>Haryt kody:</Typography>
                  <Typography sx={discountGoodCodeText}>
                    {product.product_code || "N/A"}
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
    </>
  );
};

export default OfferedGoodsBox;

import { FC, useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  addStoreDiscountGoodButton,
  auctionDiscountTextCountBox,
  auctionImageBox,
  auctionTextBox,
  compareDiscountGoodsCostButton,
  discountGoodCodeText,
  discountGoodCompanyTitle,
  discountGoodCost,
  discountGoodLastCount,
  discountGoodsSeeAllButton,
  discountGoodsTitle,
  discountGoodTitle,
} from "../styles/discoutGoodsStyle";
import { useProduct } from "../../../../../hooks/products/useProduct";

const DiscountGoodBox: FC = () => {
  const { lastAddedDiscountedProducts, isLoading, isError } = useProduct();
  const [discountedProducts, setDiscountedProducts] = useState<any[]>([]);
  const [compareStates, setCompareStates] = useState<Record<number, boolean>>(
    {}
  );
  const [favoriteStates, setFavoriteStates] = useState<Record<number, boolean>>(
    {}
  );

  useEffect(() => {
    if (lastAddedDiscountedProducts) {
      setDiscountedProducts(lastAddedDiscountedProducts);
    }
  }, [lastAddedDiscountedProducts]);

  const handleCompareClick = (productId: number) => {
    setCompareStates((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId], // Toggle the compare state
    }));
  };

  const handleFavoriteClick = (productId: number) => {
    setFavoriteStates((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId], // Toggle the favorite state
    }));
  };

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return (
      <Typography variant="body1" color="error">
        Error loading products.
      </Typography>
    );
  }

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography sx={discountGoodsTitle}>Aksiýadaky harytlar</Typography>
        <Button
          sx={discountGoodsSeeAllButton}
          endIcon={<KeyboardArrowRightIcon sx={{ width: "12px" }} />}
        >
          Hemmesini görmek
        </Button>
      </Stack>
      <Grid container spacing={2} my={3}>
        {discountedProducts.map((product: any) => (
          <Grid key={product.id} size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
            <Box>
              <Box
                sx={{
                  background: "#f7f7f7",
                  width: "100%",
                  height: "auto",
                  p: 2,
                  borderRadius: "6px",
                }}
              >
                <Stack direction="row">
                  <Box sx={auctionTextBox}>Aksiya</Box>
                  <Box sx={auctionDiscountTextCountBox}>
                    -{product.discount_percentage}%
                  </Box>
                </Stack>
                <Box sx={auctionImageBox}>
                  <img
                    src={product.images[0]} // Assuming the first image is the main one
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt={product.title}
                  />
                </Box>
              </Box>
              <Stack my={2}>
                <Typography sx={discountGoodTitle} noWrap>
                  {product.title_en}
                </Typography>
                <Typography sx={discountGoodCompanyTitle}>
                  {product.brand}
                </Typography>
                <Stack direction="row" spacing={1} my={1}>
                  <Typography sx={discountGoodCodeText}>Haryt kody:</Typography>
                  <Typography sx={discountGoodCodeText}>
                    {product.product_code}
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
                    Nagt {product.stock}
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
                        ? "./icons/compare white.svg" // Icon for active state
                        : "./icons/compare.svg" // Icon for inactive state
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
                      ? "#C3000E" // Red fill when favorited
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
                      color: favoriteStates[product.id] ? "#fff" : "#929292", // Change icon color based on favorite state
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

export default DiscountGoodBox;

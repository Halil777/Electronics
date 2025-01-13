import { FC, useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
import { BASE_URL } from "../../../../../api/instance";
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
import { useNavigate } from "react-router-dom";

const DiscountGoodBox: FC = () => {
  const [discountedProducts, setDiscountedProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();
  const [compareStates, setCompareStates] = useState<Record<number, boolean>>(
    {}
  );
  const [favoriteStates, setFavoriteStates] = useState<Record<number, boolean>>(
    {}
  );

  // Fetch discounted products with a fixed limit of 4
  const fetchDiscountedProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${BASE_URL}products?limit=40&page=1`);
      const products = response.data.data;
      const discounted = products.filter(
        (product: any) => product.discount_percentage > 0
      );
      setDiscountedProducts(discounted);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDiscountedProducts();
  }, []);

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

  if (discountedProducts.length === 0) {
    return <Typography>No discounted products available</Typography>;
  }

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography sx={discountGoodsTitle}>Aksiýadaky harytlar</Typography>
        <Button
          sx={discountGoodsSeeAllButton}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Hemmesini görmek
        </Button>
      </Stack>
      <Grid container spacing={2} my={3}>
        {discountedProducts.map((product: any) => (
          <Grid key={product.id} size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
            <Box sx={{ background: "#f7f7f7", p: 2, borderRadius: "6px" }}>
              <Box sx={auctionTextBox}>
                <Stack direction="row">
                  <Box sx={auctionTextBox}>Aksiya</Box>
                  <Box sx={auctionDiscountTextCountBox}>
                    -{product.discount_percentage}%
                  </Box>
                </Stack>
              </Box>
              <Box sx={auctionImageBox}>
                <img
                  onClick={() => navigate(`/product/${product.id}`)}
                  src={product.images[0] || "fallback-image.jpg"} // Add fallback image if not available
                  alt={product.title_en}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              </Box>
              <Stack my={2}>
                <Typography
                  sx={discountGoodTitle}
                  onClick={() => navigate(`/product/${product.id}`)}
                  noWrap
                >
                  {product.title_en}
                </Typography>
                <Typography sx={discountGoodCompanyTitle}>
                  {product.brand?.[0]?.title_en || "Unknown Brand"}
                </Typography>
                <Stack direction="row" spacing={1} my={1}>
                  <Typography sx={discountGoodCodeText}>Haryt kody:</Typography>
                  <Typography sx={discountGoodCodeText}>
                    {product.product_code || "No code"}
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

export default DiscountGoodBox;

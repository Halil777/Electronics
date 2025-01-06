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

  useEffect(() => {
    if (lastAddedDiscountedProducts) {
      setDiscountedProducts(lastAddedDiscountedProducts);
    }
  }, [lastAddedDiscountedProducts]);

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
              <Stack direction="row">
                <Box sx={auctionTextBox}>Aksiya</Box>
                <Box sx={auctionDiscountTextCountBox}>
                  -{product.discount_percentage}%
                </Box>
              </Stack>
              <Box sx={auctionImageBox}>
                <img
                  src={product.images[0]} // Assuming the first image is the main one
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt={product.title}
                />
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
                <Button sx={compareDiscountGoodsCostButton}>
                  <img src="./icons/compare.svg" alt="" /> Deňeşdir
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
                  sx={compareDiscountGoodsCostButton}
                >
                  Saýlanan
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

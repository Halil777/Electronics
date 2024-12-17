import { FC } from "react";
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

const DiscountGoodBox: FC = () => {
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
        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
          <Box>
            <Stack direction="row">
              <Box sx={auctionTextBox}>Aksiya</Box>
              <Box sx={auctionDiscountTextCountBox}>-10%</Box>
            </Stack>
            <Box sx={auctionImageBox}>
              <img
                src="./images/banner1.png"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt=""
              />
            </Box>
            <Stack my={2}>
              <Typography sx={discountGoodTitle}>
                Kamera Xiaomi Mi Home Security (360° 1080P)
              </Typography>
              <Typography sx={discountGoodCompanyTitle}>Mi</Typography>
              <Stack direction="row" spacing={1} my={1}>
                <Typography sx={discountGoodCodeText}>Haryt kody:</Typography>
                <Typography sx={discountGoodCodeText}>177546</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography sx={discountGoodCost}>1.871,50 m.</Typography>
                <Button variant="contained" sx={discountGoodLastCount}>
                  Nagt 5
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
        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
          <Box>
            <Stack direction="row">
              <Box sx={auctionTextBox}>Aksiya</Box>
              <Box sx={auctionDiscountTextCountBox}>-10%</Box>
            </Stack>
            <Box sx={auctionImageBox}>
              <img
                src="./images/banner1.png"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt=""
              />
            </Box>
            <Stack my={2}>
              <Typography sx={discountGoodTitle}>
                Kamera Xiaomi Mi Home Security (360° 1080P)
              </Typography>
              <Typography sx={discountGoodCompanyTitle}>Mi</Typography>
              <Stack direction="row" spacing={1} my={1}>
                <Typography sx={discountGoodCodeText}>Haryt kody:</Typography>
                <Typography sx={discountGoodCodeText}>177546</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography sx={discountGoodCost}>1.871,50 m.</Typography>
                <Button variant="contained" sx={discountGoodLastCount}>
                  Nagt 5
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
        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
          <Box>
            <Stack direction="row">
              <Box sx={auctionTextBox}>Aksiya</Box>
              <Box sx={auctionDiscountTextCountBox}>-10%</Box>
            </Stack>
            <Box sx={auctionImageBox}>
              <img
                src="./images/banner1.png"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt=""
              />
            </Box>
            <Stack my={2}>
              <Typography sx={discountGoodTitle}>
                Kamera Xiaomi Mi Home Security (360° 1080P)
              </Typography>
              <Typography sx={discountGoodCompanyTitle}>Mi</Typography>
              <Stack direction="row" spacing={1} my={1}>
                <Typography sx={discountGoodCodeText}>Haryt kody:</Typography>
                <Typography sx={discountGoodCodeText}>177546</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography sx={discountGoodCost}>1.871,50 m.</Typography>
                <Button variant="contained" sx={discountGoodLastCount}>
                  Nagt 5
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
        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
          <Box>
            <Stack direction="row">
              <Box sx={auctionTextBox}>Aksiya</Box>
              <Box sx={auctionDiscountTextCountBox}>-10%</Box>
            </Stack>
            <Box sx={auctionImageBox}>
              <img
                src="./images/banner1.png"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt=""
              />
            </Box>
            <Stack my={2}>
              <Typography sx={discountGoodTitle}>
                Kamera Xiaomi Mi Home Security (360° 1080P)
              </Typography>
              <Typography sx={discountGoodCompanyTitle}>Mi</Typography>
              <Stack direction="row" spacing={1} my={1}>
                <Typography sx={discountGoodCodeText}>Haryt kody:</Typography>
                <Typography sx={discountGoodCodeText}>177546</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography sx={discountGoodCost}>1.871,50 m.</Typography>
                <Button variant="contained" sx={discountGoodLastCount}>
                  Nagt 5
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
      </Grid>
    </>
  );
};

export default DiscountGoodBox;

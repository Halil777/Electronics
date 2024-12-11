import { FC, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import {
  backPaper,
  currentProductImageBox,
  currentSelectedProductProportiesTitle,
  currentSelectedProductTitle,
  fullDescriptionPaper,
  productCurrentPrice,
  productOldPrice,
  smallProductImagePaper,
} from "../styles/productStyle";
import { addStoreDiscountGoodButton } from "../../home/components/discountedGoods/styles/discoutGoodsStyle";

const FullDescriptionProduct: FC = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState("./images/category1.png");

  const smallImages = [
    "./images/category1.png",
    "./images/category2.png",
    "./images/category3.png",
  ];

  return (
    <>
      <Container>
        <Paper elevation={4} sx={fullDescriptionPaper}>
          <Paper
            onClick={() => navigate("/categories")}
            sx={backPaper}
            elevation={3}
          >
            <img src="./icons/back.svg" alt="back arrow" />
          </Paper>
          <Grid container>
            <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
              <Box sx={currentProductImageBox}>
                <img
                  src={currentImage}
                  style={{ width: "70%" }}
                  alt="current product"
                />
              </Box>

              <Stack
                direction="row"
                justifyContent="center"
                width="100%"
                spacing={2}
              >
                {smallImages.map((image, index) => (
                  <Paper
                    key={index}
                    elevation={3}
                    sx={smallProductImagePaper}
                    onClick={() => setCurrentImage(image)}
                  >
                    <img
                      src={image}
                      alt={`thumbnail ${index + 1}`}
                      style={{ width: "100%" }}
                    />
                  </Paper>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
              <Typography sx={currentSelectedProductTitle}>
                Tozan sorujy Samsung (VCC5241S3K)
              </Typography>
              <Typography>
                Haryt kody: <span>123456789</span>
              </Typography>
              <Stack spacing={2} my={3}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography sx={currentSelectedProductProportiesTitle}>
                    Umumy kuwwatlygy
                  </Typography>
                  <Typography>1800 Wt</Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography sx={currentSelectedProductProportiesTitle}>
                    Umumy kuwwatlygy
                  </Typography>
                  <Typography>1800 Wt</Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography sx={currentSelectedProductProportiesTitle}>
                    Umumy kuwwatlygy
                  </Typography>
                  <Typography>1800 Wt</Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography sx={currentSelectedProductProportiesTitle}>
                    Umumy kuwwatlygy
                  </Typography>
                  <Typography>1800 Wt</Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography sx={currentSelectedProductProportiesTitle}>
                    Umumy kuwwatlygy
                  </Typography>
                  <Typography>1800 Wt</Typography>
                </Stack>
              </Stack>
              <Divider />
              <Stack direction="row" spacing={2} my={3}>
                <Typography sx={productCurrentPrice}>1083,50 TMT</Typography>
                <Typography sx={productOldPrice}>1142,60 TMT</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Button
                  variant="contained"
                  fullWidth
                  endIcon={<LocalGroceryStoreOutlinedIcon />}
                  sx={{ ...addStoreDiscountGoodButton, width: "235px" }}
                >
                  Sebede goş
                </Button>
                <img
                  src="./icons/compare.svg"
                  style={{ width: "30px", cursor: "pointer" }}
                  alt=""
                />
                <FavoriteBorderIcon
                  sx={{ width: "30px", cursor: "pointer", opacity: 0.6 }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default FullDescriptionProduct;

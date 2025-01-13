import { FC, useState, useEffect } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
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
import { observer } from "mobx-react-lite";
import ProductViewModel from "../presentation/ProductViewModel";

interface Props {
  // productId: number; // Removed
}

const FullDescriptionProduct: FC<Props> = observer(() => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const { selectedProduct, fetchProductById, loading } = ProductViewModel;
  const { productId } = useParams(); // Get productId from URL

  useEffect(() => {
    if (productId && !isNaN(Number(productId))) {
      console.log("FullDescriptionProduct - productId:", productId);
      fetchProductById(Number(productId));
    } else {
      console.error("Invalid productId:", productId);
    }
  }, [productId, fetchProductById]);

  useEffect(() => {
    console.log("FullDescriptionProduct - selectedProduct:", selectedProduct);
    if (
      selectedProduct &&
      selectedProduct.images &&
      selectedProduct.images.length > 0
    ) {
      setCurrentImage(selectedProduct.images[0]);
    }
  }, [selectedProduct]);

  const smallImages = selectedProduct?.images || [];

  if (loading) {
    return <div>Loading product data</div>;
  }

  if (!selectedProduct) {
    return <div>No product data found</div>;
  }

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
                  src={currentImage || "./images/category1.png"}
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
                {selectedProduct?.title_tm}
              </Typography>
              <Typography>
                Haryt kody: <span>123456789</span>
              </Typography>
              <Stack spacing={2} my={3}>
                {selectedProduct?.properties?.map((property: any, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography sx={currentSelectedProductProportiesTitle}>
                      {property.key_tm}
                    </Typography>
                    <Typography>{property.value_tm}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Divider />
              <Stack direction="row" spacing={2} my={3}>
                <Typography sx={productCurrentPrice}>
                  {selectedProduct?.price} TMT
                </Typography>
                <Typography sx={productOldPrice}>
                  {selectedProduct?.old_price} TMT
                </Typography>
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
});

export default FullDescriptionProduct;

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
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ReactImageMagnify from "react-image-magnify";

interface Props {
  // productId: number; // Removed
}

const FullDescriptionProduct: FC<Props> = observer(() => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const { selectedProduct, fetchProductById, loading } = ProductViewModel;
  const { productId } = useParams();
  const [expanded, setExpanded] = useState(false);

  // Intersection Observer for animation trigger
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.2,
  });

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

  const handleAccordionChange = (panel: boolean) => {
    setExpanded(panel);
  };

  const visibleProperties = selectedProduct.properties?.slice(0, 4) || [];
  const hiddenProperties = selectedProduct.properties?.slice(4) || [];

  // Handle hover change for image
  const handleImageHover = (image: string) => {
    setCurrentImage(image);
  };

  return (
    <>
      <Container>
        <Paper elevation={4} sx={fullDescriptionPaper} ref={containerRef}>
          <Paper
            onClick={() => navigate("/categories")}
            sx={backPaper}
            elevation={3}
          >
            <img src="/icons/back.svg" alt="back arrow" />
          </Paper>
          <Grid container>
            <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
              <Box sx={currentProductImageBox}>
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "current product",
                      src: currentImage || "./images/category1.png",
                      isFluidWidth: true,
                    },
                    largeImage: {
                      src: currentImage || "./images/category1.png",
                      width: 1100, // Increased width
                      height: 1400,
                    },
                    enlargedImagePosition: "over",
                    enlargedImageContainerStyle: {
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                    }, // backdrop
                    lensStyle: { backgroundColor: "rgba(0,0,0,0.2)" },
                  }}
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
                    onMouseEnter={() => handleImageHover(image)}
                  >
                    <motion.img
                      src={image}
                      alt={`thumbnail ${index + 1}`}
                      style={{ width: "100%" }}
                      initial={{ opacity: 0 }}
                      animate={
                        containerInView ? { opacity: 1 } : { opacity: 0 }
                      }
                      transition={{ duration: 0.3 }}
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
                Haryt kody: <span>{selectedProduct?.tags || 123456789}</span>
              </Typography>
              <Stack spacing={2} my={3}>
                {visibleProperties.map((property: any, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      sx={{
                        ...currentSelectedProductProportiesTitle,
                        width: "35%",
                        wordWrap: "break-word",
                      }}
                    >
                      {property.title_en}
                    </Typography>
                    <Typography
                      sx={{
                        width: "65%",
                        wordWrap: "break-word",
                        textAlign: "right",
                      }}
                    >
                      {property.value_tm}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <AnimatePresence>
                {hiddenProperties.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Accordion
                      expanded={expanded}
                      onChange={() => handleAccordionChange(!expanded)}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Show All Properties</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Stack spacing={2}>
                          {hiddenProperties.map((property: any, index) => (
                            <Stack
                              key={index}
                              direction="row"
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              <Typography
                                sx={{
                                  ...currentSelectedProductProportiesTitle,
                                  width: "35%",
                                  wordWrap: "break-word",
                                }}
                              >
                                {property.title_en}
                              </Typography>
                              <Typography
                                sx={{
                                  width: "65%",
                                  wordWrap: "break-word",
                                  textAlign: "right",
                                }}
                              >
                                {property.value_tm}
                              </Typography>
                            </Stack>
                          ))}
                        </Stack>
                      </AccordionDetails>
                    </Accordion>
                  </motion.div>
                )}
              </AnimatePresence>

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
                  src="/icons/compare.svg"
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

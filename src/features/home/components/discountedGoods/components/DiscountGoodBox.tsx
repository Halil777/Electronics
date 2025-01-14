import { FC, useEffect, useState } from "react";
import { Box, Button, Stack, Typography, Skeleton } from "@mui/material";
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
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { decode } from "blurhash";
import BasketViewModel from "../../../../../store/basket/BasketViewModel";

// Function to convert blurhash to base64
const blurHashToBase64 = (
  blurhash: string,
  width: number = 32,
  height: number = 32
) => {
  if (!blurhash) return null;
  try {
    const pixels = decode(blurhash, width, height);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    const imageData = ctx.createImageData(width, height);
    imageData.data.set(pixels);
    ctx.putImageData(imageData, 0, 0);
    return canvas.toDataURL();
  } catch (e) {
    console.error("error blurhash", e);
    return null;
  }
};

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
  const [showAll, setShowAll] = useState(false);

  // Intersection Observer for animation trigger
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.2,
  });

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

  const handleShowAll = () => {
    setShowAll(true);
  };

  const productItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: delay * 0.1, duration: 0.5, ease: "easeInOut" },
    }),
  };

  if (isLoading) {
    return (
      <Grid container spacing={2} my={3}>
        {Array.from(new Array(4)).map((_, index) => (
          <Grid key={index} size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
            <Box sx={{ background: "#f7f7f7", p: 2, borderRadius: "6px" }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Skeleton variant="rectangular" width={100} height={100} />
              </Box>
              <Stack my={2}>
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: 120 }}
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "0.9rem", width: 80 }}
                />
                <Stack direction="row" spacing={1} my={1}>
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "0.9rem", width: 60 }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "0.9rem", width: 30 }}
                  />
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem", width: 50 }}
                  />
                  <Skeleton variant="rectangular" width={40} height={30} />
                </Stack>
              </Stack>
              <Skeleton variant="rectangular" width="100%" height={40} />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mt={1}
              >
                <Skeleton variant="rectangular" width={80} height={30} />
                <Skeleton variant="rectangular" width={60} height={30} />
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
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

  const displayedProducts = showAll
    ? discountedProducts
    : discountedProducts.slice(0, 4);

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography sx={discountGoodsTitle}>Aksiýadaky harytlar</Typography>
        <Button
          sx={discountGoodsSeeAllButton}
          endIcon={<KeyboardArrowRightIcon />}
          onClick={handleShowAll}
        >
          Hemmesini görmek
        </Button>
      </Stack>
      <Grid container spacing={2} my={3} ref={containerRef}>
        {displayedProducts.map((product: any, index) => (
          <Grid key={product.id} size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
            <motion.div
              initial={showAll ? "hidden" : {}}
              animate={containerInView ? "visible" : "hidden"}
              custom={index}
              variants={productItemVariants}
            >
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
                  <LazyLoadImage
                    onClick={() => navigate(`/product/${product.id}`)}
                    src={product.images[0] || "fallback-image.jpg"}
                    alt={product.title_en}
                    placeholderSrc={blurHashToBase64(product.blurhash) || ""}
                    effect="blur"
                    style={{
                      width: "75%",
                      height: "70%",
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
                    {product.brand?.title_en || "Unknown Brand"}
                  </Typography>
                  <Stack direction="row" spacing={1} my={1}>
                    <Typography sx={discountGoodCodeText}>
                      Haryt kody:
                    </Typography>
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
                  onClick={() => BasketViewModel.addToBasket(product)}
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
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DiscountGoodBox;

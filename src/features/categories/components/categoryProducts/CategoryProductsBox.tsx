import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Grid from "@mui/material/Grid2";
import { Box, Button, Stack, Typography } from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  addStoreDiscountGoodButton,
  compareDiscountGoodsCostButton,
  discountGoodCodeText,
  discountGoodCompanyTitle,
  discountGoodCost,
  discountGoodLastCount,
  discountGoodTitle,
} from "../../../home/components/discountedGoods/styles/discoutGoodsStyle";
import { useNavigate } from "react-router-dom";

const CategoryProductsBox: FC = () => {
  const navigate = useNavigate();
  // Intersection Observer for triggering animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Framer Motion animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 }, // Start state
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.3, // Add delay for each card
        duration: 0.9,
        ease: "easeOut",
      },
    }),
  };

  const products = [
    { id: 1, image: "./images/category1.png" },
    { id: 2, image: "./images/category2.png" },
    { id: 3, image: "./images/category3.png" },
    { id: 4, image: "./images/category1.png" },
    { id: 5, image: "./images/category2.png" },
    { id: 6, image: "./images/category3.png" },
    { id: 7, image: "./images/category1.png" },
    { id: 8, image: "./images/category2.png" },
    { id: 9, image: "./images/category3.png" },
    { id: 10, image: "./images/category1.png" },
    { id: 11, image: "./images/category2.png" },
    { id: 12, image: "./images/category3.png" },
  ];

  return (
    <Grid container spacing={2} ref={ref}>
      {products.map((product, index) => (
        <Grid
          key={product.id}
          size={{ lg: 3, md: 4, sm: 6, xs: 12 }}
          component={motion.div} // Use motion.div for animations
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
          custom={index} // Pass index for staggered animations
        >
          <Box>
            <Stack direction="row" justifyContent="center">
              <img
                onClick={() => navigate("/product")}
                src={product.image}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                alt=""
              />
            </Stack>
            <Stack
              my={2}
              onClick={() => navigate("/product")}
              sx={{ cursor: "pointer" }}
            >
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
                <img src="./icons/compare.svg" alt="" /> Deňeşdirmek
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
  );
};

export default CategoryProductsBox;

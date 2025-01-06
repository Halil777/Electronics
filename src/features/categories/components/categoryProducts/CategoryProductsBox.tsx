import { FC, useEffect, useState } from "react";
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
import { useProduct } from "../../../../hooks/products/useProduct";

interface CategoryProductsBoxProps {
  category: any;
}

const CategoryProductsBox: FC<CategoryProductsBoxProps> = ({ category }) => {
  const navigate = useNavigate();
  const { products, isLoading, isError } = useProduct();
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
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

  useEffect(() => {
    if (products && category) {
      const filtered = products.filter(
        (product: any) => product.category_id === category.id
      );
      setFilteredProducts(filtered);
    }
  }, [products, category]);

  if (isLoading) {
    return <Typography>Loading products...</Typography>;
  }

  if (isError) {
    return <Typography color="error">Error loading products.</Typography>;
  }

  return (
    <Grid container spacing={2} ref={ref}>
      {filteredProducts.map((product: any, index) => (
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
                src={product.images[0]}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                alt={product.title}
              />
            </Stack>
            <Stack
              my={2}
              onClick={() => navigate("/product")}
              sx={{ cursor: "pointer" }}
            >
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

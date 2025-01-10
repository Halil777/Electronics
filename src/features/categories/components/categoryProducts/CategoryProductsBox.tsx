import { FC, useState, useEffect } from "react";
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

// Define a more detailed Product interface
interface Product {
  id: string;
  title_en: string;
  brand: string;
  product_code: string;
  price: number;
  stock: number;
  images: string[];
  category_id: string;
  description?: string; // Optional description for the product
}

interface CategoryProductsBoxProps {
  products: Product[] | null | undefined;
  totalProducts: number | null; // Add totalProducts to the props interface
}

const CategoryProductsBox: FC<CategoryProductsBoxProps> = ({
  products,
  totalProducts,
}) => {
  const navigate = useNavigate();
  const [displayedProducts, setDisplayedProducts] = useState<Product[] | null>(
    null
  );
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Framer Motion Variants for animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.9,
        ease: "easeOut",
      },
    }),
  };

  useEffect(() => {
    setDisplayedProducts(products || null);
  }, [products]);

  if (!displayedProducts || displayedProducts.length === 0) {
    return <Typography>No products found for this category.</Typography>;
  }

  return (
    <Grid container spacing={2} ref={ref}>
      {displayedProducts?.map((product: Product, index) => (
        <Grid
          key={product.id}
          size={{ lg: 3, md: 4, sm: 6, xs: 12 }}
          component={motion.div}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
          custom={index} // For staggered animations
        >
          <Box sx={{ border: "1px solid #ddd", padding: 2, borderRadius: 2 }}>
            <Stack direction="row" justifyContent="center">
              {/* Lazy loading images with placeholder */}
              <img
                onClick={() => navigate(`/product/${product.id}`)}
                src={product.images[0] || "./images/placeholder.png"} // Fallback to a placeholder image if missing
                loading="lazy" // Lazy load for images
                alt={product.title_en}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            </Stack>
            <Stack
              my={2}
              onClick={() => navigate(`/product/${product.id}`)}
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
                <img src="./icons/compare.svg" alt="Compare" /> Deňeşdirmek
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

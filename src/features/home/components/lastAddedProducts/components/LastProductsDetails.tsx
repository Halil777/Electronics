import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FC } from "react";
import {
  lastAddedProductCompanyName,
  lastAddedProductCost,
  lastAddedProductsImageBox,
  lastAddedProductTitle,
  productContainerStyle,
} from "../styles/lastAddedProductsStyle";
import { useProduct } from "../../../../../hooks/products/useProduct";
import { useNavigate } from "react-router-dom";

const LastProductsDetails: FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { lastAddedDiscountedProducts, isLoading } = useProduct();
  const navigate = useNavigate();
  // Variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 1 },
    }),
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Box
        sx={{
          background: "#E0E0E0",
          height: "34px",
          p: "10px",
          display: "flex",
          alignItems: "center",
          color: "#2E2F38",
        }}
        mt={3}
      >
        <Typography>Soňky goşulanlar</Typography>
      </Box>
      <Stack p={2} spacing={1} ref={ref}>
        {lastAddedDiscountedProducts?.map((product, index) => (
          <motion.div
            key={product.id}
            custom={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <Box
              sx={productContainerStyle}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <Stack direction="row" spacing={1}>
                <Box sx={lastAddedProductsImageBox}>
                  <img
                    src={product.images?.[0] || "./images/banner1.png"}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                    alt={product.title_en}
                  />
                </Box>
                <Stack spacing={0.6}>
                  <Typography sx={lastAddedProductTitle}>
                    {product.title_tm || product.title_ru || product.title_en}
                  </Typography>
                  <Typography sx={lastAddedProductCompanyName}>
                    {product.brand?.[0]?.title_tm ||
                      product.brand?.[0]?.title_ru ||
                      product.brand?.[0]?.title_en}
                  </Typography>
                  <Typography sx={lastAddedProductCost}>
                    {product.price} m.
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </motion.div>
        ))}
      </Stack>
    </>
  );
};

export default LastProductsDetails;

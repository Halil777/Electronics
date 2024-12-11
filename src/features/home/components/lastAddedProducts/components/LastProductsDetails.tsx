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

const LastProductsDetails: FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.5, duration: 1.2 },
    }),
  };

  const products = [
    {
      id: 1,
      image: "./images/banner1.png",
      title: "Kamera Xiaomi Mi Home Security (360° 1080P)",
      company: "Mi",
      cost: "1871,50 m.",
    },
    {
      id: 2,
      image: "./images/banner1.png",
      title: "Kamera Xiaomi Mi Home Security (360° 1080P)",
      company: "Mi",
      cost: "1871,50 m.",
    },
    {
      id: 2,
      image: "./images/banner1.png",
      title: "Kamera Xiaomi Mi Home Security (360° 1080P)",
      company: "Mi",
      cost: "1871,50 m.",
    },
    {
      id: 2,
      image: "./images/banner1.png",
      title: "Kamera Xiaomi Mi Home Security (360° 1080P)",
      company: "Mi",
      cost: "1871,50 m.",
    },
    {
      id: 2,
      image: "./images/banner1.png",
      title: "Kamera Xiaomi Mi Home Security (360° 1080P)",
      company: "Mi",
      cost: "1871,50 m.",
    },
    {
      id: 2,
      image: "./images/banner1.png",
      title: "Kamera Xiaomi Mi Home Security (360° 1080P)",
      company: "Mi",
      cost: "1871,50 m.",
    },
  ];

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
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            custom={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <Box sx={productContainerStyle}>
              <Stack direction="row" spacing={1}>
                <Box sx={lastAddedProductsImageBox}>
                  <img
                    src={product.image}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                </Box>
                <Stack spacing={0.6}>
                  <Typography sx={lastAddedProductTitle}>
                    {product.title}
                  </Typography>
                  <Typography sx={lastAddedProductCompanyName}>
                    {product.company}
                  </Typography>
                  <Typography sx={lastAddedProductCost}>
                    {product.cost}
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

import { FC, useState } from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  weeksGoodBuyNowButton,
  weeksGoodCurrentCost,
  weeksGoodOldCost,
  weeksGoodQualityDetail,
  weeksGoodsBigImageBox,
  weeksGoodsSmallImageBox,
  weeksGoodSubQualityDetail,
  weeksGoodTitle,
} from "../style/weekGoodsStyle";

const WeeksGood: FC = () => {
  // State to manage images
  const [bigImage, setBigImage] = useState("./images/Rectangle 7.png");
  const [smallImages, setSmallImages] = useState([
    "./images/banner1.png",
    "./images/banner2.png",
    "./images/banner3.png",
  ]);

  // Function to handle image swap
  const handleImageClick = (clickedImage: string) => {
    const newSmallImages = smallImages.map((img) =>
      img === clickedImage ? bigImage : img
    );
    setSmallImages(newSmallImages);
    setBigImage(clickedImage);
  };

  return (
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Grid container>
        <Grid size={{ lg: 7, md: 7, sm: 12, xs: 12 }}>
          <Stack
            direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
            spacing={{ lg: 10, md: 10, sm: 1, xs: 1 }}
          >
            <Stack
              direction={{
                lg: "column",
                md: "column",
                sm: "row",
                xs: "row",
              }}
              spacing={1}
            >
              {smallImages.map((image, index) => (
                <Box
                  key={index}
                  sx={weeksGoodsSmallImageBox}
                  onClick={() => handleImageClick(image)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt={`Small Image ${index + 1}`}
                  />
                </Box>
              ))}
            </Stack>
            <Box sx={weeksGoodsBigImageBox}>
              <img
                src={bigImage}
                style={{ width: "90%", height: "100%", objectFit: "cover" }}
                alt="Big Image"
              />
            </Box>
          </Stack>
        </Grid>
        <Grid size={{ lg: 5, md: 5, sm: 12, xs: 12 }}>
          <Stack
            spacing={{ lg: 2.5, md: 2, sm: 2, xs: 1 }}
            minHeight={{ lg: "400px", md: "400px", sm: "300px", xs: "200px" }}
            justifyContent="center"
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src="/icons/lucide_crown.svg" alt="crown" />
              <Typography sx={weeksGoodTitle}>Товар недели</Typography>
            </Stack>
            <Typography sx={weeksGoodQualityDetail}>
              Качества в детальях
            </Typography>
            <Typography sx={weeksGoodSubQualityDetail}>
              В подарок Моноблоки
            </Typography>
            <Stack direction="row" spacing={2}>
              <Typography sx={weeksGoodCurrentCost}>1 103,20 m.</Typography>
              <Typography sx={weeksGoodOldCost}>1 200m.</Typography>
            </Stack>
            <Button variant="contained" sx={weeksGoodBuyNowButton}>
              Заказать сейчас!
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default WeeksGood;

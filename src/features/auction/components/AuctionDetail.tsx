import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { deliveryNavigateTitle } from "../../delivery/styles/deliveryStyle";
import {
  auctionDetailCost,
  auctionDetailCurrentBigPicture,
  auctionDetailCurrentSmallPicture,
  auctionDetailDateBox,
  auctionDetailIconButton,
  auctionDetailNextSmallPicture,
  auctionDetailProductSubtitle,
  auctionDetailProductTitle,
  auctionDetailRecomendationButton,
  auctionDetailRecomendationTitle,
  auctionSmallBox,
} from "../styles/auctionStyles";
import Grid from "@mui/material/Grid2";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AuctionDetailProporties from "./AuctionDetailProporties";

const AuctionDetail: FC = () => {
  const [currentBigImage, setCurrentBigImage] = useState<string>(
    "./images/auction1.png"
  );

  const smallImages = ["./images/auction1.png", "./images/banner2.png"];

  const handleSmallImageClick = (image: string) => {
    setCurrentBigImage(image);
  };

  return (
    <Box my={5}>
      <Container>
        <Typography sx={deliveryNavigateTitle}>Baş sahypa / Auksion</Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mt={3}
        >
          <Stack spacing={1}>
            <Typography sx={auctionDetailProductTitle}>
              Mikrotolkunly peç Gorenje MO28A5BH
            </Typography>
            <Typography sx={auctionDetailProductSubtitle}>
              Ýagdaý: <span>Täze</span>
            </Typography>
            <Typography sx={auctionDetailProductSubtitle}>
              Başlangyç baha: <span style={{ color: "#C3000E" }}>3050 TMT</span>
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box sx={auctionDetailDateBox}>2</Box>
              <Box sx={{ fontSize: "46px" }}>:</Box>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box sx={auctionDetailDateBox}>12</Box>
              <Box sx={{ fontSize: "46px" }}>:</Box>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box sx={auctionDetailDateBox}>3</Box>
              <Box sx={{ fontSize: "46px" }}>:</Box>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box sx={auctionDetailDateBox}>45</Box>
            </Stack>
          </Stack>
        </Stack>
        <Grid container my={5} spacing={2}>
          <Grid size={{ lg: 7, md: 7, sm: 12, xs: 12 }}>
            <Grid container spacing={2} mb={2}>
              <Grid size={{ lg: 2, md: 2, sm: 6, xs: 12 }}>
                <Stack spacing={1}>
                  {smallImages.map((image, index) => (
                    <Box
                      key={index}
                      sx={
                        currentBigImage === image
                          ? auctionDetailCurrentSmallPicture
                          : auctionDetailNextSmallPicture
                      }
                      onClick={() => handleSmallImageClick(image)}
                    >
                      <img
                        src={image}
                        style={{ width: "100%" }}
                        alt={`small-${index}`}
                      />
                    </Box>
                  ))}
                </Stack>
              </Grid>
              <Grid size={{ lg: 10, md: 10, sm: 6, xs: 12 }}>
                <Box sx={auctionDetailCurrentBigPicture}>
                  <img
                    style={{ width: "70%" }}
                    src={currentBigImage}
                    alt="big"
                  />
                </Box>
              </Grid>
            </Grid>
            <AuctionDetailProporties />
          </Grid>
          <Grid size={{ lg: 5, md: 5, sm: 12, xs: 12 }}>
            <Box sx={auctionSmallBox}>
              <Stack direction="row" justifyContent="center" mt={-4}>
                <Typography sx={auctionDetailRecomendationTitle}>
                  Teklip möçberi
                  <span style={{ color: "#C3000E" }}> 50 TMT</span>
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-evenly"
                my={3}
              >
                <IconButton sx={auctionDetailIconButton}>
                  <RemoveIcon />
                </IconButton>
                <Typography sx={auctionDetailCost}>5050</Typography>
                <IconButton sx={auctionDetailIconButton}>
                  <AddIcon />
                </IconButton>
              </Stack>
              <Button
                variant="contained"
                fullWidth
                sx={auctionDetailRecomendationButton}
              >
                Teklip goýuň
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AuctionDetail;

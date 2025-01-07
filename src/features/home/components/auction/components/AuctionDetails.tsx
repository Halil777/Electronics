import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import {
  auctionCost,
  auctionDateBox,
  auctionSubtitle,
  auctionTitle,
} from "../styles/auctionStyles";

const AuctionDetails: FC = () => {
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
      >
        <Typography>Auction</Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "267px", // Фиксированная высота контейнера
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // Центрируем контент (если нужно)
          backgroundImage: "url(./images/banner1.png)", // Устанавливаем изображение как фон
          backgroundSize: "95% 65%", // Изображение будет масштабироваться, чтобы покрыть контейнер
          backgroundPosition: "center", // Центрируем изображение по центру
          backgroundRepeat: "no-repeat", // Отключаем повторение фона
        }}
      ></Box>
      <Stack mt={{ lg: 2, md: 2, sm: 0, xs: 0 }} mb={3} spacing={2}>
        <Typography sx={auctionTitle}>
          Noutbuk Deli Alienware m16 R2(1006663238)
        </Typography>
        <Typography sx={auctionSubtitle}>Goýulan wagty: Şugün</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="center" mb={2}>
        <Typography sx={auctionCost}>56450</Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Stack alignItems="center" spacing={1}>
          <Box sx={auctionDateBox}>2</Box>
          <Typography sx={auctionSubtitle}>Gun</Typography>
        </Stack>
        <Stack alignItems="center" spacing={1}>
          <Box sx={auctionDateBox}>12</Box>
          <Typography sx={auctionSubtitle}>Sagat</Typography>
        </Stack>
        <Stack alignItems="center" spacing={1}>
          <Box sx={auctionDateBox}>3</Box>
          <Typography sx={auctionSubtitle}>Minut</Typography>
        </Stack>
        <Stack alignItems="center" spacing={1}>
          <Box sx={auctionDateBox}>2</Box>
          <Typography sx={auctionSubtitle}>Sekunt</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default AuctionDetails;

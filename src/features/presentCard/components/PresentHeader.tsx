import { FC } from "react";
import { Typography, Box } from "@mui/material";

const PresentHeader: FC = () => {
  return (
    <>
      <Box sx={{ position: "relative", display: "inline-block" }}>
        <Typography
          sx={{
            position: "relative",
            zIndex: 1,
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          Sowgat karty
        </Typography>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: "15px",
            right: "0",
            height: "2px",
            backgroundColor: "#C3000E",
            width: "110%",
            transform: "translateX(-10%)",
          }}
        />
      </Box>
      <Typography
        sx={{ my: 3, fontSize: "26px", width: "60%", fontWeight: 700 }}
      >
        Подарочный сертификать - лучщий подарок современному человеку
      </Typography>
    </>
  );
};

export default PresentHeader;

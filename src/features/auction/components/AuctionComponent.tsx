import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";
import { deliveryNavigateTitle } from "../../delivery/styles/deliveryStyle";
import { auctionBox } from "../styles/auctionStyles";
import AuctionCard from "./AuctionCard";

const AuctionComponent: FC = () => {
  return (
    <Container>
      <Typography sx={deliveryNavigateTitle}>Baş sahypa / Auksion</Typography>
      <Box sx={auctionBox}>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            top: -20,
          }}
        >
          <Typography
            sx={{ textAlign: "center", fontSize: "20px", fontWeight: 600 }}
          >
            Auksion
          </Typography>
          <Typography
            sx={{ textAlign: "center", fontSize: "16px", fontWeight: 400 }}
          >
            Auksiona gatnaşmak üçin agza boluň
          </Typography>
        </Box>
        <AuctionCard />
      </Box>
    </Container>
  );
};

export default AuctionComponent;

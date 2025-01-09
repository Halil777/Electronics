import { FC } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import {
  auctionParticipateButton,
  auctionSmallBox,
} from "../../auction/styles/auctionStyles";
import { useNavigate } from "react-router-dom";

const BasketRight: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={auctionSmallBox}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "13px",
            textAlign: "center",
            mt: "-30px",
          }}
        >
          Kupon kody ýaz
        </Typography>
        <Stack spacing={2} my={3}>
          <input
            type="text"
            placeholder="Kupon koduny giriziň"
            style={{
              height: "45px",
              padding: "10px 17px",
              border: "1px solid #D2D2D2",
              outline: "none",
              borderRadius: "6px",
            }}
          />
          <Button
            sx={auctionParticipateButton}
            onClick={() => navigate("/complete-order")}
            variant="contained"
            fullWidth
          >
            Sargyt etmek
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default BasketRight;

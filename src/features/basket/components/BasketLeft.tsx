import { FC } from "react";
import Grid from "@mui/material/Grid2";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AutoDeleteOutlinedIcon from "@mui/icons-material/AutoDeleteOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import {
  basketProductCountBox,
  clearAllBasketButton,
} from "../styles/basketStyle";

const BasketLeft: FC = () => {
  return (
    <>
      <Paper elevation={4} sx={{ width: "100%", py: 2 }}>
        <Stack
          direction="row"
          mx={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>Sebet</Typography>
          <Button
            startIcon={<AutoDeleteOutlinedIcon />}
            sx={clearAllBasketButton}
          >
            Hemmesini bozmak
          </Button>
        </Stack>
        <Divider />
        <Grid container p={3} spacing={8} alignItems={"center"}>
          <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <img
                style={{ width: "70px" }}
                src="./images/category1.png"
                alt="basket pictures"
              />
              <Typography sx={{ fontSize: "14px" }}>
                Proýektor Xiaomi Mi Smart Projector 2 Pro
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                  sx={{ height: "40px", width: "40px", fontSize: "18px" }}
                >
                  -
                </IconButton>
                <Box sx={basketProductCountBox}>1</Box>
                <IconButton
                  sx={{ height: "40px", width: "40px", fontSize: "18px" }}
                >
                  +
                </IconButton>
              </Stack>
              <Typography sx={{ fontSize: "17px", fontWeight: 600 }}>
                17 139 TMT
              </Typography>
              <IconButton>
                <ClearOutlinedIcon sx={{ width: "16px" }} />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
        <Divider />
        <Stack direction="row" justifyContent="flex-end" m={3}>
          <Typography>
            Jemi: <b>17 139</b>
          </Typography>
        </Stack>
      </Paper>
    </>
  );
};

export default BasketLeft;

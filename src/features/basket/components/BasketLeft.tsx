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
import { observer } from "mobx-react-lite";
import BasketViewModel from "../../../store/basket/BasketViewModel";

const BasketLeft: FC = observer(() => {
  const { items, totalPrice } = BasketViewModel;

  return !items.length ? (
    <Stack alignItems="center" minHeight="30vh" mt={4} spacing={2}>
      <img src="/images/sebet.png" style={{ width: 100, height: 65 }} alt="" />
      <Typography
        color="#4B5563"
        fontFamily="Open Sans"
        fontSize={20}
        fontWeight={600}
      >
        Sebediňiz boş
      </Typography>
    </Stack>
  ) : (
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
          // onClick={() => handleClearAllBasket()}
          onClick={() => BasketViewModel.clearBasket()}
        >
          Hemmesini bozmak
        </Button>
      </Stack>
      <Divider />

      {items.map((item) => (
        <Grid
          container
          p={3}
          spacing={8}
          alignItems={"center"}
          key={item.product.id}
        >
          <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <img
                style={{ width: "70px" }}
                src={item.product.images[0] || "./images/category1.png"}
                alt="basket pictures"
              />
              <Typography sx={{ fontSize: "14px" }}>
                {item.product.title_en}
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
                  onClick={() =>
                    BasketViewModel.decreaseQuantity(item.product.id)
                  }
                  // onClick={() => decrease(item.product.id)}
                  disabled={item.quantity <= 1}
                >
                  -
                </IconButton>
                <Box sx={basketProductCountBox}>{item.quantity}</Box>
                <IconButton
                  sx={{ height: "40px", width: "40px", fontSize: "18px" }}
                  // onClick={() => increase(item.product.id)}
                  onClick={() =>
                    BasketViewModel.increaseQuantity(item.product.id)
                  }
                >
                  +
                </IconButton>
              </Stack>
              <Typography sx={{ fontSize: "17px", fontWeight: 600 }}>
                {item.product.price} TMT
              </Typography>
              <IconButton
                onClick={() =>
                  BasketViewModel.removeFromBasket(Number(item.product.id))
                }

                // onClick={() => remove(item.product.id)}
              >
                <ClearOutlinedIcon sx={{ width: "16px" }} />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      ))}
      <Divider />
      <Stack direction="row" justifyContent="flex-end" m={3}>
        <Typography>
          Jemi: <b>{totalPrice}</b>
        </Typography>
      </Stack>
    </Paper>
  );
});

export default BasketLeft;

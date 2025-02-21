import { FC } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Container } from "@mui/material";
import BasketLeft from "../components/BasketLeft";
import BasketRight from "../components/BasketRight";
import BasketTitle from "../components/BasketTitle";

const Basket: FC = () => {
  return (
    <>
      <Container>
        <Box my={5}>
          <BasketTitle />
          <Grid container spacing={3} my={5}>
            <Grid size={{ lg: 9, md: 9, sm: 12, xs: 12 }}>
              <BasketLeft />
            </Grid>
            <Grid size={{ lg: 3, md: 3, sm: 12, xs: 12 }}>
              <BasketRight />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Basket;

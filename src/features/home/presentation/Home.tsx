import { FC } from "react";
import { Box, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  size1_4,
  size4_1,
} from "../../../components/layouts/header/utils/gridSize";
import Sidebar from "../components/sidebar/presentation/Sidebar";
import Banner from "../components/banner/presentation/Banner";
import Auction from "../components/auction/presentation/Auction";
import Feedback from "../components/feedback/presentation/Feedback";
import LastAddedProducts from "../components/lastAddedProducts/presentation/LastAddedProducts";
import DiscountedGoods from "../components/discountedGoods/presentation/DiscountedGoods";
import GoodOfWeek from "../components/goodOfWeek/presentation/GoodOfWeek";
import OfferedGoods from "../components/offeredGoods/presentation/OfferedGoods";
import OurPartners from "../components/ourPartners/presentation/OurPartners";
import ProductViewModel from "../../products/presentation/ProductViewModel";
import { observer } from "mobx-react-lite";

const Home: FC = observer(() => {

  
  return (
    <Container>
      <Grid container width="100%" mt={2} spacing={2}>
        <Grid
          size={size1_4}
          sx={{ display: { lg: "block", md: "block", sm: "none", xs: "none" } }}
        >
          <Stack spacing={4}>
            <Box>
              <Sidebar />
            </Box>
            <Box>
              <Auction />
            </Box>
            <Box>
              <Feedback />
            </Box>
            <Box>
              <LastAddedProducts />
            </Box>
          </Stack>
        </Grid>
        <Grid size={size4_1}>
          <Box>
            <Banner />
          </Box>
          <Box my={3}>
            <DiscountedGoods />
          </Box>
          <Box my={3}>
            <OfferedGoods />
          </Box>
          <Box my={3}>
            <GoodOfWeek />
          </Box>
          <Box my={3}>
            <OurPartners />
          </Box>
        </Grid>
      </Grid>
      <h1>{ProductViewModel.loading  + ""}</h1>
    </Container>
  );
})

export default Home;

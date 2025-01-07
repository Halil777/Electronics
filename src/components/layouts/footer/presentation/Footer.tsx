import { FC } from "react";
import { Box, Container, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FooterLeftSide from "../components/FooterLeftSide";
import FooterRightSide from "../components/FooterRightSide";
import { footerBox } from "../styles/footerStyles";

const Footer: FC = () => {
  return (
    <>
      <Box sx={footerBox}>
        <Container>
          <Grid container alignItems="center">
            <Grid size={{ lg: 3, md: 3, sm: 6, xs: 12 }}>
              <FooterLeftSide />
            </Grid>
            <Grid size={{ lg: 9, md: 9, sm: 6, xs: 12 }}>
              <FooterRightSide />
            </Grid>
          </Grid>
        </Container>
        <Divider color="#F2F2F2" />
      </Box>
    </>
  );
};

export default Footer;

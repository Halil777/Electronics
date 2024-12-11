import { FC } from "react";
import HeaderLogo from "../components/HeaderLogo";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { size1_4, size4_1 } from "../utils/gridSize";
import HeaderContacts from "../components/HeaderContacts";

const Header: FC = () => {
  return (
    <>
      <Box
        sx={{ display: { lg: "block", md: "block", sm: "none", xs: "none" } }}
      >
        <Container>
          <Box sx={{ display: "flex", height: "70px", alignItems: "center" }}>
            <Grid container width="100%">
              <Grid size={size1_4}>
                <HeaderLogo />
              </Grid>
              <Grid size={size4_1}>
                <HeaderContacts />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Header;

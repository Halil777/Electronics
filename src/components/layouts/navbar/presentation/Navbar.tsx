import { Box, Container, Stack } from "@mui/material";
import { FC } from "react";
import NavLinks from "../components/NavLinks";
import NavbarRightSide from "../components/NavbarRightSide";
import NavbarMenu from "../components/NavbarMenu";
import NavbarSearch from "../../navbarSearch/navbarSearch";

const Navbar: FC = () => {
  return (
    <>
      <Box
        sx={{
          background: "#CFD8DC",
          height: "64px",
          display: { lg: "block", md: "block", sm: "none", xs: "none" },
          color: "#2E2F38",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              alingItems: "center",
              justifyContent: "space-between",
              height: "64px",
            }}
          >
            <NavLinks />
            <NavbarRightSide />
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
        }}
      >
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            height="100%"
            justifyContent="space-between"
            spacing={3}
          >
            <NavbarMenu />
            <NavbarSearch />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;

import { Box, Container } from "@mui/material";
import { FC } from "react";
import NavLinks from "../components/NavLinks";
import NavbarRightSide from "../components/NavbarRightSide";

const Navbar: FC = () => {
  return (
    <Box
      sx={{
        background: "#C3000E",
        height: "64px",
        display: { lg: "block", md: "block", sm: "none", xs: "none" },
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
  );
};

export default Navbar;

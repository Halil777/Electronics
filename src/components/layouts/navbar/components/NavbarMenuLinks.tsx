import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../styles/navLinks";

const NavbarMenuLinks: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActiveLink = (path: string) => location.pathname === path;

  const linkStyles = (isActive: boolean) => ({
    ...navLinks,
    fontWeight: isActive ? 700 : 400,
    color: isActive ? "#000" : "inherit",
    fontSize: isActive ? "16px" : "14px",
  });

  return (
    <Stack px={2} spacing={2} my={3}>
      <Typography
        onClick={() => navigate("/delivery")}
        sx={linkStyles(isActiveLink("/delivery"))}
      >
        Eltip berme
      </Typography>
      <Typography
        onClick={() => navigate("/service")}
        sx={linkStyles(isActiveLink("/service"))}
      >
        Hyzmat
      </Typography>
      <Typography
        onClick={() => navigate("/return-exchange")}
        sx={linkStyles(isActiveLink("/return-exchange"))}
      >
        Çalyşmak we gaýtarmak
      </Typography>
      <Typography
        onClick={() => navigate("/how-to-order")}
        sx={linkStyles(isActiveLink("/how-to-order"))}
      >
        Nädip sargyt etmeli
      </Typography>
      <Typography
        onClick={() => navigate("/auction")}
        sx={linkStyles(isActiveLink("/auction"))}
      >
        Auksion
      </Typography>
    </Stack>
  );
};

export default NavbarMenuLinks;

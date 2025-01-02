import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { navLinks } from "../styles/navLinks";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavbarCategory from "./NavbarCategory";

const NavLinks: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      alignItems="center"
    >
      <NavbarCategory />
      {/* Navigation Links */}
      <Typography
        onClick={() => navigate("/delivery")}
        sx={{
          ...navLinks,
          fontWeight: isActiveLink("/delivery") ? 700 : 400,
        }}
      >
        {t("navbar.delivery")}
      </Typography>
      <Typography
        onClick={() => navigate("/service")}
        sx={{
          ...navLinks,
          fontWeight: isActiveLink("/service") ? 700 : 400,
        }}
      >
        {t("navbar.service")}
      </Typography>
      <Typography
        onClick={() => navigate("/return-exchange")}
        sx={{
          ...navLinks,
          fontWeight: isActiveLink("/return-exchange") ? 700 : 400,
        }}
      >
        {t("navbar.return_exchange")}
      </Typography>
      <Typography
        onClick={() => navigate("/how-to-order")}
        sx={{
          ...navLinks,
          fontWeight: isActiveLink("/how-to-order") ? 700 : 400,
        }}
      >
        {t("navbar.how_to_order")}
      </Typography>
      <Typography
        onClick={() => navigate("/embassy")}
        sx={{
          ...navLinks,
          fontWeight: isActiveLink("/embassy") ? 700 : 400,
        }}
      >
        {t("navbar.embassy")}
      </Typography>
      <Typography
        onClick={() => navigate("/auction")}
        sx={{
          ...navLinks,
          fontWeight: isActiveLink("/auction") ? 700 : 400,
        }}
      >
        {t("navbar.auction")}
      </Typography>
    </Stack>
  );
};

export default NavLinks;

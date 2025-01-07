import { Stack } from "@mui/material";
import { FC, useState } from "react";
import Language from "../../../../language/Language";
import { useNavigate } from "react-router-dom";
import Login from "../../../login/Login";
import useDrawer from "./useDrawer";
import NavbarSearchGlobal from "../../navbarSearch/NavbarSearchGlobal";

const NavbarRightSide: FC = () => {
  const navigate = useNavigate();
  const { isOpen, openDrawer, closeDrawer } = useDrawer();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchToggle = () => setIsSearchOpen((prev) => !prev);

  return (
    <>
      {isSearchOpen ? (
        <NavbarSearchGlobal onClose={handleSearchToggle} />
      ) : (
        <Stack direction="row" alignItems="center" spacing={2}>
          <img
            src="./navbarIcons/search.svg"
            style={{ cursor: "pointer" }}
            alt="search"
            onClick={handleSearchToggle}
          />

          <img
            src="./navbarIcons/profile.svg"
            alt="profile"
            style={{ cursor: "pointer" }}
            onClick={openDrawer}
          />
          <img
            src="./navbarIcons/mdi-light_heart.svg"
            style={{ cursor: "pointer" }}
            alt="heart"
          />
          <img
            onClick={() => navigate("/basket")}
            src="./navbarIcons/iconamoon_shopping-card-light.svg"
            alt="basket"
            style={{ cursor: "pointer" }}
          />

          {/* where gift card route click */}
          <img
            onClick={() => navigate("/compare")}
            src="./navbarIcons/compare.svg"
            style={{ cursor: "pointer" }}
            alt="gift"
          />
          <Language />
        </Stack>
      )}

      <Login isOpen={isOpen} onClose={closeDrawer} />
    </>
  );
};

export default NavbarRightSide;

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
            src="./icons/search.svg"
            style={{ cursor: "pointer" }}
            alt="search"
            onClick={handleSearchToggle}
          />
          <img
            onClick={() => navigate("/present-card")}
            src="./icons/gift.svg"
            style={{ cursor: "pointer" }}
            alt="gift"
          />
          <img
            src="./icons/people.svg"
            alt="profile"
            style={{ cursor: "pointer" }}
            onClick={openDrawer}
          />
          <img
            src="./icons/heart.svg"
            style={{ cursor: "pointer" }}
            alt="heart"
          />
          <img
            onClick={() => navigate("/basket")}
            src="./icons/shopping-card.svg"
            alt="basket"
            style={{ cursor: "pointer" }}
          />
          <Language />
        </Stack>
      )}

      <Login isOpen={isOpen} onClose={closeDrawer} />
    </>
  );
};

export default NavbarRightSide;

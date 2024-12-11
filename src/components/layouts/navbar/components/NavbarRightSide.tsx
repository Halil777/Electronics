import { Stack } from "@mui/material";
import { FC } from "react";
import Language from "../../../../language/Language";
import { useNavigate } from "react-router-dom";
import Login from "../../../login/Login";
import useDrawer from "./useDrawer";

const NavbarRightSide: FC = () => {
  const navigate = useNavigate();
  const { isOpen, openDrawer, closeDrawer } = useDrawer();

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={4}>
        <img src="./icons/search.svg" alt="" />
        <img
          src="./icons/people.svg"
          alt="profile"
          style={{ cursor: "pointer" }}
          onClick={openDrawer}
        />
        <img src="./icons/heart.svg" alt="" />
        <img
          onClick={() => navigate("/basket")}
          src="./icons/badge.svg"
          alt="basket"
          style={{ cursor: "pointer" }}
        />
        <Language />
      </Stack>

      <Login isOpen={isOpen} onClose={closeDrawer} />
    </>
  );
};

export default NavbarRightSide;

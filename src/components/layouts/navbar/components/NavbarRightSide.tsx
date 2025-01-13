import { FC, useState } from "react";
import { Stack } from "@mui/material";
import Language from "../../../../language/Language";
import { useNavigate } from "react-router-dom";
import Login from "../../../login/Login";
import useDrawer from "./useDrawer";
import NavbarSearchGlobal from "../../navbarSearch/NavbarSearchGlobal";
import { observer } from "mobx-react-lite";
import defaultProfileImage from "../../../../../public/navbarIcons/profile.svg";
import UserViewModel from "../../../login/UserViewModel";
const NavbarRightSide: FC = observer(() => {
  const navigate = useNavigate();
  const { isOpen, openDrawer, closeDrawer } = useDrawer();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchToggle = () => setIsSearchOpen((prev) => !prev);

  const profileImage = UserViewModel.user?.profileImage
    ? UserViewModel.user?.profileImage
    : defaultProfileImage;
  return (
    <>
      {isSearchOpen ? (
        <NavbarSearchGlobal onClose={handleSearchToggle} />
      ) : (
        <Stack direction="row" alignItems="center" spacing={2}>
          <img
            src="/navbarIcons/search.svg"
            style={{ cursor: "pointer" }}
            alt="search"
            onClick={handleSearchToggle}
          />

          {UserViewModel.user?.profileImage ? (
            <img
              src={`${profileImage}`}
              alt="profile"
              style={{
                cursor: "pointer",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              onClick={openDrawer}
            />
          ) : (
            <img
              src={profileImage}
              alt="profile"
              style={{ cursor: "pointer" }}
              onClick={openDrawer}
            />
          )}
          <img
            src="/navbarIcons/mdi-light_heart.svg"
            style={{ cursor: "pointer" }}
            alt="heart"
          />
          <img
            onClick={() => navigate("/basket")}
            src="/navbarIcons/iconamoon_shopping-card-light.svg"
            alt="basket"
            style={{ cursor: "pointer" }}
          />
          <img
            onClick={() => navigate("/compare")}
            src="/navbarIcons/compare.svg"
            style={{ cursor: "pointer" }}
            alt="gift"
          />
          <Language />
        </Stack>
      )}

      <Login isOpen={isOpen} onClose={closeDrawer} />
    </>
  );
});

export default NavbarRightSide;

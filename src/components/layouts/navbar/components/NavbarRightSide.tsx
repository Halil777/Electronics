import { FC, useState, useEffect } from "react";
import { Stack, Badge, Snackbar, Alert } from "@mui/material";
import Language from "../../../../language/Language";
import { useNavigate } from "react-router-dom";
import Login from "../../../login/Login";
import useDrawer from "./useDrawer";
import NavbarSearchGlobal from "../../navbarSearch/NavbarSearchGlobal";
import { observer } from "mobx-react-lite";
import defaultProfileImage from "../../../../../public/navbarIcons/profile.svg";
import UserViewModel from "../../../login/UserViewModel";
import BasketViewModel from "../../../../store/basket/BasketViewModel";
import useFavoriteProducts from "../../../../features/Favourites/components/FavouritesProducts";

const NavbarRightSide: FC = observer(() => {
  const navigate = useNavigate();
  const { isOpen, openDrawer, closeDrawer } = useDrawer();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const { favorites } = useFavoriteProducts();
  console.log(favorites);

  const { totalItems, items } = BasketViewModel;

  const handleSearchToggle = () => setIsSearchOpen((prev) => !prev);

  const profileImage = UserViewModel.user?.profileImage
    ? UserViewModel.user?.profileImage
    : defaultProfileImage;

  useEffect(() => {
    if (items.length > 0) {
      setOpenSnackbar(true);
      setMessage("Product added to basket");
      console.log(openSnackbar);
    }
  }, [items.length]);

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
    setMessage(null);
    console.log(event);
  };
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
          <Badge badgeContent={favorites.length} color="primary">
            <img
              onClick={() => navigate("/favourites")}
              src="/navbarIcons/mdi-light_heart.svg"
              style={{ cursor: "pointer" }}
              alt="heart"
            />
          </Badge>
          <Badge badgeContent={totalItems} color="primary">
            <img
              onClick={() => navigate("/basket")}
              src="/navbarIcons/iconamoon_shopping-card-light.svg"
              alt="basket"
              style={{ cursor: "pointer" }}
            />
          </Badge>
          <img
            onClick={() => navigate("/compare")}
            src="/navbarIcons/compare.svg"
            style={{ cursor: "pointer" }}
            alt="gift"
          />
          <Language />
        </Stack>
      )}
      <Snackbar
        open={!!message}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>

      <Login isOpen={isOpen} onClose={closeDrawer} />
    </>
  );
});

export default NavbarRightSide;

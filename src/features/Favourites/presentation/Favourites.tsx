import { Box, Grid2, IconButton, Stack, Typography } from "@mui/material";
import { FC } from "react";
import useFavoriteProducts from "../components/FavouritesProducts";
import DeleteIcon from "@mui/icons-material/Delete";

const HowToOrder: FC = () => {
  const { favorites, toggleFavorite } = useFavoriteProducts();
  console.log(favorites);

  return (
    <Box my={5}>
      {/* <HowToOrderBox /> */}
      <div>
        <h2>My Favorite Products</h2>
        {favorites.length === 0 ? (
          <p>No favorite products yet.</p>
        ) : (
          <ul>
            {favorites.map((product) => (
              <li key={product.id}>
                <div>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <button onClick={() => toggleFavorite(product)}>
                    Remove from Favorites
                  </button>
                </div>
              </li>
            ))}
            {favorites.map((item) => (
              <Grid2
                container
                p={3}
                spacing={8}
                alignItems={"center"}
                key={item.id}
              >
                <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <img
                      style={{ width: "70px" }}
                      src={item.images[0] || "./images/category1.png"}
                      alt="basket pictures"
                    />
                    <Typography sx={{ fontSize: "14px" }}>
                      {item.title_en}
                    </Typography>
                  </Stack>
                </Grid2>
                <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography sx={{ fontSize: "17px", fontWeight: 600 }}>
                      {item.price} TMT
                    </Typography>
                    <IconButton
                      //   onClick={() => remove(item.product.id)}
                      onClick={() => toggleFavorite(item)}
                    >
                      <DeleteIcon sx={{ color: "#B71C1C", width: "26px" }} />
                    </IconButton>
                  </Stack>
                </Grid2>
              </Grid2>
            ))}
          </ul>
        )}
      </div>
    </Box>
  );
};

export default HowToOrder;

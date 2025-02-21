import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { FC } from "react";
import Grid from "@mui/material/Grid2";

import {
  addStoreDiscountGoodButton,
  compareDiscountGoodsCostButton,
  discountGoodCodeText,
  discountGoodCompanyTitle,
  discountGoodCost,
  discountGoodLastCount,
  discountGoodTitle,
} from "../../home/components/discountedGoods/styles/discoutGoodsStyle";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { removeProduct } from "../../../components/redux/favouriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../components/redux/store";
import BasketViewModel from "../../../store/basket/BasketViewModel";

const HowToOrder: FC = () => {
  // const { favorites, toggleFavorite } = useFavoriteProducts();
  const dispatch = useDispatch();

  // const favorites = useAppSelector(
  //   (state: RootState) => state.favorites.favorites
  // );
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const handleToggleFavorite = (product: any) => {
    console.log(product);

    dispatch(removeProduct(product)); // Remove the product if it's already a favorite
  };

  return (
    <Container>
      <Box my={5} minHeight="50vh">
        <div>
          <Typography fontSize={25} fontWeight={600}>
            Halan harytlarym
          </Typography>
          {!favorites.length ? (
            <Stack alignItems="center" spacing={1} pt={5}>
              <img
                src="/images/wishlist.png"
                style={{ width: 80, height: 54 }}
                alt=""
              />
              <Typography fontSize={18}>
                Halan harytlaryňyzyň sanawy boş.
              </Typography>
            </Stack>
          ) : (
            <Grid container spacing={2} my={3}>
              {Array.isArray(favorites) &&
                favorites.map((product: any) => (
                  <Grid key={product.id} size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
                    <Box>
                      <Box
                        sx={{
                          width: "100%",
                          height: {
                            lg: "200px",
                            md: "200px",
                            sm: "180px",
                            xs: "150px",
                          },
                          overflow: "hidden",
                          background: "#f7f7f7",
                          p: 2,
                          borderRadius: "6px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={product?.images[0] || "fallback-image.jpg"}
                          style={{
                            width: "90%",
                            height: "90%",
                            objectFit: "cover",
                            display: "block",
                          }}
                          alt={product?.title_en || "Product"}
                        />
                      </Box>

                      <Stack my={2}>
                        <Typography sx={discountGoodTitle} noWrap>
                          {product && product.title_en}
                        </Typography>
                        <Typography sx={discountGoodCompanyTitle}>
                          {product?.brand?.title_en || ""}
                        </Typography>
                        <Stack direction="row" spacing={1} my={1}>
                          <Typography sx={discountGoodCodeText}>
                            Haryt kody:
                          </Typography>
                          <Typography sx={discountGoodCodeText}>
                            {product.product_code}
                          </Typography>
                        </Stack>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography sx={discountGoodCost}>
                            {product.price} m.
                          </Typography>
                          <Button
                            variant="contained"
                            sx={discountGoodLastCount}
                          >
                            Nagt {product.stock}
                          </Button>
                        </Stack>
                      </Stack>
                      <Button
                        variant="contained"
                        fullWidth
                        endIcon={<LocalGroceryStoreOutlinedIcon />}
                        sx={addStoreDiscountGoodButton}
                        onClick={() => BasketViewModel.addToBasket(product)}
                      >
                        Sebede goş
                      </Button>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Button
                          onClick={() => handleToggleFavorite(product)}
                          sx={{
                            ...compareDiscountGoodsCostButton,
                            backgroundColor: favorites.some(
                              (fav: any) => fav.id === product?.id
                            )
                              ? "#C3000E"
                              : "transparent",
                            color: favorites.some(
                              (fav: any) => fav.id === product?.id
                            )
                              ? "#fff"
                              : "#929292",
                            "&:hover": {
                              backgroundColor: favorites.some(
                                (fav: any) => fav.id === product?.id
                              )
                                ? "#C3000E"
                                : "#f0f0f0",
                            },
                          }}
                        >
                          <FavoriteBorderIcon
                            sx={{
                              fontWeight: 300,
                              width: "12px",
                              color: favorites.some(
                                (fav: any) => fav.id === product?.id
                              )
                                ? "#fff"
                                : "#929292",
                            }}
                          />
                          Saýla
                        </Button>
                      </Stack>
                    </Box>
                  </Grid>
                ))}
            </Grid>
          )}
        </div>
      </Box>
    </Container>
  );
};

export default HowToOrder;

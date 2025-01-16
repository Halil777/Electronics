import { RootState } from "../../components/redux/store";

export const selectBasketItems = (state: RootState) => state.basket.items;


export const selectTotalItems = (state: RootState) =>
  state.basket.items.reduce((acc, item) => acc + item.quantity, 0);

export const selectTotalPrice = (state: RootState) =>
  state.basket.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

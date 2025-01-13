import { makeAutoObservable } from "mobx";
import { Product } from "../../features/products/presentation/ProductViewModel";

interface BasketItem {
  product: Product;
  quantity: number;
}

class BasketViewModel {
  items: BasketItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToBasket(product: Product) {
    console.log("addToBasket called with:", product);
    const existingItemIndex = this.items.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingItemIndex > -1) {
      // If the product exists, increment quantity
      this.increaseQuantity(product.id);
    } else {
      // else add item to the basket
      this.items.push({ product, quantity: 1 });
    }
    console.log("Current items after add:", this.items);
  }

  removeFromBasket(productId: number) {
    console.log("removeFromBasket called with id:", productId);
    this.items = this.items.filter((item) => item.product.id !== productId);
    console.log("Current items after remove:", this.items);
  }

  increaseQuantity(productId: number) {
    console.log("increaseQuantity called with id:", productId);
    const existingItemIndex = this.items.findIndex(
      (item) => item.product.id === productId
    );
    if (existingItemIndex > -1) {
      this.items[existingItemIndex].quantity++;
      console.log("Current items after increase:", this.items);
    }
  }
  decreaseQuantity(productId: number) {
    console.log("decreaseQuantity called with id:", productId);
    const existingItemIndex = this.items.findIndex(
      (item) => item.product.id === productId
    );
    if (existingItemIndex > -1 && this.items[existingItemIndex].quantity > 1) {
      this.items[existingItemIndex].quantity--;
      console.log("Current items after decrease:", this.items);
    }
  }

  clearBasket() {
    console.log("clearBasket called");
    this.items = [];
    console.log("Current items after clear:", this.items);
  }

  get totalItems() {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
  }

  get totalPrice() {
    return this.items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  }
}

export default new BasketViewModel();

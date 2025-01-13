import { makeAutoObservable } from "mobx";
import { Product } from "../../features/products/presentation/ProductViewModel";

class CompareViewModel {
  items: Product[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCompare(product: Product) {
    const existingItemIndex = this.items.findIndex(
      (item) => item.id === product.id
    );
    if (existingItemIndex === -1) {
      this.items.push(product);
    }
  }

  removeFromCompare(productId: number) {
    this.items = this.items.filter((item) => item.id !== productId);
  }

  clearCompare() {
    this.items = [];
  }
}

export default new CompareViewModel();

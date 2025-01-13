import { makeAutoObservable } from "mobx";
import axios from "axios";
import { BASE_URL } from "../../../api/instance";

interface Filters {
  categoryId?: number;
  subcategoryId?: number;
  segmentId?: number;
  brandId?: number;
}

interface Product {
  id: number;
  title_tm: string;
  title_ru: string;
  title_en: string;
  desc_tm: string;
  desc_ru: string;
  desc_en: string;
  price: number;
  old_price: number;
  discount_percentage: number;
  discounted_price: number;
  stock: number;
  is_active: boolean;
  weight: number;
  width: number;
  height: number;
  depth: number;
  images: string[];
  size: string;
  color: string;
  tags: string;
  views: number;
  rating: number;
  brand_id: number;
  category_id: number;
  segment_id: number;
  created_at: string;
  updated_at: string;
  brand: {
    id: number;
    imageUrl: string;
    title_tm: string;
    title_ru: string;
    title_en: string;
    desc_tm: string;
    desc_ru: string;
    desc_en: string;
  };
  category: {
    id: number;
    imageUrl: string;
    title_tm: string;
    title_ru: string;
    title_en: string;
    desc_tm: string;
    desc_ru: string;
    desc_en: string;
    category_id: number;
  };
  segment: {
    id: number;
    imageUrl: string;
    title_tm: string;
    title_ru: string;
    title_en: string;
    desc_tm: string;
    desc_ru: string;
    desc_en: string;
    subcategory_id: number;
  };
  properties: any[];
}
interface ApiResponse {
  data: Product[];
  total: number;
}

class ProductViewModel {
  products: Product[] = [];
  loading: boolean = false;
  error: string | null = null;
  totalProducts: number | null = null;
  currentPage: number = 1;
  limit: number = 20;
  filters: Filters = {};
  selectedProduct: Product | null = null; // Add selectedProduct
  constructor() {
    makeAutoObservable(this);
  }
  setSelectedProduct = (product: Product | null) => {
    this.selectedProduct = product;
  };

  setFilters = (filters: Filters) => {
    this.filters = filters;
    this.currentPage = 1; // Reset to page 1 when filters change
  };
  setCurrentPage = (page: number) => {
    this.currentPage = page;
  };
  setLimit = (limit: number) => {
    this.limit = limit;
  };
  clearFilters = () => {
    this.filters = {};
    this.currentPage = 1;
    this.products = [];
    this.totalProducts = null;
  };

  async fetchFilteredProducts() {
    this.loading = true;
    this.error = null;

    try {
      const queryParams = new URLSearchParams({
        page: String(this.currentPage),
        limit: String(this.limit),
      });

      if (this.filters.categoryId)
        queryParams.append("categoryId", String(this.filters.categoryId));
      if (this.filters.subcategoryId)
        queryParams.append("subcategoryId", String(this.filters.subcategoryId));
      if (this.filters.segmentId)
        queryParams.append("segmentId", String(this.filters.segmentId));
      if (this.filters.brandId)
        queryParams.append("brandId", String(this.filters.brandId));

      const url = `${BASE_URL}products/client/products?${queryParams.toString()}`;
      const response = await axios.get(url);
      const data: ApiResponse = response.data;
      this.products = data.data;
      this.totalProducts = data.total;
    } catch (error: any) {
      console.error("Error fetching products:", error);
      this.error = "Failed to load products. Please try again.";
      this.products = [];
      this.totalProducts = null;
    } finally {
      this.loading = false;
    }
  }
  fetchProductById = async (productId: number) => {
    // Changed to arrow function
    this.loading = true;
    this.error = null;
    try {
      const url = `${BASE_URL}products/${productId}`; // Changed this line
      console.log(`Fetching product with ID: ${productId} from URL: ${url}`);
      const response = await axios.get(url);
      console.log("API Response:", response.data); // Log the response data
      this.selectedProduct = response.data;
    } catch (error: any) {
      console.error("Error fetching product by ID:", error);
      this.error = "Failed to load product details. Please try again.";
      this.selectedProduct = null;
    } finally {
      this.loading = false;
    }
  };
}
export default new ProductViewModel();

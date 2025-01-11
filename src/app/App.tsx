import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import { Suspense, lazy, useState, useEffect } from "react";
import { BASE_URL } from "../api/instance";
import axios from "axios";
import ScrollToTop from "../language/utils/ScrollToTop ";

const Home = lazy(() => import("../features/home/presentation/Home"));
const Categories = lazy(
  () => import("../features/categories/presentation/Categories")
);
const Dashboard = lazy(
  () => import("../features/dashboard/presentation/Dashboard")
);
const Products = lazy(
  () => import("../features/products/presentation/Products")
);
const Users = lazy(() => import("../features/users/presentation/Users"));
const Basket = lazy(() => import("../features/basket/presentation/Basket"));
const Delivery = lazy(
  () => import("../features/delivery/presentation/Delivery")
);
const Auction = lazy(() => import("../features/auction/presentation/Auction"));
const Service = lazy(() => import("../features/service/presentation/Service"));
const ReturnExchange = lazy(
  () => import("../features/returnExchange/presentation/ReturnExchange")
);
const HowToOrder = lazy(
  () => import("../features/howToOrder/presentation/HowToOrder")
);
const AuctionDetail = lazy(
  () => import("../features/auction/components/AuctionDetail")
);
const CompleteOrder = lazy(
  () => import("../features/delivery/components/CompleteOrder")
);
const PresentCard = lazy(
  () => import("../features/presentCard/presentation/PresentCard")
);
const BuyPresentCard = lazy(
  () => import("../features/presentCard/components/BuyPresentCard")
);
const Embassy = lazy(() => import("../features/embassy/presentation/Embassy"));
const Compare = lazy(() => import("../features/compare/presentation/Compare"));

const App = () => {
  const [selectedFilters, setSelectedFilters] = useState<any>({});
  const [filteredProducts, setFilteredProducts] = useState<any[] | null>(null);
  const [totalProducts, setTotalProducts] = useState<number | null>(null);

  const handleCategorySelect = (filters: any) => {
    setSelectedFilters(filters); // This will trigger the effect to fetch products
  };

  useEffect(() => {
    if (Object.keys(selectedFilters).length > 0) {
      fetchFilteredProducts(selectedFilters);
    }
  }, [selectedFilters]);

  const fetchFilteredProducts = async (filters: any) => {
    try {
      const queryParams = new URLSearchParams({
        page: "1", // Default page
        limit: "20", // Default limit
      });

      if (filters.categoryId)
        queryParams.append("categoryId", String(filters.categoryId));
      if (filters.subcategoryId)
        queryParams.append("subcategoryId", String(filters.subcategoryId));
      if (filters.segmentId)
        queryParams.append("segmentId", String(filters.segmentId));
      if (filters.brandId)
        queryParams.append("brandId", String(filters.brandId));

      const url = `${BASE_URL}/products/client/products?${queryParams.toString()}`;

      const response = await axios.get(url);
      const data = response.data; // Axios automatically parses JSON

      setFilteredProducts(data.data);
      setTotalProducts(data.total);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="/categories"
                element={
                  <Categories
                    products={filteredProducts}
                    totalProducts={totalProducts}
                    selectedFilters={selectedFilters}
                    onCategorySelect={handleCategorySelect}
                  />
                }
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/product" element={<Products />} />
              <Route path="/users" element={<Users />} />
              <Route path="/embassy" element={<Embassy />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/auction" element={<Auction />} />
              <Route path="/auction-detail" element={<AuctionDetail />} />
              <Route path="/service" element={<Service />} />
              <Route path="/return-exchange" element={<ReturnExchange />} />
              <Route path="/how-to-order" element={<HowToOrder />} />
              <Route path="/complete-order" element={<CompleteOrder />} />
              <Route path="/present-card" element={<PresentCard />} />
              <Route path="/buy-present-card" element={<BuyPresentCard />} />
              <Route path="/compare" element={<Compare />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;

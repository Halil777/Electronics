import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import { Suspense, lazy } from "react";
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
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/categories/:categoryId" element={<Categories />} />
              <Route
                path="/subcategories/:subcategoryId"
                element={<Categories />}
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

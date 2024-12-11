import { FC } from "react";
import Navbar from "./navbar/presentation/Navbar";
import Header from "./header/presentation/Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/presentation/Footer";

const Layout: FC = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

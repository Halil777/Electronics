import { FC } from "react";
import Navbar from "./navbar/presentation/Navbar";
import Header from "./header/presentation/Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/presentation/Footer";
import { useMediaQuery } from "@mui/material";

const Layout: FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  return (
    <>
      {isSmallScreen ? (
        <>
          <Header />
          <Navbar />
        </>
      ) : (
        <>
          <Navbar />
          <Header />
        </>
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

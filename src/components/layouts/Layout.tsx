import { FC, useState, useEffect } from "react";
import Navbar from "./navbar/presentation/Navbar";
import Header from "./header/presentation/Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/presentation/Footer";
import { useMediaQuery } from "@mui/material";

const Layout: FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <>
          <Header isLoading={isLoading} />
          <Navbar />
        </>
      ) : (
        <>
          <Navbar />
          <Header isLoading={isLoading} />
        </>
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

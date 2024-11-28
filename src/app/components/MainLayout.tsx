"use client";

import React, {
  ComponentType,
  lazy,
  useEffect,
  useState,
  Suspense,
  useMemo,
  ReactNode,
} from "react";
import { CircularProgress, Box } from "@mui/material";
import { NavigationBar } from "./Navigation/NavigationBar";
import useGlobalContext from "../useHooks/useShowMobileNav";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
import CookieBar from "../components/CookieBar";
import Cookies from "js-cookie";
import "../App.css";

const Footer = lazy(() =>
  import("../components/Footer").then((module) => ({
    default: module.Footer,
  }))
);

const TRACKING_ID = "G-WV5C9XS82Z"; // YOUR_OWN_TRACKING_ID
interface MainLayoutProps {
  children: ReactNode; // Define the type for children
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }: { children: React.ReactNode }) => {
  const { globalShowMobileNav } = useGlobalContext();
  const [isCookieSet, setCookie] = useState<boolean>(false);
  const [pageView, setPageView] = useState("Marchcroft | Case Studies");

  const nav = useMemo(() => {
    return [
      { id: "home", name: "Marchcroft | Home Page", path: "/" },
      { id: "aboutus", name: "Marchcroft | About Us", path: "/aboutus" },
      { id: "HowWeWork", name: "Marchcroft | How We Work", path: "/howwework" },
      { id: "contactus", name: "Marchcroft | Contact Us", path: "/contactus" },
      { id: "work", name: "Marchcroft | Our Work", path: "/work" },
      { id: "careers", name: "Marchcroft | Careers", path: "/careers" },
    ];
  }, []);

  useEffect(() => {
    // Check cookie status after the component mounts
    const cookieConfirmed = Cookies.get("cookie_policy_confirmed") === "true";
    setCookie(cookieConfirmed);
    if (!cookieConfirmed) {
      console.log("Cookie policy not confirmed.");
    }

    // Initialize Google Analytics on the client
    ReactGA.initialize(TRACKING_ID);
  }, []);

  const handleAcceptCookie = () => {
    Cookies.set("cookie_policy_confirmed", "true");
    setCookie(true);
  };

  const handleDismissCookie = () => {
    Cookies.remove("cookie_policy_confirmed");
    setCookie(false);
  };

  return (
    <Suspense
      fallback={
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "#0D1B2A",
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      <Helmet>
        <title>{pageView}</title>
      </Helmet>
      <div style={{ position: globalShowMobileNav ? "fixed" : undefined }}>
        {!isCookieSet && (
          <CookieBar
            handleAcceptCookie={handleAcceptCookie}
            handleDismissCookie={handleDismissCookie}
          />
        )}
        <NavigationBar />
        {children}
        <Footer />
      </div>
    </Suspense>
  );
};

export default MainLayout;

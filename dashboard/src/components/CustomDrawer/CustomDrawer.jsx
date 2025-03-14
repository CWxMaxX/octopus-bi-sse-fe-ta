import "./CustomDrawer.css";
import React, { useState, useEffect } from "react";
import { Button, Stack } from "@chakra-ui/react";
import logo from "../../assets/logo.png";

const CustomDrawer = () => {
  const [selected, setSelected] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setSelected(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleNavigation = (path) => {
    setSelected(path);
    window.location.assign(path);
  };

  return (
    <div className="custom-drawer-container">
      <div className="logo-container">
        <img src={logo} alt="logo" width={50} height={50} />
        <span className="logo-heading">
          <h1>ABC Company</h1>
        </span>
      </div>
      <Stack spacing={4}>
        <Button
          variant={selected === "/" ? "solid" : "ghost"}
          justifyContent="flex-start"
          onClick={() => handleNavigation("/")}
        >
          Dashboard
        </Button>
        <Button
          variant={selected === "/log" ? "solid" : "ghost"}
          justifyContent="flex-start"
          onClick={() => handleNavigation("/log")}
        >
          Data Lab
        </Button>
        <Button
          variant={selected === "/survey" ? "solid" : "ghost"}
          justifyContent="flex-start"
          onClick={() => handleNavigation("/survey")}
        >
          Survey
        </Button>
        <Button
          variant={selected === "/library" ? "solid" : "ghost"}
          justifyContent="flex-start"
          onClick={() => handleNavigation("/library")}
        >
          Library
        </Button>
        <Button
          variant={selected === "/marketplace" ? "solid" : "ghost"}
          justifyContent="flex-start"
          onClick={() => handleNavigation("/marketplace")}
        >
          Marketplace
        </Button>
      </Stack>
    </div>
  );
};

export default CustomDrawer;

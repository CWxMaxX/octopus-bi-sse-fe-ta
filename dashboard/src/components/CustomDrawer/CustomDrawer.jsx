import "./CustomDrawer.css";
import React from "react";
import { Button, Stack } from "@chakra-ui/react";
import logo from '../../assets/logo.png';

const CustomDrawer = () => {
  return (
    <div className="custom-drawer-container">
        <div className="logo-container">
            <img src={logo} alt="logo" width={50} height={50} />
            <span className="logo-heading"><h1>ABC Company</h1></span>
        </div>
        <Stack spacing={4}>
          <Button variant='ghost' justifyContent='flex-start' >Dashboard</Button>
          <Button variant='ghost' justifyContent='flex-start' >Data Lab</Button>
          <Button variant='ghost' justifyContent='flex-start' >Survey</Button>
          <Button variant='ghost' justifyContent='flex-start' >Library</Button>
          <Button variant='ghost' justifyContent='flex-start' >Marketplace</Button>
        </Stack>
    </div>
  );
};

export default CustomDrawer;

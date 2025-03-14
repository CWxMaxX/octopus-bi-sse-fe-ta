import { Button } from "@chakra-ui/react";
import "./App.css";
import CustomDrawer from "./components/CustomDrawer/CustomDrawer";
import React from "react";
import DailyActiveUsersPieChart from "./components/DailyActiveUsersPieChart/DailyActiveUsersPieChart";
// import UserActivityLineChart from "./components/UserActivityLineChart/UserActivityLineChart";
const UserActivityLineChart = React.lazy(() => import("./components/UserActivityLineChart/UserActivityLineChart"));

function App() {
  return (
    <>
      {/* <h1>Remote Dashboard FE test</h1> */}
      {/* <CustomDrawer/> */}
      <UserActivityLineChart/>
      <DailyActiveUsersPieChart/>
    </>
  );
}

export default App;

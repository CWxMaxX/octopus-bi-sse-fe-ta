import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "dashboard/Dashboard";
import Log from "log/Log";
import CustomDrawer from "dashboard/CustomDrawer"
import "./App.css";
import CommonLayout from "./layout/CommonLayout";

function App() {
  return (
    <>
      <CommonLayout drawer={<CustomDrawer/>}>
        <h1>Test Content</h1>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/log" element={<Log />} />
        </Routes>
      </BrowserRouter> */}
      </CommonLayout>
    </>
  );
}

export default App;

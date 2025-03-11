import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomDrawer from "dashboard/CustomDrawer";
import "./App.css";
import CommonLayout from "./layout/CommonLayout/CommonLayout";
import ActivityLogPage from "./pages/ActivityLogPage/ActivityLogPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

function App() {
  return (
    <>
      <CommonLayout drawer={<CustomDrawer />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/log" element={<ActivityLogPage />} />
          </Routes>
        </BrowserRouter>
      </CommonLayout>
    </>
  );
}

export default App;

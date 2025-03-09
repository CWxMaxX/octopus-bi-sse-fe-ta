import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "dashboard/Dashboard";
import Log from "log/Log";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/log" element={<Log />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

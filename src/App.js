import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WebDevelopment from "../src/pages/WebDevelopment";
// import MobileDevelopment from "./pages/MobileDevelopment";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        {/* <Route path="/mobile-development" element={<MobileDevelopment />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

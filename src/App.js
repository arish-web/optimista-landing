import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WebDevelopment from "../src/pages/WebDevelopment";
import MobileDevelopment from "../src/pages/MobileAppDevelopment";
import DigitalMarketing from "../src/pages/DigitalMarketing";
import CrmSoftware from "../src/pages/CrmSoftware";
import CrmTemplate from "../src/pages/CrmTemplate";
import EmployeeCrm from "../src/pages/EmployeeCrm";
import Contact from "../src/pages/Contact"
import Pricing from "../src/pages/pricing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/mobile-development" element={<MobileDevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/crm-software" element={<CrmSoftware />} />
        <Route path="/coming-soon" element={<CrmTemplate />} />
        <Route path="/coming-soon" element={<EmployeeCrm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

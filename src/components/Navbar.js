import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 bg-white border-b z-50"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">
        
        {/* Logo */}
        <img
          src="/optimistalogolight.svg"
          alt="Optimista logo"
          className="h-8"
        />

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          
          <li className="cursor-pointer">Home</li>

          {/* Services */}
          <li
            className="relative cursor-pointer text-blue-600"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            Services ▾
            <Dropdown open={openMenu === "services"}>
              <DropdownItem title="Web Development" />
              <DropdownItem title="Mobile Apps" />
              <DropdownItem title="UI/UX Design" />
              <DropdownItem title="Digital Marketing" />
            </Dropdown>
          </li>

          {/* Products */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenMenu("products")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            Products ▾
            <Dropdown open={openMenu === "products"}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-2">Our Products</p>
                  <DropdownItem title="CRM Software" />
                  <DropdownItem title="CRM Template" />
                  <DropdownItem title="Employee CRM" />
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-semibold">Explore CRM Solutions</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Smart tools built for every business.
                  </p>
                  <a className="text-blue-600 text-sm mt-2 inline-block">
                    Learn more →
                  </a>
                </div>
              </div>
            </Dropdown>
          </li>

          {/* Pages */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenMenu("pages")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            Pages ▾
            <Dropdown open={openMenu === "pages"}>
              <DropdownItem title="About Us" />
              <DropdownItem title="Careers" />
              <DropdownItem title="Blog" />
              <DropdownItem title="Contact" />
            </Dropdown>
          </li>

          <li className="cursor-pointer">Contact us</li>
        </ul>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-5 py-2 rounded-md"
        >
          Contact Us
        </motion.button>
      </nav>
    </motion.header>
  );
}

/* ---------------- DROPDOWN COMPONENTS ---------------- */

function Dropdown({ open, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.25 }}
          className="absolute top-full left-0 mt-4 w-80 bg-white border rounded-lg shadow-lg p-4 z-50"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DropdownItem({ title }) {
  return (
    <div className="py-2 text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
      {title}
    </div>
  );
}



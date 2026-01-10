import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

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

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-sm font-medium items-center">
          <li className="cursor-pointer">Home</li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            Services ▾
            <Dropdown open={openMenu === "services"}>
              <DropdownItem title="Web Development" to="/web-development"/>
              <DropdownItem title="Mobile Apps" />
              <DropdownItem title="Digital Marketing" />
            </Dropdown>
          </li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenMenu("products")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            Products ▾
            <Dropdown open={openMenu === "products"}>
              <DropdownItem title="CRM Software" />
              <DropdownItem title="CRM Template" />
              <DropdownItem title="Employee CRM" />
            </Dropdown>
          </li>

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

          <li className="cursor-pointer">Contact</li>
        </ul>

        {/* DESKTOP CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-md"
        >
          Contact Us
        </motion.button>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="w-6 h-[2px] bg-gray-600"></span>
          <span className="w-6 h-[2px] bg-gray-600"></span>
          <span className="w-6 h-[2px] bg-gray-600"></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-sm font-medium">
              <MobileLink title="Home" />
              <MobileLink title="Services" />
              <MobileLink title="Products" />
              <MobileLink title="Pages" />
              <MobileLink title="Contact" />

              <button className="mt-4 bg-blue-600 text-white py-3 rounded-md">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ---------------- HELPERS ---------------- */

function Dropdown({ open, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.25 }}
          className="absolute top-full left-0 mt-4 w-72 bg-white border rounded-lg shadow-lg p-4 z-50"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DropdownItem({ title, to }) {
   return (
    <Link
      to={to}
      className="block py-2 text-sm text-gray-700 hover:text-blue-600"
    >
      {title}
    </Link>
  );
}

function MobileLink({ title, to }) {
  return (
    <Link
      to={to}
      className="block py-2 text-sm text-gray-700 hover:text-blue-600"
    >
      {title}
    </Link>
  );
}


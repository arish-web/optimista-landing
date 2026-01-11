import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(null);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 bg-white border-b z-50"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">
        {/* Logo */}
        <img src="/optimistalogolight.svg" alt="Optimista" className="h-8" />

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-sm font-medium items-center">
          <li>
            <Link to="/" className="cursor-pointer hover:text-blue-600">
              Home
            </Link>
          </li>

          {/* SERVICES */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            Services ▾
            <Dropdown open={openMenu === "services"}>
              <DropdownItem title="Web Development" to="/web-development" />
              <DropdownItem title="Mobile Apps" to="/mobile-development" />
              <DropdownItem title="Digital Marketing" to="/digital-marketing" />
            </Dropdown>
          </li>

          {/* PRODUCTS */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenMenu("products")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            Products ▾
            <Dropdown open={openMenu === "products"}>
              <DropdownItem title="CRM Software" to="/crm-software" />
              <DropdownItem title="CRM Template" to="/coming-soon" />
              <DropdownItem title="Employee CRM" to="/coming-soon" />
            </Dropdown>
          </li>

          {/* PAGES */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenMenu("pages")}
            onMouseLeave={() => {
              setOpenMenu(null);
              setOpenSubMenu(null);
            }}
          >
            Pages ▾
            <Dropdown open={openMenu === "pages"}>
              <DropdownItem title="About Us" to="/coming-soon" />
              <DropdownItem title="Testimonials" to="/coming-soon" />

              {/* RESOURCES */}
              <DropdownItem
                title="Resources"
                arrow
                onMouseEnter={() => setOpenSubMenu("resources")}
              >
                <SubDropdown open={openSubMenu === "resources"}>
                  <SubItem title="Blogs" to="/coming-soon" />
                  <SubItem title="Case Study" to="/coming-soon" />
                  <SubItem title="Demo" to="/coming-soon" />
                  <SubItem title="Videos" to="/coming-soon" />
                </SubDropdown>
              </DropdownItem>

              {/* CAREER */}
              <DropdownItem
                title="Career"
                arrow
                onMouseEnter={() => setOpenSubMenu("career")}
              >
                <SubDropdown open={openSubMenu === "career"}>
                  <SubItem title="Full Time" to="/coming-soon" />
                  <SubItem title="Internship" to="/coming-soon" />
                </SubDropdown>
              </DropdownItem>

              <Divider />

              <DropdownItem title="FAQ" to="/coming-soon" />
              <DropdownItem title="Documentation" to="/coming-soon" />
            </Dropdown>
          </li>

          <li>
            <Link to="/contact" className="cursor-pointer hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-md"
        >
          <Link to="/contact" className="cursor-pointer hover:text-white-600">
            Contact Us
          </Link>
          {/* Contact Us */}
        </motion.button>

        {/* MOBILE */}
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
            className="md:hidden bg-white border-t"
          >
            <div className="px-6 py-6 space-y-3 text-sm">
              <MobileNavLink to="/" close={() => setMobileOpen(false)}>
                Home
              </MobileNavLink>

              {/* SERVICES */}
              <MobileAccordion
                label="Services"
                open={mobileMenu === "services"}
                toggle={() =>
                  setMobileMenu(mobileMenu === "services" ? null : "services")
                }
              >
                <MobileNavLink
                  to="/web-development"
                  close={() => setMobileOpen(false)}
                >
                  Web Development
                </MobileNavLink>
                <MobileNavLink
                  to="/mobile-development"
                  close={() => setMobileOpen(false)}
                >
                  Mobile Apps
                </MobileNavLink>
                <MobileNavLink
                  to="/digital-marketing"
                  close={() => setMobileOpen(false)}
                >
                  Digital Marketing
                </MobileNavLink>
              </MobileAccordion>

              {/* PRODUCTS */}
              <MobileAccordion
                label="Products"
                open={mobileMenu === "products"}
                toggle={() =>
                  setMobileMenu(mobileMenu === "products" ? null : "products")
                }
              >
                <MobileNavLink
                  to="/crm-software"
                  close={() => setMobileOpen(false)}
                >
                  CRM Software
                </MobileNavLink>
                <MobileNavLink
                  to="/coming-soon"
                  close={() => setMobileOpen(false)}
                >
                  CRM Template
                </MobileNavLink>
                <MobileNavLink
                  to="/coming-soon"
                  close={() => setMobileOpen(false)}
                >
                  Employee CRM
                </MobileNavLink>
              </MobileAccordion>

              {/* PAGES */}
              <MobileAccordion
                label="Pages"
                open={mobileMenu === "pages"}
                toggle={() =>
                  setMobileMenu(mobileMenu === "pages" ? null : "pages")
                }
              >
                <MobileNavLink
                  to="/coming-soon"
                  close={() => setMobileOpen(false)}
                >
                  About Us
                </MobileNavLink>
                <MobileNavLink
                  to="/coming-soon"
                  close={() => setMobileOpen(false)}
                >
                  Testimonials
                </MobileNavLink>

                {/* SUB MENU */}
                <MobileSubAccordion
                  label="Resources"
                  open={openSubMenu === "resources"}
                  toggle={() =>
                    setOpenSubMenu(
                      openSubMenu === "resources" ? null : "resources"
                    )
                  }
                >
                  <MobileNavLink
                    to="/coming-soon"
                    close={() => setMobileOpen(false)}
                  >
                    Blogs
                  </MobileNavLink>
                  <MobileNavLink
                    to="/coming-soon"
                    close={() => setMobileOpen(false)}
                  >
                    Case Study
                  </MobileNavLink>
                  <MobileNavLink
                    to="/coming-soon"
                    close={() => setMobileOpen(false)}
                  >
                    Demo
                  </MobileNavLink>
                  <MobileNavLink
                    to="/coming-soon"
                    close={() => setMobileOpen(false)}
                  >
                    Videos
                  </MobileNavLink>
                </MobileSubAccordion>

                <MobileSubAccordion
                  label="Career"
                  open={openSubMenu === "career"}
                  toggle={() =>
                    setOpenSubMenu(openSubMenu === "career" ? null : "career")
                  }
                >
                  <MobileNavLink
                    to="/coming-soon"
                    close={() => setMobileOpen(false)}
                  >
                    Full Time
                  </MobileNavLink>
                  <MobileNavLink
                    to="/coming-soon"
                    close={() => setMobileOpen(false)}
                  >
                    Internship
                  </MobileNavLink>
                </MobileSubAccordion>
              </MobileAccordion>

              <MobileNavLink to="/contact" close={() => setMobileOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ---------------- INTERNAL HELPERS (SAME FILE) ---------------- */

function Dropdown({ open, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full left-0 mt-4 w-64 bg-white border rounded-lg shadow-lg p-4 z-50"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DropdownItem({ title, to, arrow, children, onMouseEnter }) {
  return (
    <div className="relative" onMouseEnter={onMouseEnter}>
      <Link
        to={to || "#"}
        className="flex justify-between items-center py-2 text-sm hover:text-blue-600"
      >
        {title}
        {arrow && <span>›</span>}
      </Link>
      {children}
    </div>
  );
}

function SubDropdown({ open, children }) {
  if (!open) return null;

  return (
    <div className="absolute top-0 left-full ml-2 w-56 bg-white border rounded-lg shadow-lg p-4">
      {children}
    </div>
  );
}

function SubItem({ title, to }) {
  return (
    <Link
      to={to}
      className="block py-2 text-sm text-gray-700 hover:text-blue-600"
    >
      {title}
    </Link>
  );
}

function Divider() {
  return <div className="my-3 border-t" />;
}

function MobileNavLink({ to, children, close }) {
  return (
    <Link
      to={to}
      onClick={close}
      className="block py-2 text-gray-700"
    >
      {children}
    </Link>
  );
}

function MobileAccordion({ label, open, toggle, children }) {
  return (
    <div>
      <button
        onClick={toggle}
        className="w-full flex justify-between py-2 font-medium"
      >
        {label}
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="pl-4 space-y-2">{children}</div>}
    </div>
  );
}

function MobileSubAccordion({ label, open, toggle, children }) {
  return (
    <div className="pl-4">
      <button
        onClick={toggle}
        className="w-full flex justify-between py-2"
      >
        {label}
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="pl-4 space-y-2">{children}</div>}
    </div>
  );
}


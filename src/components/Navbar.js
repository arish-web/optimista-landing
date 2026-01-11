// 


import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // ---------- DESKTOP ----------
  const [desktopMenu, setDesktopMenu] = useState(null);
  const [desktopSub, setDesktopSub] = useState(null);

  // ---------- MOBILE ----------
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(null);
  const [mobileSub, setMobileSub] = useState(null);

  // ---------- THEME ----------
  const [themeMenu, setThemeMenu] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "auto") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="sticky top-0 bg-white border-b z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link to="/">
          <img src="/optimistalogolight.svg" alt="Optimista" className="h-8" />
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink to="/">Home</NavLink>

          <DesktopMenu
            label="Services"
            open={desktopMenu === "services"}
            onOpen={() => setDesktopMenu("services")}
            onClose={() => setDesktopMenu(null)}
          >
            <MenuItem to="/web-development">Web Development</MenuItem>
            <MenuItem to="/mobile-development">Mobile Apps</MenuItem>
            <MenuItem to="/digital-marketing">Digital Marketing</MenuItem>
          </DesktopMenu>

          <DesktopMenu
            label="Products"
            open={desktopMenu === "products"}
            onOpen={() => setDesktopMenu("products")}
            onClose={() => setDesktopMenu(null)}
          >
            <MenuItem to="/crm-software">CRM Software</MenuItem>
            <MenuItem to="/crm-template">CRM Template</MenuItem>
            <MenuItem to="/employee-crm">Employee CRM</MenuItem>
          </DesktopMenu>

          <DesktopMenu
            label="Pages"
            open={desktopMenu === "pages"}
            onOpen={() => setDesktopMenu("pages")}
            onClose={() => {
              setDesktopMenu(null);
              setDesktopSub(null);
            }}
          >
            <MenuItem to="/coming-soon">About Us</MenuItem>
            <MenuItem to="/coming-soon">Testimonials</MenuItem>

            <DesktopSub
              label="Resources"
              open={desktopSub === "resources"}
              onOpen={() => setDesktopSub("resources")}
            >
              <MenuItem to="/coming-soon">Blogs</MenuItem>
              <MenuItem to="/coming-soon">Case Study</MenuItem>
              <MenuItem to="/coming-soon">Demo</MenuItem>
              <MenuItem to="/coming-soon">Videos</MenuItem>
            </DesktopSub>

            <DesktopSub
              label="Career"
              open={desktopSub === "career"}
              onOpen={() => setDesktopSub("career")}
            >
              <MenuItem to="/coming-soon">Full Time</MenuItem>
              <MenuItem to="/coming-soon">Internship</MenuItem>
            </DesktopSub>

            <Divider />

            <MenuItem to="/coming-soon">FAQ</MenuItem>
            <MenuItem to="/coming-soon">Documentation</MenuItem>
          </DesktopMenu>

          <NavLink to="/contact">Contact</NavLink>
        </ul>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hidden md:flex items-center gap-4 relative">
          {/* THEME TOGGLE */}
          <button
            onClick={() => setThemeMenu(!themeMenu)}
            className="w-10 h-8 rounded-full border flex items-center justify-center"
          >
            ◐
          </button>

          <AnimatePresence>
            {themeMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-14 top-12 bg-[#111] text-white rounded-xl p-2 w-36 shadow-xl"
              >
                <ThemeItem
                  label="☀ Light"
                  active={theme === "light"}
                  onClick={() => setTheme("light")}
                />
                <ThemeItem
                  label="🌙 Dark"
                  active={theme === "dark"}
                  onClick={() => setTheme("dark")}
                />
                <ThemeItem
                  label="◐ Auto"
                  active={theme === "auto"}
                  onClick={() => setTheme("auto")}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* BUY NOW */}
          <Link
            to="/pricing"
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2"
          >
            🛒 Buy now
          </Link>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="w-6 h-[2px] bg-gray-700" />
          <span className="w-6 h-[2px] bg-gray-700" />
          <span className="w-6 h-[2px] bg-gray-700" />
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-6 py-6 space-y-3 text-sm">
              <MobileLink to="/">Home</MobileLink>

              <MobileAccordion
                label="Services"
                open={mobileMenu === "services"}
                onToggle={() =>
                  setMobileMenu(mobileMenu === "services" ? null : "services")
                }
              >
                <MobileLink to="/web-development">Web Development</MobileLink>
                <MobileLink to="/mobile-development">Mobile Apps</MobileLink>
                <MobileLink to="/digital-marketing">Digital Marketing</MobileLink>
              </MobileAccordion>

              <MobileAccordion
                label="Products"
                open={mobileMenu === "products"}
                onToggle={() =>
                  setMobileMenu(mobileMenu === "products" ? null : "products")
                }
              >
                <MobileLink to="/crm-software">CRM Software</MobileLink>
                <MobileLink to="/crm-template">CRM Template</MobileLink>
                <MobileLink to="/employee-crm">Employee CRM</MobileLink>
              </MobileAccordion>

              <MobileAccordion
                label="Pages"
                open={mobileMenu === "pages"}
                onToggle={() =>
                  setMobileMenu(mobileMenu === "pages" ? null : "pages")
                }
              >
                <MobileLink to="/coming-soon">About Us</MobileLink>
                <MobileLink to="/coming-soon">Testimonials</MobileLink>

                <MobileSubAccordion
                  label="Resources"
                  open={mobileSub === "resources"}
                  onToggle={() =>
                    setMobileSub(mobileSub === "resources" ? null : "resources")
                  }
                >
                  <MobileLink to="/coming-soon">Blogs</MobileLink>
                  <MobileLink to="/coming-soon">Case Study</MobileLink>
                  <MobileLink to="/coming-soon">Demo</MobileLink>
                  <MobileLink to="/coming-soon">Videos</MobileLink>
                </MobileSubAccordion>

                <MobileSubAccordion
                  label="Career"
                  open={mobileSub === "career"}
                  onToggle={() =>
                    setMobileSub(mobileSub === "career" ? null : "career")
                  }
                >
                  <MobileLink to="/coming-soon">Full Time</MobileLink>
                  <MobileLink to="/coming-soon">Internship</MobileLink>
                </MobileSubAccordion>

                <MobileLink to="/coming-soon">FAQ</MobileLink>
                <MobileLink to="/coming-soon">Documentation</MobileLink>
              </MobileAccordion>

              <MobileLink to="/contact">Contact</MobileLink>

              {/* MOBILE THEME */}
              <div className="pt-4 border-t space-y-2">
                <p className="text-xs text-gray-500">Theme</p>
                <div className="flex gap-2">
                  <button onClick={() => setTheme("light")} className="border px-3 py-1 rounded">Light</button>
                  <button onClick={() => setTheme("dark")} className="border px-3 py-1 rounded">Dark</button>
                  <button onClick={() => setTheme("auto")} className="border px-3 py-1 rounded">Auto</button>
                </div>

                <Link to="/pricing" className="block bg-blue-600 text-white text-center py-2 rounded-md">
                  Buy now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ================= HELPERS ================= */

function NavLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="hover:text-blue-600">
        {children}
      </Link>
    </li>
  );
}

function DesktopMenu({ label, open, onOpen, onClose, children }) {
  return (
    <li onMouseEnter={onOpen} onMouseLeave={onClose} className="relative cursor-pointer">
      {label} ▾
      {open && (
        <div className="absolute top-full left-0 mt-4 w-64 bg-white border rounded-lg shadow-lg p-4">
          {children}
        </div>
      )}
    </li>
  );
}

function DesktopSub({ label, open, onOpen, children }) {
  return (
    <div onMouseEnter={onOpen} className="relative">
      <div className="flex justify-between py-2 cursor-pointer">
        {label} <span>›</span>
      </div>
      {open && (
        <div className="absolute top-0 left-full ml-2 w-56 bg-white border rounded-lg shadow-lg p-4">
          {children}
        </div>
      )}
    </div>
  );
}

function MenuItem({ to, children }) {
  return (
    <Link to={to} className="block py-2 hover:text-blue-600">
      {children}
    </Link>
  );
}

function Divider() {
  return <div className="my-3 border-t" />;
}

function ThemeItem({ label, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 rounded-md text-sm ${
        active ? "bg-blue-600" : "hover:bg-white/10"
      }`}
    >
      {label}
    </button>
  );
}

function MobileLink({ to, children }) {
  return (
    <Link to={to} className="block py-2">
      {children}
    </Link>
  );
}

function MobileAccordion({ label, open, onToggle, children }) {
  return (
    <div>
      <button onClick={onToggle} className="flex justify-between w-full py-2 font-medium">
        {label} <span>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="pl-4 space-y-2">{children}</div>}
    </div>
  );
}

function MobileSubAccordion({ label, open, onToggle, children }) {
  return (
    <div className="pl-4">
      <button onClick={onToggle} className="flex justify-between w-full py-2">
        {label} <span>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="pl-4 space-y-2">{children}</div>}
    </div>
  );
}

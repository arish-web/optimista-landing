export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white border-b z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <img src="/optimistalogolight.svg" alt="logo" className="h-8" />
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>Services</li>
          <li>Process</li>
          <li>Products</li>
          <li>FAQ</li>
        </ul>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-md">
          Contact Us
        </button>
      </nav>
    </header>
  );
}

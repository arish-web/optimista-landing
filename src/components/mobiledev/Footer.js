export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 lg:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Optimista
          </h3>
          <p className="leading-relaxed">
            Ready to take your website to the next level?
            <br />
            Contact Optimista today to discuss your web development
            project & receive a custom proposal.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Products</a></li>
            <li><a href="#" className="hover:text-white">Contact us</a></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="text-white font-semibold mb-4">Community</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Documents</a></li>
            <li>
              <a href="#" className="hover:text-white flex items-center gap-1">
                Supports <span>↗</span>
              </a>
            </li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">News & blogs</a></li>
            <li><a href="#" className="hover:text-white">Terms & condition</a></li>
          </ul>
        </div>

        {/* Apps + Social */}
        <div>
          <h4 className="text-white font-semibold mb-4">App available on</h4>
          <div className="flex gap-3 mb-6">
            <img
              src="/google-play.svg"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="/app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </div>

          <h4 className="text-white font-semibold mb-4">Follow on</h4>
          <div className="flex gap-3">
            <a className="p-2 bg-slate-800 rounded hover:bg-blue-600 text-white">f</a>
            <a className="p-2 bg-slate-800 rounded hover:bg-pink-600 text-white">📸</a>
            <a className="p-2 bg-slate-800 rounded hover:bg-black text-white">𝕏</a>
            <a className="p-2 bg-slate-800 rounded hover:bg-blue-700 text-white">in</a>
            <a className="p-2 bg-slate-800 rounded hover:bg-red-600 text-white">▶</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Optimista. Built by Karthick-Kishore.
          </p>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded hover:text-white">
              🌐 Language
            </button>
            <a
              href="#top"
              className="bg-blue-600 text-white p-3 rounded hover:bg-blue-500"
            >
              ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


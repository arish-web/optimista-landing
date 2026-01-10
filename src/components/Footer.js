export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <p>
          © {new Date().getFullYear()} Optimista. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

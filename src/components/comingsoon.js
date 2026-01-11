export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">

      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <img
            src="/optimistalogolight.svg"
            alt="Optimista"
            className="h-10"
          />
          {/* <div className="text-sm leading-tight">
            <p className="font-semibold">Optimista</p>
            <p className="text-gray-500">Training & Development</p>
          </div> */}
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
          Call now!
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex flex-col items-center text-center px-6">
        <h1 className="text-3xl md:text-4xl font-bold mt-16">
          Sorry, we're not ready yet
        </h1>

        <p className="mt-3 text-gray-600">
          Something is coming very soon
        </p>

        <p className="mt-10 font-medium">
          Notify me when the website is launched
        </p>

        {/* EMAIL INPUT */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border rounded-lg px-4 py-3 focus:outline-none"
          />
          <button className="bg-black text-white px-6 py-3 rounded-lg">
            Notify Me!
          </button>
        </div>

        {/* ILLUSTRATION */}
        <img
          src="/comming.svg"
          alt="Coming soon illustration"
          className="mt-14 max-w-md w-full"
        />
      </main>

      {/* FOOTER */}
      <footer className="px-6 py-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto w-full">
        <p className="text-sm text-gray-600">
          Copyrights © 2025 Optimista.
        </p>

        <div className="flex gap-3 mt-4 md:mt-0">
          <a className="p-2 bg-blue-600 text-white rounded">f</a>
          <a className="p-2 bg-pink-600 text-white rounded">i</a>
          <a className="p-2 bg-black text-white rounded">x</a>
          <a className="p-2 bg-blue-700 text-white rounded">in</a>
          <a className="p-2 bg-red-600 text-white rounded">yt</a>
        </div>
      </footer>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Build reliable web & mobile products that scale
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Optimista helps startups and growing businesses design, build, and
            launch modern digital products — fast and right.
          </p>

          <p className="mt-4 text-gray-600">
            We combine strategy, design, and engineering to deliver scalable
            solutions that drive real business growth.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-md">
              Get a Free Consultation
            </button>
            <button className="border px-8 py-4 rounded-md">
              View Our Work
            </button>
          </div>
        </div>

        <img src="/hero.svg" alt="" />
      </div>
    </section>
  );
}

export default function Process() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">How We Work</h2>

        <div className="mt-16 grid md:grid-cols-4 gap-10 text-left">
          {[
            ["Discover", "Understand goals & requirements"],
            ["Design", "Craft intuitive UI/UX"],
            ["Build", "Develop scalable solutions"],
            ["Launch & Support", "Deploy, optimize, maintain"],
          ].map(([title, desc], i) => (
            <div key={i}>
              <span className="text-blue-600 font-bold">{i + 1}</span>
              <h3 className="mt-2 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

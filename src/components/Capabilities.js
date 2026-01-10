export default function Capabilities() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">What We Do</h2>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            ["Web Development", "Scalable, secure web applications"],
            ["Mobile Apps", "Android & iOS apps built for real users"],
            ["UI/UX Design", "Clean, conversion-focused interfaces"],
            ["Digital Marketing", "SEO & performance-driven growth"],
          ].map(([title, desc]) => (
            <div key={title} className="border rounded-lg p-6">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

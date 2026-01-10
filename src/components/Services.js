const services = [
  {
    title: "Web Development",
    desc: "Fast, secure, scalable web applications built for growth."
  },
  {
    title: "Mobile App Development",
    desc: "Android & iOS apps focused on performance and usability."
  },
  {
    title: "UI/UX Design",
    desc: "Clean, conversion-focused design that users actually enjoy."
  },
  {
    title: "Digital Marketing",
    desc: "SEO and performance marketing that drives measurable results."
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          What We Do
        </h2>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 border rounded-lg hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

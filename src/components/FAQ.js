import { useState } from "react";

const faqs = [
  {
    q: "What services does Optimista provide?",
    a: "We design and develop scalable web applications, mobile apps, UI/UX design, and provide performance-driven digital marketing solutions."
  },
  {
    q: "Do you work with startups or only established businesses?",
    a: "We work with startups, SMEs, and growing businesses. Our process adapts based on your stage and goals."
  },
  {
    q: "How long does it take to build a product?",
    a: "Timelines vary by scope, but most projects take between 6 to 12 weeks from discovery to launch."
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We offer ongoing maintenance, performance optimization, and feature enhancements after launch."
  }
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section id="faq" className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-gray-600 text-center">
          Everything you need to know before getting started
        </p>

        <div className="mt-16 divide-y border rounded-lg">
          {faqs.map((item, i) => (
            <div key={i} className="p-6">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-xl">
                  {active === i ? "−" : "+"}
                </span>
              </button>

              {active === i && (
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

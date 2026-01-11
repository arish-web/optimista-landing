export default function PricingCards() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Premium */}
        <PricingCard
          title="Premium CRM Plan"
          price="₹2,080"
          features={[
            "Advanced CRM + Automation",
            "WhatsApp Campaigns",
            "AI Chatbot",
            "Reports & Analytics",
          ]}
        />

        {/* Popular */}
        <PricingCard
          popular
          title="Basic CRM Plan"
          price="₹1,499"
          features={[
            "Dashboard",
            "Lead Management",
            "Customer Management",
            "Reports & Analytics",
          ]}
        />

        {/* Training */}
        <PricingCard
          title="Online Training Courses"
          price="₹2,000"
          features={[
            "Web Development",
            "Digital Marketing",
            "Certification",
          ]}
        />
      </div>
    </section>
  );
}

function PricingCard({ title, price, features, popular }) {
  return (
    <div
      className={`rounded-xl border p-8 bg-white shadow-sm ${
        popular ? "border-blue-500 bg-blue-50" : ""
      }`}
    >
      {popular && (
        <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
          Most popular
        </span>
      )}

      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="text-3xl font-bold my-4">{price}</p>

      <ul className="space-y-2 text-sm text-gray-600">
        {features.map((f, i) => (
          <li key={i}>✓ {f}</li>
        ))}
      </ul>

      <button
        className={`mt-6 w-full py-2 rounded ${
          popular ? "bg-blue-600 text-white" : "bg-gray-900 text-white"
        }`}
      >
        Get started
      </button>
    </div>
  );
}

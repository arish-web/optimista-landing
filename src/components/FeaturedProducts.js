export default function FeaturedProducts() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Products & Solutions
        </h2>

        <div className="mt-16 grid lg:grid-cols-3 gap-10">
          {[
            ["Employee Management", "Streamlined HR operations"],
            ["CRM System", "Centralized sales & customer data"],
            ["Custom Dashboards", "Actionable business insights"],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white border rounded-lg p-6">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

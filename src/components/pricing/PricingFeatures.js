export default function PricingFeatures() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Features included in every plan
      </h2>

      <p className="text-gray-500 mb-12 max-w-xl mx-auto">
        Powerful tools combined with training to help your business grow.
      </p>
      
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <Feature title="Get started in minutes" icon="bi-clock" />
        <Feature title="Optimize your revenue" icon="bi-graph-up-arrow" />
        <Feature title="24/7 customer support" icon="bi-headset" />
      </div>
    </section>
  );
}

function Feature({ title }) {
  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-500 mt-2">
        Simple, secure, and reliable.
      </p>
    </div>
  );
}

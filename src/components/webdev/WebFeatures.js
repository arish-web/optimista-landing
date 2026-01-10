import { motion } from "framer-motion";

const features = [
  {
    title: "Static Website",
    points: ["Fast loading", "SEO Ready", "Low cost"],
  },
  {
    title: "Dynamic Website",
    points: ["Admin panel", "Scalable", "Custom logic"],
  },
  {
    title: "E-commerce",
    points: ["Payments", "Inventory", "Secure checkout"],
  },
  {
    title: "WordPress",
    points: ["Easy management", "Plugins", "Quick launch"],
  },
];

export default function WebFeatures() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-center"
        >
          Powerful Features of Web Development
        </motion.h2>

        {/* Features */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              className="bg-slate-800 rounded-xl p-6"
            >
              <h3 className="font-semibold text-lg">
                {feature.title}
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {feature.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

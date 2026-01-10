import { motion } from "framer-motion";

export default function WebOverview() {
  const benefits = [
    "Reach a global audience",
    "Improved customer engagement",
    "SEO-friendly architecture",
    "Secure & scalable solutions",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold">
            Optimista Web Development Services
          </h2>

          <p className="mt-4 text-gray-600">
            We deliver high-performance websites tailored to your business
            goals using modern technologies and best practices.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="space-y-3"
        >
          {benefits.map((item) => (
            <motion.li
              key={item}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex items-center gap-2 text-gray-700"
            >
              ✅ {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

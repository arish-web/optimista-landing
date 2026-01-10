import { motion } from "framer-motion";

export default function WebServices() {
  const services = [
    "Static Website Development",
    "Dynamic Website Development",
    "E-commerce Development",
    "WordPress Development",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-center">
          Our Web Development Services
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
              className="border rounded-xl p-6 text-center"
            >
              <h3 className="font-semibold">{service}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function WebCaseHighlight() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid gap-14 lg:grid-cols-2 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold">
            We cover every aspect of web development
          </h2>

          <p className="mt-4 text-gray-600">
            From static websites to enterprise-grade dynamic platforms,
            our solutions are performance-focused, secure, and scalable.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <p>✔ Static Websites</p>
            <p>✔ Dynamic Websites</p>
            <p>✔ E-commerce</p>
            <p>✔ WordPress</p>
          </div>
        </motion.div>

        {/* Visual Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/webdev-case.jpg"
            alt="Web service preview"
            className="rounded-xl shadow-lg"
          />

          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow text-sm">
            <p className="font-semibold">27+ years experience</p>
            <p className="text-gray-500">3000+ satisfied clients</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

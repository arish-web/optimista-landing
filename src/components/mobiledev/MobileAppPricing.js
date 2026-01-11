import { motion } from "framer-motion";
import { fadeUp } from "./motionVariants";

export default function MobileAppPricing() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold text-center mb-12"
        >
          Mobile App Pricing
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: "Android App", price: "₹4,999" },
            { name: "iOS App", price: "₹8,499" },
          ].map((p) => (
            <motion.div
              key={p.name}
              whileHover={{ y: -10 }}
              className="border rounded-xl p-8 text-center shadow"
            >
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <motion.div
                whileHover={{ color: "#2563eb" }}
                className="text-4xl font-extrabold mt-4"
              >
                {p.price}
              </motion.div>
              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
                Start Free Trial
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

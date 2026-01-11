import { motion } from "framer-motion";
import { fadeUp } from "../animations/motionVariants";

export default function CrmPricing() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Pick the best plan that suits you
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: "Basic Plan", price: "₹1,499" },
            { name: "Premium Plan", price: "₹2,080" },
          ].map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.06,
                y: -12,
                transition: { type: "spring", stiffness: 200 },
              }}
              className="border rounded-xl p-8 text-center"
            >
              <h3 className="font-semibold">{p.name}</h3>
              <div className="text-4xl font-extrabold mt-4 text-blue-600">
                {p.price}
              </div>
              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
                Start free 7-day trial
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

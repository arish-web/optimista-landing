import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

export default function DmCTA() {
  return (
    <section className="py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl font-bold">
          Let's Grow Your Business in a Smart Way
        </h2>
        <p className="mt-4 text-gray-600">
          Subscribe to receive marketing insights and updates.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border px-4 py-3 rounded-lg w-64"
          />
          <button className="bg-black text-white px-6 py-3 rounded-lg">
            Subscribe
          </button>
        </div>
      </motion.div>
    </section>
  );
}

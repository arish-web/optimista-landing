import { motion } from "framer-motion";
import { fadeUp } from "../animations/motionVariants";

export default function MobileAppCTA() {
  return (
    <section className="py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 border rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold">Get Started Today</h2>
          <p className="mt-2 text-gray-600">
            Let’s build a powerful mobile app for your business.
          </p>
        </div>

        <button className="mt-6 md:mt-0 bg-blue-600 text-white px-8 py-4 rounded-xl">
          Contact Us
        </button>
      </motion.div>
    </section>
  );
}

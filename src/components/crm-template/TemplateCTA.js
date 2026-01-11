import { motion } from "framer-motion";
import { fadeUp } from "../animations/motionVariants";

export default function TemplateCTA() {
  return (
    <section className="py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl font-bold">
          Launch Your CRM in Minutes
        </h2>
        <button className="mt-6 bg-blue-600 text-white px-8 py-4 rounded-xl">
          Get Started
        </button>
      </motion.div>
    </section>
  );
}

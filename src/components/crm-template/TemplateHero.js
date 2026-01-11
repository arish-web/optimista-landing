import { motion } from "framer-motion";
import { fadeLeft, floatY } from "../animations/motionVariants";

export default function TemplateHero() {
  return (
    <section className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold">
            CRM Templates for Faster Setup
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl">
            Pre-built CRM templates to launch faster, customize easily, and scale
            without complexity.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg">
            Explore Templates
          </button>
        </motion.div>

        <motion.img
          src="https://raw.githubusercontent.com/realstoman/ui-assets/main/mobile-dashboard-blue.png"
          className="w-[280px] mx-auto"
          variants={floatY}
          animate="animate"
        />
      </div>
    </section>
  );
}

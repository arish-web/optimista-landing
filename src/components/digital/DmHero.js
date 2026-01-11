import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../animations/variants";

export default function DmHero() {
  return (
    <section className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
        >
          <span className="text-blue-600 text-sm font-semibold">
            DIGITAL MARKETING SERVICE
          </span>

          <h1 className="mt-4 text-4xl lg:text-6xl font-extrabold leading-tight">
            Optimista End-to-End <br />
            Digital Marketing Services
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl">
            We build data-driven digital marketing solutions designed to grow
            visibility, boost conversions, and drive measurable results.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg">
              Get Started
            </button>
            <button className="text-gray-700 underline">
              Contact sales →
            </button>
          </div>
        </motion.div>

        {/* IMAGE / ILLUSTRATION */}
        <motion.img
          src="https://optimista.in/assets/storyset/services/digitaldash.svg"
          alt="Marketing dashboard"
          className="w-full max-w-md mx-auto"
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}

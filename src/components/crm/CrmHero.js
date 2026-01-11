import { motion } from "framer-motion";
import {
  fadeLeft,
  fadeRight,
  floatY,
  textColorPulse,
} from "../animations/motionVariants";

export default function CrmHero() {
  return (
    <section className="pt-28 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm border rounded-full text-blue-600">
            India’s #1 Software Agency
          </span>

          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            All-in-One{" "}
            <motion.span
              variants={textColorPulse}
              animate="animate"
              className="inline-block"
            >
              Optimista CRM
            </motion.span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl">
            Optimista CRM is a complete customer relationship management solution
            designed to help businesses grow smarter & faster.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Get started
            </button>
            <button className="border px-6 py-3 rounded-lg">
              Watch a demo
            </button>
          </div>

          <div className="mt-6 flex gap-6 text-sm text-gray-600">
            <span>⚡ Run faster</span>
            <span>💰 Lower costs</span>
            <span>🛡 Never breaks</span>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <motion.img
            src="https://optimista.in/assets/images/about/crmhero.jpg"
            className="w-[280px]"
            variants={floatY}
            animate="animate"
          />

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute top-8 -right-0 bg-white shadow px-4 py-2 rounded-lg text-sm"
          >
            ⭐ 4.9 · 150K reviews
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-8 -left-0 bg-white shadow px-4 py-2 rounded-lg text-sm"
          >
            19K+ Happy customers
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

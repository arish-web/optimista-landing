import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../components/animations/variants";

export default function Hero() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold leading-tight">
            Build reliable web & mobile products that scale
          </h1>

          <p className="mt-6 text-gray-600">
            Optimista helps startups and growing businesses design, build, and
            launch modern digital products.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-md">
              Get a Free Consultation
            </button>
            <button className="border px-8 py-4 rounded-md">
              View Our Work
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.img
          src="/hero.svg"
          alt="Hero illustration"
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className="hero-float"
        />
      </div>
    </section>
  );
}

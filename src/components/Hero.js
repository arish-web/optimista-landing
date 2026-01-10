import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../components/animations/variants";

export default function Hero() {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid gap-14 lg:grid-cols-2 items-center">

        {/* TEXT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            leading-tight
          ">
            Build reliable web & mobile products that scale
          </h1>

          <p className="
            mt-5
            text-gray-600
            text-base
            sm:text-lg
            max-w-xl
            mx-auto
            lg:mx-0
          ">
            Optimista helps startups and growing businesses design, build,
            and launch modern digital products.
          </p>

          {/* BUTTONS */}
          <div className="
            mt-8
            flex
            flex-col
            sm:flex-row
            gap-4
            justify-center
            lg:justify-start
          ">
            <button
              className="
                bg-blue-600 text-white
                px-6 py-3
                sm:px-8 sm:py-4
                rounded-md
                text-sm sm:text-base
                font-medium
              "
            >
              Get a Free Consultation
            </button>

            <button
              className="
                border
                px-6 py-3
                sm:px-8 sm:py-4
                rounded-md
                text-sm sm:text-base
                font-medium
              "
            >
              View Our Work
            </button>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.img
          src="/hero.svg"
          alt="Hero illustration"
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className="
            w-full
            max-w-md
            mx-auto
            hero-float
          "
        />
      </div>
    </section>
  );
}


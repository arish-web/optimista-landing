import { motion } from "framer-motion";
import { fadeUp, floatY, textColorPulse } from "../animations/motionVariants";

export default function MobileAppHero() {
  return (
    <section className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm text-blue-600 border border-blue-200">
            Secure & Verified
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Empower Your Vision with{" "}
            <motion.span
              variants={textColorPulse}
              animate="animate"
              className="font-extrabold"
            >
              Optimista
            </motion.span>{" "}
            Mobile Apps
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Turn your ideas into fast, scalable, and secure mobile applications
            for Android & iOS.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-7 py-4 rounded-xl font-semibold">
              Get Started
            </button>
            <button className="border px-7 py-4 rounded-xl">
              View Pricing
            </button>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.img
          src="/mobileappdevelopment/mobileappservices-01.svg"
          className="w-[260px] md:w-[320px] mx-auto"
          variants={floatY}
          animate="animate"
        />
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { fadeUp } from "../animations/motionVariants";

export default function ContactHero() {
  return (
    <section className="pt-24 pb-12">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center px-6"
      >
        <h1 className="text-3xl md:text-4xl font-bold">
          Let’s level up your brand, together
        </h1>
        <p className="mt-3 text-gray-600">
          You can reach us anytime via{" "}
          <span className="text-blue-600">support@optimista.in</span>
        </p>
      </motion.div>
    </section>
  );
}

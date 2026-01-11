import { motion } from "framer-motion";
import { fadeUp } from "../animations/motionVariants";

export default function TemplateUseCases() {
  return (
    <section className="py-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl font-bold">Who is this for?</h2>
        <p className="mt-4 text-gray-600">
          Startups, SMBs, Agencies, and Enterprises looking for fast CRM setup.
        </p>
      </motion.div>
    </section>
  );
}

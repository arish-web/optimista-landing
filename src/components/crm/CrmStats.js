import { motion } from "framer-motion";
import { fadeUp } from "../animations/motionVariants";

export default function CrmStats() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">
            Easy project management that helps you win
          </h2>
          <p className="mt-4 text-gray-600">
            We’ve always worked hard to give our customers the best experience.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          <motion.div
            whileHover={{ y: -8 }}
            className="p-6 shadow rounded-xl text-center"
          >
            <h3 className="text-2xl font-bold">250K</h3>
            <p className="text-sm text-gray-600">Total users</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="p-6 shadow rounded-xl text-center"
          >
            <h3 className="text-2xl font-bold">4.9 ⭐</h3>
            <p className="text-sm text-gray-600">150K Reviews</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/motionVariants";

export default function ContactCards() {
  return (
    <section className="pb-20">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6"
      >
        {/* ADDRESS */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -6 }}
          className="p-6 bg-gray-50 rounded-xl"
        >
          <h3 className="font-semibold">Office Address</h3>
          <p className="mt-2 text-sm text-gray-600">
            India Office:<br />
            1/146, Poonamallee High Rd,<br />
            Adayalampet, Vanagaram,<br />
            Chennai, Tamil Nadu 600095
          </p>
        </motion.div>

        {/* EMAIL */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -6 }}
          className="p-6 bg-gray-50 rounded-xl"
        >
          <h3 className="font-semibold">Email us</h3>
          <p className="mt-2 text-sm text-gray-600">
            We usually respond within 24 hours.
          </p>
          <p className="mt-2 text-blue-600 text-sm">
            support@optimista.in
          </p>
        </motion.div>

        {/* CALL */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -6 }}
          className="p-6 bg-gray-50 rounded-xl"
        >
          <h3 className="font-semibold">Call us</h3>
          <p className="mt-2 text-sm text-gray-600">
            Let’s work together towards a common goal.
          </p>
          <p className="mt-2 font-medium">
            +91 82200 52520
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

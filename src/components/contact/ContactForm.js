import { motion } from "framer-motion";
import { fadeUp } from "../animations/motionVariants";

export default function ContactForm() {
  return (
    <section className="pb-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-8"
      >
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border rounded-md px-4 py-3"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full border rounded-md px-4 py-3"
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full border rounded-md px-4 py-3"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border rounded-md px-4 py-3"
          />

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-blue-600 text-white py-3 rounded-md font-medium"
          >
            Send a message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

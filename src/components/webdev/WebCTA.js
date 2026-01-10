import { motion } from "framer-motion";

export default function WebCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-blue-600 text-white text-center"
    >
      <h2 className="text-2xl font-bold">
        Ready to take your website to the next level?
      </h2>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-md"
      >
        Start Your Journey
      </motion.button>
    </motion.section>
  );
}

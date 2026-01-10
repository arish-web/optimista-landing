import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden bg-blue-600 text-white py-24"
    >
      {/* Subtle animated background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500"
      />

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-bold"
        >
          Ready to build something great?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.95 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-4"
        >
          Tell us about your idea and we’ll show you the best way forward.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          whileHover={{
            scale: 1.12,
            boxShadow: "0px 12px 30px rgba(255,255,255,0.35)",
          }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 260 }}
          className="mt-10 bg-white text-blue-600 px-8 py-3 rounded-md font-semibold"
        >
          Start a Conversation
        </motion.button>
      </div>
    </motion.section>
  );
}


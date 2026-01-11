import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/motionVariants";

const services = [
  "Android App Development",
  "iOS App Development",
  "Cross-Platform Apps",
  "UI/UX Design",
  "QA & Support",
];

export default function MobileAppServices() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold mb-12"
        >
          Our Mobile App Services
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((s) => (
            <motion.div
              key={s}
              variants={fadeUp}
              whileHover={{ scale: 1.06, color: "#2563eb" }}
              className="border rounded-xl p-6 font-medium"
            >
              {s}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

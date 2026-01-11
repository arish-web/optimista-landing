import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/motionVariants";

const features = [
  "Employee Profiles",
  "Attendance & Leave Tracking",
  "Performance Monitoring",
  "Task & Goal Management",
  "Payroll & Compensation",
  "Internal Communication",
];

export default function EmployeeFeatures() {
  return (
    <section className="py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8"
      >
        {features.map((f, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -10, scale: 1.04 }}
            className="p-6 border rounded-xl"
          >
            {f}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

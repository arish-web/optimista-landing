import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/motionVariants";

const features = [
  "Centralized Customer Data",
  "Automated Lead Capture & Nurturing",
  "Sales Pipeline Tracking",
  "Integrated Communication",
  "Expense & Budget Management",
  "Contract & Subscription Management",
];

export default function CrmFeatures() {
  return (
    <section className="py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-12">
          Centralized Customer Management & Automated Lead Nurturing
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.04,
                transition: { type: "spring", stiffness: 260 },
              }}
              className="p-6 border rounded-xl"
            >
              {f}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

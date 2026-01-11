import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

const steps = [
  "Discover & Analyze",
  "Strategize & Plan",
  "Execute & Optimize",
  "Measure & Scale",
];

export default function DmSteps() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          How it works in 4 easy steps
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-xl font-bold">{i + 1}</div>
              <p className="mt-2">{s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

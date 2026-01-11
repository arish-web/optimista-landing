import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/motionVariants";

const steps = [
  { step: "01", title: "Share Your Idea", desc: "Discuss your requirements." },
  { step: "02", title: "Design & Develop", desc: "Build secure applications." },
  { step: "03", title: "Launch & Grow", desc: "Deploy and scale." },
];

export default function MobileAppSteps() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold text-center mb-12"
        >
          Build Your App in 3 Simple Steps
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((s) => (
            <motion.div
              key={s.step}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="p-6 rounded-xl shadow"
            >
              <span className="text-blue-600 font-bold">{s.step}</span>
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

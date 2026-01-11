import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/motionVariants";

const stats = [
  { value: "15+", label: "Team Members" },
  { value: "22K+", label: "Happy Clients" },
  { value: "2300+", label: "Projects Delivered" },
  { value: "10+", label: "Countries Served" },
];

export default function MobileAppIntro() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <h2 className="text-3xl font-bold">
            Mobile App Development Services
          </h2>
          <p className="mt-4 text-gray-600">
            We design and develop scalable, secure, and high-performance mobile
            applications tailored to your business needs.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow p-6 text-center"
            >
              <motion.div
                whileHover={{ color: "#2563eb" }}
                className="text-3xl font-extrabold"
              >
                {s.value}
              </motion.div>
              <div className="mt-1 text-sm text-gray-600">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

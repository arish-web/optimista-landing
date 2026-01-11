import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/motionVariants";

const testimonials = [
  "Optimista delivered a scalable mobile solution.",
  "Excellent communication and quality delivery.",
  "Highly professional and reliable team.",
];

export default function MobileAppTestimonials() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold mb-12"
        >
          Our Clients Share Their Experience
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-6 shadow rounded-xl"
            >
              {t}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

const services = [
  {
    title: "Content Marketing & Copywriting",
    desc: "SEO-optimized content that drives traffic and conversions.",
  },
  {
    title: "Social Media Marketing (SMM)",
    desc: "Build brand authority and audience engagement.",
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    desc: "High-ROI paid campaigns with precise targeting.",
  },
  {
    title: "Email Marketing",
    desc: "Personalized email campaigns that convert.",
  },
];

export default function DmServices() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="border rounded-xl p-6"
            >
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-3 text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

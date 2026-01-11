import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/motionVariants";

const points = [
  {
    title: "Intelligent Automation",
    desc: "All-in-one platform for B2B & B2C businesses.",
  },
  {
    title: "Real-Time Collaboration",
    desc: "Professional onboarding or DIY setup.",
  },
  {
    title: "Advanced Analytics",
    desc: "Seamless integration with marketing tools.",
  },
  {
    title: "Customization",
    desc: "SEO-ready, responsive & scalable.",
  },
];

export default function CrmWhyChoose() {
  return (
    <section className="py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold mb-12">
          Why Choose Optimista CRM?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {points.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="p-6 border rounded-xl"
            >
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/motionVariants";

const tools = [
  "Google Drive",
  "Mailchimp",
  "Dropbox",
  "Shopify",
  "Slack",
];

export default function CrmIntegrations() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4"
        >
          {tools.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="p-4 border rounded-lg text-center"
            >
              {t}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">
            Powerful Sales & Analytics Tools
          </h2>

          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• Boost Sales & Growth</li>
            <li>• Higher Customer Retention</li>
            <li>• Strong ROI</li>
            <li>• Data-Driven Decisions</li>
          </ul>

          <button className="mt-6 border px-6 py-3 rounded-lg">
            Know more
          </button>
        </motion.div>
      </div>
    </section>
  );
}

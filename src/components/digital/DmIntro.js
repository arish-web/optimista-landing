import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

export default function DmIntro() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <motion.img
          src="https://optimista.in/assets/images/services/digitalservicesaboutup.jpg"
          className="rounded-xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold">
            About Our End-to-End Digital Marketing Services
          </h2>

          <ul className="mt-4 space-y-3 text-gray-600">
            <li>• Integrated multi-channel strategies</li>
            <li>• Data-driven campaigns & analytics</li>
            <li>• ROI-focused growth execution</li>
          </ul>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg">
            Know more
          </button>
        </motion.div>
      </div>
    </section>
  );
}

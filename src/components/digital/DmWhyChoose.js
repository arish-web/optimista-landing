import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../animations/variants";

export default function DmWhyChoose() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <motion.img
          src="https://raw.githubusercontent.com/realstoman/ui-assets/main/marketing-illustration.png"
          className="max-w-sm mx-auto"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
        />

        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold">
            Why Choose us for your digital journey
          </h2>

          <ul className="mt-6 space-y-3 text-gray-600">
            <li>• Integrated marketing approach</li>
            <li>• Data-driven decisions</li>
            <li>• Creative + technical expertise</li>
            <li>• Transparent reporting</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { fadeUp } from "../animations/motionVariants";

export default function ContactMap() {
  return (
    <section className="pb-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          {/* <iframe
            title="Optimista Location"
            src="https://www.google.com/maps?q=Vanagaram%20Chennai&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          /> */}
          <iframe
            title="Optimista Location"
            src="https://www.google.com/maps/embed?pb=!4v1768135686641!6m8!1m7!1sFhCVip1GkrJdZkLbtZHNkg!2m2!1d13.06123381322734!2d80.15232013141183!3f12.35!4f-7.049999999999997!5f1.8116740233006272"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function TrustBar() {
  const logos = [
    "/Griplight.svg",
    "/saint.svg",
    "/tamilnaduolypic.svg",
    "/GoodnessLogo.svg",
    "/trustpilot-star.svg",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-y bg-gray-50 py-10"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-8">

        {/* Logos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="flex flex-wrap gap-10 items-center justify-between"
        >
          {logos.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt="Trusted client"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="h-10 opacity-80 hover:opacity-100"
            />
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 text-center text-sm gap-6"
        >
          <Stat value="15+" label="Clients" />
          <Stat value="50+" label="Projects" />
          <Stat value="4.9★" label="Rating" />
          <Stat value="SME" label="Focused" />
        </motion.div>
      </div>
    </motion.section>
  );
}

const Stat = ({ value, label }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 15 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.4 }}
  >
    <p className="text-xl font-bold text-gray-900">{value}</p>
    <p className="text-gray-500">{label}</p>
  </motion.div>
);

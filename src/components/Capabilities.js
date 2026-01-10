import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Capabilities() {
  const items = [
    ["Web Development", "Scalable web apps", "/webdev.jpg"],
    ["Mobile Apps", "Android & iOS builds", "/mobile-app-dev.jpg"],
    ["Digital Marketing", "SEO & growth", "/digital.jpg"],
    ["AI Automation", "Smart workflows", "/ai.jpg"],
    ["Backend Systems", "Secure APIs & DBs", "/db.jpg"],
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center"
        >
          What We Do
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5"
        >
          {items.map(([title, desc, img]) => (
            <motion.div
              key={title}
              variants={card}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{ type: "spring", stiffness: 180 }}
              className="group border rounded-2xl p-6 text-center bg-white cursor-pointer"
            >
              <motion.img
                src={img}
                alt={title}
                className="h-14 mx-auto mb-4"
                whileHover={{ rotate: 6, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />

              <h3 className="font-semibold text-lg">{title}</h3>

              <p className="mt-2 text-sm text-gray-600">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function WebHero() {
  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid gap-14 lg:grid-cols-2 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Web Development Services
          </h1>

          <p className="mt-5 text-gray-600 max-w-xl mx-auto lg:mx-0">
            Build fast, secure, and scalable websites with Optimista.
            Designed for performance, SEO, and growth.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-md"
            >
              Request for Free
            </motion.button>

            <button className="border px-6 py-3 rounded-md">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.img
          src="/webdevelopment/webdevelop.svg"
          alt="Web development illustration"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md mx-auto object-fit"
        />
      </div>
    </section>
  );
}

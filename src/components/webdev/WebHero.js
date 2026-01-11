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
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold">
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


// import { motion } from "framer-motion";

// const floating = {
//   animate: {
//     y: [0, -12, 0],
//     transition: {
//       duration: 4,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   },
// };

// export default function WebHero() {
//   return (
//     <section className="relative overflow-hidden pt-28 pb-24 bg-gradient-to-br from-white via-blue-50 to-white">
      
//       {/* Glow background */}
//       <div className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-blue-500/20 blur-[120px] rounded-full" />
//       <div className="absolute bottom-0 -left-40 w-[320px] h-[320px] bg-indigo-400/20 blur-[120px] rounded-full" />

//       <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

//         {/* TEXT */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center lg:text-left"
//         >
//           <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
//             Web Solutions That Scale
//           </span>

//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
//             High-Performance <br />
//             <span className="text-blue-600">Web Development</span>
//           </h1>

//           <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
//             We build blazing-fast, SEO-optimized, and conversion-focused
//             websites engineered for real business growth.
//           </p>

//           <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <motion.button
//               whileHover={{ scale: 1.06 }}
//               whileTap={{ scale: 0.96 }}
//               className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30"
//             >
//               Get Free Consultation
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.04 }}
//               className="px-8 py-4 rounded-xl border border-gray-300 font-medium hover:bg-gray-100"
//             >
//               View Our Work
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* VISUAL */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.9 }}
//           className="relative flex justify-center"
//         >
//           {/* Floating tags */}
//           <motion.div {...floating} className="absolute -top-6 -left-6 bg-white px-4 py-2 rounded-xl shadow text-sm font-medium">
//             ⚡ Fast
//           </motion.div>

//           <motion.div {...floating} transition={{ delay: 0.6 }} className="absolute bottom-4 -right-6 bg-white px-4 py-2 rounded-xl shadow text-sm font-medium">
//             🔒 Secure
//           </motion.div>

//           <motion.div
//             whileHover={{ rotate: 1, scale: 1.02 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="relative"
//           >
//             <img
//               src="/webdevelopment/webdevelop.svg"
//               alt="Web development illustration"
//               className="w-full max-w-md drop-shadow-2xl"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

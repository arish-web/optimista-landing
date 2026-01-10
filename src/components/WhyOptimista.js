// import { motion } from "framer-motion";

// const container = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 24 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// export default function WhyOptimista() {
//   const points = [
//     ["Business-first mindset", "We focus on outcomes.", "/target.png"],
//     ["Clear communication", "No hidden surprises.", "/workprocess.svg"],
//     ["Long-term support", "We stay post-launch.", "/pattern1.png"],
//   ];

//   return (
//     <section className="py-20 md:py-24 justify-center bg-gray-50">
//       <div className="max-w-5xl mx-auto px-6">

//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-2xl sm:text-3xl font-bold text-center"
//         >
//           Why Optimista
//         </motion.h2>

//         {/* Points */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="
//             mt-12
//             grid
//             gap-8
//             md:gap-10
//             md:grid-cols-3
//           "
//         >
//           {points.map(([title, desc, icon]) => (
//             <motion.div
//               key={title}
//               variants={item}
//               className="
//                 flex
//                 items-start
//                 gap-4
//                 md:flex-col
//                 md:items-center
//                 md:text-center
//               "
//             >
//               {/* Icon */}
//               <motion.img
//                 src={icon}
//                 alt={title}
//                 className="
//                   h-8
//                   w-8
//                   flex-shrink-0
//                   opacity-80
//                   md:mb-4
//                 "
//                 whileHover={{ y: -4, opacity: 1 }}
//                 transition={{ duration: 0.25 }}
//               />

//               {/* Text */}
//               <div>
//                 <h3 className="font-semibold text-base sm:text-lg">
//                   {title}
//                 </h3>
//                 <p className="mt-1 text-sm text-gray-600">
//                   {desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhyOptimista() {
  const points = [
    ["Business-first mindset", "We focus on outcomes.", "/target.png"],
    ["Clear communication", "No hidden surprises.", "/workprocess.svg"],
    ["Long-term support", "We stay post-launch.", "/pattern1.png"],
  ];

  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-center"
        >
          Why Optimista
        </motion.h2>

        {/* Points */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            mt-12
            grid
            gap-10
            md:grid-cols-3
            text-center
          "
        >
          {points.map(([title, desc, icon]) => (
            <motion.div
              key={title}
              variants={item}
              className="flex flex-col items-center"
            >
              {/* Icon under title */}
              <motion.img
                src={icon}
                alt={title}
                className="h-8 w-8 my-3 opacity-80"
                whileHover={{ y: -4, opacity: 1 }}
                transition={{ duration: 0.25 }}
              />

              {/* Title */}
              <h3 className="font-semibold text-base sm:text-lg">{title}</h3>
              {/* Description */}
              <p className="text-sm text-gray-600 max-w-xs">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

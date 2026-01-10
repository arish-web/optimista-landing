// export default function WhyOptimista() {
//   return (
//     <section className="py-24 bg-gray-50">
//       <div className="max-w-5xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold">Why Optimista</h2>

//         <div className="mt-12 grid md:grid-cols-3 gap-10 text-left">
//           <div>
//             <h3 className="font-semibold">Business-first mindset</h3>
//             <p className="mt-2 text-sm text-gray-600">
//               We focus on outcomes, not just features.
//             </p>
//           </div>
//           <div>
//             <h3 className="font-semibold">Clear communication</h3>
//             <p className="mt-2 text-sm text-gray-600">
//               Transparent process with zero confusion.
//             </p>
//           </div>
//           <div>
//             <h3 className="font-semibold">Long-term support</h3>
//             <p className="mt-2 text-sm text-gray-600">
//               We stay with you after launch.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function WhyOptimista() {
  const points = [
    ["Business-first mindset", "We focus on outcomes.", "/target.png"],
    ["Clear communication", "No hidden surprises.", "/workprocess.svg"],
    ["Long-term support", "We stay post-launch.", "/pattern.svg"],
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Why Optimista</h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {points.map(([title, desc, icon]) => (
            <div key={title} className="text-center md:text-left">
              <img src={icon} className="h-8 mb-4 opacity-70" />
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


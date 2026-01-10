// export default function Capabilities() {
//   return (
//     <section className="py-28">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center">What We Do</h2>

//         <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             ["Web Development", "Scalable, secure web applications"],
//             ["Mobile Apps", "Android & iOS apps built for real users"],
//             ["UI/UX Design", "Clean, conversion-focused interfaces"],
//             ["Digital Marketing", "SEO & performance-driven growth"],
//           ].map(([title, desc]) => (
//             <div key={title} className="border rounded-lg p-6">
//               <h3 className="font-semibold">{title}</h3>
//               <p className="mt-2 text-sm text-gray-600">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


export default function Capabilities() {
  const items = [
    ["Web Development", "Scalable web apps", "/webdev.jpg"],
    ["Mobile Apps", "Android & iOS builds", "/mobile-app-dev.jpg"],
    ["Digital Marketing", "SEO & growth", "/digital.jpg"],
    ["AI Automation", "Smart workflows", "/ai.jpg"],
    ["Backend Systems", "Secure APIs & DBs", "/db.jpg"],
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">What We Do</h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(([title, desc, img]) => (
            <div
              key={title}
              className="group border rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              <img
                src={img}
                alt={title}
                className="h-14 mx-auto mb-4 group-hover:scale-105 transition"
              />
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

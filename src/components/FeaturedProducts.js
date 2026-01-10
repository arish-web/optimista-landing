// export default function FeaturedProducts() {
//   return (
//     <section className="py-28 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center">
//           Products & Solutions
//         </h2>

//         <div className="mt-16 grid lg:grid-cols-3 gap-10">
//           {[
//             ["Employee Management", "Streamlined HR operations"],
//             ["CRM System", "Centralized sales & customer data"],
//             ["Custom Dashboards", "Actionable business insights"],
//           ].map(([title, desc]) => (
//             <div key={title} className="bg-white border rounded-lg p-6">
//               <h3 className="font-semibold">{title}</h3>
//               <p className="mt-2 text-sm text-gray-600">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// export default function FeaturedProducts() {
//   const products = [
//     ["CRM System", "/crm.jpg"],
//     ["E-Commerce", "/ecom.jpg"],
//     ["Device Suite", "/Devicescuate.svg"],
//     ["Analytics", "/displayall-01.svg"],
//     ["Dashboards", "/displayall-02.svg"],
//     ["Social Tools", "/social.jpg"],
//   ];

//   return (
//     <section className="py-28 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center">
//           Products & Solutions
//         </h2>

//         <div className="mt-16 flex gap-8 overflow-x-auto snap-x snap-mandatory">
//           {products.map(([title, img]) => (
//             <div
//               key={title}
//               className="min-w-[280px] snap-start bg-white rounded-xl shadow-md"
//             >
//               <img src={img} className="rounded-t-xl" />
//               <div className="p-4 font-semibold text-center">{title}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useEffect, useRef, useState } from "react";

export default function FeaturedProducts() {
  const products = [
    ["CRM System", "/crm.jpg"],
    ["Dashboards", "/displayall-02.svg"],
    ["Social Tools", "/social.jpg"],
    ["Analytics", "/displayall-01.svg"],
    ["E-Commerce", "/ecom.jpg"],
    ["Device Suite", "/Devicescuate.svg"],
  ];

  // clone first slide
  const slides = [...products, products[0]];

  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const sliderRef = useRef(null);

  const visibleCount =
    window.innerWidth >= 1024 ? 3 :
    window.innerWidth >= 768 ? 2 : 1;

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
      setTransition(true);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // when reaching clone → jump to start without animation
  useEffect(() => {
    if (index === products.length) {
      const timeout = setTimeout(() => {
        setTransition(false);
        setIndex(0);
      }, 100); // match transition duration

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Products & Solutions
        </h2>

        <div className="relative mt-16 overflow-hidden">
          <div
            ref={sliderRef}
            className={`flex ${
              transition ? "transition-transform duration-500 ease-in-out" : ""
            }`}
            style={{
              transform: `translateX(-${index * (100 / visibleCount)}%)`,
            }}
          >
            {slides.map(([title, img], i) => (
              <div
                key={i}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-xl shadow-md">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-48 object-fit rounded-t-xl"
                  />
                  <div className="p-4 text-center font-semibold">
                    {title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


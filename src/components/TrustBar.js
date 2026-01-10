// export default function TrustBar() {
//   return (
//     <section className="border-y bg-gray-50 py-10">
//       <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-6 gap-6 text-sm">
//         <span>15+ Clients</span>
//         <span>50+ Projects</span>
//         <span>4.9★ Client Rating</span>
//         <span>Startup & SME Focused</span>
//       </div>
//     </section>
//   );
// }


export default function TrustBar() {
  const logos = [
    // "/Gripdark.svg",
    "/Griplight.svg",
    "/saint.svg",
    "/tamilnaduolypic.svg",
    "/GoodnessLogo.svg",
    "/trustpilot-star.svg",
  ];

  return (
    <section className="border-y bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6 space-y-8">

        {/* Logos */}
        <div className="flex overflow-x-auto gap-10 items-center justify-between scrollbar-hide">
          {logos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Trusted client"
              className="h-10 hover:opacity-100 transition"
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 text-center text-sm gap-6">
          <Stat value="15+" label="Clients" />
          <Stat value="50+" label="Projects" />
          <Stat value="4.9★" label="Rating" />
          <Stat value="SME" label="Focused" />
        </div>
      </div>
    </section>
  );
}

const Stat = ({ value, label }) => (
  <div>
    <p className="text-xl font-bold text-gray-900">{value}</p>
    <p className="text-gray-500">{label}</p>
  </div>
);

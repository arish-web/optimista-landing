import { useState } from "react";

export default function PricingHero() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="bg-[#1f232b] text-white py-24 text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Choose the right Pricing Plans
      </h1>

      <div className="flex justify-center items-center gap-3">
        <span className={billing === "monthly" ? "text-white" : "text-gray-400"}>
          Monthly
        </span>

        <button
          onClick={() =>
            setBilling(billing === "monthly" ? "yearly" : "monthly")
          }
          className="w-12 h-6 bg-gray-600 rounded-full relative"
        >
          <span
            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
              billing === "yearly" ? "translate-x-6" : ""
            }`}
          />
        </button>

        <span className={billing === "yearly" ? "text-white" : "text-gray-400"}>
          Yearly
        </span>

        <span className="ml-2 text-xs bg-red-500 px-2 py-1 rounded">
          20% save
        </span>
      </div>
    </section>
  );
}

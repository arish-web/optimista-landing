import { motion } from "framer-motion";

export default function WebFeatureDetail() {
  return (
    <section className="py-28 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid gap-16 lg:grid-cols-2 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-400 text-sm uppercase">
            Static Website Development
          </span>

          <h2 className="mt-3 text-3xl font-bold">
            Fast, Secure & SEO-Ready Websites
          </h2>

          <p className="mt-6 text-slate-300">
            Ideal for portfolios, landing pages, and small business websites.
            Built with HTML, CSS, and JavaScript for speed and performance.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            <li>✔ Hard-coded & lightweight</li>
            <li>✔ Responsive design</li>
            <li>✔ SEO readiness</li>
            <li>✔ High performance</li>
          </ul>

          <button className="mt-8 bg-blue-600 px-6 py-3 rounded-md">
            Explore More →
          </button>
        </motion.div>

        {/* Illustration */}
        <motion.img
          src="/static-web-illustration.svg"
          alt="Static web development"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
}


import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FeatureCard({ number, title, description, delay = 0 }) {
  return (
    <motion.a
      href="#products"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group flex min-h-[143px] flex-col rounded-[14px] border border-orange-100 bg-white p-3.5 text-black shadow-lg shadow-black/20 transition-colors hover:border-orange-400 sm:p-4"
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-[#FF6B35] text-white transition-transform duration-300 group-hover:rotate-45">
        <ArrowUpRight size={15} />
      </span>
      <span className="mt-3 text-[9px] text-orange-700">{number}</span>
      <span className="mt-1 font-display text-sm font-semibold">{title}</span>
      <span className="mt-1 text-[10px] leading-relaxed text-neutral-500">{description}</span>
    </motion.a>
  );
}

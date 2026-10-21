import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  Headphones,
  Factory,
  Globe2,
  Share2,
} from "lucide-react";

// Provided "WHY US?" Graphic Asset
import whyUsImage from "../assets/images/why-us.jpg";

/**
 * 6 Feature Items Configuration matching the reference layout
 */
const FEATURES = [
  {
    id: "quality-assured",
    title: "Quality Assured",
    description: "Consistent standards you can trust",
    Icon: ShieldCheck,
  },
  {
    id: "smart-tech",
    title: "Smart Technology Integration",
    description: "Advanced features for smarter living",
    Icon: Cpu,
  },
  {
    id: "customer-support",
    title: "Dedicated Customer Support",
    description: "Always ready to help you",
    Icon: Headphones,
  },
  {
    id: "innovation-manufacturing",
    title: "Innovation Driven Manufacturing",
    description: "Built with future-focused technology",
    Icon: Factory,
  },
  {
    id: "service-network",
    title: "Nationwide Service Network",
    description: "Support available across the country",
    Icon: Globe2,
  },
  {
    id: "international-reach",
    title: "Expanding International Reach",
    description: "Growing presence across global markets",
    Icon: Share2,
  },
];

/**
 * Why Choose Shagun Pro? Section Component
 */
const WhyChoose = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="why-choose"
      className="relative w-full bg-[#FFFFFF] text-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden"
    >
      {/* Soft Ambient Radial Peach Glow in the Upper-Left corner */}
      <div
        className="absolute -top-12 -left-12 w-[420px] h-[360px] pointer-events-none -z-0 opacity-45"
        style={{
          background:
            "radial-gradient(circle at 25% 25%, rgba(255, 107, 53, 0.22) 0%, rgba(255, 238, 232, 0.45) 45%, rgba(255, 255, 255, 0) 75%)",
        }}
      />

      <div className="relative z-10 max-w-[1383px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 xl:gap-14">
          
          {/* Left Column: Heading, Subtitle & 6-Item Grid */}
          <div className="w-full lg:max-w-[660px] xl:max-w-[700px] flex flex-col">
            {/* Section Heading */}
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-[34px] sm:text-[40px] lg:text-[46px] font-normal italic tracking-tight leading-tight"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="text-black font-normal">Why Choose </span>
              <span className="text-[#FF6B35] font-normal">Shagun Pro?</span>
            </motion.h2>

            {/* Sub-heading / Tagline */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
              className="mt-3.5 text-[13px] sm:text-[13.5px] text-[#4A4A4A] leading-[1.5] max-w-[460px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Choose Shagun Pro for reliable innovation, trusted performance, and dependable everyday solutions.
            </motion.p>

            {/* Six Feature Items (2 Columns x 3 Rows) */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 sm:gap-y-7">
              {FEATURES.map((item, index) => {
                const IconComponent = item.Icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 14 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.04,
                      ease: "easeOut",
                    }}
                    whileHover={shouldReduceMotion ? {} : { x: 3 }}
                    className="flex items-start gap-3.5 group cursor-default"
                  >
                    {/* Small Orange Icon */}
                    <div className="mt-0.5 w-6 h-6 rounded-md flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 text-[#FF6B35] stroke-[2.1] transition-transform duration-200 group-hover:scale-105" />
                    </div>

                    {/* Text Details */}
                    <div className="flex flex-col">
                      <h4
                        className="text-[13px] sm:text-[13.5px] font-bold text-black leading-snug tracking-tight"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="mt-0.5 text-[11px] sm:text-[11.5px] text-[#676767] leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Actual Provided "WHY US?" Image Asset */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0"
          >
            <div className="relative w-full max-w-[480px] xl:max-w-[530px] aspect-[16/10.2] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.12)] bg-[#FF6B35]">
  <img
    src={whyUsImage}
    alt="Why Us - Shagun Pro Advantages"
    className="w-full h-full object-cover object-center select-none mix-blend-lighten"
    style={{ mixBlendMode: "lighten" }}
    loading="lazy"
  />
</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
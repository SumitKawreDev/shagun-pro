
import { motion, useReducedMotion } from "framer-motion";

import innovation1 from "../assets/images/innovation1.jpg";
import innovation2 from "../assets/images/innovation2.jpg";
import innovation3 from "../assets/images/innovation3.jpg";
import innovation4 from "../assets/images/innovation4.jpg";

const images = [
  {
    src: innovation1,
    alt: "Advanced engineering and product technology",
    // label: "Advanced Engineering",
    desktop: "absolute left-[70.83%] top-[9.78%] h-[22.08%] w-[27.51%]",
  },
  {
    src: innovation2,
    alt: "Scientific research and wellness innovation",
    // label: "Scientific Research",
    desktop: "absolute left-[54.93%] top-[11.91%] h-[27.44%] w-[25.76%]",
  },
  {
    src: innovation3,
    alt: "Reliable performance and smart technology",
    // label: "Reliable Performance",
    desktop: "absolute left-[81.25%] top-[-15.91%] h-[27.44%] w-[17.1%]",
  },
  {
    src: innovation4,
    alt: "Premium electric scooter design",
    // label: "Premium Design",
    desktop: "absolute left-[39.79%] top-[-11.83%] h-[27.44%] w-[30.13%]",
  },
];

function ImageCard({ item, index, reducedMotion, mobile = false }) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={`relative min-w-0 overflow-visible ${mobile ? "w-full" : item.desktop}`}
    >
      <div className="h-full w-full overflow-hidden rounded-[14px] border border-[#E5E5E5]">
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      </div>

      {!mobile && (
        
<span
  className={`pointer-events-none absolute top-1/2 z-10 hidden whitespace-nowrap font-classy-vogue text-[clamp(9px,0.97vw,14px)] leading-none text-[#FF6B35] lg:block ${
    index === 0
      ? "left-full ml-5 -translate-y-1/2 -rotate-90 origin-left"
      : index === 1
        ? "right-full mr-5 -translate-y-1/2 rotate-90 origin-right"
        : index === 2
          ? "left-full ml-5 -translate-y-1/2 -rotate-90 origin-left"
          : "right-full mr-5 -translate-y-1/2 rotate-90 origin-right"
  }`}
>
  {item.label}
</span>

      )}

      {mobile && (
        <p className="mt-2 text-right font-classy-vogue text-xs text-[#FF6B35]">
          {item.label}
        </p>
      )}
    </motion.div>
  );
}

export default function Innovations() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="innovations"
      className="w-full overflow-hidden bg-white text-black"
    >
      {/* DESKTOP FIGMA LAYOUT */}
      <div className="relative mx-auto hidden h-[634px] w-full max-w-[1440px] lg:block">
        {/* MAIN HEADING */}
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute left-[4.03%] top-[11.51%] z-10 w-[26.25%] font-['Inter',sans-serif] text-[clamp(40px,3.82vw,55px)] font-medium italic leading-none"
        >
          One Brand
          <br />
          Four Powerful
          <br />
          <span className="text-[#FF6B35]">Innovations</span>
        </motion.h2>

        {/* TOP DESCRIPTION */}
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="absolute left-[44.58%] top-[17.19%] z-10 w-[26.25%] font-['Inter',sans-serif] text-[18px] font-normal leading-[1.5] text-[#5C5C5C]"
        >
          Shagun Pro is a diversified multi-product ecosystem focused on
          wellness, mobility, smart automation, and agricultural excellence.
        </motion.p>

        {/* TOP RIGHT IMAGE */}
        <ImageCard
          item={images[0]}
          index={0}
          reducedMotion={reducedMotion}
        />

        {/* CENTER IMAGE */}
        <ImageCard
          item={images[1]}
          index={1}
          reducedMotion={reducedMotion}
        />

        {/* RIGHT IMAGE */}
        <ImageCard
          item={images[2]}
          index={2}
          reducedMotion={reducedMotion}
        />

        {/* LOWER DESCRIPTION */}
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="absolute left-[25.97%] top-[51.58%] z-10 w-[26.53%] font-['Inter',sans-serif] text-[18px] font-normal leading-[1.5] text-[#5C5C5C]"
        >
          Shagun Pro is a diversified multi-product ecosystem focused on
          wellness, mobility, smart automation, and agricultural excellence.
        </motion.p>

        {/* BOTTOM LEFT/CENTER IMAGE */}
        <ImageCard
          item={images[3]}
          index={3}
          reducedMotion={reducedMotion}
        />

        {/* ORANGE INFORMATION CARD */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute left-[72.5%] top-[66.25%] flex h-[26.03%] w-[25.85%] items-center justify-center rounded-[14px] bg-[#FF6B35] px-5"
        >
          <p className="max-w-[269px] text-center font-['Poppins',sans-serif] text-[18px] font-normal leading-7 text-white">
            Serving urban homes, rural communities, and emerging global
            markets.
          </p>
        </motion.div>
      </div>

      {/* MOBILE AND TABLET LAYOUT */}
      <div className="mx-auto grid w-full max-w-[760px] grid-cols-1 gap-7 px-5 py-14 sm:px-8 sm:py-16 lg:hidden">
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[430px] font-['Inter',sans-serif] text-[clamp(38px,7vw,55px)] font-medium italic leading-none"
        >
          One Brand
          <br />
          Four Powerful
          <br />
          <span className="text-[#FF6B35]">Innovations</span>
        </motion.h2>

        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[480px] font-['Inter',sans-serif] text-base leading-[1.6] text-[#5C5C5C] sm:text-lg"
        >
          Shagun Pro is a diversified multi-product ecosystem focused on
          wellness, mobility, smart automation, and agricultural excellence.
        </motion.p>

        {/* ENGINEERING IMAGE */}
        <ImageCard
          item={{
            ...images[0],
            desktop: "aspect-[2.52]",
          }}
          index={0}
          reducedMotion={reducedMotion}
          mobile
        />

        {/* RESEARCH AND PERFORMANCE IMAGES */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <ImageCard
            item={{
              ...images[1],
              desktop: "aspect-[1.35]",
            }}
            index={1}
            reducedMotion={reducedMotion}
            mobile
          />

          <ImageCard
            item={{
              ...images[2],
              desktop: "aspect-[1.05]",
            }}
            index={2}
            reducedMotion={reducedMotion}
            mobile
          />
        </div>

        {/* LOWER DESCRIPTION */}
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[480px] font-['Inter',sans-serif] text-base leading-[1.6] text-[#5C5C5C] sm:text-lg"
        >
          Shagun Pro is a diversified multi-product ecosystem focused on
          wellness, mobility, smart automation, and agricultural excellence.
        </motion.p>

        {/* SCOOTER IMAGE */}
        <ImageCard
          item={{
            ...images[3],
            desktop: "aspect-[2.3]",
          }}
          index={3}
          reducedMotion={reducedMotion}
          mobile
        />

        {/* ORANGE INFORMATION CARD */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex min-h-[165px] items-center justify-center rounded-[14px] bg-[#FF6B35] px-6 py-8"
        >
          <p className="max-w-[269px] text-center font-['Poppins',sans-serif] text-lg leading-7 text-white">
            Serving urban homes, rural communities, and emerging global
            markets.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

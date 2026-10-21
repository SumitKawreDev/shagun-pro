
import { motion, useReducedMotion } from "framer-motion";

import industry1 from "../assets/images/industry1.jpg";
import industry2 from "../assets/images/industry2.jpg";
import industry3 from "../assets/images/industry3.jpg";
import industry4 from "../assets/images/industry4.jpg";
import growthImage from "../assets/images/growth.jpg";

const industries = [
  "Health & Water Purification",
  "Electric Mobility",
  "Agricultural Nutrition",
  "Smart Home Automation",
];

const qualityItems = [
  "Strict Quality Testing",
  "Certified Manufacturing",
  "Performance Validation",
  "Continuous And R&D",
];

function Reveal({ children, className = "", delay = 0 }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function IndustryImage({ src, alt, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-[14px] border border-[#FF6B35]/60 bg-[#090706] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function IndustryList({ compact = false }) {
  return (
    <div className="flex flex-col gap-[7px]">
      {industries.map((industry, index) => (
        <Reveal key={industry} delay={index * 0.05}>
          <motion.div
            whileHover={{ x: 4, borderColor: "#FF6B35", backgroundColor: "rgba(255,107,53,0.09)" }}
            transition={{ duration: 0.2 }}
            className={`group relative flex cursor-pointer items-center overflow-hidden rounded-[14px] border border-[#FF6B3520] bg-[#FFFFFF0D] px-[26px] shadow-[inset_-1px_1px_5px_#FF6B3520] transition-shadow duration-300 hover:shadow-[inset_0_0_14px_#FF6B3520,0_0_12px_#FF6B3510] ${
              compact ? "min-h-[52px]" : "h-[62px]"
            }`}
          >
            <span className="absolute bottom-0 left-0 top-0 w-[2px] -translate-x-full bg-[#FF6B35] transition-transform duration-300 group-hover:translate-x-0" />
            <span className="font-['Inter',sans-serif] text-[12px] uppercase leading-[1.2] text-white sm:text-[14px]">
              {industry}
            </span>
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
}

function VisionMissionCard({ title, children, className = "" }) {
  return (
    <Reveal className={className}>
      <article className="relative h-full border-t border-transparent pt-0">
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, #000000 0%, #FF6B35 45.19%, #000000 100%)",
          }}
        />

        <h3 className="pt-[3px] font-['Inter',sans-serif] text-[25px] font-medium italic leading-tight sm:text-[30px]">
          {title}
        </h3>

        <p className="mt-3 font-['Inter',sans-serif] text-[14px] font-light leading-[1.3] text-white sm:text-[16px] lg:text-[18px]">
          {children}
        </p>
      </article>
    </Reveal>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-black px-5 pb-14 pt-12 text-white sm:px-8 sm:pb-16 sm:pt-16 lg:px-0 lg:pb-0 lg:pt-[42px]"
    >
      <div className="mx-auto w-full max-w-[1316px]">
        {/* DESKTOP ABOUT SECTION */}
        <div className="relative hidden h-[623px] w-full lg:block">
          {/* HEADING */}
          <Reveal className="absolute left-0 top-0 z-10 w-[477px]">
            <h2 className="whitespace-nowrap font-['Inter',sans-serif] text-[clamp(42px,3.82vw,55px)] font-medium italic leading-none tracking-[-0.035em]">
              About <span className="text-[#FF6B35]">Shagun Pro</span>
            </h2>
          </Reveal>

          {/* DESCRIPTION */}
          <Reveal className="absolute left-[532px] top-[21px] z-10 w-[572px]">
            <p className="font-['Inter',sans-serif] text-[18px] font-normal leading-[1.35] text-white">
              Shagun Pro is a forward-thinking innovation brand committed to
              improving everyday life through smart technology and
              wellness-driven solutions.
            </p>
          </Reveal>

          {/* INDUSTRY LIST */}
          <div className="absolute left-0 top-[128px] z-10 w-[595px]">
            <Reveal>
              <p className="mb-[32px] font-['Inter',sans-serif] text-[18px] leading-none text-white">
                We operate across multiple industries:
              </p>
            </Reveal>

            <IndustryList />
          </div>

          {/* OVERLAPPING IMAGE COMPOSITION */}
          <div className="absolute left-[797px] top-[149px] h-[332px] w-[490px]">
            {/* LEFT BLURRED PANEL */}
            <div className="absolute left-0 top-[15px] z-20 h-[306px] w-[84px] overflow-hidden rounded-l-[14px] bg-black/75 backdrop-blur-[25px]" />

            {/* LEFT BACK IMAGE */}
            <Reveal className="absolute left-[80px] top-[15px] z-10 h-[303px] w-[258px]">
              <IndustryImage
                src={industry1}
                alt="Health and water purification innovation"
                className="h-full w-full"
              />
            </Reveal>

            {/* RIGHT BACK IMAGE */}
            <Reveal className="absolute left-[224px] top-[15px] z-10 h-[303px] w-[258px]">
              <IndustryImage
                src={industry3}
                alt="Smart home and mobility innovation"
                className="h-full w-full"
              />
            </Reveal>

            {/* CENTER FRONT IMAGE */}
            <Reveal className="absolute left-[114px] top-0 z-30 h-[332px] w-[258px]">
              <IndustryImage
                src={industry2}
                alt="Shagun Pro featured innovation"
                className="h-full w-full border-[#FF6B35]/80 shadow-[1px_1px_11px_#000000]"
              />
            </Reveal>

            {/* RIGHT BLURRED PANEL */}
            <div className="absolute right-0 top-[15px] z-20 h-[306px] w-[55px] overflow-hidden rounded-r-[14px] bg-black/75 backdrop-blur-[25px]" />
          </div>

          {/* VISION */}
          <VisionMissionCard
            title="Vision"
            className="absolute left-0 top-[506px] z-10 w-[482px]"
          >
            To become a globally respected brand delivering smart,
            sustainable, and wellness-driven innovations for modern living.
          </VisionMissionCard>

          {/* CENTER IMAGE ICON — INDUSTRY 4 */}
          <Reveal className="absolute left-[606px] top-[531px] z-20">
            <div className="flex h-[78px] w-[78px] items-center justify-center overflow-hidden rounded-full bg-[#FF6B35]">
              <img
                src={industry4}
                alt="Shagun Pro innovation"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* MISSION */}
          <VisionMissionCard
            title="Mission"
            className="absolute left-[777px] top-[506px] z-10 w-[478px]"
          >
            To provide high-quality, affordable, and technologically advanced
            solutions that empower families, farmers, and future-ready homes.
          </VisionMissionCard>
        </div>

        {/* MOBILE AND TABLET */}
        <div className="grid grid-cols-1 gap-7 lg:hidden">
          <Reveal>
            <h2 className="font-['Inter',sans-serif] text-[clamp(36px,6vw,55px)] font-medium italic leading-[1.05] tracking-[-0.035em]">
              About <span className="text-[#FF6B35]">Shagun Pro</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-sm leading-relaxed text-white/90 sm:text-base">
              Shagun Pro is a forward-thinking innovation brand committed to
              improving everyday life through smart technology and
              wellness-driven solutions.
            </p>
          </Reveal>

          <div>
            <Reveal>
              <p className="mb-4 text-sm text-white sm:text-base">
                We operate across multiple industries:
              </p>
            </Reveal>
            <IndustryList compact />
          </div>

          {/* RESPONSIVE IMAGE COMPOSITION */}
          <div className="relative mx-auto grid min-h-[260px] w-full max-w-[520px] grid-cols-[0.7fr_1fr_0.7fr] items-center sm:min-h-[330px]">
            <IndustryImage
              src={industry1}
              alt="Health and water purification"
              className="relative z-10 h-[75%] w-full"
            />

            <IndustryImage
              src={industry2}
              alt="Featured Shagun Pro innovation"
              className="relative z-30 h-full w-full shadow-[0_0_18px_#000000]"
            />

            <IndustryImage
              src={industry3}
              alt="Smart home innovation"
              className="relative z-10 h-[75%] w-full"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <VisionMissionCard title="Vision">
              To become a globally respected brand delivering smart,
              sustainable, and wellness-driven innovations for modern living.
            </VisionMissionCard>

            <VisionMissionCard title="Mission">
              To provide high-quality, affordable, and technologically advanced
              solutions that empower families, farmers, and future-ready homes.
            </VisionMissionCard>
          </div>

          <div className="flex justify-center">
            <div className="h-[64px] w-[64px] overflow-hidden rounded-full bg-[#FF6B35]">
              <img
                src={industry4}
                alt="Shagun Pro innovation"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* QUALITY COMMITMENT */}
        <Reveal className="relative z-20 mt-12 lg:mt-[70px]">
          <div className="rounded-[20px] border border-transparent bg-[#130C0A] px-5 py-7 sm:px-8 lg:rounded-[24px] lg:px-10 lg:py-8 [border-image:linear-gradient(94.1deg,#000000_-1.23%,#FF6B35_43.31%,#000000_96.28%)_1] sm:[border-image:linear-gradient(94.1deg,#000000_-1.23%,#FF6B35_43.31%,#000000_96.28%)_1]">
            <div className="text-center">
              <h3 className="font-['Inter',sans-serif] text-[clamp(27px,3.2vw,40px)] font-medium italic leading-tight">
                <span className="text-[#FF6B35]">Quality</span> Commitment
              </h3>

              <p className="mt-2 text-xs text-white/90 sm:text-sm">
                At Shagun Pro, quality is not optional — it is foundational.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {qualityItems.map((label, index) => (
                <Reveal key={label} delay={index * 0.06}>
                  <motion.div
                    whileHover={{
                      borderColor: "#FF6B35",
                      y: -3,
                    }}
                    className="flex min-h-[76px] flex-col items-center justify-center gap-2 rounded-lg border border-[#FF6B3520] bg-black px-2 py-3 text-center"
                  >
                    <span className="text-lg text-white">
                      {index === 0
                        ? "♙"
                        : index === 1
                          ? "♙"
                          : index === 2
                            ? "◉"
                            : "↻"}
                    </span>
                    <span className="text-[10px] text-white sm:text-xs">
                      {label}
                    </span>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* GROWTH AND SUCCESS */}
<div className="mt-12 grid grid-cols-1 items-center gap-8 pb-12 sm:mt-16 lg:mt-[75px] lg:grid-cols-[641px_minmax(0,1fr)] lg:gap-10 lg:pb-16">

  {/* GROWTH IMAGE + CENTER ICON */}
  <Reveal className="min-w-0">
    <div className="relative overflow-hidden rounded-[4px]">
  <img
    src={growthImage}
    alt="Shagun Pro growth and success"
    loading="lazy"
    className="h-auto w-full object-contain"
  />

  {/* BRAND ICON — match screenshot position */}
  <div className="absolute right-[5%] top-[43%] z-10 flex h-[44px] w-[44px] items-center justify-center overflow-hidden rounded-full bg-[#FF6B35] shadow-[0_0_12px_#FF6B3560] sm:right-[5.5%] sm:top-[43%] sm:h-[60px] sm:w-[60px] lg:right-[5.5%] lg:top-[43%] lg:h-[90px] lg:w-[90px]">
    <img
      src={industry4}
      alt="Shagun Pro brand icon"
    //   className="h-[70%] w-[70%] object-contain"
    />
  </div>
</div>

    <p className="mt-3 max-w-[580px] text-xs italic leading-relaxed text-white/85 sm:text-sm">
      Shagun Pro began with a simple mission — improve daily life — and
      today stands as a multi-category innovation brand.
    </p>
  </Reveal>

  {/* GROWTH CONTENT + GRADIENT LINE */}
  <Reveal className="relative min-w-0 lg:min-h-[277px] lg:pl-5">

    {/* VERTICAL GRADIENT LINE */}
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 top-0 hidden w-[2px] lg:block"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #FF6B35 45.19%, #000000 100%)",
      }}
    />

    <h3 className="font-['Inter',sans-serif] text-[clamp(30px,3.5vw,42px)] font-medium italic leading-tight">
      Our <span className="text-[#FF6B35]">Growth &amp; Success</span>
      <br />
      Story
    </h3>

    <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/90 sm:text-base">
      <li>• Thousands of satisfied domestic customers</li>
      <li>• Rapid distributor expansion in regional markets</li>
      <li>• Growing demand in tier-2 &amp; tier-3 cities</li>
      <li>• Strong dealer network development</li>
      <li>• Positive word-of-mouth growth</li>
    </ul>
  </Reveal>
</div>
      </div>
    </section>
  );
}

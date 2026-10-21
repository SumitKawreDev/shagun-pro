import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Zap, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import buyer1 from "../assets/images/young-voter-first.jpg";
import buyer2 from "../assets/images/young-voter-second.jpg";
import buyer3 from "../assets/images/young-voter-third.jpg";
import backTyer from "../assets/images/back-tyer.png";
import tyer from "../assets/images/front-wheel.png";
import scooty from "../assets/images/scooter.png";

const buyers = [buyer1, buyer2, buyer3];

const slides = [
  {
    title: "Smart Living.",
    second: "Pure Innovation",
    description: "Transforming Everyday Life with Advanced Technology & Wellness Solutions.",
    charge: "10/12",
    chargeText: "Hours Fast Charging",
  },
  {
    title: "Smarter Living.",
    second: "Better Tomorrow",
    description: "Discover thoughtfully designed technology for your everyday lifestyle.",
    charge: "Fast",
    chargeText: "Charging Technology",
  },
  {
    title: "Pure Comfort.",
    second: "Modern Innovation",
    description: "Experience innovation and comfort through smart living solutions.",
    charge: "Smart",
    chargeText: "Advanced Features",
  },
  {
    title: "Made for You.",
    second: "Built for Life",
    description: "Explore a new standard of everyday convenience with Shagun Pro.",
    charge: "Pure",
    chargeText: "Everyday Innovation",
  },
];

/* Shared circular badge look (cream background, orange icon) */
const badgeBase =
  "flex shrink-0 flex-col items-center justify-center rounded-full bg-[#FCF1ED] text-center text-black shadow-lg shadow-black/40";

function ChargingBadge({ slide, className = "" }) {
  return (
    <motion.div
      key={slide.charge}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 180 }}
      className={`${badgeBase} h-[78px] w-[78px] sm:h-[92px] sm:w-[92px] lg:h-[clamp(92px,7.6vw,132px)] lg:w-[clamp(92px,7.6vw,132px)] ${className}`}
    >
      <Zap size={16} className="mb-0.5 fill-[#FF6B35] text-[#FF6B35]" aria-hidden="true" />
      <strong className="text-sm font-semibold sm:text-base lg:text-[clamp(16px,1.5vw,24px)]">
        {slide.charge}
      </strong>
      <span className="max-w-[80%] text-[8px] font-light leading-tight sm:text-[9px] lg:text-[clamp(9px,0.75vw,12px)]">
        {slide.chargeText}
      </span>
    </motion.div>
  );
}

function ProductImageCard({ image, title, delay }) {
  return (
    <motion.a
      href="#products"
      aria-label={title}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4, scale: 1.025 }}
      className="group relative block aspect-[1.12] min-w-0 overflow-hidden rounded-xl bg-white sm:aspect-[1.18] lg:aspect-[1.1]"
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <span className="absolute left-2 top-2 grid h-6 w-6 place-items-center rounded-full bg-[#FF6B35] text-white">
        <ArrowUpRight size={14} />
      </span>
    </motion.a>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  const slide = slides[active];
  const [firstWord, ...restWords] = slide.title.split(" ");

  const previous = () => setActive((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setActive((c) => (c + 1) % slides.length);

  return (
    <main
      id="home"
      /* --hf = background heading font size, reused for spacing so layout follows it */
      className="relative isolate w-full overflow-x-clip bg-black text-white [--hf:clamp(54px,12vw,210px)] lg:min-h-[clamp(640px,48vw,880px)]"
    >
      {/* ambient orange light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[55%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-700/15 blur-[120px]"
      />

      {/* BACKGROUND HEADING — plain flex wrapper centers it, so animation never touches centering */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-2 z-0 flex justify-center overflow-hidden sm:top-3 lg:top-0"
      >
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="select-none whitespace-nowrap bg-gradient-to-b from-orange-500/90 via-orange-800/55 to-red-950/0 bg-clip-text font-display text-[length:var(--hf)] leading-[1.12] tracking-[-0.05em] text-transparent"
        >
          Shagun Pro
        </motion.p>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 gap-x-6 gap-y-6 px-5 pb-24 pt-[calc(var(--hf)*0.95)] sm:px-8 md:grid-cols-2 md:gap-y-8 md:px-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.55fr)_clamp(130px,11vw,230px)] lg:gap-x-4 lg:px-[4.7%] lg:pb-24 lg:pt-[calc(var(--hf)*0.58)] xl:gap-x-6">
        {/* LEFT: text */}
        <section className="relative z-20 order-1 flex min-w-0 flex-col self-stretch lg:pt-[calc(var(--hf)*0.32)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32 }}
            >
              <h1 className="font-sans text-[clamp(30px,8.4vw,44px)] font-medium leading-[1.05] tracking-[-0.04em] sm:text-[clamp(38px,6vw,54px)] md:text-[clamp(32px,4.6vw,46px)] lg:text-[clamp(34px,3.7vw,64px)]">
                <span className="italic text-[#FF6B35]">{firstWord}</span>{" "}
                {restWords.join(" ")}
                <br />
                {slide.second}
              </h1>

              <p className="mt-3 max-w-[22rem] text-xs font-light leading-relaxed text-neutral-400 sm:text-sm lg:max-w-[min(22rem,26vw)] 2xl:text-base">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* BUYER AVATARS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-5 flex items-center gap-3 sm:mt-6"
          >
            <div className="flex items-center pl-1">
              {buyers.map((person, index) => (
                <div
                  key={person}
                  className="-ml-2 h-8 w-8 overflow-hidden rounded-full border-2 border-black bg-neutral-800 first:ml-0 sm:h-9 sm:w-9"
                >
                  <img src={person} alt={`Verified buyer ${index + 1}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
            <div className="leading-tight">
              <p className="text-xs text-white sm:text-sm">15k+</p>
              <p className="text-[10px] text-neutral-400 sm:text-xs">Verified Buyers</p>
            </div>
          </motion.div>

          {/* CTA BUTTONS (pushed to the bottom of the column on desktop, like the design) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-6 flex flex-wrap gap-2.5 lg:mt-auto lg:pt-8"
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.04, boxShadow: "0 0 22px #ff6b3540" }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex h-10 items-center rounded-full border border-orange-400 bg-gradient-to-r from-orange-500 to-red-600 px-5 font-display text-xs text-white sm:px-6 sm:text-sm"
            >
              Explore Products
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, borderColor: "#FF6B35" }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex h-10 items-center rounded-full border border-white/70 px-5 font-display text-xs text-white sm:px-6 sm:text-sm"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </section>

        {/* CENTER: scooter + warranty badge (normal flow, no absolute on mobile/tablet) */}
        <div className="relative z-10 order-2 flex min-w-0 flex-col items-center">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="pointer-events-none relative flex w-full max-w-[560px] items-center justify-center lg:max-w-none"
          >
            
<motion.img
  src={scooty}
  alt="Shagun Pro orange electric scooter"
  style={{ scaleX: -1 }}
  animate={reducedMotion ? {} : { y: [0, -7, 0] }}
  transition={{
    duration: 4.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="h-auto max-h-[300px] w-full object-contain drop-shadow-[0_20px_28px_rgba(0,0,0,0.65)] sm:max-h-[380px] md:max-h-[340px] lg:max-h-[clamp(300px,32vw,640px)]"
/>


            {/* charging badge on the scooter's corner for mobile/tablet only */}
            <ChargingBadge slide={slide} className="absolute right-0 top-0 lg:hidden" />
          </motion.div>

          {/* warranty badge: tucked under the scooter, in flow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.75, type: "spring", stiffness: 180 }}
            className={`${badgeBase} relative z-10 -mt-3 h-[66px] w-[66px] sm:h-[76px] sm:w-[76px] lg:-mt-[2vw] lg:h-[clamp(76px,5.8vw,104px)] lg:w-[clamp(76px,5.8vw,104px)]`}
          >
            <ShieldCheck size={15} className="mb-0.5 text-[#FF6B35]" aria-hidden="true" />
            <strong className="text-[10px] sm:text-xs lg:text-[clamp(10px,0.95vw,14px)]">2 years</strong>
            <span className="text-[8px] font-light sm:text-[9px] lg:text-[clamp(8px,0.75vw,11px)]">warranty</span>
          </motion.div>
        </div>

        {/* RIGHT: charging badge (desktop), product cards, note */}
        <aside className="relative z-20 order-3 mx-auto flex w-full min-w-0 max-w-md flex-col items-center md:col-span-2 lg:col-span-1 lg:mx-0 lg:max-w-none lg:self-start lg:pt-[calc(var(--hf)*0.45)]">
          <ChargingBadge slide={slide} className="mb-4 hidden lg:flex" />

          <div className="grid w-full grid-cols-2 gap-3 lg:grid-cols-1">
            <ProductImageCard image={tyer} title="Front wheel product detail" delay={0.5} />
            <ProductImageCard image={backTyer} title="Rear wheel product detail" delay={0.65} />
          </div>

          <p className="mt-3 w-full text-center text-[10px] leading-relaxed text-neutral-400 sm:text-xs lg:text-left lg:text-[clamp(9px,0.8vw,12px)]">
            Find the best deals on top products and discover innovative solutions.
          </p>
        </aside>
      </div>

      {/* SLIDER CONTROLS — centered, bottom; container has pb-24 so nothing collides */}
      <div className="absolute inset-x-0 bottom-5 z-30 flex items-center justify-center gap-3 sm:bottom-6">
        <button
          type="button"
          onClick={previous}
          aria-label="Previous slide"
          className="grid h-7 w-7 place-items-center rounded-full bg-[#FCF1ED] text-[#FF6B35] transition-transform hover:scale-110"
        >
          <ArrowLeft size={13} />
        </button>

        <div className="flex items-center gap-2.5">
          {slides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={active === index ? "true" : undefined}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                active === index ? "w-6 bg-[#FF6B35]" : "w-3 bg-neutral-500"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="grid h-7 w-7 place-items-center rounded-full bg-[#FCF1ED] text-[#FF6B35] transition-transform hover:scale-110"
        >
          <ArrowRight size={13} />
        </button>
      </div>
    </main>
  );
}
import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Configurable Testimonial Data matching the exact text and roles in the screenshot.
 * You can pass custom items via the `testimonials` prop or replace avatar URLs with local imports.
 */
const DEFAULT_TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Hannah Schmitt",
    role: "Working Professional, Delhi",
    quote:
      "“Smooth acceleration and strong battery backup. Perfect for daily commuting.”",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "testimonial-2",
    name: "Hannah Schmitt",
    role: "Wellness Consultant, Mumbai",
    quote:
      "“The alkaline ionizer completely upgraded our family’s health routine.”",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "testimonial-3",
    name: "Hannah Schmitt",
    role: "Dairy Farmer, Gujarat",
    quote:
      "“Milk production increased noticeably after using Milkish feed.”",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
  },
];

/**
 * Custom Organic SVG Card Backgrounds (Left, Center, Right)
 * Accurately reproduces the custom angled/organic rounded polygon shapes
 * and vivid orange (#FF6B35) offset backplates from the Figma screenshot.
 */
const CardShapeSVG = ({ position }) => {
  if (position === "left") {
    return (
      <svg
        viewBox="0 0 320 330"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-visible"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Orange Offset Layer (Bottom-Left Tilt) */}
        <path
          d="M24 44 C26 16, 52 8, 82 20 L276 86 C302 96, 314 118, 306 146 L282 282 C276 310, 250 326, 220 314 L38 250 C12 240, 2 216, 6 186 Z"
          fill="#FF6B35"
          transform="translate(-10, 12) rotate(-3 160 165)"
        />
        {/* Main Dark Card Body (#111111) */}
        <path
          d="M24 44 C26 16, 52 8, 82 20 L276 86 C302 96, 314 118, 306 146 L282 282 C276 310, 250 326, 220 314 L38 250 C12 240, 2 216, 6 186 Z"
          fill="#111111"
        />
      </svg>
    );
  }

  if (position === "right") {
    return (
      <svg
        viewBox="0 0 320 330"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-visible"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Orange Offset Layer (Bottom-Right Tilt) */}
        <path
          d="M296 44 C294 16, 268 8, 238 20 L44 86 C18 96, 6 118, 14 146 L38 282 C44 310, 70 326, 100 314 L282 250 C308 240, 318 216, 314 186 Z"
          fill="#FF6B35"
          transform="translate(10, 12) rotate(3 160 165)"
        />
        {/* Main Dark Card Body (#111111) */}
        <path
          d="M296 44 C294 16, 268 8, 238 20 L44 86 C18 96, 6 118, 14 146 L38 282 C44 310, 70 326, 100 314 L282 250 C308 240, 318 216, 314 186 Z"
          fill="#111111"
        />
      </svg>
    );
  }

  // Center Prominent Card Shape
  return (
    <svg
      viewBox="0 0 430 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-visible"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Orange Offset Layer (Peeks at Top-Left and Bottom-Right) */}
      <path
        d="M58 24 C85 16, 335 12, 368 18 C400 24, 412 46, 414 82 L422 302 C424 338, 404 358, 368 362 L76 382 C36 384, 14 362, 16 322 L32 68 C34 40, 42 28, 58 24 Z"
        fill="#FF6B35"
        transform="translate(10, -4) rotate(2.5 215 195)"
      />
      {/* Main Dark Card Body (#111111) */}
      <path
        d="M52 24 C82 18, 340 14, 372 20 C404 26, 416 48, 416 84 L418 304 C418 340, 398 358, 362 362 L70 382 C30 384, 8 360, 12 320 L28 66 C30 40, 38 28, 52 24 Z"
        fill="#111111"
      />
    </svg>
  );
};

/**
 * Double Left Quotation Mark SVG Icon (#FF6B35)
 */
const QuoteIcon = ({ isCenter }) => (
  <svg
    viewBox="0 0 24 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${
      isCenter ? "w-5 h-4 my-2.5" : "w-3.5 h-3 my-1.5"
    } text-[#FF6B35] mx-auto select-none`}
    aria-hidden="true"
  >
    <path
      d="M6.2 17.6C4.33333 17.6 2.86667 17.0333 1.8 15.9C0.733333 14.7 0.2 13.0667 0.2 11C0.2 8.46667 0.933333 6.23333 2.4 4.3C3.93333 2.36667 6.06667 0.933333 8.8 0L10.2 2.4C8.2 3.13333 6.63333 4.13333 5.5 5.4C4.43333 6.6 3.83333 7.96667 3.7 9.5H6.2C7.46667 9.5 8.5 9.9 9.3 10.7C10.1 11.4333 10.5 12.4667 10.5 13.8C10.5 14.9333 10.1 15.8667 9.3 16.6C8.5 17.2667 7.46667 17.6 6.2 17.6ZM18.8 17.6C16.9333 17.6 15.4667 17.0333 14.4 15.9C13.3333 14.7 12.8 13.0667 12.8 11C12.8 8.46667 13.5333 6.23333 15 4.3C16.5333 2.36667 18.6667 0.933333 21.4 0L22.8 2.4C20.8 3.13333 19.2333 4.13333 18.1 5.4C17.0333 6.6 16.4333 7.96667 16.3 9.5H18.8C20.0667 9.5 21.1 9.9 21.9 10.7C22.7 11.4333 23.1 12.4667 23.1 13.8C23.1 14.9333 22.7 15.8667 21.9 16.6C21.1 17.2667 20.0667 17.6 18.8 17.6Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Individual Testimonial Card Component
 */
const TestimonialCard = ({ item, position, shouldReduceMotion, onSelect }) => {
  const isCenter = position === "center";

  // Sizing and vertical placement matching the screenshot
  const containerClasses = isCenter
    ? "w-full max-w-[390px] xl:max-w-[425px] min-h-[340px] sm:min-h-[365px] z-20 pt-14 pb-10 px-6 sm:px-10 -mt-2 lg:-mt-6 cursor-default"
    : "w-full max-w-[275px] xl:max-w-[295px] min-h-[275px] sm:min-h-[295px] z-10 pt-12 pb-8 px-5 sm:px-7 mt-6 lg:mt-12 cursor-pointer opacity-95 hover:opacity-100 transition-opacity";

  const avatarSizeClasses = isCenter
    ? "w-[86px] h-[86px] sm:w-[96px] sm:h-[96px] -top-[34px] sm:-top-[38px]"
    : "w-[68px] h-[68px] sm:w-[74px] sm:h-[74px] -top-[22px] sm:-top-[24px]";

  return (
    <motion.div
      layout={!shouldReduceMotion}
      initial={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: 20, scale: isCenter ? 0.96 : 0.92 }
      }
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={
        shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }
      }
      transition={{ duration: 0.42, ease: "easeOut" }}
      onClick={onSelect}
      className={`relative flex flex-col items-center justify-center text-center select-none ${containerClasses}`}
    >
      {/* Custom Organic Angled SVG Card Shape + Orange Backplate */}
      <CardShapeSVG position={position} />

      {/* Circular Top-Centered Avatar */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 rounded-full overflow-hidden shadow-lg z-20 bg-neutral-800 ${avatarSizeClasses}`}
      >
        <img
          src={item.avatar}
          alt={item.name}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Card Text Content */}
      <div className="relative z-10 flex flex-col items-center mt-2">
        <h3
          className={`${
            isCenter
              ? "text-[18px] sm:text-[20px] font-bold"
              : "text-[14px] sm:text-[15px] font-bold"
          } text-white tracking-tight leading-snug`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {item.name}
        </h3>

        <p
          className={`${
            isCenter
              ? "text-[12.5px] sm:text-[13.5px] mt-1"
              : "text-[10.5px] sm:text-[11px] mt-0.5"
          } text-[#CCCCCC] font-normal`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {item.role}
        </p>

        {/* Orange Quote Mark */}
        <QuoteIcon isCenter={isCenter} />

        {/* Testimonial Quote */}
        <p
          className={`${
            isCenter
              ? "text-[13px] sm:text-[14px] max-w-[330px] leading-[1.48]"
              : "text-[10.5px] sm:text-[11px] max-w-[225px] leading-[1.42]"
          } text-[#E5E5E5] font-normal`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {item.quote}
        </p>
      </div>
    </motion.div>
  );
};

/**
 * Main Trusted by Our Customers (Testimonials / Contact) Section
 * Outer container specs: 1440px max-width, 691px min-height on desktop, 20px border-radius, #000000 bg
 */
const Testimonials = ({ testimonials = DEFAULT_TESTIMONIALS }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(1); // Default center is item index 1 ("Wellness Consultant, Mumbai")

  const total = testimonials.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Compute Left, Center, and Right indices dynamically
  const leftIndex = (activeIndex - 1 + total) % total;
  const centerIndex = activeIndex;
  const rightIndex = (activeIndex + 1) % total;

  return (
    <section
      id="contact"
      className="w-full bg-[#000000] py-6 sm:py-10 px-2 sm:px-4 lg:px-6 overflow-hidden"
    >
      {/* Main 1440x691 Container with 20px Border Radius */}
      <div className="relative w-full max-w-[1440px] lg:min-h-[691px] mx-auto rounded-[20px] bg-[#000000] px-5 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 overflow-hidden flex flex-col justify-between">
        
        {/* 1. Ambient Orange/Brown Glow — Top-Left Edge */}
        <div
          className="absolute -top-20 -left-24 w-[520px] h-[520px] rounded-full pointer-events-none z-0 opacity-65 blur-[90px]"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 85, 35, 0.48) 0%, rgba(120, 42, 15, 0.22) 50%, rgba(0, 0, 0, 0) 75%)",
          }}
          aria-hidden="true"
        />

        {/* 2. Ambient Orange/Brown Glow — Bottom-Right Edge */}
        <div
          className="absolute -bottom-28 -right-24 w-[480px] h-[480px] rounded-full pointer-events-none z-0 opacity-60 blur-[90px]"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 85, 35, 0.42) 0%, rgba(120, 42, 15, 0.18) 50%, rgba(0, 0, 0, 0) 75%)",
          }}
          aria-hidden="true"
        />

        {/* Section Heading & Right Subtitle Row */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 max-w-[1260px] w-full mx-auto">
          <motion.h2
            initial={
              shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-[32px] sm:text-[42px] lg:text-[48px] font-normal italic tracking-tight leading-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="text-[#FF6B35]">Trusted </span>
            <span className="text-white">by Our Customers</span>
          </motion.h2>

          <motion.p
            initial={
              shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="text-white/95 italic text-[14px] sm:text-[16px] lg:text-[17.5px] leading-[1.42] max-w-[390px] font-normal md:mr-4 lg:mr-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Honest feedback from customers who trust and use Shagun Pro
          </motion.p>
        </div>

        {/* Carousel Area + Left/Right Navigation Buttons */}
        <div className="relative z-10 w-full max-w-[1340px] mx-auto mt-14 sm:mt-16 lg:mt-20 mb-4 flex items-center justify-center">
          
          {/* Previous Button (Left) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="absolute left-0 sm:left-1 lg:left-0 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-[#FF6B35] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.4] pr-0.5" />
          </button>

          {/* Desktop 3-Card Stage */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_1.35fr_1fr] items-center justify-items-center gap-6 xl:gap-10 w-full px-14 xl:px-20">
            <AnimatePresence mode="popLayout" initial={false}>
              <TestimonialCard
                key={`left-${testimonials[leftIndex].id}`}
                item={testimonials[leftIndex]}
                position="left"
                shouldReduceMotion={shouldReduceMotion}
                onSelect={handlePrev}
              />
              <TestimonialCard
                key={`center-${testimonials[centerIndex].id}`}
                item={testimonials[centerIndex]}
                position="center"
                shouldReduceMotion={shouldReduceMotion}
              />
              <TestimonialCard
                key={`right-${testimonials[rightIndex].id}`}
                item={testimonials[rightIndex]}
                position="right"
                shouldReduceMotion={shouldReduceMotion}
                onSelect={handleNext}
              />
            </AnimatePresence>
          </div>

          {/* Mobile & Tablet Single Active Card View (Prevents Horizontal Overflow) */}
          <div className="lg:hidden flex justify-center w-full px-10 sm:px-14">
            <AnimatePresence mode="wait" initial={false}>
              <TestimonialCard
                key={`mobile-${testimonials[centerIndex].id}`}
                item={testimonials[centerIndex]}
                position="center"
                shouldReduceMotion={shouldReduceMotion}
              />
            </AnimatePresence>
          </div>

          {/* Next Button (Right) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="absolute right-0 sm:right-1 lg:right-0 top-1/2 -translate-y-[30%] z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-[#FF6B35] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.4] pl-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CircleArrowRight, ArrowUpLeft } from "lucide-react";

// Existing Project Asset Imports
import scooty from "../assets/images/scooter.png";
import tyer from "../assets/images/front-wheel.png";
import backTyer from "../assets/images/back-tyer.png";

/**
 * Product Data Configuration
 */
const PRODUCTS_DATA = [
  {
    id: "smart-e-scooter",
    title: "India’s Smart Family\nE-Scooter",
    description:
      "Designed for performance, safety, and smart connectivity. A powerful electric mobility solution built for Indian roads and global performance standards.",
    mainImage: scooty,
    mainImageAlt: "India’s Smart Family E-Scooter",
    thumbnails: [
      { id: "front-wheel", src: tyer, alt: "Scooter front wheel suspension detail" },
      { id: "rear-exhaust", src: backTyer, alt: "Scooter rear wheel and motor detail" },
    ],
    thumbnailCaption: "Find The Best Deals On Top\nConditions Care",
    theme: "light",
    hasCutoutShape: true,
    hasExplorePanel: true,
    exploreLinks: [
      { id: "key-features", label: "Key Features", href: "#key-features" },
      { id: "performance-edge", label: "Performance Edge", href: "#performance-edge" },
      { id: "success-story", label: "Success Story", href: "#success-story" },
    ],
  },
];

/**
 * Custom Desktop SVG Card Shape (1383x736) with Bottom-Left Cutout
 */
const CustomCardSvgShape = ({ fill = "#FFFFFF" }) => (
  <svg
    viewBox="0 0 1383 736"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none select-none z-0"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M0 28C0 12.536 12.536 0 28 0H1355C1370.46 0 1383 12.536 1383 28V708C1383 723.464 1370.46 736 1355 736H691.5H451C435.536 736 423 723.464 423 708V482.64C423 467.176 410.464 454.64 395 454.64H28C12.536 454.64 0 442.104 0 426.64V368V28Z"
      fill={fill}
    />
  </svg>
);

/**
 * Small 8-Point Decorative Star for Brand Emblem Corners
 */
const MiniStarburst = ({ className = "" }) => (
  <svg
    viewBox="0 0 20 20"
    className={`w-2.5 h-2.5 ${className}`}
    fill="currentColor"
    aria-hidden="true"
  >
    {Array.from({ length: 8 }).map((_, idx) => (
      <line
        key={idx}
        x1="10"
        y1="1"
        x2="10"
        y2="19"
        stroke="currentColor"
        strokeWidth="1.4"
        transform={`rotate(${idx * 22.5} 10 10)`}
      />
    ))}
  </svg>
);

/**
 * Circular "OUR SERVICE" Brand Emblem (Bottom-Right of Card)
 */
const BrandEmblem = ({ isDark = false }) => {
  const textColor = isDark ? "text-white/90" : "text-black";

  return (
    <div
      className={`relative w-[116px] h-[116px] xl:w-[126px] xl:h-[126px] flex items-center justify-center select-none ${textColor}`}
      aria-label="Our Service Brand Emblem"
    >
      {/* Top Text */}
      <span className="absolute top-1.5 text-[10px] xl:text-[11px] font-normal tracking-[0.16em] uppercase font-sans">
        OUR
      </span>

      {/* Bottom Text */}
      <span className="absolute bottom-1.5 text-[10px] xl:text-[11px] font-normal tracking-[0.16em] uppercase font-sans">
        OUR
      </span>

      {/* Left Vertical Text (Reads Bottom-to-Top) */}
      <span
        className="absolute left-1 text-[10px] xl:text-[11px] font-normal tracking-[0.16em] uppercase font-sans"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
        }}
      >
        SERVICE
      </span>

      {/* Right Vertical Text (Reads Top-to-Bottom) */}
      <span
        className="absolute right-1 text-[10px] xl:text-[11px] font-normal tracking-[0.16em] uppercase font-sans"
        style={{
          writingMode: "vertical-rl",
        }}
      >
        SERVICE
      </span>

      {/* 4 Corner Decorative Stars */}
      <MiniStarburst className="absolute top-[16px] left-[22px]" />
      <MiniStarburst className="absolute top-[16px] right-[22px]" />
      <MiniStarburst className="absolute bottom-[16px] left-[22px]" />
      <MiniStarburst className="absolute bottom-[16px] right-[22px]" />

      {/* Center 24-Ray Sunburst Symbol */}
      <svg
        viewBox="0 0 60 60"
        className="w-[42px] h-[42px] xl:w-[46px] xl:h-[46px]"
        aria-hidden="true"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <line
            key={i}
            x1="30"
            y1="3"
            x2="30"
            y2="57"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
            transform={`rotate(${i * 11.25} 30 30)`}
          />
        ))}
        <circle cx="30" cy="30" r="4.5" fill="currentColor" />
      </svg>
    </div>
  );
};

/**
 * Right-Side Product Detail Thumbnail Card
 */
const ProductThumbnail = ({ src, alt, shouldReduceMotion, accentColor = "#FF6B35" }) => {
  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative w-[135px] sm:w-[148px] xl:w-[154px] h-[94px] sm:h-[104px] xl:h-[108px] rounded-[16px] bg-black overflow-hidden shadow-md group cursor-pointer"
    >
      <motion.img
        src={src}
        alt={alt}
        whileHover={shouldReduceMotion ? {} : { scale: 1.06 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full h-full object-cover object-center"
      />

      {/* Top-Left Circular Arrow Badge with Cutout Notch Effect */}
      <div
        className="absolute top-1.5 left-1.5 w-6 h-6 rounded-full flex items-center justify-center shadow-sm z-10 transition-transform duration-200 group-hover:scale-105"
        style={{ backgroundColor: accentColor }}
      >
        <ArrowUpLeft className="w-3.5 h-3.5 text-black stroke-[2.2]" />
      </div>
    </motion.div>
  );
};

/**
 * Bottom-Left Orange "Explore More" Cutout Panel
 */
const ExploreMorePanel = ({ links, shouldReduceMotion }) => {
  return (
    <div
      className="w-full lg:w-[30.15%] lg:h-[36.28%] lg:absolute lg:bottom-0 lg:left-0 z-20 rounded-[22px] bg-[#FF6B35] p-5 sm:p-6 lg:px-6 lg:py-5 flex items-center justify-between overflow-hidden"
      style={{
        boxShadow:
          "inset -18px -18px 1px 0px rgba(0, 0, 0, 0.30), 0px 4px 4px 0px rgba(255, 107, 53, 0.33)",
      }}
    >
      {/* Left Vertical Outlined "Explore More" Heading */}
      <div className="flex items-center justify-center pl-1 sm:pl-2 pr-3 select-none">
        <span
          className="text-[24px] sm:text-[27px] xl:text-[29px] font-bold tracking-wide uppercase leading-none whitespace-nowrap"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            color: "transparent",
            WebkitTextStroke: "1.15px rgba(255, 255, 255, 0.92)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Explore More
        </span>
      </div>

      {/* Right Stacked Feature Action Pills */}
      <div className="flex-1 flex flex-col justify-center items-start gap-3 sm:gap-3.5 pl-2 sm:pl-4 pr-3">
        {links.map((link, index) => {
          const widthClasses =
            index === 1
              ? "w-full max-w-[198px]"
              : "w-full max-w-[168px]";

          return (
            <motion.a
              key={link.id}
              href={link.href}
              whileHover={shouldReduceMotion ? {} : { x: 4 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className={`${widthClasses} flex items-center justify-between px-3.5 py-1.5 rounded-[7px] bg-[#FF6E38] border border-white/15 text-white text-[11px] xl:text-[12px] font-normal tracking-tight shadow-[0_3px_4px_rgba(0,0,0,0.28)] hover:bg-[#ff7a47] transition-colors`}
            >
              <span className="truncate pr-2">{link.label}</span>
              <CircleArrowRight className="w-3.5 h-3.5 text-white/95 shrink-0 stroke-[1.8]" />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

/**
 * Reusable Product Card Component
 */
const ProductCard = ({ product, shouldReduceMotion }) => {
  const isDark = product.theme === "dark";
  const accentColor = isDark ? "#A3CD35" : "#FF6B35";

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative w-full max-w-[1383px] mx-auto ${
        product.hasCutoutShape
          ? "lg:aspect-[1383/736] bg-white lg:bg-transparent rounded-[28px] lg:rounded-none p-6 sm:p-10 lg:p-0"
          : "lg:min-h-[680px] bg-[#202020] rounded-[28px] p-6 sm:p-10 lg:p-14"
      }`}
    >
      {/* Desktop Exact Custom SVG Cutout Shape for Card 1 */}
      {product.hasCutoutShape && <CustomCardSvgShape fill="#FFFFFF" />}

      {/* Concentric Circular Backdrop Layer */}
      <div
        className={`hidden lg:block absolute inset-0 pointer-events-none z-[1] overflow-hidden ${
          product.hasCutoutShape ? "rounded-[28px]" : "rounded-[28px]"
        }`}
      >
        <div
          className="absolute top-1/2 left-[60.5%] -translate-x-1/2 -translate-y-1/2 w-[520px] xl:w-[665px] aspect-square rounded-full flex items-center justify-center"
          style={{
            backgroundColor: isDark
              ? "rgba(163, 205, 53, 0.05)"
              : "rgba(255, 238, 232, 0.55)",
          }}
        >
          <div
            className="w-[72%] aspect-square rounded-full flex items-center justify-center"
            style={{
              backgroundColor: isDark
                ? "rgba(163, 205, 53, 0.08)"
                : "rgba(255, 226, 216, 0.65)",
            }}
          >
            <div
              className="w-[62%] aspect-square rounded-full"
              style={{
                backgroundColor: isDark
                  ? "rgba(163, 205, 53, 0.12)"
                  : "rgba(255, 214, 200, 0.75)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Card Content Wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col lg:block">
        {/* Upper-Left Product Title & Description */}
        <div
          className={`${
            product.hasCutoutShape
              ? "lg:absolute lg:top-[10.5%] lg:left-[4.6%] lg:w-[34%]"
              : "lg:w-[38%] lg:pt-4"
          } z-20`}
        >
          <h3
            className={`text-[28px] sm:text-[34px] xl:text-[42px] font-medium leading-[1.18] tracking-tight whitespace-pre-line ${
              isDark ? "text-[#A3CD35]" : "text-[#3D3D3D]"
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {product.title}
          </h3>
          <p
            className={`mt-4 text-[13px] sm:text-[14px] xl:text-[14.5px] leading-[1.5] font-normal max-w-[460px] ${
              isDark ? "text-gray-300" : "text-[#525252]"
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {product.description}
          </p>
        </div>

        {/* Center-Right Main Product Image */}
        <div
          className={`relative my-8 lg:my-0 flex items-center justify-center ${
            product.hasCutoutShape
              ? "lg:absolute lg:top-[7.8%] lg:left-[44.5%] lg:w-[37.5%] lg:h-[72%]"
              : "lg:absolute lg:top-1/2 lg:left-[54%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[38%] lg:h-[72%]"
          } z-20 pointer-events-none`}
        >
          {/* Mobile / Tablet Circular Background Fallback */}
          <div
            className="lg:hidden absolute w-[280px] sm:w-[360px] aspect-square rounded-full flex items-center justify-center -z-10"
            style={{
              backgroundColor: isDark
                ? "rgba(163, 205, 53, 0.06)"
                : "rgba(255, 238, 232, 0.65)",
            }}
          >
            <div
              className="w-[72%] aspect-square rounded-full flex items-center justify-center"
              style={{
                backgroundColor: isDark
                  ? "rgba(163, 205, 53, 0.1)"
                  : "rgba(255, 224, 213, 0.75)",
              }}
            >
              <div
                className="w-[62%] aspect-square rounded-full"
                style={{
                  backgroundColor: isDark
                    ? "rgba(163, 205, 53, 0.14)"
                    : "rgba(255, 210, 195, 0.85)",
                }}
              />
            </div>
          </div>

          <motion.img
            src={product.mainImage}
            alt={product.mainImageAlt}
            animate={
              shouldReduceMotion
                ? { y: 0 }
                : {
                    y: [0, -7, 0],
                  }
            }
            transition={
              shouldReduceMotion
                ? {}
                : {
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[495px] max-h-[500px] object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,0.12)]"
          />
        </div>

        {/* Right Column: Stacked Thumbnails, Caption, and Brand Emblem */}
        <div
          className={`flex flex-col sm:flex-row lg:flex-col items-center justify-between gap-6 ${
            product.hasCutoutShape
              ? "lg:absolute lg:top-[19%] lg:right-[2.2%] lg:bottom-[5.5%]"
              : "lg:absolute lg:top-[14%] lg:right-[3.5%] lg:bottom-[8%]"
          } z-20`}
        >
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex flex-row lg:flex-col gap-3.5">
              {product.thumbnails.map((thumb) => (
                <ProductThumbnail
                  key={thumb.id}
                  src={thumb.src}
                  alt={thumb.alt}
                  shouldReduceMotion={shouldReduceMotion}
                  accentColor={accentColor}
                />
              ))}
            </div>

            <p
              className={`mt-2.5 text-[10px] leading-[1.28] font-normal whitespace-pre-line text-center lg:text-left ${
                isDark ? "text-gray-400" : "text-[#676767]"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {product.thumbnailCaption}
            </p>
          </div>

          <div className="mt-2 lg:mt-auto self-center">
            <BrandEmblem isDark={isDark} />
          </div>
        </div>

        {/* Mobile & Tablet Explore More Panel */}
        {product.hasExplorePanel && (
          <div className="mt-6 lg:hidden">
            <ExploreMorePanel
              links={product.exploreLinks}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>
        )}
      </div>

      {/* Desktop Explore More Panel */}
      {product.hasExplorePanel && (
        <div className="hidden lg:block">
          <ExploreMorePanel
            links={product.exploreLinks}
            shouldReduceMotion={shouldReduceMotion}
          />
        </div>
      )}
    </motion.article>
  );
};

/**
 * Main Products Section Component
 */
const Product = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="products"
      className="w-full bg-[#000000] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      <div className="max-w-[1383px] mx-auto">
        {/* Section Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-12 px-1">
          <h2
            className="text-[32px] sm:text-[38px] lg:text-[42px] font-medium italic tracking-tight leading-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="text-white">Our Innovative </span>
            <span className="text-[#FF6B35]">Products</span>
          </h2>

          <p
            className="text-white/95 italic text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.45] max-w-[380px] font-normal md:mr-8 lg:mr-24"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explore our range of innovative products designed to simplify and
            enhance everyday living.
          </p>
        </div>

        {/* Product Cards Stack (Only the Smart E-Scooter card is mapped) */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {PRODUCTS_DATA.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
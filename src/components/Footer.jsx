import React, { useState } from "react";

/**
 * Clean SVG Social Icons (LinkedIn, Facebook, Instagram, YouTube)
 * Eliminates missing export errors from lucide-react.
 */
const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
  </svg>
);

/**
 * Navigation & Links Configuration
 */
const QUICK_LINKS = [
  { id: "nav-home", label: "Home", href: "#home" },
  { id: "nav-about", label: "About Us", href: "#about" },
  { id: "nav-products", label: "Products", href: "#products" },
  { id: "nav-faq", label: "FAQ", href: "#faq" },
  { id: "nav-contact", label: "Contact", href: "#testimonials" },
];

const PRODUCT_LINKS = [
  { id: "prod-ionizer", label: "Alkaline Ionizer", href: "#products" },
  { id: "prod-scooter", label: "Family E-Scooter", href: "#products" },
  { id: "prod-milkish", label: "Milkish Animal Feed", href: "#products" },
  { id: "prod-switch", label: "Smart Switch System", href: "#products" },
];

const SOCIAL_LINKS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "#linkedin",
    Icon: LinkedinIcon,
    isHighlighted: false,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "#facebook",
    Icon: FacebookIcon,
    isHighlighted: true, // Vivid orange circular background matching the screenshot
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "#instagram",
    Icon: InstagramIcon,
    isHighlighted: false,
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "#youtube",
    Icon: YoutubeIcon,
    isHighlighted: false,
  },
];

/**
 * ShagunPro Brand Logo Component
 */
const ShagunBrandLogo = ({ logoSrc }) => {
  if (logoSrc) {
    return (
      <img
        src={logoSrc}
        alt="Shagun Pro"
        className="h-12 sm:h-14 w-auto object-contain select-none"
      />
    );
  }

  return (
    <div className="inline-flex items-center gap-3 select-none">
      <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 64 64"
          className="w-full h-full overflow-visible"
          aria-hidden="true"
        >
          {[0, 72, 144, 216, 288].map((angle, idx) => (
            <g key={idx} transform={`rotate(${angle} 32 32)`}>
              <text
                x="32"
                y="13"
                textAnchor="middle"
                fill="#EC7029"
                fontSize="13.5"
                fontFamily="Georgia, 'Times New Roman', serif"
                fontWeight="bold"
              >
                sp
              </text>
            </g>
          ))}
          <polygon
            points="32,25 33.8,29.5 38.5,29.8 34.8,32.9 36,37.5 32,34.8 28,37.5 29.2,32.9 25.5,29.8 30.2,29.5"
            fill="#E51C23"
          />
        </svg>
      </div>

      <span
        className="text-[30px] sm:text-[34px] tracking-tight leading-none font-normal"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        <span className="text-[#E51C23]">Shagun</span>
        <span className="text-[#EC7029]">Pro</span>
      </span>
    </div>
  );
};

/**
 * Main Footer Component
 */
const Footer = ({ logoSrc, onSubscribe }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSmoothScroll = (e, href) => {
    if (!href || !href.startsWith("#") || href === "#") return;
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setStatus({
        type: "error",
        message: "Please enter your email address.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/;
    if (!emailRegex.test(trimmed)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (typeof onSubscribe === "function") {
      try {
        await onSubscribe(trimmed);
        setStatus({
          type: "success",
          message: "Thank you! Your email has been registered.",
        });
        setEmail("");
      } catch (err) {
        setStatus({
          type: "error",
          message: "Unable to process request right now. Please try again.",
        });
      }
      return;
    }

    setStatus({
      type: "success",
      message: "Email validated! Subscription is ready to be connected.",
    });
    setEmail("");
  };

  return (
    <footer
      id="footer"
      className="w-full bg-[#070403] text-white overflow-hidden"
    >
      <div
        className="w-full  mx-auto p-[1px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 107, 53, 0.36) 0%, #000000 100%)",
        }}
      >
        <div
          className="w-full lg:min-h-[432px] bg-[#0B0604] px-6 sm:px-10 lg:px-[72px] pt-12 sm:pt-14 lg:pt-[58px] pb-8 lg:pb-10 flex flex-col justify-between"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(236, 112, 41, 0.05), rgba(236, 112, 41, 0.05))",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            
            {/* Column 1 */}
            <div className="sm:col-span-2 lg:col-span-5 flex flex-col items-start pr-0 lg:pr-12">
              <a
                href="#home"
                onClick={(e) => handleSmoothScroll(e, "#home")}
                className="focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6B35] rounded-sm"
              >
                <ShagunBrandLogo logoSrc={logoSrc} />
              </a>

              <p
                className="mt-5 text-[12px] sm:text-[12.5px] text-[#9E9B98] font-normal leading-[1.6] max-w-[300px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Trusted solutions, innovative products, nationwide support, and
                reliable service for smarter, better everyday living.
              </p>

              <div className="mt-7 flex items-center gap-3">
                {SOCIAL_LINKS.map(({ id, label, href, Icon, isHighlighted }) => (
                  <a
                    key={id}
                    href={href}
                    aria-label={label}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isHighlighted
                        ? "bg-[#FF4D00] text-white hover:bg-[#ff621f] shadow-[0_2px_10px_rgba(255,77,0,0.35)]"
                        : "bg-[#4A4746] text-white/90 hover:bg-[#FF6B35] hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4 stroke-[1.8]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="lg:col-span-2 flex flex-col items-start">
              <h3
                className="text-[15px] sm:text-[16px] font-semibold text-white tracking-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Quick Links
              </h3>

              <ul className="mt-5 flex flex-col gap-3.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-[12.5px] sm:text-[13px] text-[#9E9B98] hover:text-[#FF6B35] transition-colors duration-200 font-normal"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="lg:col-span-2 flex flex-col items-start">
              <h3
                className="text-[15px] sm:text-[16px] font-semibold text-white tracking-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Products
              </h3>

              <ul className="mt-5 flex flex-col gap-3.5">
                {PRODUCT_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-[12.5px] sm:text-[13px] text-[#9E9B98] hover:text-[#FF6B35] transition-colors duration-200 font-normal"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 */}
            <div className="sm:col-span-2 lg:col-span-3 flex flex-col items-start w-full">
              <h3
                className="text-[15px] sm:text-[16px] font-semibold text-white tracking-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Contact us
              </h3>

              <form
                onSubmit={handleFormSubmit}
                noValidate
                className="mt-5 w-full max-w-[340px]"
              >
                <div className="flex items-stretch w-full h-[46px] rounded-[6px] overflow-hidden bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#FF6B35]">
                  <label htmlFor="footer-email-input" className="sr-only">
                    Enter email address
                  </label>
                  <input
                    id="footer-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status.message) setStatus({ type: "", message: "" });
                    }}
                    placeholder="Enter email address"
                    className="flex-1 min-w-0 px-4 text-[12.5px] sm:text-[13px] text-black placeholder-[#8E8E93] bg-white focus:outline-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                  <button
                    type="submit"
                    className="px-6 bg-[#FF4400] hover:bg-[#e03c00] active:bg-[#c93600] text-white text-[13px] font-medium tracking-wide transition-colors duration-200 shrink-0 cursor-pointer"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    send
                  </button>
                </div>

                {status.message && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`mt-2 text-[11.5px] leading-snug ${
                      status.type === "error"
                        ? "text-[#FF6B35]"
                        : "text-emerald-400"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-10 lg:mt-12 pt-6 border-t border-white/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11.5px] sm:text-[12px] text-[#D4D4D8]">
            <p
              className="text-center sm:text-left font-normal tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              © Copyright 2026, All Rights Reserved by Shagun Pro
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#privacy-policy"
                className="hover:text-[#FF6B35] transition-colors duration-200"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Privacy Policy
              </a>
              <a
                href="#terms-conditions"
                className="hover:text-[#FF6B35] transition-colors duration-200"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
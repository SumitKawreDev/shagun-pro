import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

/**
 * FAQ Data Configuration
 * Question 1 uses the exact supplied answer from FAQS.jpg.
 * Questions 2–5 use clean, clearly marked placeholders ready for approved project content.
 */
const FAQ_DATA = [
  {
    id: "faq-1",
    question: "Are Shagun Pro products certified?",
    answer:
      "Yes. Our products undergo strict quality and safety testing aligned with industry standards",
  },
  {
    id: "faq-2",
    question: "Do you provide nationwide service?",
    answer: "[Placeholder: Insert approved answer for nationwide service here.]",
  },
  {
    id: "faq-3",
    question: "Is dealership available?",
    answer: "[Placeholder: Insert approved answer for dealership availability here.]",
  },
  {
    id: "faq-4",
    question: "Do you provide installation support?",
    answer: "[Placeholder: Insert approved answer for installation support here.]",
  },
  {
    id: "faq-5",
    question: "How can I book a demo or test ride?",
    answer: "[Placeholder: Insert approved answer for booking a demo or test ride here.]",
  },
];

/**
 * Individual Accordion Item Component
 */
const FAQAccordionItem = ({
  item,
  isOpen,
  onToggle,
  isLast,
  shouldReduceMotion,
}) => {
  return (
    <div
      className={`w-full ${
        !isLast ? "border-b border-[#FF6B35]/20" : ""
      }`}
    >
      {/* Question Row Button (Full width, keyboard accessible) */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`panel-${item.id}`}
        id={`button-${item.id}`}
        className="w-full py-6 sm:py-7 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6B35] rounded-sm group cursor-pointer"
      >
        <span
          className={`text-[17px] sm:text-[20px] lg:text-[22px] font-normal tracking-tight leading-snug transition-colors duration-200 ${
            isOpen
              ? "text-[#FF6B35]"
              : "text-[#96969D] group-hover:text-white/90"
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {item.question}
        </span>

        {/* Right Chevron Icon */}
        <span className="shrink-0 pr-2 sm:pr-6 flex items-center justify-center">
          {isOpen ? (
            <ChevronUp
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B35] stroke-[1.6] transition-transform duration-200"
              aria-hidden="true"
            />
          ) : (
            <ChevronDown
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#96969D] group-hover:text-white/90 stroke-[1.6] transition-transform duration-200"
              aria-hidden="true"
            />
          )}
        </span>
      </button>

      {/* Expandable Answer Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`panel-${item.id}`}
            role="region"
            aria-labelledby={`button-${item.id}`}
            initial={
              shouldReduceMotion
                ? { opacity: 1, height: "auto" }
                : { opacity: 0, height: 0 }
            }
            animate={{ opacity: 1, height: "auto" }}
            exit={
              shouldReduceMotion
                ? { opacity: 0, height: 0 }
                : { opacity: 0, height: 0 }
            }
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 sm:pb-7 pr-4 sm:pr-10 text-[14px] sm:text-[15.5px] lg:text-[16px] text-[#96969D] font-normal leading-[1.48]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/**
 * Main FAQ Section Component
 * Specs: 1440px max-width, 782px min-height on desktop, #0E0D0C background, id="faq"
 */
const FAQ = ({ items = FAQ_DATA }) => {
  const shouldReduceMotion = useReducedMotion();
  // First item ("faq-1") is open by default matching FAQS.jpg
  const [openId, setOpenId] = useState(items[0]?.id || "faq-1");

  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="w-full bg-[#0E0D0C] text-white scroll-mt-20 lg:scroll-mt-24 overflow-hidden"
    >
      {/* Centered 1440x782 Desktop Container */}
      <div className="w-full max-w-[1440px] lg:min-h-[710px] mx-auto px-5 sm:px-10 lg:px-[76px] py-14 sm:py-20 lg:py-[72px] flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12 xl:gap-16">
          
          {/* Left Column: Vertically Centered Heading & Subtext */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full lg:w-[42%] xl:w-[480px] flex flex-col justify-center shrink-0"
          >
            <h2
              className="text-[36px] sm:text-[48px] xl:text-[56px] 2xl:text-[62px] font-medium italic text-white leading-[1.16] tracking-tight"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Frequently Asked
              <br />
              Question
            </h2>

            <p
              className="mt-4 sm:mt-5 text-[16px] sm:text-[20px] xl:text-[22px] text-[#96969D] font-normal leading-[1.36] max-w-[440px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Find quick answers to common questions about our products.
            </p>
          </motion.div>

          {/* Right Column: Large Black Rounded FAQ Accordion Panel */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="w-full lg:w-[58%] xl:max-w-[784px] bg-[#000000] rounded-[20px] px-6 sm:px-10 lg:px-12 py-6 sm:py-9 lg:py-10 shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
          >
            <div className="flex flex-col">
              {items.map((item, idx) => (
                <FAQAccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => handleToggle(item.id)}
                  isLast={idx === items.length - 1}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
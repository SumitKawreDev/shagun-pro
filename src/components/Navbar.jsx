import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
// TODO: point to your existing logo file (orange icon + "ShagunPro")
import logo from "../assets/logo/logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Contact us", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

const signInCls =
  "inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full border border-orange-400 bg-gradient-to-r from-orange-500 to-red-600 text-xs text-white transition hover:brightness-110 xl:h-10 xl:text-sm";
const signUpCls =
  "inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full border border-white/60 text-xs text-white transition hover:border-[#FF6B35] hover:text-[#FF6B35] xl:h-10 xl:text-sm";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // Smooth scroll handler that works reliably on mobile, tablet, and desktop
  const handleNavClick = (e, href) => {
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();

    const wasMenuOpen = menuOpen;
    closeMenu();

    const targetId = href.slice(1);

    const scrollToSection = () => {
      // If navigating to #home and no #home ID exists, scroll to the very top
      if (targetId === "home" && !document.getElementById("home")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", href);
        return;
      }

      // Support #testimonials (with fallback to #contact if present)
      const targetElement =
        document.getElementById(targetId) ||
        (targetId === "testimonials" ? document.getElementById("contact") : null);

      if (targetElement) {
        // Account for fixed navbar height (64px on mobile/tablet, 72px on lg+)
        const navbarHeight = window.innerWidth >= 1024 ? 72 : 64;
        const elementTop =
          targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = Math.max(0, elementTop - navbarHeight);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        window.history.pushState(null, "", href);
      }
    };

    // On mobile/tablet, wait briefly for the menu close state to settle so scroll isn't cancelled
    if (wasMenuOpen) {
      setTimeout(scrollToSection, 150);
    } else {
      scrollToSection();
    }
  };

  // close on Escape and when resizing up to desktop
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeMenu();
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = (e) => e.matches && closeMenu();
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur-md text-white">
        <nav className="mx-auto flex h-16 w-full max-w-[1920px] items-center justify-between gap-4 px-4 sm:px-6 md:px-8 lg:h-[72px] lg:px-10 xl:px-14 2xl:px-20">
          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex shrink-0 items-center"
            aria-label="Shagun Pro Home"
          >
            <img
              src={logo}
              alt="Shagun Pro"
              className="h-7 w-auto object-contain sm:h-8 lg:h-9 2xl:h-10"
            />
          </a>

          {/* DESKTOP LINKS + AUTH (lg+) */}
          <div className="ml-auto hidden min-w-0 items-center gap-5 lg:flex xl:gap-8 2xl:gap-10">
            <ul className="flex items-center gap-4 xl:gap-7 2xl:gap-9">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-classy-vogue whitespace-nowrap text-xs text-white transition-colors duration-200 hover:text-[#FF6B35] xl:text-[13px] 2xl:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex shrink-0 items-center gap-2 xl:gap-3">
              <a
                href="#signin"
                className={`${signInCls} font-classy-vogue w-24 xl:w-32 2xl:w-36`}
              >
                Sign in
              </a>
              <a
                href="#signup"
                className={`${signUpCls} font-classy-vogue w-24 xl:w-32 2xl:w-36`}
              >
                Sign up
              </a>
            </div>
          </div>

          {/* HAMBURGER (below lg) */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-[#FF6B35] hover:text-[#FF6B35] lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* MOBILE / TABLET MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="absolute left-0 top-full z-50 w-full overflow-hidden border-b border-white/10 bg-[#080605] shadow-xl lg:hidden"
            >
              <div className="mx-auto flex max-w-xl flex-col px-4 pb-5 pt-2 sm:px-6 md:max-w-none md:px-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="border-b border-white/10 py-3.5 text-sm text-neutral-300 transition-colors hover:text-[#FF6B35]"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="mt-5 grid grid-cols-2 gap-3 md:max-w-sm">
                  <a
                    href="#signin"
                    onClick={closeMenu}
                    className={`${signInCls} h-10 text-sm`}
                  >
                    Sign in
                  </a>
                  <a
                    href="#signup"
                    onClick={closeMenu}
                    className={`${signUpCls} h-10 text-sm`}
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer matching fixed header height (64px mobile/tablet, 72px desktop) so initial page content isn't covered */}
      <div className="h-16 w-full shrink-0 lg:h-[72px]" aria-hidden="true" />
    </>
  );
}
import { Link } from "react-router-dom";
import { Menu, X, CheckCircle, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { labelKey: "home", href: "/" },
    { labelKey: "services", href: "/#services" },
    { labelKey: "contact", href: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(0,46,93,0.97)" : "#002e5d",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(245,192,51,0.2)" : "2px solid rgba(255,255,255,0.12)",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.35)" : "none",
      }}
    >
      {/* Top bar */}
      <div className="hidden md:block text-xs px-4 py-2 bg-black/80">
        <div className="section-container flex items-center justify-end gap-6 text-white">
          <a href="tel:+27113707400" className="flex items-center gap-2 hover:text-lime-400 transition-colors">
            <Phone size={14} />
            +27 (0)11 370 7400
          </a>
          <a href="mailto:info@ehl.co.za" className="flex items-center gap-2 hover:text-lime-400 transition-colors">
            <Mail size={14} />
            info@ehl.co.za
          </a>
          <div className="ml-4 pl-4 border-l border-white/20">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fe5a5727af6f64ca390a031056c6f518e%2F22231a0a7ccb4663a1d73bac829b3c82?format=webp&width=800"
              alt="EHL Engineering Group"
              className="h-12"
            />
          </Link>

          {/* ISO / BBBEE badges */}
          <div className="hidden md:flex items-center gap-6">
            {(["iso9001", "level1BBBEE"] as const).map((key) => (
              <div key={key} className="flex items-center gap-2">
                <CheckCircle size={20} className="text-lime-400" />
                <span className="text-xs font-semibold text-white">{t(key)}</span>
              </div>
            ))}
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-white">
            {navItems.map((item) => (
              item.href.startsWith("/") && !item.href.includes("#") ? (
                <Link
                  key={item.labelKey}
                  to={item.href}
                  className="text-sm font-medium hover:text-lime-400 transition-colors"
                >
                  {t(item.labelKey)}
                </Link>
              ) : (
                <a
                  key={item.labelKey}
                  href={item.href}
                  className="text-sm font-medium hover:text-lime-400 transition-colors"
                >
                  {t(item.labelKey)}
                </a>
              )
            ))}
            <LanguageSwitcher />
            <Link
              to="/contact"
              className="ml-4 px-6 py-2 font-bold text-sm rounded transition-all hover:opacity-90"
              style={{ backgroundColor: "#f5c033", color: "#002e5d" }}
            >
              {t("getInTouch")}
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-lime-400 transition-colors"
            aria-label={t("toggleNav")}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-6 space-y-1 pt-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.labelKey}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06, duration: 0.2 }}
                  >
                    {item.href.startsWith("/") && !item.href.includes("#") ? (
                      <Link
                        to={item.href}
                        className="block text-sm font-medium text-white hover:text-lime-400 transition-colors py-3 px-2 border-b border-white/10"
                        onClick={() => setIsOpen(false)}
                      >
                        {t(item.labelKey)}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="block text-sm font-medium text-white hover:text-lime-400 transition-colors py-3 px-2 border-b border-white/10"
                        onClick={() => setIsOpen(false)}
                      >
                        {t(item.labelKey)}
                      </a>
                    )}
                  </motion.div>
                ))}
                <div className="pt-4 px-2 flex items-center justify-between">
                  <LanguageSwitcher />
                  <Link
                    to="/contact"
                    className="px-6 py-2 font-bold text-sm rounded"
                    style={{ backgroundColor: "#f5c033", color: "#002e5d" }}
                    onClick={() => setIsOpen(false)}
                  >
                    {t("getInTouch")}
                  </Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

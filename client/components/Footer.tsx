import { Link } from "react-router-dom";
import { Linkedin, Phone, Mail, Copyright } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { labelKey: "home", href: "/" },
      { labelKey: "services", href: "#services" },
      { labelKey: "contact", href: "/contact" },
    ],
  };

  return (
    <footer className="text-cream-100" style={{ backgroundColor: "#002e5d" }}>
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe5a5727af6f64ca390a031056c6f518e%2F22231a0a7ccb4663a1d73bac829b3c82?format=webp&width=800"
                alt="EHL Engineering Group"
                className="h-12 object-contain"
              />
            </div>
            <div className="mb-6 space-y-2">
              <div className="text-sm text-cream-300">
                <a
                  href="tel:+27113707400"
                  className="flex items-center gap-2 hover:text-lime-400 transition-colors"
                >
                  <Phone size={16} />
                  +27 (0)11 370 7400
                </a>
              </div>
              <div className="text-sm text-cream-300">
                <a
                  href="mailto:info@ehl.co.za"
                  className="flex items-center gap-2 hover:text-lime-400 transition-colors"
                >
                  <Mail size={16} />
                  info@ehl.co.za
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">{t("company")}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.labelKey}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-sm hover:text-lime-400 transition-colors"
                    >
                      {t(link.labelKey)}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm hover:text-lime-400 transition-colors"
                    >
                      {t(link.labelKey)}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-cream-300 flex items-center gap-2">
            <Copyright size={16} />
            <p>
              {t("copyright")} {currentYear}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/ehlconsultingengineers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-300 hover:text-lime-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="/privacy-terms"
              className="text-sm text-cream-300 hover:text-lime-400 transition-colors"
            >
              {t("privacyTerms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

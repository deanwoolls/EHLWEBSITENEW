import { useLanguage } from "@/hooks/useLanguage";
import { Language } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import { useState } from "react";

const LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "zh", name: "中文 (Chinese)", flag: "🇨🇳" },
  { code: "es", name: "Español (Spanish)", flag: "🇪🇸" },
  { code: "fr", name: "Français (French)", flag: "🇫🇷" },
  { code: "de", name: "Deutsch (German)", flag: "🇩🇪" },
  { code: "ar", name: "العربية (Arabic)", flag: "🇸🇦" },
  { code: "pt", name: "Português (Portuguese)", flag: "🇵🇹" },
  { code: "ru", name: "Русский (Russian)", flag: "🇷🇺" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = LANGUAGES.find((l) => l.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded hover:bg-navy-700 transition-colors text-sm font-medium"
        title="Change Website Language"
      >
        <Globe size={18} />
        <span>{currentLanguage?.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-navy-900 border border-navy-700 rounded shadow-lg z-50">
          <div className="p-2">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded text-left text-sm transition-colors ${
                  language === lang.code
                    ? "bg-lime-400 text-navy-900 font-semibold"
                    : "text-cream-100 hover:bg-navy-800"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <div className="flex-1">
                  <div className="font-medium">{lang.name}</div>
                </div>
                {language === lang.code && (
                  <span className="text-navy-900">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

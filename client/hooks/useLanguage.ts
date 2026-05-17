import { useContext } from "react";
import { LanguageContext, Language } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return {
    language: context.language,
    setLanguage: context.setLanguage,
    t: (key: string) => t(key, context.language),
  };
};

import React, { createContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "zh" | "fr" | "de" | "es" | "ar" | "pt" | "ru";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const VALID: Language[] = ["en", "zh", "fr", "de", "es", "ar", "pt", "ru"];
    const saved = localStorage.getItem("language");
    return VALID.includes(saved as Language) ? (saved as Language) : "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

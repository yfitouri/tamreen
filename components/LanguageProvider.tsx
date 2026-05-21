"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Language = "en" | "ar";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  isArabic: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("tamreen-language") as Language | null;

    if (savedLanguage === "ar" || savedLanguage === "en") {
      setLanguageState(savedLanguage);
      document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("tamreen-language", newLanguage);
    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLanguage;
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isArabic: language === "ar",
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
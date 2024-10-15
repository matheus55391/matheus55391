"use client";
import { useEffect, useState } from "react";
import { Locale } from "@/config";
import { getUserLocale, setUserLocale } from "@/services/i18n/locale";
import { startTransition } from "react";

const useLocale = () => {
  const [locale, setLocale] = useState<Locale | null>(null);

  useEffect(() => {
    const loadLocale = async () => {
      const userLocale = await getUserLocale();
      setLocale(userLocale as Locale);
    };

    loadLocale();
  }, []);

  const switchLocale = (value: Locale) => {
    startTransition(() => {
      setUserLocale(value);
      setLocale(value); 
    });
  };

  return { locale, switchLocale };
};

export default useLocale;

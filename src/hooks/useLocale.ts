"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale as useNextIntlLocale } from "next-intl";
import { Locale } from "@/config";
import { setUserLocale } from "@/services/i18n/locale";

const useLocale = () => {
  const locale = useNextIntlLocale() as Locale;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (value: Locale) => {
    if (value === locale) return;

    startTransition(async () => {
      await setUserLocale(value);
      router.refresh();
    });
  };

  return { locale, switchLocale, isPending };
};

export default useLocale;

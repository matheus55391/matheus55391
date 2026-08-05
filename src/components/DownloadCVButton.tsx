"use client";

import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import useLocale from "@/hooks/useLocale";

const DownloadCVButton = () => {
  const t = useTranslations();
  const { locale } = useLocale();
  const href =
    locale === "en" ? "/MatheusSantiago-EN.pdf" : "/MatheusSantiago-PTBR.pdf";

  return (
    <a href={href} download>
      <Button className="w-fit space-x-2 rounded-full px-5">
        <Download className="w-4 h-4" />
        <span>{t("main.me.cv")}</span>
      </Button>
    </a>
  );
};

export default DownloadCVButton;

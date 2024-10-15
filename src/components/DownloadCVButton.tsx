"use client";

import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const DownloadCVButton = () => {
  const t = useTranslations();
  return (
    <a
      href="/curriculo_matheus.pdf"
      download
    >
      <Button className="w-fit space-x-2">
        <Download className="w-4 h-4"/>
        <span>{t("main.me.cv")}</span>
      </Button>
    </a>
  );
};

export default DownloadCVButton;

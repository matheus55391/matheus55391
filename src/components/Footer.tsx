"use client";

import { useTranslations } from "next-intl";

export function FooterComponent() {
  const t = useTranslations();

  return (
    <footer className="border-t border-border/60 mt-8">
      <div className="max-w-5xl mx-auto px-4 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Matheus Felipe. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}

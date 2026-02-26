"use client";

import { Github, Linkedin, Mail, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

export function FooterComponent() {
  const t = useTranslations();
  const [copied, setCopied] = useState(false);

  const handleEmail = () => {
    navigator.clipboard.writeText("matheus.felipe55391@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
    window.location.href = "mailto:matheus.felipe55391@gmail.com";
  };

  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-lg font-bold">Matheus Felipe</h2>
            <p className="text-sm text-muted-foreground">{t("main.me.role")}</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/matheus-felipe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/matheus-felipe-vieira-santiago"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <button
              onClick={handleEmail}
              title="matheus.felipe55391@gmail.com"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors border border-border hover:border-primary/50"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-primary text-xs font-medium">Copiado!</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline text-xs">matheus.felipe55391@gmail.com</span>
                </>
              )}
            </button>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Matheus Felipe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


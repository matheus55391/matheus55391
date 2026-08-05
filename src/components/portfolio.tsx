"use client";

import { useState } from "react";
import {
  Code2,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  MonitorSmartphone,
  Database,
  Infinity,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import US from "country-flag-icons/react/3x2/US";
import BR from "country-flag-icons/react/3x2/BR";
import useLocale from "@/hooks/useLocale";
import DownloadCVButton from "./DownloadCVButton";
import { FooterComponent } from "./Footer";
import {
  ReactIcon,
  NextjsIcon,
  NodejsIcon,
  NestjsIcon,
  DotnetIcon,
} from "./TechIcons";
import { Locale } from "@/config";

const GITHUB = "https://github.com/matheus55391";
const LINKEDIN =
  "https://www.linkedin.com/in/matheus-felipe-vieira-santiago";
const EMAIL = "matheus.felipe55391@gmail.com";

const skillPills = [
  {
    key: "github",
    href: `${GITHUB}?tab=repositories`,
    color: "bg-[#161b22] text-white border-white/10",
    icon: <Github className="w-4 h-4" />,
  },
  {
    key: "react",
    color: "bg-cyan-950/60 text-cyan-300 border-cyan-500/30",
    icon: <ReactIcon className="w-4 h-4" />,
  },
  {
    key: "next",
    color: "bg-zinc-900 text-zinc-100 border-zinc-600/40",
    icon: <NextjsIcon className="w-4 h-4" />,
  },
  {
    key: "node",
    color: "bg-emerald-950/50 text-emerald-300 border-emerald-500/30",
    icon: <NodejsIcon className="w-4 h-4" />,
  },
  {
    key: "nestjs",
    color: "bg-red-950/50 text-red-300 border-red-500/30",
    icon: <NestjsIcon className="w-4 h-4" />,
  },
  {
    key: "dotnet",
    color: "bg-violet-950/50 text-violet-300 border-violet-500/30",
    icon: <DotnetIcon className="w-4 h-4" />,
  },
] as const;

type ProjectKey =
  | "clinical"
  | "makebio"
  | "order"
  | "voting"
  | "seguros"
  | "github";

type Project = {
  key: ProjectKey;
  href: string;
  accent: string;
  featured?: boolean;
  preview: string;
};

const productionProjects: Project[] = [
  {
    key: "clinical",
    href: "https://clinicalsystem.com.br",
    accent: "#E5484D",
    featured: true,
    preview: "clinical",
  },
  {
    key: "makebio",
    href: "https://www.makebio.com.br",
    accent: "#7C5CFC",
    preview: "makebio",
  },
];

const researchProjects: Project[] = [
  {
    key: "order",
    href: "https://github.com/matheus55391/order-system-design",
    accent: "#3B82F6",
    preview: "order",
  },
  {
    key: "voting",
    href: "https://github.com/matheus55391/voting-system",
    accent: "#F59E0B",
    preview: "voting",
  },
  {
    key: "seguros",
    href: "https://github.com/matheus55391/desafio-seguros-hexagonal-dotnet",
    accent: "#512BD4",
    preview: "order",
  },
  {
    key: "github",
    href: `${GITHUB}?tab=repositories`,
    accent: "#A855F7",
    preview: "github",
  },
];

const experienceKeys = ["spesia", "penseapp", "atos", "avonale"] as const;
const bulletCounts: Record<(typeof experienceKeys)[number], number> = {
  spesia: 4,
  penseapp: 3,
  atos: 2,
  avonale: 2,
};

function GlowLines({ side }: { side: "left" | "right" }) {
  const lines =
    side === "left"
      ? [
          { top: "12%", color: "#E5484D", width: "90px", delay: "0s" },
          { top: "22%", color: "#7C5CFC", width: "140px", delay: "0.4s" },
          { top: "38%", color: "#22C55E", width: "70px", delay: "0.8s" },
          { top: "58%", color: "#3B82F6", width: "110px", delay: "1.2s" },
          { top: "72%", color: "#F59E0B", width: "55px", delay: "0.2s" },
        ]
      : [
          { top: "18%", color: "#7C5CFC", width: "120px", delay: "0.3s" },
          { top: "32%", color: "#E5484D", width: "80px", delay: "0.7s" },
          { top: "48%", color: "#22D3EE", width: "150px", delay: "1.1s" },
          { top: "64%", color: "#A855F7", width: "60px", delay: "0.5s" },
          { top: "78%", color: "#22C55E", width: "100px", delay: "0.9s" },
        ];

  return (
    <div
      className={`glow-lines hidden lg:block ${side === "left" ? "left-0" : "right-0"}`}
      aria-hidden
    >
      {lines.map((line, i) => (
        <span
          key={i}
          className="glow-line"
          style={{
            top: line.top,
            width: line.width,
            background: line.color,
            boxShadow: `0 0 12px ${line.color}`,
            animationDelay: line.delay,
            ...(side === "left"
              ? { left: 0, borderRadius: "0 999px 999px 0" }
              : { right: 0, borderRadius: "999px 0 0 999px" }),
          }}
        />
      ))}
    </div>
  );
}

function ProjectPreview({
  type,
  accent,
  name,
}: {
  type: string;
  accent: string;
  name: string;
}) {
  return (
    <div
      className="relative h-44 sm:h-48 overflow-hidden"
      style={{ background: `linear-gradient(145deg, ${accent}33, #111 70%)` }}
    >
      <div
        className="absolute inset-3 rounded-lg border shadow-2xl overflow-hidden bg-[#0a0a0a]"
        style={{ borderColor: `${accent}55` }}
      >
        <div
          className="h-7 flex items-center gap-1.5 px-3 border-b"
          style={{ borderColor: `${accent}33`, background: `${accent}18` }}
        >
          <span className="w-2 h-2 rounded-full bg-red-400/80" />
          <span className="w-2 h-2 rounded-full bg-amber-400/80" />
          <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-[10px] text-white/40 truncate">{name}</span>
        </div>
        <div className="p-3 space-y-2">
          {type === "clinical" && (
            <>
              <div className="h-3 w-2/3 rounded" style={{ background: accent }} />
              <div className="grid grid-cols-3 gap-2 mt-3">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="h-12 rounded-md bg-white/5 border border-white/10"
                  />
                ))}
              </div>
              <div className="h-2 w-full rounded bg-white/10" />
              <div className="h-2 w-4/5 rounded bg-white/10" />
            </>
          )}
          {type === "makebio" && (
            <div className="flex flex-col items-center gap-2 pt-2">
              <div
                className="w-10 h-10 rounded-full border-2"
                style={{ borderColor: accent, background: `${accent}40` }}
              />
              <div className="h-2 w-20 rounded bg-white/20" />
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="h-6 w-36 rounded-full border border-white/10 bg-white/5"
                />
              ))}
            </div>
          )}
          {(type === "order" || type === "voting" || type === "pokenext") && (
            <>
              <div className="flex gap-2">
                <div
                  className="h-16 w-16 rounded-md shrink-0"
                  style={{ background: `${accent}55` }}
                />
                <div className="flex-1 space-y-2 pt-1">
                  <div className="h-2.5 w-3/4 rounded bg-white/20" />
                  <div className="h-2 w-full rounded bg-white/10" />
                  <div className="h-2 w-5/6 rounded bg-white/10" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="h-10 rounded bg-white/5 border border-white/10" />
                <div className="h-10 rounded bg-white/5 border border-white/10" />
              </div>
            </>
          )}
          {type === "github" && (
            <div className="flex flex-col items-center justify-center h-28 gap-3">
              <Github className="w-10 h-10 text-white/50" />
              <div className="h-2 w-24 rounded bg-white/15" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium text-primary tracking-wide mb-2">
      {children}
    </p>
  );
}

export function PortfolioComponent() {
  const t = useTranslations();
  const { locale, switchLocale: changeLanguage, isPending } = useLocale();
  const [copied, setCopied] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const handleEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
    window.location.href = `mailto:${EMAIL}`;
  };

  const selectLocale = (value: Locale) => {
    setLangOpen(false);
    changeLanguage(value);
  };

  const renderProjectCard = (project: Project) => (
    <Link
      key={project.key}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group rounded-2xl border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 ${
        project.featured
          ? "sm:col-span-2 border-primary/40"
          : "border-border"
      }`}
      style={
        project.featured
          ? { boxShadow: `0 0 0 1px ${project.accent}33` }
          : undefined
      }
    >
      <ProjectPreview
        type={project.preview}
        accent={project.accent}
        name={t(`main.projects.items.${project.key}.name`)}
      />
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
            {t(`main.projects.items.${project.key}.name`)}
          </h3>
          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t(`main.projects.items.${project.key}.description`)}
        </p>
        {project.featured && (
          <span className="inline-block mt-3 text-xs font-medium text-primary">
            clinicalsystem.com.br
          </span>
        )}
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Sticky header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="font-bold text-lg tracking-tight">
              {t("header.title")}
            </span>
            <nav className="hidden md:flex gap-1 ml-2">
              {(
                [
                  ["#projects", "header.projects"],
                  ["#services", "header.services"],
                  ["#experience", "header.experience"],
                  ["#contact", "header.contact"],
                ] as const
              ).map(([href, key]) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm px-3 py-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {t(key)}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <Popover open={langOpen} onOpenChange={setLangOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="px-2 rounded-xl border border-border hover:bg-secondary"
                  disabled={isPending}
                  aria-label="Language"
                >
                  {locale === "en" ? (
                    <US title="English" className="w-5 h-4 rounded-sm" />
                  ) : (
                    <BR title="Português" className="w-5 h-4 rounded-sm" />
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col gap-1 w-fit p-2 bg-card border-border">
                <Button
                  className="gap-2 justify-start"
                  variant="ghost"
                  size="sm"
                  disabled={isPending || locale === "en"}
                  onClick={() => selectLocale("en")}
                >
                  <US title="English" className="w-5 h-4 rounded-sm" />
                  <span>EN-US</span>
                </Button>
                <Button
                  className="gap-2 justify-start"
                  variant="ghost"
                  size="sm"
                  disabled={isPending || locale === "pt"}
                  onClick={() => selectLocale("pt")}
                >
                  <BR title="Português" className="w-5 h-4 rounded-sm" />
                  <span>PT-BR</span>
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </header>

      <main>
        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 py-20 text-center">
          <GlowLines side="left" />
          <GlowLines side="right" />

          <div className="relative z-10 max-w-2xl mx-auto animate-fade-up">
            <div className="relative inline-block mb-8">
              <div
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px]"
                style={{
                  background:
                    "conic-gradient(from 180deg, #E5484D, #7C5CFC, #22C55E, #3B82F6, #E5484D)",
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Matheus Felipe"
                  className="w-full h-full rounded-full object-cover bg-background"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center border-[3px] border-background shadow-lg">
                <Code2 className="w-4 h-4 text-white" />
              </span>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground mb-2">
              {t("main.me.hello")}{" "}
              <span className="text-primary font-semibold">
                {t("main.me.name")}
              </span>{" "}
              {t("main.me.andIAm")}
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5">
              {t("main.me.role")}
            </h1>

            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-3">
              {t("main.about.description")}
            </p>
            <p className="text-muted-foreground/80 text-sm leading-relaxed max-w-lg mx-auto mb-8">
              {t("main.about.summary")}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {skillPills.map((pill) => {
                const content = (
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5 ${pill.color}`}
                  >
                    {pill.icon}
                    {t(`main.skills.${pill.key}`)}
                  </span>
                );
                return "href" in pill && pill.href ? (
                  <Link
                    key={pill.key}
                    href={pill.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </Link>
                ) : (
                  <span key={pill.key}>{content}</span>
                );
              })}
            </div>

            <DownloadCVButton />
          </div>

          <a
            href="#projects"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-float"
            aria-label={t("main.me.scroll")}
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </section>

        {/* ── Projects ───────────────────────────────────────────────── */}
        <section id="projects" className="scroll-mt-20 px-4 py-24">
          <div className="max-w-5xl mx-auto space-y-20">
            <div>
              <div className="text-center mb-10">
                <SectionLabel>{t("main.projects.productionLabel")}</SectionLabel>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  {t("main.projects.productionTitle")}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {productionProjects.map(renderProjectCard)}
              </div>
            </div>

            <div>
              <div className="text-center mb-10">
                <SectionLabel>{t("main.projects.researchLabel")}</SectionLabel>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  {t("main.projects.researchTitle")}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {researchProjects.map(renderProjectCard)}
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ───────────────────────────────────────────────── */}
        <section id="services" className="scroll-mt-20 px-4 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>{t("main.services.label")}</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {t("main.services.title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(
                [
                  {
                    key: "web",
                    icon: (
                      <MonitorSmartphone className="w-7 h-7 text-violet-400" />
                    ),
                  },
                  {
                    key: "api",
                    icon: <Database className="w-7 h-7 text-amber-400" />,
                  },
                  {
                    key: "devops",
                    icon: <Infinity className="w-7 h-7 text-emerald-400" />,
                  },
                ] as const
              ).map((service) => (
                <div
                  key={service.key}
                  className="rounded-2xl border border-border bg-card p-6 hover:border-white/20 transition-colors"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-lg mb-1">
                    {t(`main.services.items.${service.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`main.services.items.${service.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ─────────────────────────────────────────────── */}
        <section id="experience" className="scroll-mt-20 px-4 py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>{t("main.experience.label")}</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {t("main.experience.title")}
              </h2>
            </div>

            <div className="space-y-4">
              {experienceKeys.map((key) => (
                <article
                  key={key}
                  className="rounded-2xl border border-border bg-card p-5 sm:p-6 hover:border-white/20 transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-base">
                        {t(`main.experience.positions.${key}.title`)}
                      </h3>
                      <p className="text-primary text-sm font-medium">
                        {t(`main.experience.positions.${key}.enterprise`)}
                        {" · "}
                        <span className="text-muted-foreground font-normal">
                          {t(`main.experience.positions.${key}.type`)}
                        </span>
                      </p>
                    </div>
                    <div className="text-right text-xs text-muted-foreground space-y-0.5">
                      <p>{t(`main.experience.positions.${key}.duration`)}</p>
                      <p>{t(`main.experience.positions.${key}.location`)}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {Array.from({ length: bulletCounts[key] }, (_, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-0.5 shrink-0">▹</span>
                        <span>
                          {t(`main.experience.positions.${key}.bullets.${i}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(["postgrad", "associate"] as const).map((key) => (
                <div
                  key={key}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <p className="text-xs font-semibold text-primary mb-1">
                    {t(`main.education.${key}.level`)}
                  </p>
                  <h4 className="font-semibold mb-1">
                    {t(`main.education.${key}.degree`)}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t(`main.education.${key}.institution`)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {t(`main.education.${key}.duration`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ────────────────────────────────────────────────── */}
        <section
          id="contact"
          className="relative scroll-mt-20 px-4 py-24 overflow-hidden"
        >
          <GlowLines side="left" />
          <GlowLines side="right" />

          <div className="relative z-10 max-w-md mx-auto text-center">
            <SectionLabel>{t("main.contact.label")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              {t("main.contact.title")}
            </h2>
            <p className="text-muted-foreground mb-10">
              {t("main.contact.subtitle")}
            </p>

            <div className="flex flex-col gap-3">
              {(
                [
                  {
                    label: t("main.contact.linkedin"),
                    href: LINKEDIN,
                    icon: <Linkedin className="w-5 h-5" />,
                  },
                  {
                    label: t("main.contact.github"),
                    href: GITHUB,
                    icon: <Github className="w-5 h-5" />,
                  },
                ] as const
              ).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-5 py-4 font-medium hover:border-white/25 hover:bg-secondary transition-all"
                >
                  <span className="absolute left-5">{item.icon}</span>
                  {item.label}
                  <ArrowUpRight className="absolute right-5 w-4 h-4 text-sky-400" />
                </Link>
              ))}

              <button
                type="button"
                onClick={handleEmail}
                className="relative flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-5 py-4 font-medium hover:border-white/25 hover:bg-secondary transition-all"
              >
                <span className="absolute left-5">
                  {copied ? (
                    <Check className="w-5 h-5 text-primary" />
                  ) : (
                    <Mail className="w-5 h-5" />
                  )}
                </span>
                {copied ? t("main.contact.copied") : t("main.contact.email")}
                <ArrowUpRight className="absolute right-5 w-4 h-4 text-sky-400" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <FooterComponent />
    </div>
  );
}

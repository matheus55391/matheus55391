"use client";

import { useState } from "react";
import {
  Moon,
  Sun,
  Briefcase,
  GraduationCap,
  User,
  Terminal,
  Layers,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Globe,
  ExternalLink,
  ChevronRight,
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

// ─── Static data ──────────────────────────────────────────────────────────────

const skillCategories = [
  {
    key: "frontend",
    labelKey: "main.skills.frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "React Native (Expo)", "Angular"],
    colorClass:
      "text-cyan-400 bg-cyan-950/50 border-cyan-800/50 hover:border-cyan-400 hover:bg-cyan-900/40",
    headerColor: "text-cyan-400",
  },
  {
    key: "backend",
    labelKey: "main.skills.backend",
    skills: ["Node.js (NestJS)", "C# (.NET Core)", "ASP.NET", "Python (FastAPI)", "Python (Flask)"],
    colorClass:
      "text-emerald-400 bg-emerald-950/50 border-emerald-800/50 hover:border-emerald-400 hover:bg-emerald-900/40",
    headerColor: "text-emerald-400",
  },
  {
    key: "databases",
    labelKey: "main.skills.databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL Server", "Oracle"],
    colorClass:
      "text-violet-400 bg-violet-950/50 border-violet-800/50 hover:border-violet-400 hover:bg-violet-900/40",
    headerColor: "text-violet-400",
  },
  {
    key: "devops",
    labelKey: "main.skills.devops",
    skills: ["Docker", "Kubernetes (GKE)", "CI/CD", "Git", "Kafka", "RabbitMQ", "Firebase", "Keycloak"],
    colorClass:
      "text-orange-400 bg-orange-950/50 border-orange-800/50 hover:border-orange-400 hover:bg-orange-900/40",
    headerColor: "text-orange-400",
  },
  {
    key: "architecture",
    labelKey: "main.skills.architecture",
    skills: [
      "Clean Architecture",
      "DDD",
      "SOLID",
      "Design Patterns",
      "Microservices",
      "CQRS",
      "Event-Driven",
      "Nx Monorepo",
    ],
    colorClass:
      "text-pink-400 bg-pink-950/50 border-pink-800/50 hover:border-pink-400 hover:bg-pink-900/40",
    headerColor: "text-pink-400",
  },
];

const experienceKeys = [
  "spesia",
  "penseappsoftware",
  "altatech",
  "atos_capital",
  "avonale",
  "implanti",
] as const;

const bulletCounts: Record<string, number> = {
  spesia: 4,
  penseappsoftware: 3,
  altatech: 2,
  atos_capital: 2,
  avonale: 3,
  implanti: 2,
};

// ─── Section heading helper ────────────────────────────────────────────────────

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-primary/10 text-primary">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

export function PortfolioComponent() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const t = useTranslations();
  const { locale, switchLocale: changeLanguage } = useLocale();

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

        {/* ── Sticky header ────────────────────────────────────────────── */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
          <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-bold text-lg tracking-tight">{t("header.title")}</span>
              <nav className="hidden md:flex gap-1 ml-4">
                {[
                  ["#about", t("main.about.title")],
                  ["#skills", t("main.skills.title")],
                  ["#experience", t("main.experience.title")],
                  ["#education", t("main.education.title")],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="text-sm px-3 py-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    {label}
                  </a>
                ))}
                <Link
                  href="https://github.com/matheus55391?tab=repositories"
                  target="_blank"
                  className="flex items-center gap-1 text-sm px-3 py-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {t("header.projects")} <ExternalLink className="w-3 h-3" />
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="sm" className="px-2">
                    {locale === "en" ? (
                      <US title="English" className="w-5 h-4" />
                    ) : (
                      <BR title="Português" className="w-5 h-4" />
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="flex flex-col gap-1 w-fit p-2">
                  <Button
                    className="gap-2 justify-start"
                    variant="ghost"
                    size="sm"
                    onClick={() => changeLanguage("en")}
                  >
                    <US title="English" className="w-5 h-4" />
                    <span>EN-US</span>
                  </Button>
                  <Button
                    className="gap-2 justify-start"
                    variant="ghost"
                    size="sm"
                    onClick={() => changeLanguage("pt")}
                  >
                    <BR title="Português" className="w-5 h-4" />
                    <span>PT-BR</span>
                  </Button>
                </PopoverContent>
              </Popover>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="px-2"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-12 space-y-20">

          {/* ── Hero ─────────────────────────────────────────────────────── */}
          <section className="py-6">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
              <div className="flex-1 space-y-5">
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <span className="inline-block w-8 h-px bg-primary" />
                  {t("main.me.role")}
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                  Matheus Felipe
                  <br />
                  <span className="text-primary">Vieira Santiago</span>
                </h1>

                <p className="text-muted-foreground max-w-xl leading-relaxed">
                  {t("main.about.description")}
                </p>

                {/* Contact chips */}
                <div className="flex flex-wrap gap-3 pt-1">
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    Brazil
                  </span>
                  <a
                    href="mailto:matheus.felipe55391@gmail.com"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    matheus.felipe55391@gmail.com
                  </a>
                </div>

                {/* Social links */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    {
                      href: "https://github.com/matheus-felipe",
                      icon: <Github className="w-4 h-4" />,
                      label: "github.com/matheus-felipe",
                    },
                    {
                      href: "https://www.linkedin.com/in/matheus-felipe-vieira-santiago",
                      icon: <Linkedin className="w-4 h-4" />,
                      label: "linkedin.com/in/matheus-felipe-vieira-santiago",
                    },
                    {
                      href: "https://matheus-felipe.dev",
                      icon: <Globe className="w-4 h-4" />,
                      label: "matheus-felipe.dev",
                    },
                  ].map(({ href, icon, label }) => (
                    <Link
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground border border-border rounded-lg px-3 py-2 hover:border-primary/50 hover:bg-secondary hover:text-foreground transition-all"
                    >
                      {icon}
                      <span className="hidden sm:inline">{label}</span>
                    </Link>
                  ))}
                </div>

                <div className="pt-1">
                  <DownloadCVButton />
                </div>
              </div>

              {/* Avatar */}
              <div className="shrink-0">
                <div className="w-44 h-44 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden flex items-center justify-center">
                  <img
                    src="/profile.jpg"
                    alt="Matheus Felipe"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ── About ────────────────────────────────────────────────────── */}
          <section id="about" className="scroll-mt-20">
            <SectionHeader icon={<User className="w-5 h-5" />} title={t("main.about.title")} />
            <div className="mt-6 p-6 rounded-xl border border-border bg-card">
              <p className="text-muted-foreground leading-relaxed">{t("main.about.summary")}</p>
            </div>
          </section>

          {/* ── Skills ───────────────────────────────────────────────────── */}
          <section id="skills" className="scroll-mt-20">
            <SectionHeader icon={<Layers className="w-5 h-5" />} title={t("main.skills.title")} />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillCategories.map((cat) => (
                <div key={cat.key} className="p-5 rounded-xl border border-border bg-card">
                  <h4 className={`text-sm font-semibold mb-3 ${cat.headerColor}`}>
                    {t(cat.labelKey)}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs font-medium border rounded-md px-2.5 py-1 cursor-default transition-all ${cat.colorClass}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Experience ───────────────────────────────────────────────── */}
          <section id="experience" className="scroll-mt-20">
            <SectionHeader
              icon={<Briefcase className="w-5 h-5" />}
              title={t("main.experience.title")}
            />
            <div className="mt-6 relative space-y-4">
              {/* vertical timeline line */}
              <div className="hidden md:block absolute left-5 top-5 bottom-5 w-px bg-border" />

              {experienceKeys.map((key) => (
                <div key={key} className="relative md:pl-14">
                  {/* timeline dot */}
                  <div className="hidden md:flex absolute left-[13px] top-5 w-5 h-5 rounded-full border-2 border-primary bg-background items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  <div className="p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-semibold text-base">
                          {t(`main.experience.positions.${key}.title`)}
                        </h4>
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

                    <ul className="space-y-1.5 mt-2">
                      {Array.from({ length: bulletCounts[key] }, (_, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{t(`main.experience.positions.${key}.bullets.${i}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Education ────────────────────────────────────────────────── */}
          <section id="education" className="scroll-mt-20">
            <SectionHeader
              icon={<GraduationCap className="w-5 h-5" />}
              title={t("main.education.title")}
            />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {(["postgrad", "associate"] as const).map((key) => (
                <div
                  key={key}
                  className="p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
                >
                  <p className="text-xs font-semibold text-primary mb-1">
                    {t(`main.education.${key}.level`)}
                  </p>
                  <h4 className="font-semibold text-base mb-1">
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
          </section>

        </main>

        <FooterComponent />
      </div>
    </div>
  );
}

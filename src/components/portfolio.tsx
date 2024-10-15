"use client";

import { useState } from "react";
import {
  Moon,
  Sun,
  Briefcase,
  GraduationCap,
  CodeXml,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "use-intl";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import US from "country-flag-icons/react/3x2/US";
import BR from "country-flag-icons/react/3x2/BR";
import useLocale from "@/hooks/useLocale";
import DownloadCVButton from "./DownloadCVButton";
import { FooterComponent } from "./Footer";

export function PortfolioComponent() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const t = useTranslations();
  const { locale, switchLocale: changeLanguage } = useLocale();

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <main className="max-w-4xl mx-auto  space-y-8">
        <header className="p-4 flex justify-between items-center border-b">
          <div className="flex items-center space-x-4">
            <CodeXml />
            <h1 className="text-2xl font-bold">{t("header.title")}</h1>
            <Link href="https://github.com/matheus55391?tab=repositories">
              <Button variant="ghost" className="text-lg">
                {t("header.projects")}
              </Button>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Popover>
              <PopoverTrigger>
                <Button variant="ghost">
                  {locale === "en" ? (
                    <US title="United States" className="w-8 h-8" />
                  ) : (
                    <BR title="United States" className="w-8 h-8" />
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="mx-4 flex flex-col space-y-4 w-fit">
                <Button
                  className="text-lg space-x-2 p-4"
                  variant="ghost"
                  onClick={() => changeLanguage("en")}
                >
                  <US title="United States" className="w-8 h-8" />
                  <span className="text-lg font-medium">EN-US</span>
                </Button>
                <Button
                  className="text-lg space-x-2 p-4"
                  variant="ghost"
                  onClick={() => changeLanguage("pt")}
                >
                  <BR title="United States" className="w-8 h-8" />
                  <span className="text-lg font-medium">PT-BR</span>
                </Button>
              </PopoverContent>
            </Popover>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full ${
                isDarkMode ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </header>
        <section className="flex flex-col-reverse md:flex-row items-center justify-between space-x-8 md:space-x-0 space-y-8 md:space-y-0 mb-12 p-2 md:p-0">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">{t("main.me.name")}</h2>
            <p className="text- mb-4">{t("main.me.role")}</p>
            <DownloadCVButton />
          </div>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHJyY2ua1Ih7A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709564099217?e=1734566400&v=beta&t=tQjbF10MUpemCVamstmcL4wasjnpS7gYJ0Qjw5A-VEI"
            alt="Matheus Felipe"
            className="rounded-full md:w-1/4"
          />
        </section>

        <section className="mb-10 px-2 md:p-0">
          <h3 className="text-2xl font-bold mb-4 flex w-fit border-b-4 text-justify">
            <User className="mr-2" /> {t("main.about.title")}
          </h3>
          <p className="mb-4 ml-8 text-lg decoration-current ">
            {t("main.about.description")}
          </p>
        </section>

        <section className="mb-12 p-2 md:p-0">
          <h3 className="text-2xl font-bold mb-4 flex items-center w-fit border-b-4">
            <GraduationCap className="mr-2" /> {t("main.education.title")}
          </h3>
          <div className="ml-8">
            <p className="text-lg font-normal">{t("main.education.level")}</p>
            <h4 className="text-xl font-semibold">
              {t("main.education.degree")}
            </h4>
            <p className="text-lg">{t("main.education.institution")}</p>
            <p className="text-sm text-gray-600">
              {t("main.education.duration")}
            </p>
          </div>
        </section>

        <section className="mb-12 p-2 md:p-0">
          <h3 className="text-2xl font-bold mb-4 flex items-center border-b-4 w-fit">
            <Briefcase className="mr-2" /> {t("main.experience.title")}
          </h3>
          <div className="space-y-6 ml-8">
            <div>
              <h4 className="text-xl font-semibold">
                {t("main.experience.positions.penseappsoftware.title")}
              </h4>
              <p className="text-lg">
                penseappsoftware ·{" "}
                {t("main.experience.positions.penseappsoftware.type")}
              </p>
              <p className="text-sm text-gray-600">
                {t("main.experience.positions.penseappsoftware.duration")}
              </p>
              <p>{t("main.experience.positions.penseappsoftware.location")}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">
                {t("main.experience.positions.altatech.title")}
              </h4>
              <p className="text-lg">
                Altatech Soluções em Tecnologia ·{" "}
                {t("main.experience.positions.altatech.type")}
              </p>
              <p className="text-sm text-gray-600">
                {t("main.experience.positions.altatech.duration")}
              </p>
              <p>{t("main.experience.positions.altatech.location")}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">
                {t("main.experience.positions.atos_capital.title")}
              </h4>
              <p className="text-lg">
                Atos Capital ·{" "}
                {t("main.experience.positions.atos_capital.type")}
              </p>
              <p className="text-sm text-gray-600">
                {t("main.experience.positions.atos_capital.duration")}
              </p>
              <p>{t("main.experience.positions.atos_capital.location")}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">
                {t("main.experience.positions.avonale.title")}
              </h4>
              <p className="text-lg">
                Avonale WorkPlace ·{" "}
                {t("main.experience.positions.avonale.type")}
              </p>
              <p className="text-sm text-gray-600">
                {t("main.experience.positions.avonale.duration")}
              </p>
              <p>{t("main.experience.positions.avonale.location")}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">
                {t("main.experience.positions.implanti.title")}
              </h4>
              <p className="text-lg">
                Implanti Solucoes ·{" "}
                {t("main.experience.positions.implanti.type")}
              </p>
              <p className="text-sm text-gray-600">
                {t("main.experience.positions.implanti.duration")}
              </p>
              <p>{t("main.experience.positions.implanti.location")}</p>
            </div>
          </div>
        </section>
        <FooterComponent isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}

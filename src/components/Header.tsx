import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const { language, setLanguage, direction, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
  <div className="container mx-auto px-4">
    {/* NOTE: don't reverse the whole row */}
    <div className="flex items-center justify-between h-20">
      {/* Logo stays left always */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/images/DiracSystems.png"
            alt="Dirac Systems"
            className="w-[110px] h-auto rounded-xl shadow-lg border-4 border-white bg-white object-contain transform transition-transform duration-300 hover:scale-110"
          />
        </Link>
      </div>

      {/* Desktop nav – only mirror spacing for RTL */}
      <nav
        className={`hidden md:flex gap-6 lg:gap-10 ml-auto mr-[10%] font-semibold ${
          direction === "rtl" ? "flex-row-reverse space-x-reverse" : ""
        }`}
      >
        <Link to="/" className="text-[#006b99] hover:underline">
          {t("home")}
        </Link>

        <div className="relative group">
          <Link to="/about" className="text-[#006b99] hover:underline">
            {t("aboutUs")}
          </Link>

          <div
            className={`absolute mt-2 w-40 bg-[#006b99] text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all ${
              direction === "rtl" ? "right-0" : "left-0"
            }`}
          >
            <Link to="/about" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">
              {t("aboutUs")}
            </Link>
            <Link to="/career" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">
              {t("career")}
            </Link>
            <Link to="/clients" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">
              {t("ourClients")}
            </Link>
            <Link to="/partners" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">
              {t("ourPartners")}
            </Link>
            <Link to="/contact" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">
              {t("contactUs")}
            </Link>
          </div>
        </div>

        <Link to="/products" className="text-[#006b99] hover:underline">
          {t("products")}
        </Link>
        <Link to="/solutions" className="text-[#006b99] hover:underline">
          {t("serviceSolutions")}
        </Link>
        <Link to="/blog" className="text-[#006b99] hover:underline">
          {t("blog")}
        </Link>
      </nav>

      {/* Right side controls */}
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setLanguage(language === "en" ? "ar" : "en")}
          className="border-secondary text-secondary hover:bg-secondary hover:text-white"
        >
          {language === "en" ? "العربية" : "English"}
        </Button>

        <button
          className="md:hidden p-2 text-secondary"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </div>

    {/* mobile menu ... unchanged */}
  </div>
</header>

  );
};

export default Header;

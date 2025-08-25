"use client"

import type React from "react"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useLanguage } from "./LanguageContext"
import { Button } from "@/components/ui/button"

const Header: React.FC = () => {
  const { language, setLanguage, direction, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className=" px-4">
        {/* NOTE: don't reverse the whole row */}
        <div className="flex items-center justify-between h-20">
          {/* Logo stays left always */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img
                src="/images/DiracSystems.png"
                alt="Dirac Systems"
                className="w-[110px] h-auto rounded-xl shadow-lg border-4 border-white bg-white object-contain transform transition-transform duration-300 hover:scale-110"
              />
            </Link>
          </div>

          {/* Desktop nav – only mirror spacing for RTL */}
          <nav
            className={`hidden  xl:ml-[-30rem] md:flex flex-1 justify-center lg:justify-center gap-6 lg:gap-10 font-semibold ${direction === "rtl" ? "flex-row-reverse space-x-reverse" : ""
              }`}
          >
            <Link to="/" className="text-[#006b99] hover:underline">
              {t("home")}
            </Link>
            <div className="relative group">

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `relative font-bold p-1 transition-all duration-300 
                  ${isActive
                    ? "text-[#006b99] bg-[#fff] after:w-full"
                    : "text-[#006b99]   after:w-0 hover:after:w-full"} 
                  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#006b99] after:transition-all after:duration-300`
                }
              >
                {t("aboutUs")}

              </NavLink>
              <div
                className={`absolute left-0 mt-2 w-40 bg-[#006b99] text-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 delay-100 ${direction === "rtl" ? "right-0" : "left-0"
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
            <div className="relative group">

              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `relative font-bold p-1 transition-all duration-300 
                  ${isActive
                    ? "text-[#006b99] bg-[#fff] after:w-full"
                    : "text-[#006b99]  hover:bg-[#fff] after:w-0 hover:after:w-full"} 
                  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#006b99] after:transition-all after:duration-300`
                }
              >
                {t("products")}

              </NavLink>
              <div
                className={`absolute mt-2 w-40 bg-[#006b99] text-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 delay-100 ${direction === "rtl" ? "right-0" : "left-0"
                  }`}
              >
                <Link to="/products/erp" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">
                  {t("ERP Enterprise")}
                </Link>
                <Link to="/products/erp-standard" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">
                  {t("ERP Standard")}
                </Link>
                {/* <Link to="/" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">
                  {t("Enterprise")}
                </Link> */}
                <Link to="/products/sass" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">
                  {t("SaaS")}
                </Link>
                <Link
                  to="/products/vansales"
                  className="block px-4 py-2 hover:bg-white hover:text-[#006b99]"
                >
                  {t("Van Sales")}
                </Link>
              </div>
            </div>
            <div className="relative group">

              <NavLink
                to="/solutions"
                className={({ isActive }) =>
                  `relative font-bold p-1 transition-all duration-300 
                  ${isActive
                    ? "text-[#006b99] bg-[#fff] after:w-full"
                    : "text-[#006b99]  hover:bg-[#fff] after:w-0 hover:after:w-full"} 
                  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#006b99] after:transition-all after:duration-300`
                }
              >
                {t("serviceSolutions")}

              </NavLink>
              <div
                className={`absolute mt-2 w-40 bg-[#006b99] text-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 delay-100 ${direction === "rtl" ? "right-0" : "left-0"
                  }`}
              >
                <Link
                  to="/solutions/digital-transformation"
                  className="block px-4 py-2 hover:bg-white hover:text-[#006b99]"
                >
                  {t("Digital Transformation")}
                </Link>

                <Link to="/solutions/system-integration" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">
                  {t("System Integration")}
                </Link>
              </div>
            </div>
            {/* <Link to="/blog" className="text-[#006b99] hover:underline">
              {t("blog")}
            </Link> */}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            {/* <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-secondary text-secondary hover:bg-secondary hover:text-white"
            >
              {language === "en" ? "العربية" : "English"}
            </Button> */}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-secondary"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div
          className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col space-y-2 py-6 px-4 z-40 ${direction === "rtl" ? "text-right" : "text-left"
            }`}
        >
          {/* Home */}
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#006b99] font-semibold hover:underline"
          >
            {t("home")}
          </Link>

          {/* About Us Dropdown */}
          <details className="w-full">
            <summary className="cursor-pointer text-[#006b99] font-semibold py-2">
              {t("aboutUs")}
            </summary>
            <div className="pl-4 flex flex-col space-y-2 text-[#ffd300]">
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                {t("aboutUs")}
              </Link>
              <Link to="/career" onClick={() => setIsMenuOpen(false)}>
                {t("career")}
              </Link>
              <Link to="/clients" onClick={() => setIsMenuOpen(false)}>
                {t("ourClients")}
              </Link>
              <Link to="/partners" onClick={() => setIsMenuOpen(false)}>
                {t("ourPartners")}
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                {t("contactUs")}
              </Link>
            </div>
          </details>

          {/* Products Dropdown */}
          <details className="w-full">
            <summary className="cursor-pointer text-[#006b99] font-semibold py-2">
              {t("products")}
            </summary>
            <div className="pl-4 flex flex-col space-y-2 text-[#ffd300]">
              <Link to="/products/erp" onClick={() => setIsMenuOpen(false)}>
                {t("ERP Enterprise")}
              </Link>
              <Link to="/products/erp-standard" onClick={() => setIsMenuOpen(false)}>
                {t("ERP Standard")}
              </Link>
              <Link to="/products/sass" onClick={() => setIsMenuOpen(false)}>
                {t("SaaS")}
              </Link>
              <Link to="/products/vansales" onClick={() => setIsMenuOpen(false)}>
                {t("Van Sales")}
              </Link>
            </div>
          </details>

          {/* Services Dropdown */}
          <details className="w-full">
            <summary className="cursor-pointer text-[#006b99] font-semibold py-2">
              {t("serviceSolutions")}
            </summary>
            <div className="pl-4 flex flex-col space-y-2 text-[#ffd300]">
              <Link to="/solutions/digital-transformation" onClick={() => setIsMenuOpen(false)}>
                {t("Digital Transformation")}
              </Link>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                {t("System Integration")}
              </Link>
            </div>
          </details>

          {/* Blog */}
          {/* <Link
      to="/blog"
      onClick={() => setIsMenuOpen(false)}
      className="text-[#006b99] font-semibold hover:underline"
    >
      {t("blog")}
    </Link> */}
        </div>
      )}

    </header>
  )
}

export default Header

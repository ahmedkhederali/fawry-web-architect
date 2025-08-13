import Header from '@/components/Header'
import React from 'react'
import HeaderSection from './headerSection'
import AboutHeroSection from './AboutHeroSection'
import AboutTimeLineSection from './AboutTimeLineSection'
import WhyDirac from './WhyDirac'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import { useLanguage } from '@/components/LanguageContext'

export default function AboutIndex() {
    const { language } = useLanguage(); // assumed lang is 'en' or 'ar'

    return (
        <div className="pt-10">
            <SEO
                title={
                    language === 'ar'
                        ? "عن شركة ديراك سيستم - رواد التحول الرقمي"
                        : "About Dirac Systems - Digital Transformation Leaders"
                }
                description={
                    language === 'ar'
                        ? "شركة ديراك سيستم هي شركة مساهمة مصرية رائدة متخصصة في حلول البرمجيات المتقدمة للأعمال، تدفع التحول الرقمي في منطقة الشرق الأوسط وشمال إفريقيا. تأسست عام 2014 برأس مال 30 مليون جنيه مصري، وهي شركة تابعة لشركة فوري، وتقدم أنظمة ERP، والموارد البشرية، والمحاسبة لتمكين المؤسسات."
                        : "Dirac Systems is a leading Egyptian shareholder company specializing in advanced business software solutions, driving digital transformation in the MENA region. Established in 2014 with a capital of 30 million EGP, and a subsidiary of Fawry, we provide ERP, HR, and Accounting systems to empower enterprises."
                }
                keywords={
                    language === 'ar'
                        ? "ديراك سيستم, عن الشركة, حلول ERP, التحول الرقمي, برمجيات المؤسسات, نظم المعلومات, أنظمة المحاسبة, أنظمة الموارد البشرية"
                        : "Dirac Systems, About Dirac, ERP Solutions, Digital Transformation, Enterprise Software, Information Systems, Accounting Systems, HR Systems"
                }
                image="https://diraccompany.netlify.app/images/diracsystems.png"
                url="https://diraccompany.netlify.app/about"
            />

            <Header />
            <HeaderSection />
            <AboutHeroSection />
            <AboutTimeLineSection />
            <WhyDirac />
            <Footer />
        </div>
    )
}

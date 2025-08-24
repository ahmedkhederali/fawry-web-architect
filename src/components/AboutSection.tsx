import React from "react"

import { useEffect, useRef } from "react"
import { Link } from "react-router-dom";

// Counter component for animated numbers
const Counter = ({ end, duration }: { end: number; duration: number }) => {
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = countRef.current
    if (!element) return

    let start = 0
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        element.textContent = end.toLocaleString()
        clearInterval(timer)
      } else {
        element.textContent = Math.floor(start).toLocaleString()
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration])

  return <span ref={countRef}>0</span>
}

const diracDescription = `DIRAC Systems is a leading Egyptian shareholder company specializing in advanced strategic business software solutions that drive digital transformation across various organizations. Established in 2012, with a capital of 27 million EGP, DIRAC has quickly positioned itself as a pivotal player in the region's technology landscape. As a subsidiary of Fawry for Banking Technology and Electronic Payments S.A.E, DIRAC leverages robust financial backing to innovate and expand its offerings. At the forefront of digital transformation, DIRAC provides a comprehensive suite of Enterprise Resource Planning (ERP) solutions designed to enhance performance, efficiency, and competitiveness for businesses. As we continue to expand our offerings—including the recent launches of the Fawry Business HR and Accounting systems—DIRAC Systems remains focused on empowering businesses to improve products, enhance customer experiences, and enter new markets. Join us as we transform the future of business through cutting-edge digital solutions.`

export default function AboutSection() {
  const textRef = useRef<HTMLDivElement>(null)
  const direction = "ltr" // You can make this dynamic if needed

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-x-[-80px]", "translate-x-[80px]")
            entry.target.classList.add("opacity-100", "translate-x-0")
          }
        })
      },
      { threshold: 0.1 },
    )

    const textElement = document.getElementById("about-text")
    const videoElement = document.getElementById("about-video")

    if (textElement) observer.observe(textElement)
    if (videoElement) observer.observe(videoElement)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-10 bg-white" id="about">
      <div className="container md:mx-auto md:px-16">
        <div key={direction} className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-center">
          {/* === Text Section === */}
          <div id="about-text" className="transition-transform duration-1000 opacity-0 translate-x-[-80px]">
            <h2
              className="text-4xl font-bold mb-6 inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #ffd300, #006b99)",
              }}
            >
              About Our Company
            </h2>
            <div
              ref={textRef}
              className="text-[#006b99] text-base leading-relaxed font-sans tracking-wide text-justify"
            >
              {diracDescription}
            </div>
          </div>

          {/* === Video === */}
          <div id="about-video" className="transition-transform mt-11 duration-1000 opacity-0 translate-x-[80px] w-full">
            <video
              src="/icons/Software Development.mp4"
              controls
              autoPlay
              muted
              loop
              className="rounded-lg shadow-xl w-full aspect-video object-cover"
            />
          </div>
        </div>

        {/* === Counters === */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Link to ="/clients" className="group cursor-pointer">
              <div>
                <h3 className="text-3xl font-bold text-[#ffd300] mb-2 group-hover:scale-105 transition-transform">
                  <Counter end={800} duration={1500} />+
                </h3>
                <p
                  className="text-[#006b99] font-bold text-xl "
                  // style={{ textShadow: "0 0 8px #006b99" }}
                >
                  Active Customers
                </p>
              </div>
            </Link>

            <Link to="/partners" className="group cursor-pointer">
              <div>
                <h3 className="text-3xl font-bold text-[#ffd300] mb-2 group-hover:scale-105 transition-transform">
                  <Counter end={15} duration={1200} />+
                </h3>
                <p
                  className="text-[#006b99] font-bold text-xl "
                  // style={{ textShadow: "0 0 8px #006b99" }}
                >
                  Powerful Partnerships
                </p>
              </div>
            </Link>

            <div>
              <h3 className="text-3xl font-bold text-[#ffd300] mb-2">
                <Counter end={3000} duration={1800} />+
              </h3>
              <p className="text-[#006b99] font-bold text-xl" >
                Dynamic Demos
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#ffd300] mb-2">
                <Counter end={25000} duration={2000} />+
              </h3>
              <p className="text-[#006b99] font-bold text-xl" >
                User Ecosystem
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

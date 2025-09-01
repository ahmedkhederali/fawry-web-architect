"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Package, ChevronRight } from "lucide-react"

interface Release {
    id: string
    name: string
    version: string
    date: string
    shortDescription: string
    fullDescription: string
    features: string[]
    status: "released" | "upcoming" | "in-progress"
}

interface ReleaseTimelineProps {
    releases: Release[]
}

const ReleaseTimeline: React.FC<ReleaseTimelineProps> = ({ releases }) => {
    const [hoveredId, setHoveredId] = useState<string | null>(null)

    return (
        <div className="md:max-w-6xl mx-auto md:p-4 md:p-6">
            <div className="text-center mb-8 md:mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Release Timeline</h1>
                <p className="text-base md:text-lg text-gray-600">Track our product evolution and upcoming features</p>
            </div>

            <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFD300] via-[#006b99] to-[#FFD300] hidden md:block"></div>

                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFD300] via-[#006b99] to-[#FFD300] md:hidden"></div>

                <div className="space-y-6 md:space-y-8">
                    {releases.map((release, index) => {
                        const isLeft = index % 2 === 0
                        const isHovered = hoveredId === release.id

                        return (
                            <motion.div
                                key={release.id}
                                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`relative group ${isLeft ? "md:pr-8" : "md:pl-8"} md:w-1/2 ${isLeft ? "md:mr-auto" : "md:ml-auto"
                                    }`}
                            >
                                <div
                                    className={`absolute w-4 h-4 rounded-full border-4 border-white shadow-lg ${release.status === "released"
                                            ? "bg-[#FFD300]"
                                            : release.status === "in-progress"
                                                ? "bg-[#006b99]"
                                                : "bg-gray-300"
                                        } ${
                                        // Mobile: left side, Desktop: center
                                        "left-6 md:left-auto md:right-auto"
                                        } ${isLeft ? "md:-right-2" : "md:-left-2"}`}
                                ></div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    onHoverStart={() => setHoveredId(release.id)}
                                    onHoverEnd={() => setHoveredId(null)}
                                    className={`bg-white rounded-xl shadow-md border border-gray-200 p-4 md:p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-[#FFD300] ${"ml-16 md:ml-0"}`}
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                                        <div className="flex items-center gap-2 md:gap-3">
                                            <Package className="w-4 h-4 md:w-5 md:h-5 text-[#006b99]" />
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-900">{release.name}</h3>
                                            <span className="px-2 py-1 text-xs font-medium bg-[#FFD300] text-[#006b99] rounded-full">
                                                {release.version}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Calendar className="w-4 h-4" />
                                            {release.date}
                                        </div>
                                    </div>

                                    {/* Status badge */}
                                    <div className="mb-4">
                                        <span
                                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${release.status === "released"
                                                    ? "bg-green-100 text-green-700"
                                                    : release.status === "in-progress"
                                                        ? "bg-blue-100 text-blue-700"
                                                        : "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {release.status === "released"
                                                ? "✓ Released"
                                                : release.status === "in-progress"
                                                    ? "⚡ In Progress"
                                                    : "📅 Upcoming"}
                                        </span>
                                    </div>

                                    {/* Short description */}
                                    <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{release.shortDescription}</p>

                                    <AnimatePresence>
                                        {isHovered && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="border-t border-gray-100 pt-4 mt-4">
                                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Full Description</h4>
                                                    <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                                                        {release.fullDescription}
                                                    </p>

                                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Key Features</h4>
                                                    <ul className="space-y-2">
                                                        {release.features.map((feature, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm md:text-base">
                                                                <ChevronRight className="w-4 h-4 text-[#FFD300] mt-0.5 flex-shrink-0" />
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div
                                        className={`flex items-center mt-4 text-[#006b99] transition-opacity text-sm ${isHovered ? "opacity-100" : "opacity-60"
                                            }`}
                                    >
                                        <span className="font-medium">Hover for details</span>
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </div>
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ReleaseTimeline

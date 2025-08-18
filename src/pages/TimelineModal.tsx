"use client"

import type React from "react"
import { useState } from "react"
import {
  X,
  Users,
  Calendar,
  Settings,
  Shield,
  MapIcon,
  Zap,
  Smartphone,
  Database,
  Globe,
  Star,
  ArrowDown,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface TimelineItem {
  id: string
  title: string
  date: string
  description: string
  icon: React.ReactNode
  color: string
  bgColor: string
  details: string
  isComingSoon?: boolean
}

const timelineData: TimelineItem[] = [
  {
    id: "1",
    title: "Release 2.4.0",
    date: "Dec 02, 2024",
    description: "Employee Data & Attendance Enhancements",
    icon: <Users className="w-6 h-6" />,
    color: "text-[#006b99]",
    bgColor: "bg-[#ffd400]",
    details:
      "Employee Data: Auto-creation of undefined departments/jobs during data upload. Attendance Setup: Control rules based on Gregorian or Payroll calendar; employee attendance history now tracked. Scheduler: Auto-repeat last week's shift to future weeks. Tracking: Leave names, approved requests, mission/excuse hours, and source icons now shown; full check-in/out details recorded. Geo Attendance: Employees can view assigned shift details when checking in/out via mobile. Leave Management: New 'Allow Negative Balance' option for leave requests. Requests: Admin/HR can now print requests. Enhancements: Improved ATS search and navigation. Better performance for copy shift/policy. Penalty requests now support decimals. Employees can download approved letters as PDFs. Mission request details enhanced on mobile. Reports: Attendance report now includes mission/excuse names and hours. Employee Profile: Larger profile pictures for better visibility.",
  },
  {
    id: "2",
    title: "Release 2.3.0",
    date: "Nov 15, 2024",
    description: "Geo Location & Machine Integration",
    icon: <MapIcon className="w-6 h-6" />,
    color: "text-[#ffd400]",
    bgColor: "bg-[#006b99]",
    details:
      "Attendance Setup: Easier policy and shift creation with copy features and support for new shift types. Geo Location: Live map tracking and flexible location check-in/out options. Machines Integration: Supports ZKTeco, Hikvision & Conovy devices, with auto/manual fingerprint import. Scheduling & Tracking: Weekly shift scheduling, real-time mobile attendance updates. Requests & Leave: Enhanced excuse and overtime requests, bulk leave balance updates. Applicant Tracking: Record applicant data and hire directly. Mobile Enhancements: Email/mobile login, employee search, request notifications. Reports: New reports for overtime, promotions, transfers, and improved employee list. Support: HR role now has access to live support chat.",
  },
  {
    id: "3",
    title: "Release 2.2.0",
    date: "Oct 28, 2024",
    description: "Advanced Reporting & Analytics",
    icon: <Calendar className="w-6 h-6" />,
    color: "text-[#006b99]",
    bgColor: "bg-[#ffd400]",
    details:
      "Advanced Analytics: New dashboard with real-time metrics and KPI tracking. Custom Reports: Build custom reports with drag-and-drop interface. Data Export: Enhanced export options including Excel, PDF, and CSV formats. Performance Metrics: Employee productivity tracking and performance analytics. Automated Alerts: Smart notifications for attendance anomalies and policy violations. Integration APIs: RESTful APIs for third-party system integration. Mobile Dashboard: Comprehensive mobile dashboard for managers and HR. Compliance Reports: Automated compliance reporting for labor law requirements.",
  },
  {
    id: "4",
    title: "Release 2.1.0",
    date: "Sep 12, 2024",
    description: "Security & Performance Updates",
    icon: <Shield className="w-6 h-6" />,
    color: "text-[#006b99]",
    bgColor: "bg-[#ffd400]",
    details:
      "Security Enhancements: Multi-factor authentication and advanced encryption. Performance Optimization: 40% faster load times and improved database queries. User Management: Enhanced role-based access control and permission management. Audit Trail: Comprehensive logging of all system activities and changes. Data Backup: Automated daily backups with point-in-time recovery. System Monitoring: Real-time system health monitoring and alerting. API Security: Enhanced API security with rate limiting and token management. Compliance: GDPR and SOX compliance features added.",
  },
  {
    id: "5",
    title: "Release 2.0.0",
    date: "Aug 05, 2024",
    description: "Major Platform Overhaul",
    icon: <Settings className="w-6 h-6" />,
    color: "text-[#006b99]",
    bgColor: "bg-[#ffd400]",
    details:
      "Complete UI/UX Redesign: Modern, intuitive interface with improved user experience. Cloud Migration: Full migration to cloud infrastructure for better scalability. Microservices Architecture: Rebuilt with microservices for better performance and maintainability. Real-time Sync: Instant data synchronization across all devices and platforms. Advanced Workflows: Customizable approval workflows and business process automation. Multi-language Support: Support for 15+ languages with RTL text support. Dark Mode: Optional dark theme for better user experience. Progressive Web App: Full PWA support for offline functionality.",
  },
  {
    id: "6",
    title: "Release 1.9.0",
    date: "Jul 18, 2024",
    description: "AI-Powered Insights & Automation",
    icon: <Zap className="w-6 h-6" />,
    color: "text-[#006b99]",
    bgColor: "bg-[#ffd400]",
    details:
      "AI Analytics: Machine learning algorithms for predictive attendance patterns and workforce optimization. Smart Scheduling: AI-powered shift recommendations based on historical data and employee preferences. Automated Workflows: Intelligent automation for routine HR tasks and approvals. Chatbot Integration: 24/7 AI assistant for employee queries and support. Predictive Insights: Early warning system for potential attendance issues and employee turnover. Natural Language Processing: Voice commands and text-based queries for system interaction. Anomaly Detection: Automatic detection of unusual patterns in attendance and behavior.",
  },
  {
    id: "7",
    title: "Release 1.8.0",
    date: "Jun 22, 2024",
    description: "Mobile-First Experience",
    icon: <Smartphone className="w-6 h-6" />,
    color: "text-[#006b99]",
    bgColor: "bg-[#ffd400]",
    details:
      "Native Mobile Apps: Dedicated iOS and Android applications with offline capabilities. Push Notifications: Real-time alerts for important updates and reminders. Mobile Biometrics: Fingerprint and face recognition for secure mobile check-ins. Offline Mode: Full functionality even without internet connection. Mobile Dashboard: Comprehensive mobile interface for all user roles. GPS Tracking: Enhanced location services with geofencing capabilities. Mobile Approvals: Complete approval workflows available on mobile devices.",
  },
  {
    id: "8",
    title: "Release 1.7.0",
    date: "May 14, 2024",
    description: "Enterprise Integration Suite",
    icon: <Database className="w-6 h-6" />,
    color: "text-[#006b99]",
    bgColor: "bg-[#ffd400]",
    details:
      "ERP Integration: Seamless integration with SAP, Oracle, and Microsoft Dynamics. Payroll Sync: Automatic synchronization with major payroll systems. LDAP/AD Integration: Single sign-on with Active Directory and LDAP systems. Webhook Support: Real-time data synchronization with external systems. Custom APIs: Flexible API framework for custom integrations. Data Migration Tools: Automated tools for migrating from legacy systems. Third-party Connectors: Pre-built connectors for popular business applications.",
  },
  {
    id: "9",
    title: "Release 1.6.0",
    date: "Apr 08, 2024",
    description: "Global Workforce Management",
    icon: <Globe className="w-6 h-6" />,
    color: "text-[#006b99]",
    bgColor: "bg-[#ffd400]",
    details:
      "Multi-timezone Support: Comprehensive timezone management for global teams. Currency Management: Multi-currency support for international payroll. Localization: Complete localization for 25+ countries and regions. Compliance Framework: Built-in compliance for international labor laws. Global Reporting: Consolidated reporting across multiple countries and entities. Cultural Customization: Customizable interface to match local business practices. International Holidays: Automatic holiday calendars for different countries.",
  },
  {
    id: "coming-soon",
    title: "Stay Tuned",
    date: "Coming Soon",
    description: "More amazing features on the way!",
    icon: <Star className="w-6 h-6" />,
    color: "text-[#006b99]",
    bgColor: "bg-[#ffd400]",
    details:
      "We're constantly working on new features and improvements to make your workforce management experience even better. Stay tuned for exciting updates, innovative solutions, and cutting-edge technology that will transform how you manage your team. The future of workforce management is here!",
    isComingSoon: true,
  },
]

export function Timeline() {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null)

  return (
    <>
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {timelineData.map((item, index) => (
            <div key={item.id} className="flex flex-col items-center group relative">
              {/* Icon Circle */}
              <div
                className={`${item.bgColor} rounded-full p-4 text-white cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg relative z-10 mb-4`}
                onClick={() => setSelectedItem(item)}
              >
                {item.icon}
              </div>

              {/* Content Card - consistent styling for all cards */}
              <div
                className="bg-white rounded-lg p-6 shadow-md border cursor-pointer transition-all duration-300 hover:shadow-lg w-full max-w-sm text-center"
                onClick={() => setSelectedItem(item)}
              >
                <h3 className={`font-bold text-lg ${item.color} mb-2`}>{item.title}</h3>
                <p className="font-semibold text-gray-800 mb-3">{item.date}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                {item.isComingSoon && (
                  <div className="mt-3 px-3 py-1 bg-gradient-to-r from-[#006b99] to-[#ffd400] text-white text-xs font-semibold rounded-full inline-block">
                    Coming Soon
                  </div>
                )}
              </div>

              {index < timelineData.length - 1 && (
                <>
                  {/* Right arrow for odd-indexed items (left column) */}
                  {index % 2 === 0 && (
                    <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 hidden md:block">
                      <ArrowRight className="w-6 h-6 text-[#ffd400]" />
                    </div>
                  )}

                  {/* Down arrow for even-indexed items (right column) */}
                  {index % 2 === 1 && index < timelineData.length - 2 && (
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block">
                      <ArrowDown className="w-6 h-6 text-[#ffd400]" />
                    </div>
                  )}

                  {/* Mobile: Always show down arrow */}
                  <div className="mt-4 md:hidden">
                    <ArrowDown className="w-6 h-6 text-[#ffd400]" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal popup */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-full ${selectedItem.bgColor} text-white`}>{selectedItem.icon}</div>
                <div>
                  <CardTitle className="text-xl">{selectedItem.title}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">{selectedItem.date}</CardDescription>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setSelectedItem(null)} className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{selectedItem.details}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

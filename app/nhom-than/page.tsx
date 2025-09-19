"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Truck, MapPin, Users, Award, ArrowRight, CheckCircle, Star, Sparkles, Globe, Building2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleSystem } from "@/components/particle-system"
import { motion } from "framer-motion"
import { fadeInUp, fadeInLeft, fadeInRight, fadeInScale, staggerContainer, hoverScale, floating, pulse, textReveal, gradientText } from "@/components/animations"
import { useTranslations } from '@/hooks/use-i18n'

const getCompanies = () => [
  {
    name: "GPG Logistics",
    logo: "/Nhóm Thân/Logo GPG Tiếng Anh-01.png"
  },
  {
    name: "GPL Logistics", 
    logo: "/Nhóm Thân/Logo GPL Tiếng Anh-01.png"
  },
  {
    name: "GPK Logistics",
    logo: "/Nhóm Thân/Logo GPK-01.png"
  },
  {
    name: "GPD Logistics",
    logo: "/Nhóm Thân/Logo GPD.png"
  },
  {
    name: "THT Logistics",
    logo: "/Nhóm Thân/Logo THT-01.png"
  },
  {
    name: "BNP Logistics", 
    logo: "/Nhóm Thân/Logo BNP.png"
  },
  {
    name: "Công ty AZ",
    logo: "/Nhóm Thân/Cty AZ-01.png"
  },
  {
    name: "Công ty CLIC",
    logo: "/Nhóm Thân/Cty CLIC-01.png"
  },
  {
    name: "Công ty Viconso",
    logo: "/Nhóm Thân/Cty Viconso-01.png"
  },
  {
    name: "Công ty VPC",
    logo: "/Nhóm Thân/Cty VPC-01.png"
  },
  {
    name: "DNKN Phú Yên",
    logo: "/Nhóm Thân/DNKN Phu Yen-01.png"
  },
  {
    name: "GPG Xanh",
    logo: "/Nhóm Thân/Logo Xanh-34-34.png"
  },
  {
    name: "Logo 1",
    logo: "/Nhóm Thân/logo_1-02-removebg-preview.png"
  },
  {
    name: "Logo 2",
    logo: "/Nhóm Thân/logo_1-03-removebg-preview.png"
  }
]

const getDepots = (t: any) => [
  {
    name: t('nhom_than.depots.list.llc.name'),
    location: t('nhom_than.depots.list.llc.location'),
    capacity: t('nhom_than.depots.list.llc.capacity'),
    status: t('nhom_than.depots.list.llc.status')
  },
  {
    name: t('nhom_than.depots.list.etd.name'),
    location: t('nhom_than.depots.list.etd.location'),
    capacity: t('nhom_than.depots.list.etd.capacity'),
    status: t('nhom_than.depots.list.etd.status')
  },
  {
    name: t('nhom_than.depots.list.cld.name'),
    location: t('nhom_than.depots.list.cld.location'),
    capacity: t('nhom_than.depots.list.cld.capacity'),
    status: t('nhom_than.depots.list.cld.status')
  },
  {
    name: t('nhom_than.depots.list.tbd.name'),
    location: t('nhom_than.depots.list.tbd.location'),
    capacity: t('nhom_than.depots.list.tbd.capacity'),
    status: t('nhom_than.depots.list.tbd.status')
  },
  {
    name: t('nhom_than.depots.list.tht.name'),
    location: t('nhom_than.depots.list.tht.location'),
    capacity: t('nhom_than.depots.list.tht.capacity'),
    status: t('nhom_than.depots.list.tht.status')
  },
  {
    name: t('nhom_than.depots.list.ctc.name'),
    location: t('nhom_than.depots.list.ctc.location'),
    capacity: t('nhom_than.depots.list.ctc.capacity'),
    status: t('nhom_than.depots.list.ctc.status')
  },
  {
    name: t('nhom_than.depots.list.cbd.name'),
    location: t('nhom_than.depots.list.cbd.location'),
    capacity: t('nhom_than.depots.list.cbd.capacity'),
    status: t('nhom_than.depots.list.cbd.status')
  },
  {
    name: t('nhom_than.depots.list.pcd.name'),
    location: t('nhom_than.depots.list.pcd.location'),
    capacity: t('nhom_than.depots.list.pcd.capacity'),
    status: t('nhom_than.depots.list.pcd.status')
  },
  {
    name: t('nhom_than.depots.list.gad.name'),
    location: t('nhom_than.depots.list.gad.location'),
    capacity: t('nhom_than.depots.list.gad.capacity'),
    status: t('nhom_than.depots.list.gad.status')
  },
  {
    name: t('nhom_than.depots.list.cpd.name'),
    location: t('nhom_than.depots.list.cpd.location'),
    capacity: t('nhom_than.depots.list.cpd.capacity'),
    status: t('nhom_than.depots.list.cpd.status')
  },
  {
    name: t('nhom_than.depots.list.gkp.name'),
    location: t('nhom_than.depots.list.gkp.location'),
    capacity: t('nhom_than.depots.list.gkp.capacity'),
    status: t('nhom_than.depots.list.gkp.status')
  },
  {
    name: t('nhom_than.depots.list.psd.name'),
    location: t('nhom_than.depots.list.psd.location'),
    capacity: t('nhom_than.depots.list.psd.capacity'),
    status: t('nhom_than.depots.list.psd.status')
  },
  {
    name: t('nhom_than.depots.list.bsd.name'),
    location: t('nhom_than.depots.list.bsd.location'),
    capacity: t('nhom_than.depots.list.bsd.capacity'),
    status: t('nhom_than.depots.list.bsd.status')
  },
  {
    name: t('nhom_than.depots.list.scd.name'),
    location: t('nhom_than.depots.list.scd.location'),
    capacity: t('nhom_than.depots.list.scd.capacity'),
    status: t('nhom_than.depots.list.scd.status')
  },
  {
    name: t('nhom_than.depots.list.tsd.name'),
    location: t('nhom_than.depots.list.tsd.location'),
    capacity: t('nhom_than.depots.list.tsd.capacity'),
    status: t('nhom_than.depots.list.tsd.status')
  },
  {
    name: t('nhom_than.depots.list.ssd.name'),
    location: t('nhom_than.depots.list.ssd.location'),
    capacity: t('nhom_than.depots.list.ssd.capacity'),
    status: t('nhom_than.depots.list.ssd.status')
  },
  {
    name: t('nhom_than.depots.list.sbd.name'),
    location: t('nhom_than.depots.list.sbd.location'),
    capacity: t('nhom_than.depots.list.sbd.capacity'),
    status: t('nhom_than.depots.list.sbd.status')
  }
]

const getStatistics = (t: any) => [
  {
    icon: Building2,
    number: t('nhom_than.statistics.stats.companies.number'),
    label: t('nhom_than.statistics.stats.companies.label'),
    description: t('nhom_than.statistics.stats.companies.description'),
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: MapPin,
    number: t('nhom_than.statistics.stats.depots.number'),
    label: t('nhom_than.statistics.stats.depots.label'),
    description: t('nhom_than.statistics.stats.depots.description'),
    gradient: "from-emerald-500 to-green-500"
  },
  {
    icon: Truck,
    number: t('nhom_than.statistics.stats.area.number'),
    label: t('nhom_than.statistics.stats.area.label'),
    description: t('nhom_than.statistics.stats.area.description'),
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: Globe,
    number: t('nhom_than.statistics.stats.countries.number'),
    label: t('nhom_than.statistics.stats.countries.label'),
    description: t('nhom_than.statistics.stats.countries.description'),
    gradient: "from-purple-500 to-pink-500"
  }
]

export default function NhomThanPage() {
  const t = useTranslations()
  const companies = getCompanies()
  const depots = getDepots(t)
  const statistics = getStatistics(t)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <ParticleSystem />
      <CustomCursor />
      <Header />
      <ScrollIndicator />
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main floating orbs */}
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-violet-400/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Additional floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      {/* Hero Section */}
      <section ref={sectionRef} className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        {/* Background Image with Enhanced Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-blue-900/20 to-indigo-900/30" />
          <img 
            src="/than-bg-1024x1024.jpg" 
            alt="Modern Logistics Warehouse" 
            className="w-full h-full object-cover opacity-15"
          />
          {/* Overlay Pattern */}
          <div className="absolute inset-0 opacity-40">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }} />
          </div>
          
          {/* Animated Floating Elements */}
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 rounded-full blur-2xl bg-gradient-to-r from-blue-400/20 to-indigo-400/20"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-40 h-40 rounded-full blur-3xl bg-gradient-to-r from-indigo-400/15 to-violet-400/15"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full blur-xl bg-gradient-to-r from-blue-400/25 to-violet-400/25"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.7, 0.4],
              rotate: [0, -180, -360]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 3
            }}
          />
          
          {/* Additional floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-400/60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="text-center mb-12 md:mb-20">
            {/* Enhanced Badge */}
            <motion.div className="mb-6 md:mb-8" variants={fadeInUp}>
              <motion.div 
                className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 backdrop-blur-xl border border-blue-200/60 rounded-full text-xs md:text-sm font-semibold shadow-2xl transition-all duration-500 hover:scale-110 group relative overflow-hidden bg-gradient-to-r from-white/20 via-blue-50/30 to-indigo-50/20"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Truck className="w-4 md:w-5 h-4 md:h-5 text-blue-600" />
                </motion.div>
                    <span className="font-bold tracking-wide text-xs md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 relative z-10">{t('nhom_than.hero.badge')}</span>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-indigo-600" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 md:mb-12 leading-tight"
              variants={fadeInUp}
            >
              <motion.span 
                className="block"
                style={{
                  background: "linear-gradient(45deg, #3b82f6, #6366f1, #8b5cf6, #3b82f6)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                    {t('nhom_than.hero.title')}
              </motion.span>
            </motion.h1>

            {/* Enhanced Quote */}
            <motion.div 
              className="max-w-4xl lg:max-w-6xl mx-auto"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-indigo-50/40 to-violet-50/60" />
                  {/* Animated Background Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <img 
                      src="/than-bg-1024x1024.jpg" 
                      alt="Logistics" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <motion.div 
                    className="absolute bottom-0 left-0 w-24 h-24 md:w-36 md:h-36 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-2xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                  <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 relative z-10">
                    <div className="text-center">
                      <motion.div 
                        className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "4rem" }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                      <motion.h2 
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 md:mb-8"
                        variants={textReveal}
                      >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                          {t('nhom_than.hero.subtitle')}
                        </span>
                      </motion.h2>
                      <motion.p 
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 md:mb-8 font-medium"
                        variants={textReveal}
                      >
                        {t('nhom_than.hero.description')}
                      </motion.p>
                      <motion.div 
                        className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mt-6 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "4rem" }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #6366f1 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <motion.div 
          className="max-w-7xl mx-auto relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Truck className="w-5 h-5" />
              </motion.div>
              {t('nhom_than.overview.badge')}
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6"
              variants={textReveal}
              style={{
                background: "linear-gradient(45deg, #1e293b, #3b82f6, #6366f1, #1e293b)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {t('nhom_than.overview.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto"
              variants={textReveal}
            >
              {t('nhom_than.overview.description')}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                icon: Truck,
                title: t('nhom_than.overview.roles.transport.title'),
                description: t('nhom_than.overview.roles.transport.description'),
                gradient: "from-blue-500 to-indigo-500",
                hoverColor: "group-hover:text-blue-600"
              },
              {
                icon: Building2,
                title: t('nhom_than.overview.roles.warehouse.title'),
                description: t('nhom_than.overview.roles.warehouse.description'),
                gradient: "from-emerald-500 to-teal-500",
                hoverColor: "group-hover:text-emerald-600"
              },
              {
                icon: Users,
                title: t('nhom_than.overview.roles.support.title'),
                description: t('nhom_than.overview.roles.support.description'),
                gradient: "from-purple-500 to-pink-500",
                hoverColor: "group-hover:text-purple-600"
              }
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div key={index} variants={fadeInScale} className="h-full">
                  <motion.div
                    className="h-full"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm h-full flex flex-col">
                      <CardContent className="p-8 flex-grow flex flex-col justify-between">
                        <div className="text-center flex flex-col h-full">
                        <motion.div 
                          className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative overflow-hidden`}
                          whileHover={{ scale: 1.1, rotate: 3 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Animated background glow */}
                          <motion.div
                            className="absolute inset-0 bg-white/20 rounded-2xl"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0, 0.3, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3
                            }}
                          />
                          <motion.div
                            animate={{ 
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, 0]
                            }}
                            transition={{ 
                              duration: 3, 
                              repeat: Infinity, 
                              delay: index * 0.5 
                            }}
                          >
                            <IconComponent className="w-10 h-10 text-white relative z-10" />
                          </motion.div>
                        </motion.div>
                          <motion.h3 
                            className={`text-xl font-bold text-slate-800 mb-4 transition-colors ${item.hoverColor}`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.title}
                          </motion.h3>
                          <motion.p 
                            className="text-slate-600 leading-relaxed flex-grow"
                            variants={textReveal}
                          >
                            {item.description}
                          </motion.p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Companies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #3b82f6 1px, transparent 1px),
                             linear-gradient(-45deg, #6366f1 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <motion.div 
          className="max-w-7xl mx-auto relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Building2 className="w-5 h-5" />
              </motion.div>
              {t('nhom_than.companies.badge')}
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6"
              variants={textReveal}
              style={{
                background: "linear-gradient(45deg, #1e293b, #3b82f6, #6366f1, #1e293b)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5
              }}
            >
              {t('nhom_than.companies.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              variants={textReveal}
            >
              {t('nhom_than.companies.description')}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {companies.map((company, index) => (
              <motion.div 
                key={index} 
                variants={fadeInScale}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm h-full flex flex-col">
                  <CardContent className="p-6 text-center flex flex-col h-full">
                    <motion.div 
                      className="mb-4 flex-shrink-0 relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Animated glow effect behind logo */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0, 0.3, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      />
                      <motion.img 
                        src={company.logo} 
                        alt={`${company.name} Logo`} 
                        className="w-24 h-24 md:w-28 md:h-28 object-contain mx-auto relative z-10"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          rotate: [0, 2, 0]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          delay: index * 0.2 
                        }}
                      />
                    </motion.div>
                    <motion.div 
                      className="flex-grow flex items-center justify-center"
                    >
                      <motion.h3 
                        className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors text-base leading-tight"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {company.name}
                      </motion.h3>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Depots Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50/20 to-green-50/30 relative overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, #10b981 1px, transparent 1px),
                             radial-gradient(circle at 70% 70%, #059669 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <motion.div 
          className="max-w-7xl mx-auto relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <MapPin className="w-5 h-5" />
              </motion.div>
              {t('nhom_than.depots.badge')}
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6"
              variants={textReveal}
              style={{
                background: "linear-gradient(45deg, #1e293b, #10b981, #059669, #1e293b)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 1
              }}
            >
              {t('nhom_than.depots.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              variants={textReveal}
            >
              {t('nhom_than.depots.description')}
            </motion.p>
          </motion.div>

          <motion.div 
            className="w-full"
            variants={fadeInUp}
          >
            <motion.div 
              className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden relative"
              whileHover={{ scale: 1.005, y: -2 }}
              transition={{ duration: 0.4 }}
            >
              {/* Enhanced Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-green-50/20" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500" />
              
              {/* Desktop Table View */}
              <div className="hidden lg:block relative">
                <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-white relative">
                        <th className="px-4 py-3 text-left font-semibold text-sm tracking-wide">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4" />
                            {t('nhom_than.depots.table.headers.name')}
                          </div>
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-sm tracking-wide">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {t('nhom_than.depots.table.headers.location')}
                          </div>
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-sm tracking-wide">
                          <div className="flex items-center gap-2">
                            <Truck className="w-4 h-4" />
                            {t('nhom_than.depots.table.headers.capacity')}
                          </div>
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-sm tracking-wide">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            {t('nhom_than.depots.table.headers.status')}
                          </div>
                        </th>
                    </tr>
                  </thead>
                    <tbody className="divide-y divide-emerald-100/50">
                    {depots.map((depot, index) => (
                      <motion.tr 
                        key={index} 
                          className="group hover:bg-gradient-to-r hover:from-emerald-50/80 hover:to-green-50/80 transition-all duration-500 border-b border-emerald-100/30"
                          initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.08 }}
                          whileHover={{ 
                            scale: 1.01,
                            boxShadow: "0 10px 25px rgba(16, 185, 129, 0.1)"
                          }}
                        >
                          <td className="px-4 py-3 group-hover:bg-white/50 transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-md">
                                <Building2 className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors text-sm leading-tight">
                                  {depot.name}
                                </h3>
                                <div className="text-xs text-slate-500">
                                  ID: {depot.name.split('(')[1]?.replace(')', '') || 'N/A'}
                                </div>
                              </div>
                            </div>
                        </td>
                          <td className="px-4 py-3 group-hover:bg-white/50 transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                                <MapPin className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <span className="font-semibold text-slate-700 group-hover:text-slate-800 transition-colors text-sm">
                                  {depot.location}
                                </span>
                                <div className="text-xs text-slate-500">
                                  {depot.location.includes('Hồ Chí Minh') ? '🇻🇳 Vietnam' : 
                                   depot.location.includes('Bình Dương') ? '🇻🇳 Vietnam' :
                                   depot.location.includes('Đà Nẵng') ? '🇻🇳 Vietnam' :
                                   depot.location.includes('Hải Phòng') ? '🇻🇳 Vietnam' :
                                   depot.location.includes('Campuchia') ? '🇰🇭 Cambodia' :
                                   depot.location.includes('Thái Lan') ? '🇹🇭 Thailand' : '📍 Location'}
                                </div>
                              </div>
                            </div>
                        </td>
                          <td className="px-4 py-3 group-hover:bg-white/50 transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                                <Truck className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <span className="font-bold text-lg text-slate-800 group-hover:text-emerald-600 transition-colors">
                                  {depot.capacity}
                                </span>
                                <div className="text-xs text-slate-500">m²</div>
                              </div>
                            </div>
                        </td>
                          <td className="px-4 py-3 group-hover:bg-white/50 transition-all duration-300">
                            <Badge 
                              variant={depot.status.includes(t('nhom_than.depots.table.status.active')) ? "default" : "secondary"}
                              className={`font-semibold px-3 py-1 text-xs rounded-lg shadow-md ${
                                depot.status.includes(t('nhom_than.depots.table.status.active')) 
                                    ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white border-0" 
                                    : "bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0"
                              }`}
                            >
                              <div className="flex items-center gap-1">
                                {depot.status.includes(t('nhom_than.depots.table.status.active')) 
                                  ? <CheckCircle className="w-3 h-3" />
                                  : <Star className="w-3 h-3" />
                                }
                                {depot.status}
                              </div>
                            </Badge>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
                </div>
              </div>

              {/* Enhanced Mobile Card View */}
              <div className="lg:hidden p-4">
                <div className="grid gap-4">
                {depots.map((depot, index) => (
                  <motion.div
                    key={index}
                      className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl shadow-lg border border-emerald-100/50 overflow-hidden relative group"
                      initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02, 
                        y: -5,
                        boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)"
                      }}
                    >
                      {/* Card Header with Gradient */}
                      <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-4 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8" />
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-2">
                            <motion.div 
                              className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
                              animate={{ rotate: [0, 5, -5, 0] }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              <Building2 className="w-6 h-6 text-white" />
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="font-bold text-white text-lg leading-tight">
                          {depot.name}
                        </h3>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
                                <span className="text-white/80 text-sm">
                                  ID: {depot.name.split('(')[1]?.replace(')', '') || 'N/A'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Card Content */}
                      <div className="p-6 space-y-4">
                        {/* Location */}
                        <div className="flex items-center gap-4">
                        <motion.div
                            className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <MapPin className="w-6 h-6 text-white" />
                        </motion.div>
                          <div className="flex-1">
                            <span className="font-semibold text-slate-800 text-lg block">
                              {depot.location}
                            </span>
                            <div className="text-sm text-slate-500 mt-1">
                              {depot.location.includes('Hồ Chí Minh') ? '🇻🇳 Vietnam' : 
                               depot.location.includes('Bình Dương') ? '🇻🇳 Vietnam' :
                               depot.location.includes('Đà Nẵng') ? '🇻🇳 Vietnam' :
                               depot.location.includes('Hải Phòng') ? '🇻🇳 Vietnam' :
                               depot.location.includes('Campuchia') ? '🇰🇭 Cambodia' :
                               depot.location.includes('Thái Lan') ? '🇹🇭 Thailand' : '📍 Location'}
                            </div>
                          </div>
                      </div>
                      
                        {/* Capacity and Status Row */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <motion.div
                              className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg"
                              whileHover={{ scale: 1.1, rotate: -5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Truck className="w-6 h-6 text-white" />
                            </motion.div>
                        <div>
                              <div className="text-sm text-slate-500 font-medium">
                                {t('nhom_than.depots.mobile.capacity_label')}
                              </div>
                          <motion.span 
                                className="font-bold text-2xl text-slate-800"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {depot.capacity} m²
                          </motion.span>
                            </div>
                        </div>
                        
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.3 }}
                        >
                          <Badge 
                              variant={depot.status.includes(t('nhom_than.depots.table.status.active')) ? "default" : "secondary"}
                              className={`font-bold px-4 py-2 text-sm rounded-xl shadow-lg ${
                                depot.status.includes(t('nhom_than.depots.table.status.active')) 
                                  ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white border-0" 
                                  : "bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <motion.div
                                  animate={depot.status.includes(t('nhom_than.depots.table.status.active')) 
                                    ? { scale: [1, 1.2, 1] }
                                    : { rotate: [0, 5, -5, 0] }
                                  }
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  {depot.status.includes(t('nhom_than.depots.table.status.active')) 
                                    ? <CheckCircle className="w-4 h-4" />
                                    : <Star className="w-4 h-4" />
                                  }
                                </motion.div>
                            {depot.status}
                              </div>
                          </Badge>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-purple-50/20 to-pink-50/30 relative overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8b5cf6 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #ec4899 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <motion.div 
          className="max-w-7xl mx-auto relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Award className="w-5 h-5" />
              </motion.div>
              {t('nhom_than.statistics.badge')}
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6"
              variants={textReveal}
              style={{
                background: "linear-gradient(45deg, #1e293b, #8b5cf6, #ec4899, #1e293b)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5
              }}
            >
              {t('nhom_than.statistics.title')}
            </motion.h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {statistics.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div key={index} variants={fadeInScale}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm h-full flex flex-col">
                      <CardContent className="p-8 text-center flex-grow flex flex-col justify-between">
                        <div className="flex flex-col items-center">
                          <motion.div 
                            className={`w-20 h-20 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative overflow-hidden`}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            transition={{ duration: 0.3 }}
                          >
                            {/* Animated background glow */}
                            <motion.div
                              className="absolute inset-0 bg-white/20 rounded-2xl"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0, 0.3, 0]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.3
                              }}
                            />
                            <motion.div
                              animate={{ 
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, 0]
                              }}
                              transition={{ 
                                duration: 3, 
                                repeat: Infinity, 
                                delay: index * 0.3 
                              }}
                            >
                              <IconComponent className="w-10 h-10 text-white relative z-10" />
                            </motion.div>
                          </motion.div>
                          <motion.div 
                            className={`text-4xl font-bold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                            animate={{ 
                              scale: [1, 1.05, 1],
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              delay: index * 0.2 
                            }}
                          >
                            {stat.number}
                          </motion.div>
                          <motion.div 
                            className="text-xl font-bold text-slate-800 mb-2"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {stat.label}
                          </motion.div>
                        </div>
                        <motion.div 
                          className="text-slate-600 mt-auto"
                          variants={textReveal}
                        >
                          {stat.description}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #ffffff 1px, transparent 1px),
                             radial-gradient(circle at 80% 80%, #ffffff 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 rounded-full blur-2xl bg-gradient-to-r from-white/20 to-blue-300/20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 rounded-full blur-3xl bg-gradient-to-r from-indigo-300/15 to-purple-300/15"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div 
          className="max-w-5xl mx-auto text-center relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="mb-8" variants={fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-8 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Truck className="w-5 h-5" />
              </motion.div>
              {t('nhom_than.cta.badge')}
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            variants={textReveal}
          >
            {t('nhom_than.cta.title')}
          </motion.h2>
          <motion.p 
            className="text-xl sm:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto"
            variants={textReveal}
          >
            {t('nhom_than.cta.description')}
          </motion.p>
          
          <motion.div 
            className="flex justify-center"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                  onClick={() => window.location.href = '/lien-he'}
                >
                  <motion.span 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Truck className="w-5 h-5" />
                    </motion.div>
                    {t('nhom_than.cta.buttons.contact')}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
            
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

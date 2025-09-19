"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Users, Award, ArrowRight, CheckCircle, Star, Sparkles, Globe, Building2, Heart, Store, Truck, Lightbulb, BookOpen, Target, Zap, Rocket, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, fadeInLeft, fadeInRight, fadeInScale, staggerContainer, hoverScale, floating, pulse, textReveal, gradientText } from "@/components/animations"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleSystem } from "@/components/particle-system"
import { useTranslations } from '@/hooks/use-i18n'

const getServices = (t: any) => [
    {
      title: t('nhom_tri.services.list.management.title'),
      description: t('nhom_tri.services.list.management.description'),
      icon: Building2,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: t('nhom_tri.services.list.finance.title'),
      description: t('nhom_tri.services.list.finance.description'),
      icon: Target,
      gradient: "from-emerald-500 to-green-500"
    },
    {
      title: t('nhom_tri.services.list.marketing.title'),
      description: t('nhom_tri.services.list.marketing.description'),
      icon: Zap,
      gradient: "from-purple-500 to-violet-500"
    },
    {
      title: t('nhom_tri.services.list.hr.title'),
      description: t('nhom_tri.services.list.hr.description'),
      icon: Users,
      gradient: "from-rose-500 to-pink-500"
    },
    {
      title: t('nhom_tri.services.list.technology.title'),
      description: t('nhom_tri.services.list.technology.description'),
      icon: Lightbulb,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      title: t('nhom_tri.services.list.training.title'),
      description: t('nhom_tri.services.list.training.description'),
      icon: BookOpen,
      gradient: "from-teal-500 to-cyan-500"
    }
  ]

  const getCompanies = (t: any) => [
    {
      name: "IGC",
      description: t('nhom_tri.companies.list.lttci.description'),
      services: t('nhom_tri.companies.list.lttci.services'),
      gradient: "from-blue-500 to-indigo-500",
      logo: "/Nhóm Trí/IGC logo Final-01.png"
    },
    {
      name: "LTTCI",
      description: t('nhom_tri.companies.list.lttci.description'),
      services: t('nhom_tri.companies.list.lttci.services'),
      gradient: "from-emerald-500 to-green-500",
      logo: "/Nhóm Trí/Logo LTTCI-01.png"
    },
    {
      name: "LTA",
      description: t('nhom_tri.companies.list.lttci.description'),
      services: t('nhom_tri.companies.list.lttci.services'),
      gradient: "from-purple-500 to-violet-500",
      logo: "/Nhóm Trí/Logo LTA-01.png"
    },
    {
      name: "ESG",
      description: t('nhom_tri.companies.list.lttci.description'),
      services: t('nhom_tri.companies.list.lttci.services'),
      gradient: "from-orange-500 to-red-500",
      logo: "/Nhóm Trí/Logo ESG-01.png"
    }
  ]

export default function NhomTriPage() {
  const t = useTranslations()
  const services = getServices(t)
  const companies = getCompanies(t)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      <ParticleSystem />
      <CustomCursor />
      <Header />
      <ScrollIndicator />
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-violet-600/20 rounded-full blur-3xl"
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
            delay: 3
          }}
        />
        
        {/* Additional floating particles */}
        {[...Array(8)].map((_, i) => (
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
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        {/* Background Image with Enhanced Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-blue-900/20 to-indigo-900/30" />
          <img 
            src="/mind-1024x580.png.jpeg" 
            alt="Modern Tech Office" 
            className="w-full h-full object-cover opacity-15"
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.12) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          {/* Overlay Pattern */}
          <div className="absolute inset-0 opacity-40">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }} />
          </div>
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
                className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 backdrop-blur-xl border border-blue-200/60 rounded-full text-xs md:text-sm font-semibold shadow-2xl group relative overflow-hidden bg-gradient-to-r from-white/20 via-blue-50/30 to-indigo-50/20"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Brain className="w-4 md:w-5 h-4 md:h-5 text-blue-600" />
                </motion.div>
                <span className="font-bold tracking-wide text-xs md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 relative z-10">{t('nhom_tri.hero.badge')}</span>
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
                className="block sm:inline"
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
                {t('nhom_tri.hero.title')}
              </motion.span>
            </motion.h1>

            {/* Enhanced Quote */}
            <motion.div 
              className="max-w-4xl lg:max-w-6xl mx-auto"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-indigo-50/40 to-violet-50/60" />
                {/* Animated Background Elements */}
                  <motion.div 
                    className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                  <img 
                    src="/mind-1024x580.png.jpeg" 
                    alt="Technology" 
                    className="w-full h-full object-cover rounded-full"
                  />
                  </motion.div>
                  <motion.div 
                    className="absolute bottom-0 left-0 w-24 h-24 md:w-36 md:h-36 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-2xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        <motion.span 
                          className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
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
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                        {t('nhom_tri.hero.subtitle')}
                        </motion.span>
                      </motion.h2>
                      <motion.p 
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 md:mb-8 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        <motion.span 
                          className="font-bold text-blue-600"
                          animate={{ 
                            textShadow: [
                              "0 0 0px rgba(37, 99, 235, 0)",
                              "0 0 10px rgba(37, 99, 235, 0.5)",
                              "0 0 0px rgba(37, 99, 235, 0)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {t('nhom_tri.hero.description')}
                        </motion.span>
                      </motion.p>
                      <motion.div 
                        className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mt-6 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "4rem" }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16"
            variants={staggerContainer}
          >
            {[
              { number: "16+", label: t('nhom_tri.hero.stats.experience'), icon: Zap },
              { number: "1+", label: t('nhom_tri.hero.stats.companies'), icon: Building2 },
              { number: "6+", label: t('nhom_tri.hero.stats.services'), icon: Award }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="group relative text-center p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-white/40 hover:bg-white/15"
                  variants={fadeInScale}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(96, 165, 250, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20"
                      animate={{ 
                        boxShadow: [
                          "0 0 0px rgba(96, 165, 250, 0)",
                          "0 0 20px rgba(96, 165, 250, 0.5)",
                          "0 0 0px rgba(96, 165, 250, 0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <IconComponent className="w-6 h-6 text-blue-300" />
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="text-4xl sm:text-5xl font-black mb-2"
                    style={{
                      background: "linear-gradient(45deg, #60a5fa, #a78bfa)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                      {stat.number}
                  </motion.div>
                  <div className="text-sm sm:text-base text-white/80 font-semibold">
                      {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #6366f1 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </motion.div>
        
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
              <Brain className="w-5 h-5" />
              </motion.div>
              {t('nhom_tri.overview.badge')}
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                className="text-slate-800"
                style={{
                  background: "linear-gradient(45deg, #1e293b, #1e40af, #7c3aed, #ec4899)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "#1e293b" // Fallback color
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
                {t('nhom_tri.overview.title')}
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              {t('nhom_tri.overview.description')}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInScale} className="flex">
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Card className="group relative overflow-hidden border-0 bg-white/90 backdrop-blur-sm h-full flex flex-col h-[320px] shadow-lg hover:shadow-xl transition-all duration-500">
                  {/* Gradient top border */}
                  <motion.div 
                    className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 relative"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                  
                  <CardContent className="p-6 flex flex-col h-full justify-center">
                    <div className="text-center flex flex-col h-full justify-center">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg flex-shrink-0 relative overflow-hidden"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: [-100, 100] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                          animate={{ 
                            boxShadow: [
                              "0 0 0px rgba(59, 130, 246, 0)",
                              "0 0 20px rgba(59, 130, 246, 0.5)",
                              "0 0 0px rgba(59, 130, 246, 0)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Brain className="w-8 h-8 text-white relative z-10" />
                        </motion.div>
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {t('nhom_tri.overview.roles.consulting.title')}
                      </motion.h3>
                      <p className="text-slate-600 leading-relaxed flex-grow flex items-center justify-center">
                        {t('nhom_tri.overview.roles.consulting.description')}
                      </p>
                    </div>
                  </CardContent>
                  
                  {/* Bottom accent line */}
                  <motion.div 
                    className="mt-4 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInScale} className="flex">
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Card className="group relative overflow-hidden border-0 bg-white/90 backdrop-blur-sm h-full flex flex-col h-[320px] shadow-lg hover:shadow-xl transition-all duration-500">
                  {/* Gradient top border */}
                  <motion.div 
                    className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 relative"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                  
                  <CardContent className="p-6 flex flex-col h-full justify-center">
                    <div className="text-center flex flex-col h-full justify-center">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg flex-shrink-0 relative overflow-hidden"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: [-100, 100] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                          animate={{ 
                            boxShadow: [
                              "0 0 0px rgba(16, 185, 129, 0)",
                              "0 0 20px rgba(16, 185, 129, 0.5)",
                              "0 0 0px rgba(16, 185, 129, 0)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        >
                          <BookOpen className="w-8 h-8 text-white relative z-10" />
                        </motion.div>
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {t('nhom_tri.overview.roles.training.title')}
                      </motion.h3>
                      <p className="text-slate-600 leading-relaxed flex-grow flex items-center justify-center">
                        {t('nhom_tri.overview.roles.training.description')}
                      </p>
                    </div>
                  </CardContent>
                  
                  {/* Bottom accent line */}
                  <motion.div 
                    className="mt-4 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-indigo-50/20 to-violet-50/30 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, #6366f1 2px, transparent 2px),
                             radial-gradient(circle at 70% 70%, #8b5cf6 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </motion.div>
        
        <motion.div 
          className="max-w-7xl mx-auto relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
              <Award className="w-5 h-5" />
              </motion.div>
              {t('nhom_tri.services.badge')}
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                className="text-slate-800"
                style={{
                  background: "linear-gradient(45deg, #1e293b, #1e40af, #7c3aed, #ec4899)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "#1e293b" // Fallback color
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
                {t('nhom_tri.services.title')}
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              {t('nhom_tri.services.description')}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div key={index} variants={fadeInScale}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="group border-0 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-center">
                          <motion.div 
                            className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              animate={{ 
                                boxShadow: [
                                  "0 0 0px rgba(99, 102, 241, 0)",
                                  "0 0 20px rgba(99, 102, 241, 0.5)",
                                  "0 0 0px rgba(99, 102, 241, 0)"
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                            >
                        <IconComponent className="w-10 h-10 text-white" />
                            </motion.div>
                          </motion.div>
                          <motion.h3 
                            className="text-xl font-bold text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                        {service.title}
                          </motion.h3>
                      <p className="text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
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
        {/* Enhanced Background Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-3"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #3b82f6 1px, transparent 1px),
                             linear-gradient(-45deg, #6366f1 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </motion.div>
        
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
              {t('nhom_tri.companies.badge')}
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                className="text-slate-800"
                style={{
                  background: "linear-gradient(45deg, #1e293b, #1e40af, #7c3aed, #ec4899)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "#1e293b" // Fallback color
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
                {t('nhom_tri.companies.title')}
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              {t('nhom_tri.companies.description')}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {companies.map((company, index) => {
              return (
                <motion.div key={index} variants={fadeInScale} className="h-full">
                  <motion.div
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <Card className="group border-0 bg-white/80 backdrop-blur-sm h-full flex flex-col">
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
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #ffffff 1px, transparent 1px),
                             radial-gradient(circle at 80% 80%, #ffffff 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
        </motion.div>
        
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
              <Brain className="w-5 h-5" />
              </motion.div>
              {t('nhom_tri.cta.badge')}
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            variants={fadeInUp}
          >
            <motion.span 
              className="text-white"
              style={{
                background: "linear-gradient(45deg, #ffffff, #60a5fa, #a78bfa, #ec4899, #ffffff)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "#ffffff" // Fallback color
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
            {t('nhom_tri.cta.title')}
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl sm:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {t('nhom_tri.cta.description')}
          </motion.p>
          
          <motion.div 
            className="flex justify-center"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
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
                  <Rocket className="w-5 h-5" />
                </motion.div>
                {t('nhom_tri.cta.buttons.contact')}
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

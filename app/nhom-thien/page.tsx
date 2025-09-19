"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Users, Award, ArrowRight, CheckCircle, Star, Sparkles, Globe, Building2, Store, Truck, Lightbulb, BookOpen, Target, Zap, HandHeart, Shield, Home } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { fadeInUp, fadeInLeft, fadeInRight, fadeInScale, staggerContainer, hoverScale, floating, pulse, textReveal, gradientText } from "@/components/animations"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleSystem } from "@/components/particle-system"
import { LoadingAnimation } from "@/components/loading-animation"
import { useTranslations } from '@/hooks/use-i18n'

export default function NhomThienPage() {
  const t = useTranslations()
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

  const activities = [
    {
      title: t('nhom_thien.activities.list.social_work.title'),
      description: t('nhom_thien.activities.list.social_work.description'),
      icon: HandHeart,
      gradient: "from-rose-500 to-pink-500",
      details: t('nhom_thien.activities.list.social_work.details')
    },
    {
      title: t('nhom_thien.activities.list.non_profit.title'),
      description: t('nhom_thien.activities.list.non_profit.description'),
      icon: Shield,
      gradient: "from-emerald-500 to-green-500",
      details: t('nhom_thien.activities.list.non_profit.details')
    },
    {
      title: t('nhom_thien.activities.list.social_welfare.title'),
      description: t('nhom_thien.activities.list.social_welfare.description'),
      icon: Home,
      gradient: "from-blue-500 to-indigo-500",
      details: t('nhom_thien.activities.list.social_welfare.details')
    }
  ]

  const achievements = [
    {
      number: t('nhom_thien.achievements.stats.children_helped.number'),
      label: t('nhom_thien.achievements.stats.children_helped.label'),
      description: t('nhom_thien.achievements.stats.children_helped.description'),
      icon: Heart,
      gradient: "from-rose-500 to-pink-500"
    },
    {
      number: t('nhom_thien.achievements.stats.bridges_built.number'),
      label: t('nhom_thien.achievements.stats.bridges_built.label'),
      description: t('nhom_thien.achievements.stats.bridges_built.description'),
      icon: Shield,
      gradient: "from-emerald-500 to-green-500"
    },
    {
      number: t('nhom_thien.achievements.stats.donations.number'),
      label: t('nhom_thien.achievements.stats.donations.label'),
      description: t('nhom_thien.achievements.stats.donations.description'),
      icon: Award,
      gradient: "from-blue-500 to-indigo-500"
    }
  ]

  const companies = [
    {
      name: "CXYT",
      description: t('nhom_thien.companies.list.cxyt.description'),
      services: t('nhom_thien.companies.list.cxyt.services'),
      gradient: "from-rose-500 to-pink-500",
      logo: "/Nhóm Thiện/CXYT logo.png"
    },
    {
      name: "HyHy Community",
      description: t('nhom_thien.companies.list.hyhy.description'),
      services: t('nhom_thien.companies.list.hyhy.services'),
      gradient: "from-emerald-500 to-green-500",
      logo: "/Nhóm Thiện/LOGO HY HY FINAL-01.png"
    },
    {
      name: "SWC",
      description: t('nhom_thien.companies.list.swc.description'),
      services: t('nhom_thien.companies.list.swc.services'),
      gradient: "from-blue-500 to-indigo-500",
      logo: "/Nhóm Thiện/Logo SWC-01.png"
    },
    {
      name: "Bếp Nhà Từ Tâm",
      description: t('nhom_thien.companies.list.bep_nha.description'),
      services: t('nhom_thien.companies.list.bep_nha.services'),
      gradient: "from-orange-500 to-red-500",
      logo: "/Nhóm Thiện/Logo Bep nha Tu tam-01.png"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50/30 to-pink-50/50 relative overflow-hidden">
      <LoadingAnimation />
      <ParticleSystem />
      <CustomCursor />
      <Header />
      <ScrollIndicator />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-400/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-400/20 to-green-600/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-600/10 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        
        {/* Additional floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-rose-400/60"
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
      <motion.section 
        ref={sectionRef} 
        className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Background Image with Enhanced Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-rose-900/20 to-pink-900/30" />
          <img 
            src="/thien.jpg" 
            alt="Community Volunteers" 
            className="w-full h-full object-cover opacity-15"
          />
          {/* Overlay Pattern */}
          <div className="absolute inset-0 opacity-40">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }} />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            {/* Enhanced Badge */}
            <motion.div className="mb-6 md:mb-8" variants={fadeInUp}>
              <motion.div 
                className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 backdrop-blur-xl border border-rose-200/60 rounded-full text-xs md:text-sm font-semibold shadow-2xl transition-all duration-500 hover:scale-110 group relative overflow-hidden bg-gradient-to-r from-white/20 via-rose-50/30 to-pink-50/20"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Heart className="w-4 md:w-5 h-4 md:h-5 text-rose-600" />
                </motion.div>
                <span className="font-bold tracking-wide text-xs md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600 relative z-10">{t('nhom_thien.hero.badge')}</span>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-pink-600" />
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
                  background: "linear-gradient(45deg, #f43f5e, #ec4899, #10b981, #f43f5e)",
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
{t('nhom_thien.hero.title')}
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
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-50/60 via-pink-50/40 to-emerald-50/60" />
                  {/* Animated Background Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <img 
                      src="/thien.jpg" 
                      alt="Community" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <motion.div 
                    className="absolute bottom-0 left-0 w-24 h-24 md:w-36 md:h-36 bg-gradient-to-br from-rose-400/20 to-pink-600/20 rounded-full blur-2xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 relative z-10">
                    <div className="text-center">
                      <motion.div 
                        className="w-16 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-6 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                      <motion.h2 
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 md:mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <motion.span 
                          className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600"
                          animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          style={{
                            backgroundSize: "200% 200%"
                          }}
                        >
{t('nhom_thien.hero.subtitle')}
                        </motion.span>
                      </motion.h2>
                      <motion.p 
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 md:mb-8 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
{t('nhom_thien.hero.description')}
                      </motion.p>
                      <motion.div 
                        className="w-16 h-1 bg-gradient-to-r from-pink-500 to-emerald-500 mx-auto mt-6 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-rose-50/30 to-pink-50/50 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #f43f5e 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #ec4899 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-rose-400/10 to-pink-400/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 20, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div className="text-center mb-16" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <motion.div 
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Heart className="w-5 h-5" />
                </motion.div>
{t('nhom_thien.overview.badge')}
              </motion.div>
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                style={{
                  background: "linear-gradient(45deg, #1e293b, #f43f5e, #1e293b)",
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
{t('nhom_thien.overview.title')}
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto"
              variants={fadeInUp}
            >
{t('nhom_thien.overview.description')}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInScale} className="h-full">
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(244, 63, 94, 0.2)"
                }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm h-full flex flex-col">
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <div className="text-center flex-1 flex flex-col justify-center">
                      <motion.div 
                        className="w-20 h-20 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          animate={{ 
                            boxShadow: [
                              "0 0 0px rgba(244, 63, 94, 0)",
                              "0 0 20px rgba(244, 63, 94, 0.3)",
                              "0 0 0px rgba(244, 63, 94, 0)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="w-full h-full rounded-2xl flex items-center justify-center"
                        >
                          <HandHeart className="w-10 h-10 text-white" />
                        </motion.div>
                      </motion.div>
                      <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-rose-600 transition-colors">
{t('nhom_thien.overview.roles.compassion.title')}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
{t('nhom_thien.overview.roles.compassion.description')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInScale} className="h-full">
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)"
                }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm h-full flex flex-col">
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <div className="text-center flex-1 flex flex-col justify-center">
                      <motion.div 
                        className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Shield className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors">
{t('nhom_thien.overview.roles.sustainability.title')}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
{t('nhom_thien.overview.roles.sustainability.description')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Activities Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50/20 to-green-50/30 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, #10b981 2px, transparent 2px),
                             radial-gradient(circle at 70% 70%, #059669 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-rose-400/10 to-pink-400/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -20, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div className="text-center mb-16" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <motion.div 
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Award className="w-5 h-5" />
                </motion.div>
{t('nhom_thien.activities.badge')}
              </motion.div>
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                style={{
                  background: "linear-gradient(45deg, #1e293b, #10b981, #1e293b)",
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
{t('nhom_thien.activities.title')}
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
{t('nhom_thien.activities.description')}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
            variants={staggerContainer}
          >
            {activities.map((activity, index) => {
              const IconComponent = activity.icon
              return (
                <motion.div key={index} variants={fadeInScale} className="h-full">
                  <motion.div
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm h-full flex flex-col">
                      <CardContent className="p-8 flex-1 flex flex-col">
                        <div className="text-center flex-1 flex flex-col justify-between">
                          <div>
                            <motion.div 
                              className={`w-20 h-20 bg-gradient-to-r ${activity.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                              whileHover={{ rotate: 12, scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <IconComponent className="w-10 h-10 text-white" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors">
                              {activity.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                              {activity.description}
                            </p>
                          </div>
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {activity.details}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #3b82f6 1px, transparent 1px),
                             linear-gradient(-45deg, #6366f1 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-r from-indigo-400/10 to-violet-400/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 20, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div className="text-center mb-16" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <motion.div 
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Award className="w-5 h-5" />
                </motion.div>
{t('nhom_thien.achievements.badge')}
              </motion.div>
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                style={{
                  background: "linear-gradient(45deg, #1e293b, #3b82f6, #1e293b)",
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
{t('nhom_thien.achievements.title')}
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
{t('nhom_thien.achievements.description')}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
            variants={staggerContainer}
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div key={index} variants={fadeInScale} className="h-full">
                  <motion.div
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm h-full flex flex-col">
                      <CardContent className="p-8 text-center flex-1 flex flex-col justify-center">
                        <motion.div 
                          className={`w-20 h-20 bg-gradient-to-r ${achievement.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                          whileHover={{ rotate: 12, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="w-10 h-10 text-white" />
                        </motion.div>
                        <motion.div 
                          className={`text-4xl font-bold mb-3 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}
                          animate={{ 
                            scale: [1, 1.05, 1],
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        >
                          {achievement.number}
                        </motion.div>
                        <div className="text-xl font-bold text-slate-800 mb-2">
                          {achievement.label}
                        </div>
                        <div className="text-slate-600">
                          {achievement.description}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Companies Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-rose-50/20 to-pink-50/30 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #f43f5e 1px, transparent 1px),
                             linear-gradient(-45deg, #ec4899 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-rose-400/10 to-pink-400/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-400/10 to-rose-400/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 20, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div className="text-center mb-16" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <motion.div 
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Building2 className="w-5 h-5" />
                </motion.div>
                {t('nhom_thien.companies.badge')}
              </motion.div>
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                style={{
                  background: "linear-gradient(45deg, #1e293b, #f43f5e, #1e293b)",
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
                {t('nhom_thien.companies.title')}
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              {t('nhom_thien.companies.description')}
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
                      boxShadow: "0 20px 40px rgba(244, 63, 94, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <Card className="group border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                      <CardContent className="p-6 text-center flex flex-col h-full">
                        <motion.div 
                          className="mb-4 flex-shrink-0 relative"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Animated glow effect behind logo */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-full blur-xl"
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
                            className="font-bold text-slate-800 group-hover:text-rose-600 transition-colors text-base leading-tight"
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
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-600 via-pink-600 to-emerald-600 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
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
          className="absolute top-20 left-20 w-32 h-32 rounded-full blur-2xl bg-gradient-to-r from-white/10 to-rose-100/10"
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
          className="absolute bottom-20 right-20 w-40 h-40 rounded-full blur-3xl bg-gradient-to-r from-white/10 to-emerald-100/10"
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
        
        <div className="max-w-5xl mx-auto text-center relative">
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
                <Heart className="w-5 h-5" />
              </motion.div>
{t('nhom_thien.cta.badge')}
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            variants={fadeInUp}
          >
            <motion.span 
              style={{
                background: "linear-gradient(45deg, #ffffff, #fecaca, #ffffff)",
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
{t('nhom_thien.cta.title')}
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl sm:text-2xl text-rose-100 mb-12 leading-relaxed max-w-3xl mx-auto"
            variants={fadeInUp}
          >
{t('nhom_thien.cta.description')}
          </motion.p>
          
          <motion.div 
            className="flex justify-center"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-white text-rose-600 hover:bg-rose-50 px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                  onClick={() => window.location.href = '/lien-he'}
                >
                  <motion.span 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {t('nhom_thien.cta.buttons.join_activities')}
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
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}

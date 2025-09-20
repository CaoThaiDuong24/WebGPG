'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Globe, Target, Leaf, Award, TrendingUp, Diamond, Users2, Star, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, fadeInScale, staggerContainer, hoverScale, floating, pulse, textReveal, gradientText } from './animations';
import { useLocale } from '@/components/locale-provider';

const AboutGeneral = () => {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate items with staggered delay
          const timeouts: NodeJS.Timeout[] = []
          const stats = [
            { number: "16+", label: t('about_general.hero.stats.years'), color: "from-blue-400 to-blue-600" },
            { number: "11", label: t('about_general.hero.stats.offices'), color: "from-green-400 to-green-600" },
            { number: "18", label: t('about_general.hero.stats.containers'), color: "from-purple-400 to-purple-600" },
            { number: "21", label: t('about_general.hero.stats.shipping_lines'), color: "from-orange-400 to-orange-600" }
          ]
          stats.forEach((_, index) => {
            const timeout = setTimeout(() => {
              setAnimatedItems(prev => new Set([...prev, index]))
            }, index * 200)
            timeouts.push(timeout)
          })
          
          return () => {
            timeouts.forEach(clearTimeout)
          }
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
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
      {/* Hero Section with Enhanced Design */}
      <motion.div 
        ref={sectionRef}
        className="relative overflow-hidden min-h-screen flex items-center"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Modern Business Background */}
        <div className="absolute inset-0">
          <Image
            src="/modern-business-skyline-with-glass-buildings-at-su.jpg"
            alt="Tòa nhà văn phòng hiện đại - Trụ sở TCT Đối Tác Chân Thật"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-indigo-800/80 to-blue-700/85"></div>
          {/* Animated floating elements */}
          <motion.div 
            className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-40 right-20 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, 20, 0],
              y: [0, -15, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div 
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-300/20 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.7, 0.4],
              rotate: [0, -180, -360]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-300/20 rounded-full blur-lg"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              y: [0, -10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
        
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              {/* Company Badge with enhanced styling */}
              <motion.div 
                className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-8 py-4 mb-12 border border-white/30 shadow-2xl"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-blue-400 to-blue-500 p-2 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Building2 className="h-6 w-6 text-white" />
                </motion.div>
                <span className="text-white font-semibold text-lg tracking-wide">{t('about_general.hero.company_name')}</span>
                <motion.div 
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              {/* Main Title with enhanced typography */}
              <motion.h1 
                className="text-6xl md:text-8xl font-black mb-8 text-white leading-tight tracking-tight"
                variants={fadeInUp}
              >
                <motion.span 
                  className="block"
                  style={{
                    background: "linear-gradient(45deg, #ffffff, #60a5fa, #a78bfa, #ffffff)",
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
                  {t('about_general.hero.title')}
                </motion.span>
              </motion.h1>
              
              {/* Subtitle with better spacing */}
              <motion.p 
                className="text-2xl md:text-3xl mb-16 text-blue-100 leading-relaxed max-w-5xl mx-auto font-light"
                variants={fadeInUp}
              >
                {t('about_general.hero.subtitle')}
              </motion.p>
              
              {/* Enhanced Statistics Cards */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
                variants={staggerContainer}
              >
                {[
                  { number: "16+", label: t('about_general.hero.stats.years'), color: "from-blue-400 to-blue-600" },
                  { number: "11", label: t('about_general.hero.stats.offices'), color: "from-green-400 to-green-600" },
                  { number: "18", label: t('about_general.hero.stats.containers'), color: "from-purple-400 to-purple-600" },
                  { number: "21", label: t('about_general.hero.stats.shipping_lines'), color: "from-orange-400 to-orange-600" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="group bg-white/15 backdrop-blur-md rounded-2xl px-6 py-6 border border-white/20 shadow-2xl hover:bg-white/20 h-full flex flex-col justify-center"
                    variants={fadeInScale}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                      rotateY: 5
                    }}
                  >
                    <motion.div 
                      className="text-4xl font-black text-white mb-2"
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      whileHover={{
                        scale: 1.1,
                        textShadow: "0 0 20px rgba(255, 255, 255, 0.5)"
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <motion.div 
                      className="text-blue-200 text-base font-medium"
                      whileHover={{ 
                        color: "#ffffff",
                        scale: 1.05
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.label}
                    </motion.div>
                    <motion.div 
                      className={`w-full h-1 bg-gradient-to-r ${stat.color} rounded-full mt-3`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scaleX: 1.1,
                        boxShadow: `0 0 10px ${stat.color.includes('blue') ? '#3b82f6' : stat.color.includes('green') ? '#10b981' : stat.color.includes('purple') ? '#8b5cf6' : '#f97316'}`
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Call to action button */}
              <motion.div className="mt-16" variants={fadeInUp}>
                <motion.button 
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-blue-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>{t('about_general.hero.button')}</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Company Introduction */}
      <motion.div 
        className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Elegant background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-200/30 via-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-emerald-200/25 via-cyan-200/25 to-blue-200/25 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-200/20 via-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="space-y-8"
                variants={fadeInLeft}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                {/* Elegant Header */}
                <motion.div 
                  className="text-center lg:text-left"
                  variants={fadeInUp}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-xl rounded-full px-8 py-4 border border-blue-200/60 shadow-xl mb-8"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
                      y: -2
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-full shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Building2 className="h-5 w-5 text-white" />
                    </motion.div>
                    <span className="text-blue-800 font-semibold text-base tracking-wide">{t('about_general.company_intro.badge')}</span>
                    <motion.div 
                      className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  <motion.h2 
                    className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.div 
                      className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent"
                      style={{
                        backgroundSize: "300% 300%"
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
                      {t('about_general.company_intro.company_name')}
                    </motion.div>
                    <motion.div 
                      className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
                      style={{
                        backgroundSize: "300% 300%"
                      }}
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.5
                      }}
                    >
                      {t('about_general.company_intro.company_name_part1')} <motion.span 
                        className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent"
                        style={{
                          backgroundSize: "300% 300%"
                        }}
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 1
                        }}
                      >
                        {t('about_general.company_intro.company_name_part2')}
                      </motion.span>
                    </motion.div>
                  </motion.h2>

                  <motion.p 
                    className="text-2xl text-gray-700 leading-relaxed font-medium mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {t('about_general.company_intro.description')}
                  </motion.p>
                </motion.div>
                
                {/* Elegant Company Info Card */}
                <motion.div 
                  className="bg-white/90 backdrop-blur-2xl p-8 rounded-3xl border border-blue-200/50 shadow-2xl relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl"></div>
                  <motion.div 
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-cyan-200/30 rounded-full blur-2xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="space-y-6 text-lg text-gray-800 leading-relaxed"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <motion.p variants={fadeInUp}>
                        {t('about_general.company_intro.founding')} <motion.span 
                          className="font-bold text-emerald-600 bg-gradient-to-r from-emerald-100 to-cyan-100 px-3 py-1 rounded-full"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {t('about_general.company_intro.founding_date')}
                        </motion.span> {t('about_general.company_intro.founding_location')}
                      </motion.p>
                      <motion.p variants={fadeInUp}>
                        {t('about_general.company_intro.development')} <motion.span 
                          className="font-bold text-blue-600 bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1 rounded-full"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {t('about_general.company_intro.development_years')}
                        </motion.span> {t('about_general.company_intro.development_description')}
                      </motion.p>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Elegant Info Cards Grid */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div 
                    className="group bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full flex flex-col"
                    variants={fadeInScale}
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: 2
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl"></div>
                    <div className="relative z-10">
                      <motion.div 
                        className="flex items-center gap-4 mb-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div 
                          className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-xl shadow-lg"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Globe className="h-5 w-5 text-white" />
                        </motion.div>
                        <h3 className="text-lg font-bold text-blue-900">{t('about_general.company_intro.scale_title')}</h3>
                      </motion.div>
                      <ul className="space-y-3 text-gray-700">
                        <motion.li 
                          className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div 
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 w-2 h-2 rounded-full shadow-sm"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="text-base">{t('about_general.company_intro.scale_items.depots')} <span className="text-blue-600 font-bold">{t('about_general.company_intro.scale_items.depots_capacity')}</span></span>
                        </motion.li>
                        <motion.li 
                          className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300 delay-100"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <motion.div 
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 w-2 h-2 rounded-full shadow-sm"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                          />
                          <span className="text-base">{t('about_general.company_intro.scale_items.total_area')} <span className="text-blue-600 font-bold">{t('about_general.company_intro.scale_items.total_area_size')}</span></span>
                        </motion.li>
                        <motion.li 
                          className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300 delay-200"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <motion.div 
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 w-2 h-2 rounded-full shadow-sm"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                          />
                          <span className="text-base">{t('about_general.company_intro.scale_items.countries')} <span className="text-blue-600 font-bold">{t('about_general.company_intro.scale_items.countries_count')}</span></span>
                        </motion.li>
                      </ul>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="group bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full flex flex-col"
                    variants={fadeInScale}
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: -2
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-cyan-50/50 rounded-2xl"></div>
                    <div className="relative z-10">
                      <motion.div 
                        className="flex items-center gap-4 mb-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div 
                          className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-3 rounded-xl shadow-lg"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Target className="h-5 w-5 text-white" />
                        </motion.div>
                        <h3 className="text-lg font-bold text-emerald-900">{t('about_general.company_intro.services_title')}</h3>
                      </motion.div>
                      <ul className="space-y-3 text-gray-700">
                        <motion.li 
                          className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div 
                            className="bg-gradient-to-r from-emerald-500 to-cyan-500 w-2 h-2 rounded-full shadow-sm"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                          />
                          <span className="text-base">{t('about_general.company_intro.services_items.logistics')}</span>
                        </motion.li>
                        <motion.li 
                          className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300 delay-100"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <motion.div 
                            className="bg-gradient-to-r from-emerald-500 to-cyan-500 w-2 h-2 rounded-full shadow-sm"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                          />
                          <span className="text-base">{t('about_general.company_intro.services_items.depot')}</span>
                        </motion.li>
                        <motion.li 
                          className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300 delay-200"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <motion.div 
                            className="bg-gradient-to-r from-emerald-500 to-cyan-500 w-2 h-2 rounded-full shadow-sm"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                          />
                          <span className="text-base">{t('about_general.company_intro.services_items.shipping')}</span>
                        </motion.li>
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Elegant Mission Statement */}
                <motion.div 
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20"></div>
                  <motion.div 
                    className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.4, 0.2],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-yellow-400/20 to-amber-400/20 rounded-full blur-2xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2],
                      rotate: [0, -180, -360]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-center gap-4 mb-6"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="bg-white/20 p-3 rounded-xl backdrop-blur-sm"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Star className="h-6 w-6 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold">{t('about_general.company_intro.mission_title')}</h3>
                    </motion.div>
                    <motion.p 
                      className="text-2xl leading-relaxed font-bold mb-6 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      whileHover={{ 
                        scale: 1.05,
                        textShadow: "0 0 20px rgba(255, 255, 255, 0.5)"
                      }}
                    >
                      "{t('about_general.company_intro.mission_quote')}"
                    </motion.p>
                    <motion.p 
                      className="text-lg leading-relaxed text-blue-100 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {t('about_general.company_intro.mission_description')}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Elegant Image */}
              <motion.div 
                className="relative group"
                variants={fadeInRight}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div 
                  className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-700"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-indigo-200/20 to-purple-200/20 rounded-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 rounded-3xl"></div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  >
                    <Image
                      src="/quymogpg.png"
                      alt="Quy mô hoạt động GPG - Thống kê và số liệu về hệ thống logistics"
                      width={700}
                      height={700}
                      className="object-contain w-full h-[700px] p-8 relative z-10"
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute inset-4 border border-blue-200/30 rounded-2xl"
                    whileHover={{ 
                      borderColor: "rgba(59, 130, 246, 0.5)",
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Ecosystem Section */}
      <motion.div 
        className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Enhanced background elements */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-blue-200/25 to-indigo-200/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-20"
              variants={fadeInUp}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 mb-10 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-2.5 rounded-full shadow-md"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Globe className="h-6 w-6 text-white" />
                </motion.div>
                <span className="text-indigo-800 font-bold text-lg">{t('about_general.ecosystem.badge')}</span>
                <motion.div 
                  className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              <motion.h2 
                className="text-5xl md:text-6xl font-black text-gray-900 mb-10 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('about_general.ecosystem.title')}
              </motion.h2>
              
              <motion.div 
                className="bg-white/70 backdrop-blur-sm p-10 rounded-2xl border border-white/60 shadow-xl max-w-5xl mx-auto hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(99, 102, 241, 0.15)"
                }}
              >
                <motion.div 
                  className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative z-10">
                  <motion.div 
                    className="space-y-4 text-xl text-gray-800 leading-relaxed font-medium"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.p variants={fadeInUp}>
                      {t('about_general.ecosystem.description')} <motion.span 
                        className="font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                        style={{
                          backgroundSize: "300% 300%"
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
                        {t('about_general.ecosystem.ecosystem_name')}
                      </motion.span> {t('about_general.ecosystem.ecosystem_description')}
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                      {t('about_general.ecosystem.goals')}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Modern Business Image Showcase */}
            <motion.div 
              className="relative mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                >
                  <Image
                    src="/slider01-Large-768x445.png"
                    alt="Tòa nhà văn phòng hiện đại - Trụ sở TCT Đối Tác Chân Thật"
                    width={1200}
                    height={500}
                    className="object-cover w-full h-[500px]"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                
                {/* Content Overlay */}
                <motion.div 
                  className="absolute inset-0 flex items-end"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="p-8 w-full">
                    <div className="max-w-4xl">
                      <motion.div 
                        className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-5 py-2.5 mb-4 border border-white/30 shadow-lg"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(255, 255, 255, 0.3)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div 
                          className="bg-gradient-to-r from-blue-500 to-indigo-500 p-1.5 rounded-full"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Building2 className="h-4 w-4 text-white" />
                        </motion.div>
                        <span className="text-white font-semibold text-sm">{t('about_general.ecosystem.headquarters')}</span>
                        <motion.div 
                          className="w-1.5 h-1.5 bg-green-400 rounded-full"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-4xl font-black text-white mb-4 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {t('about_general.ecosystem.headquarters_name')}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-lg text-blue-100 leading-relaxed font-medium mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        {t('about_general.ecosystem.headquarters_address')}
                      </motion.p>
                      
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

              {/* Hệ sinh thái GPG Image */}
              <motion.div 
                className="mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.div 
                  className="relative group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="relative rounded-2xl overflow-hidden shadow-xl bg-white group-hover:shadow-2xl transition-all duration-500"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Image
                        src="/hstgpg.png"
                        alt="Hệ sinh thái GPG - Sơ đồ tổng quan các lĩnh vực hoạt động"
                        width={1200}
                        height={500}
                        className="object-contain w-full h-[500px] p-6"
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div 
                  className="group"
                  variants={fadeInScale}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center relative overflow-hidden h-full flex flex-col justify-between"
                    whileHover={{ 
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full blur-xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="relative z-10">
                      <motion.div 
                        className="mx-auto bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg"
                        whileHover={{ 
                          rotate: 12, 
                          scale: 1.1,
                          boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Building2 className="h-10 w-10 text-white" />
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {t('about_general.ecosystem.groups.logistics.title')}
                      </motion.h3>
                      <p className="text-gray-600 leading-relaxed text-base font-medium">
                        {t('about_general.ecosystem.groups.logistics.description')}
                      </p>
                      <motion.div 
                        className="mt-4 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:w-full transition-all duration-500"
                        whileHover={{ 
                          scaleX: 1.1,
                          boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)"
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="group"
                  variants={fadeInScale}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center relative overflow-hidden h-full flex flex-col justify-between"
                    whileHover={{ 
                      boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-full blur-xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                    <div className="relative z-10">
                      <motion.div 
                        className="mx-auto bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg"
                        whileHover={{ 
                          rotate: 12, 
                          scale: 1.1,
                          boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Users className="h-10 w-10 text-white" />
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {t('about_general.ecosystem.groups.commerce.title')}
                      </motion.h3>
                      <p className="text-gray-600 leading-relaxed text-base font-medium">
                        {t('about_general.ecosystem.groups.commerce.description')}
                      </p>
                      <motion.div 
                        className="mt-4 w-full h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full group-hover:w-full transition-all duration-500"
                        whileHover={{ 
                          scaleX: 1.1,
                          boxShadow: "0 0 10px rgba(16, 185, 129, 0.5)"
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="group"
                  variants={fadeInScale}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center relative overflow-hidden h-full flex flex-col justify-between"
                    whileHover={{ 
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-full blur-xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    />
                    <div className="relative z-10">
                      <motion.div 
                        className="mx-auto bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg"
                        whileHover={{ 
                          rotate: 12, 
                          scale: 1.1,
                          boxShadow: "0 10px 30px rgba(139, 92, 246, 0.4)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Target className="h-10 w-10 text-white" />
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {t('about_general.ecosystem.groups.consulting.title')}
                      </motion.h3>
                      <p className="text-gray-600 leading-relaxed text-base font-medium">
                        {t('about_general.ecosystem.groups.consulting.description')}
                      </p>
                      <motion.div 
                        className="mt-4 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full group-hover:w-full transition-all duration-500"
                        whileHover={{ 
                          scaleX: 1.1,
                          boxShadow: "0 0 10px rgba(139, 92, 246, 0.5)"
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="group"
                  variants={fadeInScale}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center relative overflow-hidden h-full flex flex-col justify-between"
                    whileHover={{ 
                      boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-full blur-xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    />
                    <div className="relative z-10">
                      <motion.div 
                        className="mx-auto bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg"
                        whileHover={{ 
                          rotate: 12, 
                          scale: 1.1,
                          boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Leaf className="h-10 w-10 text-white" />
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {t('about_general.ecosystem.groups.community.title')}
                      </motion.h3>
                      <p className="text-gray-600 leading-relaxed text-base font-medium">
                        {t('about_general.ecosystem.groups.community.description')}
                      </p>
                      <motion.div 
                        className="mt-4 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full group-hover:w-full transition-all duration-500"
                        whileHover={{ 
                          scaleX: 1.1,
                          boxShadow: "0 0 10px rgba(249, 115, 22, 0.5)"
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Sustainable Development Goals with Retail Image */}
      <motion.div 
        className="py-32 bg-gradient-to-br from-white via-green-50 to-emerald-100 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Enhanced background elements */}
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-teal-200/15 to-green-200/15 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-20"
              variants={fadeInUp}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 mb-10 border border-green-300/50 shadow-xl hover:shadow-2xl transition-all duration-500"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-green-500 to-green-600 p-2.5 rounded-full shadow-md"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="h-6 w-6 text-white" />
                </motion.div>
                <span className="text-green-800 font-bold text-lg">{t('about_general.sustainable_development.badge')}</span>
                <motion.div 
                  className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              <motion.h2 
                className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('about_general.sustainable_development.title')}
              </motion.h2>
              
              <motion.div 
                className="bg-white/70 backdrop-blur-sm p-10 rounded-2xl border border-white/60 shadow-xl max-w-5xl mx-auto hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(34, 197, 94, 0.15)"
                }}
              >
                <motion.div 
                  className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative z-10">
                  <motion.div 
                    className="space-y-4 text-xl text-gray-800 leading-relaxed font-medium"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.p variants={fadeInUp}>
                      {t('about_general.sustainable_development.description')} <motion.span 
                        className="font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                        style={{
                          backgroundSize: "300% 300%"
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
                        {t('about_general.sustainable_development.keywords.safe')}
                      </motion.span>, <motion.span 
                        className="font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                        style={{
                          backgroundSize: "300% 300%"
                        }}
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 0.5
                        }}
                      >
                        {t('about_general.sustainable_development.keywords.stable')}
                      </motion.span> {t('about_general.sustainable_development.keywords.sustainable')}.
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                      {t('about_general.sustainable_development.goals')}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Retail Store Image Showcase */}
            <motion.div 
              className="relative mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                >
                  <Image
                    src="/business-partners.jpg"
                    alt="Cửa hàng bán lẻ hiện đại với màn hình kỹ thuật số - Dịch vụ thương mại TCT Đối Tác Chân Thật"
                    width={1200}
                    height={400}
                    className="object-cover w-full h-[400px]"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                
                {/* Content Overlay */}
                <motion.div 
                  className="absolute inset-0 flex items-end"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="p-8 w-full">
                    <div className="max-w-6xl">
                      <motion.div 
                        className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-5 py-2.5 mb-4 border border-white/30 shadow-lg"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(255, 255, 255, 0.3)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div 
                          className="bg-gradient-to-r from-green-500 to-emerald-500 p-1.5 rounded-full"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Leaf className="h-4 w-4 text-white" />
                        </motion.div>
                        <span className="text-white font-semibold text-sm">{t('about_general.sustainable_development.commerce_badge')}</span>
                        <motion.div 
                          className="w-1.5 h-1.5 bg-green-400 rounded-full"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-3xl font-black text-white mb-4 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {t('about_general.sustainable_development.commerce_title')}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-lg text-blue-100 leading-relaxed font-medium mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        {t('about_general.sustainable_development.commerce_description')}
                      </motion.p>
                      
                      <motion.div 
                        className="grid md:grid-cols-3 gap-4"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <motion.div 
                          className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30"
                          variants={fadeInScale}
                          whileHover={{ 
                            scale: 1.05,
                            y: -5,
                            backgroundColor: "rgba(255, 255, 255, 0.3)"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="text-center">
                            <motion.div 
                              className="bg-gradient-to-br from-green-500 to-green-600 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Leaf className="h-5 w-5 text-white" />
                            </motion.div>
                            <motion.h4 
                              className="text-base font-bold text-white mb-1"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              {t('about_general.sustainable_development.features.sustainable.title')}
                            </motion.h4>
                            <p className="text-blue-100 text-xs">{t('about_general.sustainable_development.features.sustainable.description')}</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30"
                          variants={fadeInScale}
                          whileHover={{ 
                            scale: 1.05,
                            y: -5,
                            backgroundColor: "rgba(255, 255, 255, 0.3)"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="text-center">
                            <motion.div 
                              className="bg-gradient-to-br from-blue-500 to-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Globe className="h-5 w-5 text-white" />
                            </motion.div>
                            <motion.h4 
                              className="text-base font-bold text-white mb-1"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              {t('about_general.sustainable_development.features.digital.title')}
                            </motion.h4>
                            <p className="text-blue-100 text-xs">{t('about_general.sustainable_development.features.digital.description')}</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30"
                          variants={fadeInScale}
                          whileHover={{ 
                            scale: 1.05,
                            y: -5,
                            backgroundColor: "rgba(255, 255, 255, 0.3)"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="text-center">
                            <motion.div 
                              className="bg-gradient-to-br from-purple-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Users className="h-5 w-5 text-white" />
                            </motion.div>
                            <motion.h4 
                              className="text-base font-bold text-white mb-1"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              {t('about_general.sustainable_development.features.workforce.title')}
                            </motion.h4>
                            <p className="text-blue-100 text-xs">{t('about_general.sustainable_development.features.workforce.description')}</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div 
        className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Enhanced background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-blue-500/25 to-indigo-500/25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/25 to-pink-500/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            {/* Header */}
            <motion.div 
              className="mb-12"
              variants={fadeInUp}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-xl rounded-full px-6 py-3 mb-6 border border-blue-200/60 shadow-lg"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-full shadow-md"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Diamond className="h-4 w-4 text-white" />
                </motion.div>
                <span className="text-blue-800 font-semibold text-sm">{t('about_general.values.badge')}</span>
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('about_general.values.title')}
              </motion.h2>
              
              <motion.p 
                className="text-xl text-blue-100 leading-relaxed font-semibold max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t('about_general.values.subtitle')}
              </motion.p>
            </motion.div>
            
            {/* Elegant Image Showcase */}
            <motion.div 
              className="relative mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-700 bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Decorative border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 via-indigo-200/20 to-purple-200/20 rounded-3xl"></div>
                <div className="absolute inset-2 border border-white/40 rounded-2xl"></div>
                
                {/* Image with elegant styling */}
                <div className="relative z-10 p-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  >
                    <Image
                      src="/Arow4Web-01.png"
                      alt="Giá trị cốt lõi GPG - Sơ đồ và thông tin về các giá trị SỰ TIN TƯỞNG, TINH THẦN TRÁCH NHIỆM, PHÁT TRIỂN BỀN VỮNG"
                      width={1200}
                      height={450}
                      className="object-contain w-full h-[450px] drop-shadow-lg"
                    />
                  </motion.div>
                </div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full opacity-20"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                    rotate: [0, -180, -360]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div 
                  className="absolute top-1/2 left-4 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.2, 0.6, 0.2],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
              </motion.div>
            </motion.div>

            {/* Values Grid */}
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mb-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                className="group bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full flex flex-col"
                variants={fadeInScale}
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl"></div>
                <div className="relative z-10">
                  <motion.div 
                    className="bg-gradient-to-br from-blue-500 to-indigo-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg"
                    whileHover={{ 
                      rotate: 12, 
                      scale: 1.1,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Award className="h-8 w-8 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-bold text-blue-900 text-center mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('about_general.values.core_values.trust.title')}
                  </motion.h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-center">
                    {t('about_general.values.core_values.trust.description')}
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="group bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                variants={fadeInScale}
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-cyan-50/50 rounded-2xl"></div>
                <div className="relative z-10">
                  <motion.div 
                    className="bg-gradient-to-br from-emerald-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg"
                    whileHover={{ 
                      rotate: 12, 
                      scale: 1.1,
                      boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Target className="h-8 w-8 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-bold text-emerald-900 text-center mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('about_general.values.core_values.responsibility.title')}
                  </motion.h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-center">
                    {t('about_general.values.core_values.responsibility.description')}
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="group bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-purple-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                variants={fadeInScale}
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl"></div>
                <div className="relative z-10">
                  <motion.div 
                    className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg"
                    whileHover={{ 
                      rotate: 12, 
                      scale: 1.1,
                      boxShadow: "0 10px 30px rgba(139, 92, 246, 0.4)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Leaf className="h-8 w-8 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-bold text-purple-900 text-center mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('about_general.values.core_values.sustainability.title')}
                  </motion.h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-center">
                    {t('about_general.values.core_values.sustainability.description')}
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Commitment */}
            <motion.div 
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20"></div>
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-400/20 to-amber-400/20 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [0, -180, -360]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center justify-center gap-3 mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="bg-white/20 p-2 rounded-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="h-5 w-5 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold">{t('about_general.values.commitment_title')}</h3>
                </motion.div>
                <motion.p 
                  className="text-base leading-relaxed text-center text-blue-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  {t('about_general.values.commitment_description')}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutGeneral;
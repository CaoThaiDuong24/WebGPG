'use client'

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Eye, 
  Target, 
  Heart, 
  Shield, 
  Star, 
  ArrowRight, 
  Sparkles, 
  Globe, 
  Crown,
  Leaf,
  Quote,
  Rocket,
  Play
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, fadeInScale, staggerContainer, hoverScale, floating, pulse, textReveal, gradientText } from './animations';
import { useLocale } from '@/components/locale-provider';

const VisionMission = () => {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set())

  const coreValues = [
    {
      icon: Shield,
      title: t('vision_mission.core_values.values.trust.title'),
      description: t('vision_mission.core_values.values.trust.description'),
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: Heart,
      title: t('vision_mission.core_values.values.responsibility.title'),
      description: t('vision_mission.core_values.values.responsibility.description'),
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-100"
    },
    {
      icon: Leaf,
      title: t('vision_mission.core_values.values.sustainability.title'),
      description: t('vision_mission.core_values.values.sustainability.description'),
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-100"
    }
  ];

  // Memoize particle positions and animations for performance
  const particleData = useMemo(() => {
    return {
      floatingParticles: Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        xOffset: Math.random() * 20 - 10,
        duration: 4 + Math.random() * 3,
        delay: Math.random() * 3
      })),
      sparkleParticles: Array.from({ length: 6 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 2
      }))
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate items with staggered delay
          coreValues.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedItems(prev => new Set([...prev, index]))
            }, index * 200)
          })
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
  }, [coreValues])


  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
      {/* Hero Section with Enhanced Design */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%'
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/85 to-indigo-900/80"></div>
          
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
          {particleData.floatingParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 rounded-full bg-blue-400/60"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
                x: [0, particle.xOffset, 0]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Additional sparkle effects */}
          {particleData.sparkleParticles.map((particle) => (
            <motion.div
              key={`sparkle-${particle.id}`}
              className="absolute w-1 h-1 rounded-full bg-yellow-400/80"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
          <motion.div 
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div 
              className="mb-8"
              variants={fadeInUp}
            >
              <motion.div 
                className="inline-flex items-center gap-3 px-6 py-3 backdrop-blur-xl border border-white/30 rounded-full text-sm font-semibold shadow-xl bg-white/10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Globe className="w-4 h-4" />
                </motion.div>
                <span className="text-white/90">{t('vision_mission.hero.badge')}</span>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Rocket className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-balance leading-tight tracking-tight"
              variants={fadeInUp}
            >
              <motion.span 
                className="block mb-2"
                style={{
                  background: "linear-gradient(45deg, #ffffff, #60a5fa, #a78bfa, #ffffff)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  backgroundPosition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  opacity: { duration: 0.8, delay: 0.2 },
                  y: { duration: 0.8, delay: 0.2 }
                }}
                initial={{ opacity: 0, y: 30 }}
              >
{t('vision_mission.hero.title1')}
              </motion.span>
              <motion.span 
                className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                style={{
                  background: "linear-gradient(45deg, #60a5fa, #a78bfa, #ec4899, #60a5fa)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5
                  },
                  opacity: { duration: 0.8, delay: 0.4 },
                  y: { duration: 0.8, delay: 0.4 }
                }}
                initial={{ opacity: 0, y: 30 }}
              >
{t('vision_mission.hero.title2')}
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.div 
              className="mb-12 max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.span 
                  className="font-bold text-blue-200"
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(96, 165, 250, 0)",
                      "0 0 20px rgba(96, 165, 250, 0.5)",
                      "0 0 0px rgba(96, 165, 250, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {t('vision_mission.hero.description1')}
                </motion.span>
              </motion.p>
              <motion.p 
                className="text-base sm:text-lg text-white/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {t('vision_mission.hero.description2')}
              </motion.p>
            </motion.div>

            {/* Quote from Thượng tọa Thích Nghiêm Đạo */}
            <motion.div 
              className="mb-12 max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              <motion.div 
                className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative z-10">
                  <motion.div 
                    className="flex justify-center mb-6"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Quote className="w-12 h-12 text-yellow-400/80" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.p 
                    className="text-lg md:text-xl text-blue-100 leading-relaxed italic text-center font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    {t('vision_mission.hero.quote1')}
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg md:text-xl text-blue-100 leading-relaxed italic text-center mt-4 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  >
                    {t('vision_mission.hero.quote2')}
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center justify-center mt-6 gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                  >
                    <motion.div 
                      className="w-8 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.8 }}
                    />
                    <p className="text-sm text-blue-200 font-medium px-4">
                      {t('vision_mission.hero.quote_author')}
                    </p>
                    <motion.div 
                      className="w-8 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.8 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section 
        className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-indigo-100/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-100/25 to-blue-100/15 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.4, 0.25],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 text-blue-700 px-8 py-4 rounded-full text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Eye className="w-4 h-4 text-white" />
              </motion.div>
              {t('vision_mission.vision.badge')}
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                className="block text-gray-900 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {t('vision_mission.vision.title1')}
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
                style={{
                  backgroundSize: "300% 300%"
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  opacity: { duration: 0.8, delay: 0.2 },
                  y: { duration: 0.8, delay: 0.2 }
                }}
                initial={{ opacity: 0, y: 20 }}
              >
                {t('vision_mission.vision.title2')}
              </motion.span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          <motion.div
            className="max-w-7xl mx-auto"
            variants={fadeInScale}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="relative overflow-hidden border-0 bg-white/90 backdrop-blur-xl hover:bg-white transition-all duration-700 shadow-2xl hover:shadow-3xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/30" />
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-indigo-100/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <CardContent className="relative p-8 md:p-12">
                <motion.div 
                  className="flex items-start gap-6 mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl shadow-xl group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 0px rgba(59, 130, 246, 0)",
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 0px rgba(59, 130, 246, 0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity
                    }}
                  >
                    <Eye className="w-10 h-10 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{t('vision_mission.vision.section_title')}</h3>
                    <motion.div 
                      className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
                
                <div className="prose prose-lg prose-gray max-w-none">
                  <motion.p 
                    className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {t('vision_mission.vision.description1')}
                  </motion.p>
                  <motion.p 
                    className="text-lg md:text-xl text-gray-600 leading-relaxed mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {t('vision_mission.vision.description2')}
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section 
        className="relative py-16 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50/40 to-pink-50/60"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-100/30 to-purple-100/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, -180, -360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-purple-100/25 to-pink-100/15 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.4, 0.25],
              x: [0, -30, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/50 text-indigo-700 px-8 py-4 rounded-full text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Target className="w-4 h-4 text-white" />
              </motion.div>
              {t('vision_mission.mission.badge')}
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                className="block text-gray-900 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {t('vision_mission.mission.title1')}
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                style={{
                  backgroundSize: "300% 300%"
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  opacity: { duration: 0.8, delay: 0.2 },
                  y: { duration: 0.8, delay: 0.2 }
                }}
                initial={{ opacity: 0, y: 20 }}
              >
                {t('vision_mission.mission.title2')}
              </motion.span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          <motion.div
            className="max-w-7xl mx-auto"
            variants={fadeInScale}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="relative overflow-hidden border-0 bg-white/90 backdrop-blur-xl hover:bg-white transition-all duration-700 shadow-2xl hover:shadow-3xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/30" />
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100/40 to-purple-100/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <CardContent className="relative p-8 md:p-12">
                <motion.div 
                  className="flex items-start gap-6 mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl shadow-xl group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 0px rgba(124, 58, 237, 0)",
                        "0 0 20px rgba(124, 58, 237, 0.3)",
                        "0 0 0px rgba(124, 58, 237, 0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity
                    }}
                  >
                    <Target className="w-10 h-10 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{t('vision_mission.mission.section_title')}</h3>
                    <motion.div 
                      className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
                
                <div className="prose prose-lg prose-gray max-w-none">
                  <motion.p 
                    className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {t('vision_mission.mission.description1')}
                  </motion.p>
                  <motion.p 
                    className="text-lg md:text-xl text-gray-600 leading-relaxed mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {t('vision_mission.mission.description2')}
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section 
        ref={sectionRef}
        className="relative py-16 overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50/40 to-teal-50/60"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100/30 to-green-100/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-100/25 to-teal-100/15 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.4, 0.25],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/50 text-emerald-700 px-8 py-4 rounded-full text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="p-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Star className="w-4 h-4 text-white" />
              </motion.div>
              {t('vision_mission.core_values.badge')}
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                className="block bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent"
                style={{
                  backgroundSize: "300% 300%"
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  opacity: { duration: 0.6 },
                  y: { duration: 0.6 }
                }}
                initial={{ opacity: 0, y: 20 }}
              >
                {t('vision_mission.core_values.title')}
              </motion.span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('vision_mission.core_values.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={staggerContainer}
          >
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div 
                  key={index} 
                  className="group"
                  variants={fadeInScale}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full bg-white/90 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 relative overflow-hidden hover:bg-white group-hover:scale-105">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} opacity-20`} />
                    <motion.div 
                      className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-100/30 to-green-100/20 rounded-full blur-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    />
                    
                    <CardHeader className="relative z-10 p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div 
                          className={`p-4 bg-gradient-to-r ${value.color} rounded-3xl shadow-xl group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          animate={{
                            boxShadow: [
                              "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                              "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                              "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                            ]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: index * 0.3
                          }}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </motion.div>
                        <CardTitle className="text-2xl font-bold text-gray-900">
                          {value.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10 p-6 pt-0">
                      <CardDescription className="text-gray-700 leading-relaxed text-lg font-light">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                    
                    {/* Progress bar */}
                    <motion.div 
                      className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${value.color} rounded-b-xl`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        className="relative py-16 overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900 text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              variants={fadeInUp}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Crown className="w-5 h-5 text-yellow-400" />
              </motion.div>
              <span className="text-white/90 font-medium">{t('vision_mission.cta.badge')}</span>
            </motion.div>

            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight"
              variants={fadeInUp}
            >
              {t('vision_mission.cta.title')}
            </motion.h2>

            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              {t('vision_mission.cta.description')}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="group relative text-white px-8 py-4 text-lg font-bold rounded-xl shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
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
                    {t('vision_mission.cta.buttons.contact')}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.span>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="group relative border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 text-lg font-bold bg-white/5 backdrop-blur-xl rounded-xl"
                >
                  <motion.span 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Play className="w-5 h-5" />
                    </motion.div>
                    {t('vision_mission.cta.buttons.learn_more')}
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default VisionMission;

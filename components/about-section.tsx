'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Award, Globe, TrendingUp, Sparkles, ArrowRight, CheckCircle, Truck, ShoppingBag, Brain, Heart } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { fadeInUp, fadeInLeft, fadeInRight, fadeInScale, staggerContainer, hoverScale } from "./animations"
import { useLocale } from "@/components/locale-provider"
export function AboutSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate items with staggered delay
          const timeouts: NodeJS.Timeout[] = []
          achievements.forEach((_, index) => {
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

  const achievements = [
    {
      icon: Users,
      number: "1000+",
      label: t('about.stats.employees'),
      description: t('about.stats.professional_team'),
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Award,
      number: "50+",
      label: t('about.stats.awards'),
      description: t('about.stats.recognized'),
      gradient: "from-indigo-500 to-violet-500",
    },
    {
      icon: Globe,
      number: "63",
      label: t('about.stats.provinces'),
      description: t('about.stats.nationwide'),
      gradient: "from-blue-400 to-indigo-400",
    },
    {
      icon: TrendingUp,
      number: "99%",
      label: t('about.stats.satisfaction'),
      description: t('about.stats.trusted'),
      gradient: "from-indigo-400 to-violet-400",
    },
  ]

  const highlights = [
    t('about.highlights.experience'),
    t('about.highlights.team'),
    t('about.highlights.coverage'),
    t('about.highlights.satisfaction')
  ]

  return (
    <motion.section 
      ref={sectionRef} 
      className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
      <motion.div 
        className="hidden md:block absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="hidden md:block absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-indigo-400/10 to-violet-400/10 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 20, 0],
          y: [0, -15, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div className="space-y-8 text-center lg:text-left" variants={fadeInLeft}>
            <motion.div className="space-y-6" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-700 border-blue-200/50 backdrop-blur-sm">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
{t('about.badge')}
                </Badge>
              </motion.div>
              
              <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight" variants={fadeInUp}>
                <motion.span 
                  className="block"
                  style={{
                    background: "linear-gradient(45deg, #1e293b, #1e40af, #1e293b)",
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
{t('about.title1')}
                </motion.span>
                <motion.span 
                  className="block"
                  style={{
                    background: "linear-gradient(45deg, #2563eb, #7c3aed, #ec4899)",
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
                    ease: "linear",
                    delay: 0.5
                  }}
                >
{t('about.title2')}
                </motion.span>
                <span className="block text-slate-800 text-3xl sm:text-4xl md:text-5xl">
{t('about.title3')}
                </span>
              </motion.h2>
            </motion.div>

            <motion.div className="space-y-6" variants={fadeInUp}>
              <motion.p 
                className="text-lg md:text-xl text-slate-600 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
{t('about.description1')}
              </motion.p>
              
              <motion.p 
                className="text-base md:text-lg text-slate-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
{t('about.description2')}
              </motion.p>
            </motion.div>

            {/* Highlights */}
            <motion.div className="space-y-4" variants={staggerContainer}>
              {highlights.map((highlight, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 group justify-center lg:justify-start"
                  variants={fadeInLeft}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-6 h-6 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="text-base text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-300">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="flex justify-center lg:justify-start" variants={fadeInUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <motion.span 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
{t('about.button')}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.div>
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div className="grid grid-cols-2 gap-6" variants={staggerContainer}>
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInScale}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-500 shadow-lg hover:shadow-xl">
                  <CardContent className="relative p-6 text-center">
                    {/* Icon */}
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      animate={{ 
                        boxShadow: [
                          "0 0 0px rgba(59, 130, 246, 0)",
                          "0 0 20px rgba(59, 130, 246, 0.3)",
                          "0 0 0px rgba(59, 130, 246, 0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    {/* Number */}
                    <motion.div 
                      className={`text-4xl font-bold mb-2 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {item.number}
                    </motion.div>
                    
                    {/* Label */}
                    <div className="text-xl font-semibold text-slate-800 mb-1 group-hover:text-slate-900 transition-colors duration-300">
                      {item.label}
                    </div>
                    
                    {/* Description */}
                    <div className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                      {item.description}
                    </div>
                    
                    {/* Hover Effect */}
                    <motion.div 
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-b-xl`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom Section - Company Philosophy */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h3 
              className="text-3xl md:text-4xl font-black text-slate-900 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('about.ecosystem.title')}
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { 
                  name: t('about.ecosystem.groups.than'), 
                  title: t('ecosystem.groups.than.title'),
                  subtitle: t('ecosystem.groups.than.subtitle'),
                  desc: t('ecosystem.groups.than.description'), 
                  color: "from-blue-600 to-cyan-500",
                  bgGradient: "from-blue-600/5 via-cyan-500/5 to-blue-600/5",
                  accentColor: "bg-blue-600",
                  iconBg: "bg-gradient-to-br from-blue-600 to-cyan-500",
                  icon: Truck
                },
                { 
                  name: t('about.ecosystem.groups.tam'), 
                  title: t('ecosystem.groups.tam.title'),
                  subtitle: t('ecosystem.groups.tam.subtitle'),
                  desc: t('ecosystem.groups.tam.description'), 
                  color: "from-purple-600 to-pink-500",
                  bgGradient: "from-purple-600/5 via-pink-500/5 to-purple-600/5",
                  accentColor: "bg-purple-600",
                  iconBg: "bg-gradient-to-br from-purple-600 to-pink-500",
                  icon: ShoppingBag
                },
                { 
                  name: t('about.ecosystem.groups.tri'), 
                  title: t('ecosystem.groups.tri.title'),
                  subtitle: t('ecosystem.groups.tri.subtitle'),
                  desc: t('ecosystem.groups.tri.description'), 
                  color: "from-indigo-600 to-blue-600",
                  bgGradient: "from-indigo-600/5 via-blue-600/5 to-indigo-600/5",
                  accentColor: "bg-indigo-600",
                  iconBg: "bg-gradient-to-br from-indigo-600 to-blue-600",
                  icon: Brain
                },
                { 
                  name: t('about.ecosystem.groups.thien'), 
                  title: t('ecosystem.groups.thien.title'),
                  subtitle: t('ecosystem.groups.thien.subtitle'),
                  desc: t('ecosystem.groups.thien.description'), 
                  color: "from-emerald-600 to-teal-500",
                  bgGradient: "from-emerald-600/5 via-teal-500/5 to-emerald-600/5",
                  accentColor: "bg-emerald-600",
                  iconBg: "bg-gradient-to-br from-emerald-600 to-teal-500",
                  icon: Heart
                }
              ].map((group, index) => (
                <motion.div 
                  key={index} 
                  className="group relative"
                  variants={fadeInScale}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card Container */}
                  <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/60 h-full flex flex-col">
                    
                    {/* Header Section with Icon */}
                    <div className={`relative p-6 ${group.accentColor} bg-gradient-to-r ${group.color}`}>
                      <div className="flex items-center justify-between">
                        {/* Large Icon */}
                        <motion.div 
                          className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30"
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          animate={{ 
                            rotate: [0, 2, -2, 0],
                            scale: [1, 1.02, 1]
                          }}
                          transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                        >
                          <group.icon className="w-10 h-10 text-white" />
                        </motion.div>
                        
                        {/* Floating Elements */}
                        <div className="flex flex-col gap-2">
                          <motion.div 
                            className="w-4 h-4 bg-white/40 rounded-full"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.4, 0.8, 0.4]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                          />
                          <motion.div 
                            className="w-3 h-3 bg-white/30 rounded-full"
                            animate={{ 
                              scale: [1, 1.3, 1],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
                          />
                          <motion.div 
                            className="w-2 h-2 bg-white/20 rounded-full"
                            animate={{ 
                              scale: [1, 1.4, 1],
                              opacity: [0.2, 0.5, 0.2]
                            }}
                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.6 }}
                          />
                        </div>
                      </div>
                      
                      {/* Number Badge */}
                      <motion.div 
                        className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.7 }}
                      >
                        <span className="text-gray-800 font-bold text-sm">{index + 1}</span>
                      </motion.div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="relative p-6 flex-grow flex flex-col justify-between">
                      {/* Title */}
                      <motion.h4 
                        className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {group.title}
                      </motion.h4>
                      
                      {/* Subtitle */}
                      <motion.p 
                        className="text-sm font-semibold text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                        viewport={{ once: true }}
                      >
                        {group.subtitle}
                      </motion.p>
                      
                      {/* Bottom Accent */}
                      <motion.div 
                        className={`mt-4 h-1 w-full bg-gradient-to-r ${group.color} rounded-full`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    
                    {/* Corner Decoration */}
                    <motion.div 
                      className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${group.color} opacity-10 rounded-full`}
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ duration: 6, repeat: Infinity, delay: index * 0.8 }}
                    />
                    
                    {/* Hover Overlay */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

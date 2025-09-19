"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, BookOpen, Home, Utensils, GraduationCap, Shield, Globe, HandHeart, Building, Award, Calendar, MapPin, Gift, CheckCircle, TrendingUp, Target, Sparkles, ArrowRight } from "lucide-react"
import Image from "next/image"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleSystem } from "@/components/particle-system"
import { motion } from "framer-motion"
import { fadeInUp, fadeInLeft, fadeInRight, fadeInScale, staggerContainer, hoverScale, floating, pulse, textReveal, gradientText } from "@/components/animations"
import { useEffect, useRef, useState } from "react"
import { useTranslations } from '@/hooks/use-i18n'

export default function SocialResponsibilityPage() {
  const t = useTranslations()
  const socialActivities = [
    {
      icon: Heart,
      title: t('social_responsibility.social_activities.activities.community_support.title'),
      description: t('social_responsibility.social_activities.activities.community_support.description'),
      color: "from-red-500 to-pink-500",
      activities: [
        t('social_responsibility.social_activities.activities.community_support.activities.0'),
        t('social_responsibility.social_activities.activities.community_support.activities.1'),
        t('social_responsibility.social_activities.activities.community_support.activities.2')
      ]
    },
    {
      icon: GraduationCap,
      title: t('social_responsibility.social_activities.activities.education_training.title'),
      description: t('social_responsibility.social_activities.activities.education_training.description'),
      color: "from-blue-500 to-indigo-500",
      activities: [
        t('social_responsibility.social_activities.activities.education_training.activities.0'),
        t('social_responsibility.social_activities.activities.education_training.activities.1'),
        t('social_responsibility.social_activities.activities.education_training.activities.2')
      ]
    },
    {
      icon: Users,
      title: t('social_responsibility.social_activities.activities.employee_development.title'),
      description: t('social_responsibility.social_activities.activities.employee_development.description'),
      color: "from-green-500 to-emerald-500",
      activities: [
        t('social_responsibility.social_activities.activities.employee_development.activities.0'),
        t('social_responsibility.social_activities.activities.employee_development.activities.1'),
        t('social_responsibility.social_activities.activities.employee_development.activities.2')
      ]
    },
    {
      icon: Globe,
      title: t('social_responsibility.social_activities.activities.sustainable_environment.title'),
      description: t('social_responsibility.social_activities.activities.sustainable_environment.description'),
      color: "from-emerald-500 to-teal-500",
      activities: [
        t('social_responsibility.social_activities.activities.sustainable_environment.activities.0'),
        t('social_responsibility.social_activities.activities.sustainable_environment.activities.1'),
        t('social_responsibility.social_activities.activities.sustainable_environment.activities.2')
      ]
    }
  ]

  const socialActivities2024 = [
    {
      category: t('social_responsibility.activities_2024.categories.healthcare.title'),
      activities: [
        {
          title: t('social_responsibility.activities_2024.categories.healthcare.activities.spring_volunteer.title'),
          description: t('social_responsibility.activities_2024.categories.healthcare.activities.spring_volunteer.description'),
          location: t('social_responsibility.activities_2024.categories.healthcare.activities.spring_volunteer.location'),
          icon: Heart
        },
        {
          title: t('social_responsibility.activities_2024.categories.healthcare.activities.free_consultation.title'),
          description: t('social_responsibility.activities_2024.categories.healthcare.activities.free_consultation.description'),
          location: t('social_responsibility.activities_2024.categories.healthcare.activities.free_consultation.location'),
          icon: Heart
        }
      ]
    },
    {
      category: t('social_responsibility.activities_2024.categories.disaster_support.title'),
      activities: [
        {
          title: t('social_responsibility.activities_2024.categories.disaster_support.activities.yagi_storm.title'),
          description: t('social_responsibility.activities_2024.categories.disaster_support.activities.yagi_storm.description'),
          location: t('social_responsibility.activities_2024.categories.disaster_support.activities.yagi_storm.location'),
          icon: Shield
        }
      ]
    },
    {
      category: t('social_responsibility.activities_2024.categories.education_support.title'),
      activities: [
        {
          title: t('social_responsibility.activities_2024.categories.education_support.activities.school_facilities.title'),
          description: t('social_responsibility.activities_2024.categories.education_support.activities.school_facilities.description'),
          location: t('social_responsibility.activities_2024.categories.education_support.activities.school_facilities.location'),
          icon: GraduationCap
        },
        {
          title: t('social_responsibility.activities_2024.categories.education_support.activities.help_students.title'),
          description: t('social_responsibility.activities_2024.categories.education_support.activities.help_students.description'),
          location: t('social_responsibility.activities_2024.categories.education_support.activities.help_students.location'),
          icon: GraduationCap
        },
        {
          title: t('social_responsibility.activities_2024.categories.education_support.activities.love_connection.title'),
          description: t('social_responsibility.activities_2024.categories.education_support.activities.love_connection.description'),
          location: t('social_responsibility.activities_2024.categories.education_support.activities.love_connection.location'),
          icon: GraduationCap
        }
      ]
    },
    {
      category: t('social_responsibility.activities_2024.categories.community_gifts.title'),
      activities: [
        {
          title: t('social_responsibility.activities_2024.categories.community_gifts.activities.spring_unity.title'),
          description: t('social_responsibility.activities_2024.categories.community_gifts.activities.spring_unity.description'),
          location: t('social_responsibility.activities_2024.categories.community_gifts.activities.spring_unity.location'),
          icon: Gift
        },
        {
          title: t('social_responsibility.activities_2024.categories.community_gifts.activities.teacher_student_support.title'),
          description: t('social_responsibility.activities_2024.categories.community_gifts.activities.teacher_student_support.description'),
          location: t('social_responsibility.activities_2024.categories.community_gifts.activities.teacher_student_support.location'),
          icon: Users
        },
        {
          title: t('social_responsibility.activities_2024.categories.community_gifts.activities.family_support.title'),
          description: t('social_responsibility.activities_2024.categories.community_gifts.activities.family_support.description'),
          location: t('social_responsibility.activities_2024.categories.community_gifts.activities.family_support.location'),
          icon: Home
        },
        {
          title: t('social_responsibility.activities_2024.categories.community_gifts.activities.disabled_support.title'),
          description: t('social_responsibility.activities_2024.categories.community_gifts.activities.disabled_support.description'),
          location: t('social_responsibility.activities_2024.categories.community_gifts.activities.disabled_support.location'),
          icon: Heart
        },
        {
          title: t('social_responsibility.activities_2024.categories.community_gifts.activities.border_spring.title'),
          description: t('social_responsibility.activities_2024.categories.community_gifts.activities.border_spring.description'),
          location: t('social_responsibility.activities_2024.categories.community_gifts.activities.border_spring.location'),
          icon: Shield
        },
        {
          title: t('social_responsibility.activities_2024.categories.community_gifts.activities.joyful_tet.title'),
          description: t('social_responsibility.activities_2024.categories.community_gifts.activities.joyful_tet.description'),
          location: t('social_responsibility.activities_2024.categories.community_gifts.activities.joyful_tet.location'),
          icon: Gift
        },
        {
          title: t('social_responsibility.activities_2024.categories.community_gifts.activities.love_tet.title'),
          description: t('social_responsibility.activities_2024.categories.community_gifts.activities.love_tet.description'),
          location: t('social_responsibility.activities_2024.categories.community_gifts.activities.love_tet.location'),
          icon: Heart
        }
      ]
    }
  ]

  const communitySupport = [
    {
      title: t('social_responsibility.statistics.metrics.activities_2024'),
      count: "38",
      description: t('social_responsibility.statistics.descriptions.activities_2024'),
      icon: Calendar
    },
    {
      title: t('social_responsibility.statistics.metrics.provinces_supported'),
      count: "15+",
      description: t('social_responsibility.statistics.descriptions.provinces_supported'),
      icon: MapPin
    },
    {
      title: t('social_responsibility.statistics.metrics.people_helped'),
      count: "2000+",
      description: t('social_responsibility.statistics.descriptions.people_helped'),
      icon: Users
    },
    {
      title: t('social_responsibility.statistics.metrics.years_experience'),
      count: "15+",
      description: t('social_responsibility.statistics.descriptions.years_experience'),
      icon: Award
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <ParticleSystem />
      <CustomCursor />
      <Header />
      <ScrollIndicator />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/community-volunteers-helping-children-and-families.jpg"
            alt="Community volunteers helping children and families"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/90 to-indigo-900/90" />
        </div>
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,rgba(255,255,255,0.1))] -z-10" />
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl -z-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-indigo-500/20 to-transparent rounded-full blur-3xl -z-10"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Floating particles */}
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
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 backdrop-blur-xl border border-white/30 rounded-full text-xs md:text-sm font-semibold shadow-2xl transition-all duration-500 hover:scale-110 group relative overflow-hidden bg-gradient-to-r from-white/20 via-red-50/30 to-pink-50/20"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Heart className="w-4 md:w-5 h-4 md:h-5 text-red-400" />
              </motion.div>
              <span className="font-bold tracking-wide text-xs md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-400 relative z-10">{t('social_responsibility.hero.badge')}</span>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-pink-400" />
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 md:mb-12 leading-tight"
              variants={fadeInUp}
            >
              <motion.span 
                className="block text-white"
                style={{
                  background: "linear-gradient(45deg, #ef4444, #f97316, #eab308, #ef4444)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "white"
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
{t('social_responsibility.hero.title')}
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
{t('social_responsibility.hero.description')}
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-16"
              variants={staggerContainer}
            >
              {[
                { icon: Heart, text: t('social_responsibility.hero.badges.charity') },
                { icon: GraduationCap, text: t('social_responsibility.hero.badges.education') },
                { icon: Globe, text: t('social_responsibility.hero.badges.environment') }
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  variants={fadeInScale}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Badge variant="secondary" className="px-6 py-3 text-lg bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300">
                    <badge.icon className="w-4 h-4 mr-2" />
                    {badge.text}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            {/* Key Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              variants={staggerContainer}
            >
              {[
                { number: "38", label: t('social_responsibility.hero.stats.activities') },
                { number: "15+", label: t('social_responsibility.hero.stats.provinces') },
                { number: "2000+", label: t('social_responsibility.hero.stats.people') },
                { number: "100%", label: t('social_responsibility.hero.stats.commitment') }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  variants={fadeInScale}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(96, 165, 250, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                    <motion.div 
                      className="text-4xl font-bold text-white mb-2"
                      style={{
                        background: "linear-gradient(45deg, #60a5fa, #a78bfa)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "white"
                      }}
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {stat.number}
                    </motion.div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section 
        className="py-20 bg-white relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/modern-business-skyline-with-glass-buildings-at-su.jpg"
            alt="Modern business skyline"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-blue-50/80" />
        </div>
        
        {/* Animated Background Elements */}
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
        
        <div className="container mx-auto px-4 relative z-10">
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
                <TrendingUp className="w-5 h-5" />
              </motion.div>
{t('social_responsibility.statistics.badge')}
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900"
              variants={textReveal}
              style={{
                background: "linear-gradient(45deg, #1e293b, #3b82f6, #6366f1, #1e293b)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "#1e293b"
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
{t('social_responsibility.statistics.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto"
              variants={textReveal}
            >
{t('social_responsibility.statistics.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {communitySupport.map((item, index) => (
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
                <Card className="group relative overflow-hidden text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-indigo-50 h-full flex flex-col">
                  <CardContent className="p-0 flex flex-col h-full">
                    <motion.div 
                      className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white mb-6 shadow-lg"
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      animate={{ 
                        boxShadow: [
                          "0 0 0px rgba(59, 130, 246, 0)",
                          "0 0 20px rgba(59, 130, 246, 0.3)",
                          "0 0 0px rgba(59, 130, 246, 0)"
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.5
                      }}
                    >
                      <item.icon className="w-10 h-10" />
                    </motion.div>
                    <motion.div 
                      className="text-5xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {item.count}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-grow">{item.description}</p>
                    
                    {/* Hover Effect */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-b-xl"
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
      </motion.section>

      {/* Social Activities Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/modern-tech-office-with-developers-working-on-comp.jpg"
            alt="Modern tech office with developers"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/85 to-blue-50/70" />
        </div>
        
        {/* Animated Background Elements */}
        <motion.div 
          className="hidden md:block absolute top-20 right-10 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="hidden md:block absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-indigo-400/10 to-violet-400/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -20, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Heart className="w-5 h-5" />
              </motion.div>
              {t('social_responsibility.social_activities.badge')}
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900"
              variants={textReveal}
              style={{
                background: "linear-gradient(45deg, #1e293b, #10b981, #059669, #1e293b)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "#1e293b"
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
{t('social_responsibility.social_activities.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              variants={textReveal}
            >
{t('social_responsibility.social_activities.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {socialActivities.map((activity, index) => (
              <motion.div
                key={index}
                variants={fadeInScale}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30 h-full flex flex-col">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-start gap-6 flex-grow">
                      <motion.div 
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${activity.color} text-white flex-shrink-0 shadow-lg`}
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        animate={{ 
                          boxShadow: [
                            "0 0 0px rgba(59, 130, 246, 0)",
                            "0 0 20px rgba(59, 130, 246, 0.3)",
                            "0 0 0px rgba(59, 130, 246, 0)"
                          ]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: index * 0.5
                        }}
                      >
                        <activity.icon className="w-10 h-10" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.h3 
                          className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {activity.title}
                        </motion.h3>
                        <motion.p 
                          className="text-gray-600 mb-6 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                          viewport={{ once: true }}
                        >
                          {activity.description}
                        </motion.p>
                        <motion.ul 
                          className="space-y-4"
                          variants={staggerContainer}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: true }}
                        >
                          {activity.activities.map((item, itemIndex) => (
                            <motion.li 
                              key={itemIndex} 
                              className="flex items-start gap-3 group/item"
                              variants={fadeInLeft}
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <motion.div 
                                className="w-2 h-2 rounded-full bg-blue-500 mt-3 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-300"
                                whileHover={{ scale: 1.5 }}
                                transition={{ duration: 0.2 }}
                              />
                              <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-800 transition-colors duration-300">{item}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <motion.div 
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${activity.color} rounded-b-xl`}
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
      </motion.section>

      {/* Social Activities 2024 Section */}
      <motion.section 
        className="py-20 bg-white relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/gpg.jpg"
            alt="Modern logistics warehouse"
            fill
            className="object-cover opacity-8"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-blue-50/60" />
        </div>
        
        {/* Animated Background Elements */}
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
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Calendar className="w-5 h-5" />
              </motion.div>
{t('social_responsibility.activities_2024.badge')}
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900"
              variants={textReveal}
              style={{
                background: "linear-gradient(45deg, #1e293b, #f59e0b, #ea580c, #1e293b)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "#1e293b"
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
{t('social_responsibility.activities_2024.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              variants={textReveal}
            >
{t('social_responsibility.activities_2024.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            className="space-y-16"
            variants={staggerContainer}
          >
            {socialActivities2024.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-center mb-12"
                  variants={fadeInUp}
                >
                  <motion.h3 
                    className="text-3xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {category.category}
                  </motion.h3>
                  <motion.div 
                    className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={staggerContainer}
                >
                  {category.activities.map((activity, activityIndex) => (
                    <motion.div
                      key={activityIndex}
                      variants={fadeInScale}
                      whileHover={{ 
                        scale: 1.02, 
                        y: -5,
                        boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/30 h-full flex flex-col">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex items-start gap-4 mb-4 flex-grow">
                            <motion.div 
                              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex-shrink-0 shadow-lg"
                              whileHover={{ rotate: 12, scale: 1.1 }}
                              animate={{ 
                                boxShadow: [
                                  "0 0 0px rgba(16, 185, 129, 0)",
                                  "0 0 20px rgba(16, 185, 129, 0.3)",
                                  "0 0 0px rgba(16, 185, 129, 0)"
                                ]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                delay: activityIndex * 0.3
                              }}
                            >
                              <activity.icon className="w-6 h-6" />
                            </motion.div>
                            <div className="flex-1">
                              <motion.div 
                                className="flex items-center gap-2 mb-2"
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: activityIndex * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <MapPin className="w-4 h-4 text-gray-500 group-hover:text-emerald-600 transition-colors duration-300" />
                                <span className="text-sm text-gray-500 group-hover:text-emerald-700 transition-colors duration-300">{activity.location}</span>
                              </motion.div>
                              <motion.h4 
                                className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-900 transition-colors duration-300"
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: activityIndex * 0.1 + 0.1 }}
                                viewport={{ once: true }}
                              >
                                {activity.title}
                              </motion.h4>
                            </div>
                          </div>
                          <motion.p 
                            className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-grow"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: activityIndex * 0.1 + 0.2 }}
                            viewport={{ once: true }}
                          >
                            {activity.description}
                          </motion.p>
                          
                          {/* Hover Effect */}
                          <motion.div 
                            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-b-xl"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Summary Section */}
          <motion.div 
            className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-4"
                variants={fadeInUp}
              >
{t('social_responsibility.summary.title')}
              </motion.h3>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-4 gap-6"
                variants={staggerContainer}
              >
                {[
                  { number: "38", label: t('social_responsibility.summary.stats.activities') },
                  { number: "15+", label: t('social_responsibility.summary.stats.provinces') },
                  { number: "2000+", label: t('social_responsibility.summary.stats.people_supported') },
                  { number: "100%", label: t('social_responsibility.summary.stats.commitment') }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center group"
                    variants={fadeInScale}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      boxShadow: "0 10px 30px rgba(16, 185, 129, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="text-3xl font-bold text-emerald-600 mb-2"
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600 group-hover:text-emerald-700 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>


      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  )
}

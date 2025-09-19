"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Target, Shield, Medal, Sparkles, Calendar, Building, Users, TrendingUp, Award, CheckCircle, Crown, Zap, ArrowRight } from "lucide-react"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleSystem } from "@/components/particle-system"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity } from "framer-motion"
import { fadeInUp, fadeInLeft, fadeInRight, fadeInScale, staggerContainer, hoverScale, floating, pulse, textReveal, gradientText } from "@/components/animations"
import { useTranslations } from '@/hooks/use-i18n'

const getMajorAchievements = (t: any) => [
    {
      icon: Trophy,
      title: t('achievements.major_achievements.achievements.top500.title'),
      year: t('achievements.major_achievements.achievements.top500.year'),
      description: t('achievements.major_achievements.achievements.top500.description'),
      color: "from-amber-500 to-orange-500",
      highlight: true
    },
    {
      icon: Star,
      title: t('achievements.major_achievements.achievements.hcm_excellent.title'),
      year: t('achievements.major_achievements.achievements.hcm_excellent.year'),
      description: t('achievements.major_achievements.achievements.hcm_excellent.description'),
      color: "from-emerald-500 to-teal-500",
      highlight: true
    },
    {
      icon: Target,
      title: t('achievements.major_achievements.achievements.iso9001.title'),
      year: t('achievements.major_achievements.achievements.iso9001.year'),
      description: t('achievements.major_achievements.achievements.iso9001.description'),
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Shield,
      title: t('achievements.major_achievements.achievements.sustainable.title'),
      year: t('achievements.major_achievements.achievements.sustainable.year'),
      description: t('achievements.major_achievements.achievements.sustainable.description'),
      color: "from-purple-500 to-pink-500"
    }
  ]

const getAllAwards = (t: any) => [
    {
      title: t('achievements.awards_certifications.awards.young_entrepreneur_2016.title'),
      year: t('achievements.awards_certifications.awards.young_entrepreneur_2016.year'),
      issuer: t('achievements.awards_certifications.awards.young_entrepreneur_2016.issuer'),
      category: t('achievements.awards_certifications.categories.personal'),
      type: "award"
    },
    {
      title: t('achievements.awards_certifications.awards.young_entrepreneur_hcm.title'),
      year: t('achievements.awards_certifications.awards.young_entrepreneur_hcm.year'),
      issuer: t('achievements.awards_certifications.awards.young_entrepreneur_hcm.issuer'),
      category: t('achievements.awards_certifications.categories.local'),
      type: "award"
    },
    {
      title: t('achievements.awards_certifications.awards.asean_entrepreneur.title'),
      year: t('achievements.awards_certifications.awards.asean_entrepreneur.year'),
      issuer: t('achievements.awards_certifications.awards.asean_entrepreneur.issuer'),
      category: t('achievements.awards_certifications.categories.international'),
      type: "award"
    },
    {
      title: t('achievements.awards_certifications.awards.top200_entrepreneur.title'),
      year: t('achievements.awards_certifications.awards.top200_entrepreneur.year'),
      issuer: t('achievements.awards_certifications.awards.top200_entrepreneur.issuer'),
      category: t('achievements.awards_certifications.categories.local'),
      type: "award"
    },
    {
      title: t('achievements.awards_certifications.awards.vietnam_logistics_member.title'),
      year: t('achievements.awards_certifications.awards.vietnam_logistics_member.year'),
      issuer: t('achievements.awards_certifications.awards.vietnam_logistics_member.issuer'),
      category: t('achievements.awards_certifications.categories.professional'),
      type: "certification"
    },
    {
      title: t('achievements.awards_certifications.awards.binh_duong_import_export.title'),
      year: t('achievements.awards_certifications.awards.binh_duong_import_export.year'),
      issuer: t('achievements.awards_certifications.awards.binh_duong_import_export.issuer'),
      category: t('achievements.awards_certifications.categories.professional'),
      type: "certification"
    },
    {
      title: t('achievements.awards_certifications.awards.iso_9001_2015.title'),
      year: t('achievements.awards_certifications.awards.iso_9001_2015.year'),
      issuer: t('achievements.awards_certifications.awards.iso_9001_2015.issuer'),
      category: t('achievements.awards_certifications.categories.international'),
      type: "certification"
    },
    {
      title: t('achievements.awards_certifications.awards.depot_quality.title'),
      year: t('achievements.awards_certifications.awards.depot_quality.year'),
      issuer: t('achievements.awards_certifications.awards.depot_quality.issuer'),
      category: t('achievements.awards_certifications.categories.quality'),
      type: "certification"
    }
  ]

const getMilestones = (t: any) => [
    {
      year: "2009",
      title: t('achievements.timeline.milestones.2009.title'),
      description: t('achievements.timeline.milestones.2009.description'),
      icon: "🚀"
    },
    {
      year: "2013",
      title: t('achievements.timeline.milestones.2013.title'),
      description: t('achievements.timeline.milestones.2013.description'),
      icon: "🤝"
    },
    {
      year: "2016",
      title: t('achievements.timeline.milestones.2016.title'),
      description: t('achievements.timeline.milestones.2016.description'),
      icon: "🏆"
    },
    {
      year: "2021",
      title: t('achievements.timeline.milestones.2021.title'),
      description: t('achievements.timeline.milestones.2021.description'),
      icon: "✅"
    },
    {
      year: "2023",
      title: t('achievements.timeline.milestones.2023.title'),
      description: t('achievements.timeline.milestones.2023.description'),
      icon: "📈"
    },
    {
      year: "2024",
      title: t('achievements.timeline.milestones.2024.title'),
      description: t('achievements.timeline.milestones.2024.description'),
      icon: "🎉"
    }
  ]

export default function AchievementsPage() {
  const t = useTranslations()
  const majorAchievements = getMajorAchievements(t)
  const milestones = getMilestones(t)
  const allAwards = getAllAwards(t)
  
  // Parallax scroll effects
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -100])
  const y3 = useTransform(scrollY, [0, 1000], [0, -150])
  const rotate = useTransform(scrollY, [0, 1000], [0, 360])
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1])

  // Spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ParticleSystem />
      <CustomCursor />
      <Header />
      <ScrollIndicator />
      
      {/* Hero Section */}
       <motion.section 
         className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 pb-16"
         initial="initial"
         whileInView="animate"
         viewport={{ once: true, amount: 0.3 }}
         variants={staggerContainer}
       >
         {/* Video Background */}
         <div className="absolute inset-0 z-0">
           <iframe
             src="https://www.youtube.com/embed/4MUhDeu7LtM?autoplay=1&mute=1&loop=1&playlist=4MUhDeu7LtM&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=1"
             title="GPG Hệ Sinh Thái Đối Tác Chân Thật"
             className="w-full h-full object-cover scale-110 transition-transform duration-[30s] ease-out hover:scale-125"
             style={{
               position: 'absolute',
               top: '50%',
               left: '50%',
               width: '100vw',
               height: '56.25vw',
               minHeight: '100vh',
               minWidth: '177.77vh',
               transform: 'translate(-50%, -50%)',
               pointerEvents: 'none'
             }}
             frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             allowFullScreen
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
           
           {/* Enhanced floating particles */}
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
                 scale: [0, 1, 0],
                 x: [0, Math.sin(i) * 20, 0]
               }}
               transition={{
                 duration: 3 + Math.random() * 2,
                 repeat: Infinity,
                 delay: Math.random() * 2,
                 ease: "easeInOut"
               }}
             />
           ))}
           
           {/* Morphing geometric shapes */}
           <motion.div 
             className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg blur-lg"
             animate={{ 
               rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
               scale: [1, 1.2, 0.8, 1.1, 1],
               borderRadius: ["20%", "50%", "20%", "50%"]
             }}
             transition={{ 
               duration: 15, 
               repeat: Infinity, 
               ease: "easeInOut",
               delay: 3
             }}
           />
           <motion.div 
             className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-xl"
             animate={{ 
               x: [0, 25, -15, 0],
               y: [0, -20, 10, 0],
               scale: [1, 1.3, 0.7, 1],
               rotate: [0, 120, 240, 360]
             }}
             transition={{ 
               duration: 18, 
               repeat: Infinity, 
               ease: "easeInOut",
               delay: 5
             }}
           />
           
           {/* Floating orbs */}
           {[...Array(6)].map((_, i) => (
             <motion.div
               key={`orb-${i}`}
               className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm"
               style={{
                 left: `${20 + i * 15}%`,
                 top: `${40 + (i % 2) * 30}%`,
               }}
               animate={{
                 y: [0, -40, 0],
                 opacity: [0.3, 0.8, 0.3],
                 scale: [0.5, 1, 0.5],
                 x: [0, Math.cos(i) * 30, 0]
               }}
               transition={{
                 duration: 4 + i * 0.5,
                 repeat: Infinity,
                 delay: i * 0.8,
                 ease: "easeInOut"
               }}
             />
           ))}
         </div>
        
         {/* Content */}
         <motion.div 
           className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white"
           initial="initial"
           animate="animate"
           variants={staggerContainer}
         >
           <div className="max-w-6xl mx-auto">
             {/* Badge */}
             <motion.div className="mb-8" variants={fadeInUp}>
               <motion.div 
                 className="inline-flex items-center gap-3 px-6 py-3 backdrop-blur-xl border border-white/30 rounded-full text-sm font-semibold shadow-xl bg-white/10"
                 whileHover={{ scale: 1.05, y: -2 }}
                 transition={{ duration: 0.3 }}
               >
                 <motion.div
                   animate={{ rotate: 360 }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 >
                   <Crown className="w-4 h-4" />
                 </motion.div>
                     <span className="text-white/90">{t('achievements.hero.badge')}</span>
                 <motion.div
                   animate={{ y: [0, -5, 0] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                 >
                   <Trophy className="w-4 h-4" />
                 </motion.div>
               </motion.div>
             </motion.div>

             {/* Main Title */}
             <motion.h1 
               className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-balance leading-tight tracking-tight"
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
                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                 }}
                 transition={{
                   duration: 4,
                   repeat: Infinity,
                   ease: "linear"
                 }}
                   >
                     {t('achievements.hero.title1')}
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
                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                 }}
                 transition={{
                   duration: 3,
                   repeat: Infinity,
                   ease: "linear",
                   delay: 0.5
                 }}
                   >
                     {t('achievements.hero.title2')}
                   </motion.span>
             </motion.h1>

             {/* Description */}
             <motion.div className="mb-12 max-w-4xl mx-auto" variants={fadeInUp}>
               <motion.p 
                 className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-4"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.3 }}
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
                   {t('achievements.hero.description1')}
                 </motion.span>
               </motion.p>
               <motion.p 
                 className="text-base sm:text-lg text-white/80 leading-relaxed"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.5 }}
               >
                 {t('achievements.hero.description2')}
               </motion.p>
             </motion.div>
             
             {/* Stats Grid */}
             <motion.div 
               className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
               variants={staggerContainer}
             >
               {[
                 { number: "16+", label: t('achievements.hero.stats.years'), icon: Zap },
                 { number: "500+", label: t('achievements.hero.stats.employees'), icon: Users },
                 { number: "100+", label: t('achievements.hero.stats.projects'), icon: TrendingUp }
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
                             "0 0 20px rgba(96, 165, 250, 0.5)"
                           ]
                         }}
                         transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                       >
                         <IconComponent className="w-6 h-6 text-blue-300" />
                       </motion.div>
                     </motion.div>
                     <motion.div 
                       className="text-3xl sm:text-4xl font-black mb-2"
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

             {/* Action Buttons */}
             <motion.div 
               className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16"
               variants={fadeInUp}
             >
               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                 <motion.button
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
                       <Trophy className="w-5 h-5" />
                     </motion.div>
                     {t('achievements.hero.buttons.explore')}
                     <motion.div
                       animate={{ x: [0, 5, 0] }}
                       transition={{ duration: 1.5, repeat: Infinity }}
                     >
                       <ArrowRight className="w-5 h-5" />
                     </motion.div>
                   </motion.span>
                 </motion.button>
               </motion.div>
               
               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                 <motion.button
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
                       <Award className="w-5 h-5" />
                     </motion.div>
                     {t('achievements.hero.buttons.awards')}
                   </motion.span>
                 </motion.button>
               </motion.div>
             </motion.div>
              </div>
         </motion.div>
      </motion.section>

      {/* Major Achievements Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Enhanced Background Elements */}
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
          style={{ y: y1 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl"
          style={{ y: y2 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 20, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        
        {/* Additional floating elements */}
        <motion.div 
          className="absolute top-1/3 right-1/6 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"
          style={{ y: y3, rotate }}
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            borderRadius: ["50%", "30%", "50%", "70%", "50%"]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Morphing shapes */}
        <motion.div 
          className="absolute top-1/2 left-1/6 w-24 h-24 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-xl"
          animate={{ 
            borderRadius: ["50%", "30%", "50%", "70%", "50%"],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 0.8, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.sin(i) * 15, 0]
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div className="text-center mb-16 md:mb-20" variants={staggerContainer}>
            {/* Enhanced Badge */}
            <motion.div className="mb-6 md:mb-8" variants={fadeInUp}>
              <motion.div 
                className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 backdrop-blur-xl border border-blue-200/60 rounded-full text-xs md:text-sm font-semibold shadow-lg transition-all duration-500 hover:scale-105 group relative overflow-hidden bg-gradient-to-r from-white/20 via-blue-50/30 to-indigo-50/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Trophy className="w-4 md:w-5 h-4 md:h-5 text-blue-600" />
                </motion.div>
                <span className="font-bold tracking-wide text-xs md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 relative z-10">
                  {t('achievements.major_achievements.badge')}
                </span>
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-indigo-600" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 md:mb-12 transition-all duration-1000 leading-tight"
              variants={fadeInUp}
            >
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 block sm:inline"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "300% 300%"
                }}
              >
                {t('achievements.major_achievements.title')}
              </motion.span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
              variants={fadeInUp}
            >
              {t('achievements.major_achievements.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
            variants={staggerContainer}
          >
            {majorAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={fadeInScale}
                whileHover={{ 
                  scale: 1.02, 
                  y: -8,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Card className={`group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 ${achievement.highlight ? 'ring-2 ring-amber-200/50' : ''} h-full flex flex-col`}>
                  {/* Subtle Top Accent */}
                  <motion.div 
                    className={`h-1 bg-gradient-to-r ${achievement.color} relative overflow-hidden`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                  
                  <CardContent className="p-8 lg:p-10 relative flex-grow flex flex-col justify-between">
                    <div className="flex items-start gap-6">
                      {/* Icon Container */}
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg relative overflow-hidden`}
                        whileHover={{ 
                          rotate: 5, 
                          scale: 1.05
                        }}
                        animate={{ 
                          boxShadow: [
                            "0 4px 20px rgba(59, 130, 246, 0.2)",
                            "0 8px 30px rgba(59, 130, 246, 0.3)"
                          ]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          delay: index * 0.5,
                          ease: "easeInOut"
                        }}
                      >
                        <motion.div
                          whileHover={{ 
                            scale: 1.1,
                            rotate: [0, 3, -3, 0]
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <achievement.icon className="w-10 h-10 text-white drop-shadow-sm relative z-10" />
                        </motion.div>
                      </motion.div>
                    
                      <div className="flex-1">
                        {/* Badges */}
                        <motion.div 
                          className="flex items-center gap-3 mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                          viewport={{ once: true }}
                        >
                          <Badge className={`bg-gradient-to-r ${achievement.color} text-white border-0 shadow-md px-4 py-2 text-sm font-semibold rounded-full`}>
                            {achievement.year}
                          </Badge>
                          {achievement.highlight && (
                            <Badge className="bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 border-0 shadow-sm px-4 py-2 rounded-full">
                              <Crown className="w-3 h-3 mr-2" />
                              Nổi bật
                            </Badge>
                          )}
                        </motion.div>
                        
                        {/* Title */}
                        <motion.h3 
                          className="text-xl lg:text-2xl font-black text-slate-800 mb-4 text-balance leading-tight group-hover:text-slate-900 transition-colors duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          {achievement.title}
                        </motion.h3>
                        
                        {/* Description */}
                        <motion.p 
                          className="text-slate-600 text-pretty leading-relaxed group-hover:text-slate-700 transition-colors duration-300 text-lg"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                          viewport={{ once: true }}
                        >
                          {achievement.description}
                        </motion.p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        {/* Enhanced Background Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/6 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-indigo-400/10 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 15, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Additional floating elements */}
        <motion.div 
          className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, -180, -270, -360],
            borderRadius: ["50%", "30%", "50%", "70%", "50%"]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Morphing geometric shapes */}
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-cyan-400/12 to-blue-400/12 rounded-lg blur-lg"
          animate={{ 
            rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
            scale: [1, 1.2, 0.8, 1.1, 1],
            borderRadius: ["20%", "50%", "20%", "50%"]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.sin(i) * 20, 0]
            }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 md:mb-20" variants={staggerContainer}>
            {/* Enhanced Badge */}
            <motion.div className="mb-6 md:mb-8" variants={fadeInUp}>
              <motion.div 
                className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 backdrop-blur-xl border border-blue-200/60 rounded-full text-xs md:text-sm font-semibold shadow-2xl transition-all duration-500 hover:scale-110 group relative overflow-hidden bg-gradient-to-r from-white/20 via-blue-50/30 to-indigo-50/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Calendar className="w-4 md:w-5 h-4 md:h-5 text-blue-600" />
                </motion.div>
                <span className="font-bold tracking-wide text-xs md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 relative z-10">
                  {t('achievements.timeline.badge')}
                </span>
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-indigo-600" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 md:mb-12 transition-all duration-1000 leading-tight"
              variants={fadeInUp}
            >
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 block sm:inline"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "300% 300%"
                }}
              >
                {t('achievements.timeline.title')}
              </motion.span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
              variants={fadeInUp}
            >
              {t('achievements.timeline.subtitle')}
            </motion.p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Enhanced Timeline Line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full shadow-2xl"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Animated glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-400 rounded-full blur-sm opacity-50"
                animate={{ 
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            <motion.div 
              className="space-y-20"
              variants={staggerContainer}
            >
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={milestone.year} 
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  variants={fadeInScale}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
                      viewport={{ once: true }}
                    >
                      {/* Premium Card Design */}
                      <Card className="group relative overflow-hidden bg-white/90 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 h-full flex flex-col">
                        {/* Gradient Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Premium Background Pattern */}
                        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                          <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                                            radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
                            backgroundSize: '40px 40px'
                          }} />
                        </div>
                        
                        <CardContent className="relative p-8 flex-grow flex flex-col justify-between">
                          {/* Year Badge with Premium Design */}
                          <motion.div 
                            className="flex items-center gap-4 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                            viewport={{ once: true }}
                          >
                            <motion.div
                              className="relative"
                              whileHover={{ scale: 1.2, rotate: 15 }}
                              transition={{ duration: 0.3 }}
                            >
                              <motion.div 
                                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden"
                                animate={{ 
                                  boxShadow: [
                                    "0 0 0px rgba(59, 130, 246, 0)",
                                    "0 0 20px rgba(59, 130, 246, 0.4)"
                                  ]
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                              >
                                <motion.span 
                                  className="text-2xl relative z-10"
                                  animate={{ 
                                    rotate: [0, 5, -5, 0],
                                    scale: [1, 1.1, 1]
                                  }}
                                  transition={{ 
                                    duration: 3, 
                                    repeat: Infinity, 
                                    delay: index * 0.5,
                                    ease: "easeInOut"
                                  }}
                                >
                                  {milestone.icon}
                                </motion.span>
                                {/* Shimmer effect */}
                                <motion.div 
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                  animate={{ x: [-100, 100] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                                />
                              </motion.div>
                            </motion.div>
                            
                            <div className="flex flex-col">
                              <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 shadow-lg px-4 py-2 text-sm font-bold mb-2">
                                {milestone.year}
                              </Badge>
                              <div className="text-xs text-slate-500 font-medium">
                                Cột mốc quan trọng
                              </div>
                            </div>
                          </motion.div>
                          
                          {/* Title with Premium Typography */}
                          <motion.h3 
                            className="text-xl font-black text-slate-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-500 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                            viewport={{ once: true }}
                          >
                          {milestone.title}
                          </motion.h3>
                          
                          {/* Description with Enhanced Styling */}
                          <motion.p 
                            className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                            viewport={{ once: true }}
                          >
                          {milestone.description}
                          </motion.p>
                          
                          {/* Decorative Elements */}
                          <motion.div 
                            className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                          />
                      </CardContent>
                    </Card>
                    </motion.div>
                  </div>
                  
                  {/* Enhanced Timeline Node */}
                  <motion.div 
                    className="relative z-20"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2 + 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                  >
                    {/* Outer Ring */}
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl relative"
                      whileHover={{ 
                        scale: 1.3, 
                        rotate: 360,
                        boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)"
                      }}
                      animate={{ 
                        boxShadow: [
                          "0 0 0px rgba(59, 130, 246, 0)",
                          "0 0 30px rgba(59, 130, 246, 0.4)"
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.3,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Inner Circle */}
                      <motion.div 
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner"
                        animate={{ 
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: index * 0.2
                        }}
                      >
                        <span className="text-slate-800 font-black text-lg">
                          {milestone.year.slice(-2)}
                        </span>
                      </motion.div>
                      
                      {/* Pulsing Ring */}
                      <motion.div 
                        className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: index * 0.4
                        }}
                      />
                    </motion.div>
                  </motion.div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Awards & Certifications Section */}
      <motion.section 
        className="py-24 bg-white relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Enhanced Background Elements */}
        <motion.div 
          className="absolute top-0 right-1/4 w-56 h-56 bg-yellow-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
            x: [0, 15, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 w-48 h-48 bg-green-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -20, 0],
            y: [0, 15, 0],
            rotate: [0, -90, -180, -270, -360]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        
        {/* Additional floating elements */}
        <motion.div 
          className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-emerald-400/8 to-teal-400/8 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 120, 240, 360],
            borderRadius: ["50%", "30%", "50%", "70%", "50%"]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Morphing geometric shapes */}
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-yellow-400/12 to-amber-400/12 rounded-lg blur-lg"
          animate={{ 
            rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
            scale: [1, 1.2, 0.8, 1.1, 1],
            borderRadius: ["20%", "50%", "20%", "50%"]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.sin(i) * 25, 0]
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div className="text-center mb-16 md:mb-20" variants={staggerContainer}>
            {/* Enhanced Badge */}
            <motion.div className="mb-6 md:mb-8" variants={fadeInUp}>
              <motion.div 
                className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 backdrop-blur-xl border border-green-200/60 rounded-full text-xs md:text-sm font-semibold shadow-lg transition-all duration-500 hover:scale-105 group relative overflow-hidden bg-gradient-to-r from-white/20 via-green-50/30 to-emerald-50/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Award className="w-4 md:w-5 h-4 md:h-5 text-green-600" />
                </motion.div>
                <span className="font-bold tracking-wide text-xs md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 relative z-10">
                  {t('achievements.awards_certifications.badge')}
                </span>
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-emerald-600" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 md:mb-12 transition-all duration-1000 leading-tight"
              variants={fadeInUp}
            >
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 block sm:inline"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "300% 300%"
                }}
              >
                {t('achievements.awards_certifications.title')}
              </motion.span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
              variants={fadeInUp}
            >
              {t('achievements.awards_certifications.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
          >
            {allAwards.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInScale}
                whileHover={{ 
                  scale: 1.02, 
                  y: -8,
                  boxShadow: "0 25px 50px rgba(34, 197, 94, 0.15)"
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm shadow-lg h-full flex flex-col">
                <CardContent className="p-6 lg:p-8 flex-grow flex flex-col justify-between">
                  <div className="flex items-start gap-4">
                      <motion.div 
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${
                      item.type === 'award' 
                        ? 'bg-gradient-to-br from-yellow-500 to-amber-500' 
                        : 'bg-gradient-to-br from-green-500 to-emerald-500'
                        }`}
                        whileHover={{ 
                          scale: 1.05, 
                          rotate: 5
                        }}
                        animate={{ 
                          boxShadow: [
                            "0 4px 20px rgba(34, 197, 94, 0.2)",
                            "0 8px 30px rgba(34, 197, 94, 0.3)"
                          ]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          delay: index * 0.3,
                          ease: "easeInOut"
                        }}
                      >
                      {item.type === 'award' ? (
                        <Medal className="w-7 h-7 text-white" />
                      ) : (
                        <Shield className="w-7 h-7 text-white" />
                      )}
                      </motion.div>
                    <div className="flex-1">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                      <Badge className={`mb-3 border-0 ${
                        item.type === 'award' 
                          ? 'bg-yellow-100 text-yellow-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {item.category}
                      </Badge>
                        </motion.div>
                        <motion.h3 
                          className="text-lg font-black text-slate-800 mb-3 leading-tight group-hover:text-slate-900 transition-colors duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                          viewport={{ once: true }}
                        >
                        {item.title}
                        </motion.h3>
                        <motion.div 
                          className="flex items-center gap-2 text-sm text-slate-600 mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                          viewport={{ once: true }}
                        >
                        <Building className="w-4 h-4" />
                        <span>{item.issuer}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-2 text-sm text-slate-500"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                        >
                        <Calendar className="w-4 h-4" />
                        <span>{item.year}</span>
                        </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </motion.div>
  )
}
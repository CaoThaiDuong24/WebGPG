'use client'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, Sparkles, MessageCircle, Users, Building2, Star, Award, Shield, Zap, Heart, Crown } from "lucide-react"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleSystem } from "@/components/particle-system"
import { motion } from "framer-motion"
import { fadeInUp, fadeInLeft, fadeInRight, fadeInScale, staggerContainer, hoverScale, floating, pulse, textReveal, gradientText } from "@/components/animations"
import { useTranslations } from '@/hooks/use-i18n'

export default function ContactPage() {
  const t = useTranslations()
  
  return (
    <div className="min-h-screen bg-white">
      <ParticleSystem />
      <CustomCursor />
      <Header />
      <ScrollIndicator />
      
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 pb-16"
        initial="initial"
        animate="animate"
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
              height: '56.25vw', // 16:9 aspect ratio
              minHeight: '100vh',
              minWidth: '177.77vh', // 16:9 aspect ratio
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
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.12),transparent_60%)]" />
          
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
                <span className="text-white/90">{t('contact.hero.badge')}</span>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-4 h-4" />
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
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
{t('contact.hero.title1')}
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
{t('contact.hero.title2')}
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
{t('contact.hero.description1')}
              </motion.p>
              <motion.p 
                className="text-base sm:text-lg text-white/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
{t('contact.hero.description2')}
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
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
                      <MessageCircle className="w-5 h-5" />
                    </motion.div>
{t('contact.hero.button1')}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Send className="w-5 h-5" />
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
                      <Phone className="w-5 h-5" />
                    </motion.div>
{t('contact.hero.button2')}
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
              variants={staggerContainer}
            >
              {[
                { number: "24/7", label: t('contact.hero.stats.support'), icon: Clock },
                { number: "16+", label: t('contact.hero.stats.experience'), icon: Award },
                { number: "100%", label: t('contact.hero.stats.quality'), icon: Shield }
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
          </div>
        </motion.div>
      </motion.section>

      {/* Contact Information Cards */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Luxury background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/20 to-indigo-50/20"></div>
        </div>
        
        {/* Animated background elements */}
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
        
        {/* Additional floating elements */}
        <motion.div 
          className="hidden md:block absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-lg"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.div 
          className="hidden md:block absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-r from-indigo-400/12 to-violet-400/12 rounded-full blur-lg"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
            x: [0, 15, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16" variants={staggerContainer}>
            <motion.div 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100/80 to-indigo-100/80 backdrop-blur-sm text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-lg"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Shield className="w-5 h-5 text-blue-600" />
              </motion.div>
              <span>{t('contact.contact_info.badge')}</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
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
{t('contact.contact_info.title')}
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
{t('contact.contact_info.subtitle')}
            </motion.p>
          </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
              variants={staggerContainer}
            >
            {/* Address Card */}
            <motion.div variants={fadeInScale}>
              <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <motion.div 
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full -translate-y-10 translate-x-10"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.7 }}
                />
                <CardHeader className="text-center pb-6 relative z-10">
                  <motion.div 
                    className="relative mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center mb-6 shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 6 }}
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
                      delay: 0
                    }}
                  >
                    <MapPin className="w-10 h-10 text-white" />
                    <motion.div 
                      className="absolute inset-0 bg-white/20 rounded-3xl"
                      whileHover={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div 
                      className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="w-3 h-3 text-yellow-800" />
                    </motion.div>
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{t('contact.contact_info.cards.address.title')}</CardTitle>
                  <motion.div 
                    className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"
                    whileHover={{ scaleX: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </CardHeader>
                <CardContent className="text-center relative z-10 flex-1 flex flex-col justify-center">
                  <motion.p 
                    className="text-gray-600 leading-relaxed text-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-semibold text-gray-800 group-hover:text-blue-800 transition-colors duration-300">{t('contact.contact_info.cards.address.company_name')}</span><br />
                    <span className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">{t('contact.contact_info.cards.address.company_name_en')}</span><br />
                    <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t('contact.contact_info.cards.address.location')}</span>
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Phone Card */}
            <motion.div variants={fadeInScale}>
              <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 backdrop-blur-sm h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <motion.div 
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full -translate-y-10 translate-x-10"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.7 }}
                />
                <CardHeader className="text-center pb-6 relative z-10">
                  <motion.div 
                    className="relative mx-auto w-20 h-20 bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-700 rounded-3xl flex items-center justify-center mb-6 shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 0px rgba(99, 102, 241, 0)",
                        "0 0 20px rgba(99, 102, 241, 0.3)",
                        "0 0 0px rgba(99, 102, 241, 0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: 0.5
                    }}
                  >
                    <Phone className="w-10 h-10 text-white" />
                    <motion.div 
                      className="absolute inset-0 bg-white/20 rounded-3xl"
                      whileHover={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div 
                      className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="w-3 h-3 text-green-800" />
                    </motion.div>
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300">{t('contact.contact_info.cards.phone.title')}</CardTitle>
                  <motion.div 
                    className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"
                    whileHover={{ scaleX: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </CardHeader>
                <CardContent className="text-center relative z-10 flex-1 flex flex-col justify-center">
                  <motion.div 
                    className="text-gray-600 leading-relaxed text-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a href="tel:+84123456789" className="hover:text-indigo-600 transition-colors duration-300 font-semibold text-gray-800 block mb-1 group-hover:text-indigo-700">
                      {t('contact.contact_info.cards.phone.phone1')}
                    </a>
                    <a href="tel:+84987654321" className="hover:text-indigo-600 transition-colors duration-300 font-semibold text-gray-800 block group-hover:text-indigo-700">
                      {t('contact.contact_info.cards.phone.phone2')}
                    </a>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Email Card */}
            <motion.div variants={fadeInScale}>
              <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <motion.div 
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full -translate-y-10 translate-x-10"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.7 }}
                />
                <CardHeader className="text-center pb-6 relative z-10">
                  <motion.div 
                    className="relative mx-auto w-20 h-20 bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 rounded-3xl flex items-center justify-center mb-6 shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 6 }}
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
                      delay: 1
                    }}
                  >
                    <Mail className="w-10 h-10 text-white" />
                    <motion.div 
                      className="absolute inset-0 bg-white/20 rounded-3xl"
                      whileHover={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div 
                      className="absolute -top-1 -right-1 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="w-3 h-3 text-blue-800" />
                    </motion.div>
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">{t('contact.contact_info.cards.email.title')}</CardTitle>
                  <motion.div 
                    className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto"
                    whileHover={{ scaleX: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </CardHeader>
                <CardContent className="text-center relative z-10 flex-1 flex flex-col justify-center">
                  <motion.div 
                    className="text-gray-600 leading-relaxed text-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a href="mailto:info@genuinepartner.com" className="hover:text-emerald-600 transition-colors duration-300 font-semibold text-gray-800 block mb-1 group-hover:text-emerald-700">
                      {t('contact.contact_info.cards.email.email1')}
                    </a>
                    <a href="mailto:support@gpg.com" className="hover:text-emerald-600 transition-colors duration-300 font-semibold text-gray-800 block group-hover:text-emerald-700">
                      {t('contact.contact_info.cards.email.email2')}
                    </a>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Working Hours Card */}
            <motion.div variants={fadeInScale}>
              <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 bg-gradient-to-br from-amber-50/80 to-orange-50/80 backdrop-blur-sm h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <motion.div 
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full -translate-y-10 translate-x-10"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.7 }}
                />
                <CardHeader className="text-center pb-6 relative z-10">
                  <motion.div 
                    className="relative mx-auto w-20 h-20 bg-gradient-to-br from-amber-500 via-orange-600 to-red-700 rounded-3xl flex items-center justify-center mb-6 shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 0px rgba(245, 158, 11, 0)",
                        "0 0 20px rgba(245, 158, 11, 0.3)",
                        "0 0 0px rgba(245, 158, 11, 0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: 1.5
                    }}
                  >
                    <Clock className="w-10 h-10 text-white" />
                    <motion.div 
                      className="absolute inset-0 bg-white/20 rounded-3xl"
                      whileHover={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div 
                      className="absolute -top-1 -right-1 w-6 h-6 bg-red-400 rounded-full flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="w-3 h-3 text-red-800" />
                    </motion.div>
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">{t('contact.contact_info.cards.hours.title')}</CardTitle>
                  <motion.div 
                    className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto"
                    whileHover={{ scaleX: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </CardHeader>
                <CardContent className="text-center relative z-10 flex-1 flex flex-col justify-center">
                  <motion.p 
                    className="text-gray-600 leading-relaxed text-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-semibold text-gray-800 group-hover:text-amber-800 transition-colors duration-300">{t('contact.contact_info.cards.hours.weekdays')}</span><br />
                    <span className="text-orange-600 font-medium group-hover:text-orange-700 transition-colors duration-300">{t('contact.contact_info.cards.hours.time')}</span><br />
                    <span className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{t('contact.contact_info.cards.hours.saturday')}</span>
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Luxury background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.06),transparent_60%)]" />
        </div>

        {/* Luxury background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/20 to-indigo-50/20"></div>
        </div>

        {/* Animated background elements */}
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
        
        {/* Additional floating elements */}
        <motion.div 
          className="hidden md:block absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-lg"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.div 
          className="hidden md:block absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-r from-indigo-400/12 to-violet-400/12 rounded-full blur-lg"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
            x: [0, 15, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" variants={staggerContainer}>
              <motion.div 
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100/80 to-indigo-100/80 backdrop-blur-sm text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-lg"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </motion.div>
                <span>{t('contact.contact_form.badge')}</span>
              </motion.div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                variants={fadeInUp}
              >
                <motion.span 
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
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
{t('contact.contact_form.title')}
                </motion.span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                variants={fadeInUp}
              >
{t('contact.contact_form.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch"
              variants={staggerContainer}
            >
              {/* Contact Form */}
              <motion.div variants={fadeInLeft}>
                <Card className="border-0 shadow-3xl bg-white/90 backdrop-blur-xl relative overflow-hidden h-full flex flex-col">
                  <CardHeader className="pb-8 relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl font-bold text-gray-900">{t('contact.contact_form.form_title')}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-lg text-gray-600">
{t('contact.contact_form.form_subtitle')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8 relative z-10 flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
{t('contact.contact_form.fields.name')} *
                        </label>
                        <Input 
                          placeholder={t('contact.contact_form.fields.name_placeholder')}
                          className="border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 h-12 text-lg transition-all duration-300 group-hover:border-blue-300"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
{t('contact.contact_form.fields.phone')} *
                        </label>
                        <Input 
                          placeholder={t('contact.contact_form.fields.phone_placeholder')}
                          className="border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 h-12 text-lg transition-all duration-300 group-hover:border-blue-300"
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
{t('contact.contact_form.fields.email')} *
                      </label>
                      <Input 
                        type="email"
                        placeholder={t('contact.contact_form.fields.email_placeholder')}
                        className="border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 h-12 text-lg transition-all duration-300 group-hover:border-blue-300"
                      />
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
{t('contact.contact_form.fields.subject')}
                      </label>
                      <Input 
                        placeholder={t('contact.contact_form.fields.subject_placeholder')}
                        className="border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 h-12 text-lg transition-all duration-300 group-hover:border-blue-300"
                      />
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
{t('contact.contact_form.fields.message')} *
                      </label>
                      <Textarea 
                        placeholder={t('contact.contact_form.fields.message_placeholder')}
                        rows={6}
                        className="border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 resize-none text-lg transition-all duration-300 group-hover:border-blue-300"
                      />
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                      <Send className="w-6 h-6 mr-3 relative z-10" />
                      <span className="relative z-10">{t('contact.contact_form.fields.submit')}</span>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Additional Information */}
              <motion.div 
                className="space-y-10"
                variants={staggerContainer}
              >
                {/* Quick Contact */}
                <motion.div variants={fadeInRight}>
                  <Card className="border-0 shadow-3xl bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden h-full flex flex-col">
                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold">{t('contact.quick_contact.title')}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6 relative z-10">
                      <div className="flex items-center space-x-4 group">
                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                          <Phone className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">{t('contact.quick_contact.hotline')}</p>
                          <p className="text-blue-100 text-lg">{t('contact.quick_contact.hotline_number')}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 group">
                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                          <Mail className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">{t('contact.quick_contact.email_support')}</p>
                          <p className="text-blue-100 text-lg">{t('contact.quick_contact.email_address')}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 group">
                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                          <Building2 className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">{t('contact.quick_contact.main_office')}</p>
                          <p className="text-blue-100 text-lg">{t('contact.quick_contact.office_location')}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Why Choose Us */}
                <motion.div variants={fadeInRight}>
                  <Card className="border-0 shadow-3xl bg-white/90 backdrop-blur-xl relative overflow-hidden h-full flex flex-col">
                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <Crown className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900">{t('contact.why_choose.title')}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6 relative z-10 flex-1">
                      <div className="flex items-start space-x-4 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                          <Award className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-700 text-lg font-medium">{t('contact.why_choose.experience')}</p>
                      </div>
                      <div className="flex items-start space-x-4 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-700 text-lg font-medium">{t('contact.why_choose.team')}</p>
                      </div>
                      <div className="flex items-start space-x-4 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-700 text-lg font-medium">{t('contact.why_choose.solution')}</p>
                      </div>
                      <div className="flex items-start space-x-4 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                          <Shield className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-700 text-lg font-medium">{t('contact.why_choose.support')}</p>
                      </div>
                      <div className="flex items-start space-x-4 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                          <Star className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-700 text-lg font-medium">{t('contact.why_choose.quality')}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Luxury background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/20 to-indigo-50/20"></div>
        </div>
        
        {/* Luxury background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.06),transparent_60%)]" />
        </div>
        
        {/* Animated background elements */}
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
        
        {/* Additional floating elements */}
        <motion.div 
          className="hidden md:block absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-lg"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.div 
          className="hidden md:block absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-r from-indigo-400/12 to-violet-400/12 rounded-full blur-lg"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
            x: [0, 15, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16" variants={staggerContainer}>
            <motion.div 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100/80 to-indigo-100/80 backdrop-blur-sm text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-lg"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <MapPin className="w-5 h-5 text-blue-600" />
              </motion.div>
              <span>{t('contact.map.badge')}</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
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
{t('contact.map.title')}
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
{t('contact.map.subtitle')}
            </motion.p>
          </motion.div>
          
          <motion.div variants={fadeInScale}>
            <Card className="border-0 shadow-3xl overflow-hidden bg-white/90 backdrop-blur-xl relative">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                {/* Company Info Card */}
                <motion.div 
                  className="lg:col-span-1"
                  variants={fadeInLeft}
                >
                  <Card className="border-0 shadow-3xl bg-white/95 backdrop-blur-xl h-full flex flex-col">
                    <CardHeader className="pb-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900">{t('contact.map.office_title')}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-lg text-gray-900 mb-2">{t('contact.contact_info.cards.address.company_name')}</h4>
                          <p className="text-blue-600 font-medium text-lg">{t('contact.contact_info.cards.address.company_name_en')}</p>
                          <p className="text-gray-600 mt-2">{t('contact.contact_info.cards.address.location')}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <a 
                          href="https://www.google.com/maps/place/T%E1%BB%95ng+C%C3%B4ng+Ty+%C4%90%E1%BB%91i+T%C3%A1c+Ch%C3%A2n+Th%E1%BA%ADt+(Genuine+Partner+Group)/@10.8070702,106.7497269,17z/data=!4m14!1m7!3m6!1s0x317527f5ef3792f5:0x46105c7f8d75ed9c!2zVOG7lW5nIEPDtG5nIFR5IMSQ4buRaSBUw6FjIENow6JuIFRo4bqtdCAoR2VudWluZSBQYXJ0bmVyIEdyb3VwKQ!8m2!3d10.8070649!4d106.7523018!16s%2Fg%2F11h3vf2qfx!3m5!1s0x317527f5ef3792f5:0x46105c7f8d75ed9c!8m2!3d10.8070649!4d106.7523018!16s%2Fg%2F11h3vf2qfx?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                          <MapPin className="w-5 h-5 mr-2" />
{t('contact.map.open_maps')}
                        </a>
                        <a 
                          href="tel:+84123456789"
                          className="w-full inline-flex items-center justify-center border-2 border-blue-200 text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                        >
                          <Phone className="w-5 h-5 mr-2" />
{t('contact.map.call_now')}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                {/* Map */}
                <motion.div 
                  className="lg:col-span-2"
                  variants={fadeInRight}
                >
                  <div className="aspect-video relative overflow-hidden rounded-2xl shadow-2xl">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789!2d106.7497269!3d10.8070702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527f5ef3792f5%3A0x46105c7f8d75ed9c!2zVOG7lW5nIEPDtG5nIFR5IMSQ4buRaSBUw6FjIENow6JuIFRo4bqtdCAoR2VudWluZSBQYXJ0bmVyIEdyb3VwKQ!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                      title="Vị trí Tổng Công Ty Đối Tác Chân Thật (Genuine Partner Group)"
                    ></iframe>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}

'use client';
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Sparkles, Star, Zap, Globe, Rocket, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, fadeInLeft, fadeInRight, fadeInScale, staggerContainer, hoverScale, floating, pulse, textReveal, gradientText } from "./animations"
import { useLocale } from "@/components/locale-provider"
export function HeroSection() {
  const { t } = useLocale()
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 pb-16">
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
                <Globe className="w-4 h-4" />
              </motion.div>
              <span className="text-white/90">{t('hero.badge')}</span>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {t('hero.title1')}
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
              {t('hero.title2')}
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
              {t('hero.description1')}
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg text-white/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t('hero.description2')}
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
                    <Rocket className="w-5 h-5" />
                  </motion.div>
                  {t('hero.button1')}
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
                  {t('hero.button2')}
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
              { number: "16+", label: t('hero.stats.years'), icon: Zap },
              { number: "18+", label: t('hero.stats.centers'), icon: Globe },
              { number: "28+", label: t('hero.stats.companies'), icon: Shield }
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
    </section>
  )
}

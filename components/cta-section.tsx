'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, Mail, Sparkles, Star, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, fadeInLeft, fadeInRight, fadeInScale, staggerContainer, hoverScale } from "./animations"
import { useLocale } from "@/components/locale-provider"
export function CTASection() {
  const { t } = useLocale()
  
  return (
    <motion.section 
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Background Elements */}
      <motion.div 
        className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-56 h-56 bg-gradient-to-l from-indigo-500/20 to-transparent rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 20, 0],
          y: [0, -15, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={fadeInScale}
          whileHover={{ 
            scale: 1.02, 
            y: -10,
            boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
          }}
          transition={{ duration: 0.3 }}
        >
        <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/20 overflow-hidden hover:bg-white/15 transition-all duration-500">
          {/* Top gradient accent */}
            <motion.div 
              className="h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 relative"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: [-100, 100] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          
          <CardContent className="p-8 md:p-12 text-center relative">
              <motion.div className="mb-6" variants={fadeInUp}>
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-white/20 mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                  </motion.div>
                <span className="text-white/90 text-sm font-medium">{t('cta.badge')}</span>
                </motion.div>
              </motion.div>
            
              <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 text-white text-balance leading-tight" variants={fadeInUp}>
                {t('cta.title')}
              </motion.h2>
              <motion.p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed" variants={fadeInUp}>
                {t('cta.description')}
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                variants={staggerContainer}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                    className="group relative bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
                  >
                    <motion.span 
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Phone className="mr-3 w-5 h-5" />
                      </motion.div>
                      {t('cta.buttons.call')}
                    </motion.span>
              </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                    className="group relative border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg font-semibold bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300"
                  >
                    <motion.span 
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
              >
                <Mail className="mr-3 w-5 h-5 group-hover:text-blue-300 transition-colors duration-300" />
                      </motion.div>
                      {t('cta.buttons.email')}
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-3 w-5 h-5" />
                      </motion.div>
                    </motion.span>
              </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                variants={staggerContainer}
              >
                {[
                  { icon: Phone, title: t('cta.features.consultation.title'), desc: t('cta.features.consultation.description'), color: "from-blue-500/20 to-indigo-500/20", hoverColor: "from-blue-500/30 to-indigo-500/30", textColor: "text-blue-400", hoverTextColor: "text-blue-300" },
                  { icon: Zap, title: t('cta.features.solution.title'), desc: t('cta.features.solution.description'), color: "from-indigo-500/20 to-violet-500/20", hoverColor: "from-indigo-500/30 to-violet-500/30", textColor: "text-indigo-400", hoverTextColor: "text-indigo-300" },
                  { icon: Star, title: t('cta.features.support.title'), desc: t('cta.features.support.description'), color: "from-blue-400/20 to-violet-400/20", hoverColor: "from-blue-400/30 to-violet-400/30", textColor: "text-violet-400", hoverTextColor: "text-violet-300" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      variants={fadeInScale}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:${item.hoverColor} transition-all duration-300`}
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
                        <IconComponent className={`w-6 h-6 ${item.textColor} group-hover:${item.hoverTextColor} transition-colors duration-300`} />
                      </motion.div>
                      <motion.div 
                        className={`text-lg font-bold text-white mb-2 group-hover:${item.hoverTextColor} transition-colors duration-300`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                      >
                        {item.title}
                      </motion.div>
                      <motion.div 
                        className="text-white/70 group-hover:text-white/90 transition-colors duration-300 text-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        {item.desc}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
          </CardContent>
        </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}

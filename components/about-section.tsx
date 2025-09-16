'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Award, Globe, TrendingUp, Sparkles, ArrowRight, CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { fadeInUp, fadeInLeft, fadeInRight, fadeInScale, staggerContainer, hoverScale } from "./animations"

export function AboutSection() {
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
      label: "Nhân viên",
      description: "Đội ngũ chuyên nghiệp",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Award,
      number: "50+",
      label: "Giải thưởng",
      description: "Được công nhận",
      gradient: "from-indigo-500 to-violet-500",
    },
    {
      icon: Globe,
      number: "63",
      label: "Tỉnh thành",
      description: "Phủ sóng toàn quốc",
      gradient: "from-blue-400 to-indigo-400",
    },
    {
      icon: TrendingUp,
      number: "99%",
      label: "Hài lòng",
      description: "Khách hàng tin tưởng",
      gradient: "from-indigo-400 to-violet-400",
    },
  ]

  const highlights = [
    "16 năm kinh nghiệm trong ngành",
    "Hệ sinh thái đa dạng và toàn diện",
    "Triết lý kinh doanh bền vững",
    "Đối tác tin cậy hàng đầu Việt Nam"
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
                  Về chúng tôi
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
                  16 năm
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
                  Kinh nghiệm
                </motion.span>
                <span className="block text-slate-800 text-3xl sm:text-4xl md:text-5xl">
                  Đối tác tin cậy
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
                Được thành lập từ năm <motion.span 
                  className="font-semibold text-blue-600"
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(37, 99, 235, 0)",
                      "0 0 10px rgba(37, 99, 235, 0.5)",
                      "0 0 0px rgba(37, 99, 235, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  2009
                </motion.span>, 
                <span className="font-semibold text-slate-800"> TCT Đối Tác Chân Thật</span> đã trở thành một trong những 
                tập đoàn hàng đầu Việt Nam trong lĩnh vực logistics, thương mại và dịch vụ.
              </motion.p>
              
              <motion.p 
                className="text-base md:text-lg text-slate-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Với triết lý kinh doanh <span className="font-semibold text-indigo-600">"Kế Thừa - Tự Doanh - Xanh Hóa - Hạnh Phúc"</span>, 
                chúng tôi không ngừng phát triển và mở rộng hệ sinh thái để phục vụ tốt nhất cho khách hàng.
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
                    Tìm hiểu thêm
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
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-slate-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Hệ sinh thái <motion.span 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
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
                4 nhóm
              </motion.span> toàn diện
            </motion.h3>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { name: "Thân", desc: "Logistics & Phụ trợ", color: "from-blue-500 to-indigo-500" },
                { name: "Tâm", desc: "Dịch vụ & Thương mại", color: "from-indigo-500 to-violet-500" },
                { name: "Trí", desc: "Tư vấn & Công nghệ", color: "from-blue-400 to-indigo-400" },
                { name: "Thiện", desc: "Cộng đồng & An sinh", color: "from-indigo-400 to-violet-400" }
              ].map((group, index) => (
                <motion.div 
                  key={index} 
                  className="group p-4 md:p-6 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white transition-all duration-500"
                  variants={fadeInScale}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-r ${group.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white font-bold text-lg">{group.name}</span>
                  </motion.div>
                  <p className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors duration-300">{group.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

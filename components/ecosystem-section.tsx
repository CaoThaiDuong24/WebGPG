'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Truck, ShoppingBag, Brain, Heart, ArrowRight, Sparkles, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { fadeInUp, fadeInLeft, fadeInRight, fadeInScale, staggerContainer, hoverScale } from "./animations"
import { useLocale } from "@/components/locale-provider"
import { useRouter } from "next/navigation"

export function EcosystemSection() {
  const { t } = useLocale()
  const router = useRouter()
  
  // Mapping for group pages
  const groupPages = {
    than: '/nhom-than',
    tam: '/nhom-tam', 
    tri: '/nhom-tri',
    thien: '/nhom-thien'
  }
  
  const ecosystemData = [
    {
      icon: Truck,
      title: t('ecosystem.groups.than.title'),
      subtitle: t('ecosystem.groups.than.subtitle'),
      description: t('ecosystem.groups.than.description'),
      group: 'than',
      services: [
        "CÔNG TY TNHH TẬP ĐOÀN ĐỐI TÁC CHÂN THẬT",
        "Công ty Cổ Phần Đối Tác Chân Thật",
        "Công ty Cổ Phần Cảng Việt Nam",
        "Công ty Cổ Phần THT E-Logistics",
        "Công ty TNHH MTV Đầu Tư Logistics Miền Trung",
        "Công ty TNHH Doanh Nhân Khởi Nghiệp Việt Nam",
        "Genuine Partner Logistics (Cambodia) Company Limited",
      ],
      image: "/modern-logistics-warehouse-with-containers-and-tru.jpg",
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: ShoppingBag,
      title: t('ecosystem.groups.tam.title'),
      subtitle: t('ecosystem.groups.tam.subtitle'),
      description: t('ecosystem.groups.tam.description'),
      group: 'tam',
      services: [
        "Công ty TNHH Doanh Nhân Khởi Nghiệp Việt Nam",
        "CÔNG TY CỔ PHẦN TẬP ĐOÀN VỮNG AN",
        "CÔNG TY TNHH Y KHOA CỘNG ĐỒNG HỶ HỶ",
      ],
      image: "/tam-Medium.jpg",
      color: "from-emerald-600 to-green-500",
    },
    {
      icon: Brain,
      title: t('ecosystem.groups.tri.title'),
      subtitle: t('ecosystem.groups.tri.subtitle'),
      description: t('ecosystem.groups.tri.description'),
      group: 'tri',
      services: [
        "Công ty Cổ phần Ứng Dụng Công Nghệ Logistics",
        "Viện Tư vấn và Đào tạo Công nghệ Logistics",
        "Công ty TNHH Tư Vấn Đầu Tư Đông Sài Gòn",
        "CÔNG TY TNHH TRUYỀN THÔNG QUỐC TẾ CHÂN THẬT",
      ],
      image: "/mind-1024x580.png.jpeg",
      color: "from-purple-600 to-violet-500",
    },
    {
      icon: Heart,
      title: t('ecosystem.groups.thien.title'),
      subtitle: t('ecosystem.groups.thien.subtitle'),
      description: t('ecosystem.groups.thien.description'),
      group: 'thien',
      services: [
        "Công ty TNHH Cộng đồng Công tác xã hội",
        "Quỹ Vì nụ cười hạnh phúc",
        "CLB Chuyến xe yêu thương",
        "Bếp nhà từ tâm",
      ],
      image: "/thien.jpg",
      color: "from-orange-600 to-red-500",
    },
  ]
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set())

  // Handle navigation to group pages
  const handleGroupNavigation = (group: string) => {
    const pagePath = groupPages[group as keyof typeof groupPages]
    if (pagePath) {
      router.push(pagePath)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate items with staggered delay
          const timeouts: NodeJS.Timeout[] = []
          ecosystemData.forEach((_, index) => {
            const timeout = setTimeout(() => {
              setAnimatedItems(prev => new Set([...prev, index]))
            }, index * 300)
            timeouts.push(timeout)
          })
          
          return () => {
            timeouts.forEach(clearTimeout)
          }
        }
      },
      { threshold: 0.1 }
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
    <motion.section 
      ref={sectionRef} 
      className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent"></div>
      <motion.div 
        className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-indigo-400/20 to-violet-400/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <motion.div variants={fadeInUp}>
            <Badge className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white border-0 shadow-xl rounded-full">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              <span className="font-semibold">{t('ecosystem.badge')}</span>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-4 h-4" />
              </motion.div>
            </Badge>
          </motion.div>
          
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight" variants={fadeInUp}>
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
              {t('ecosystem.title1')}
            </motion.span>
            <motion.span 
              className="block"
              style={{
                background: "linear-gradient(45deg, #2563eb, #7c3aed, #ec4899, #2563eb)",
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
              {t('ecosystem.title2')}
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            {t('ecosystem.description')}
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            {[
              { number: "4", label: t('ecosystem.stats.groups'), emoji: "🏢" },
              { number: "20+", label: t('ecosystem.stats.companies'), emoji: "🚀" },
              { number: "63", label: t('ecosystem.stats.provinces'), emoji: "🌍" },
              { number: "1000+", label: t('ecosystem.stats.employees'), emoji: "👥" }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="group relative text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl"
                variants={fadeInScale}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-2xl mb-3"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.emoji}
                </motion.div>
                <motion.div 
                  className="text-3xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-sm font-semibold text-slate-700">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Ecosystem Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          {ecosystemData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInScale}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group relative overflow-hidden border-0 bg-white/95 backdrop-blur-xl hover:bg-white transition-all duration-500 shadow-xl hover:shadow-2xl rounded-2xl h-full flex flex-col">
                {/* Header Section */}
                <div className="relative p-6 pb-4">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className={`relative p-4 rounded-xl bg-gradient-to-r ${item.color} shadow-lg`}
                      whileHover={{ 
                        rotate: 6, 
                        scale: 1.1,
                        transition: { duration: 0.3 }
                      }}
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
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3 
                        className="text-2xl font-black text-slate-900 mb-2 group-hover:text-slate-800 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p 
                        className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                      >
                        {item.subtitle}
                      </motion.p>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <motion.div 
                  className="relative mx-6 mb-4 overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-500"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-15 group-hover:opacity-25 transition-opacity duration-500`}></div>
                    
                    {/* Badge */}
                    <motion.div 
                      className={`absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-md rounded-lg shadow-md border border-white/20`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-2">
                        <motion.div 
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className={`text-xs font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.services.length} công ty
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Content Section */}
                <CardContent className="relative px-6 pb-6 flex-grow flex flex-col justify-between">
                  <motion.p 
                    className="text-slate-600 text-base leading-relaxed mb-4 group-hover:text-slate-700 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {item.description}
                  </motion.p>

                  {/* Services */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <div className={`w-1 h-4 bg-gradient-to-b ${item.color} rounded-full`}></div>
                      {t('ecosystem.companies')}
                    </h4>
                    <div className="space-y-2">
                      {item.services.slice(0, 3).map((service, serviceIndex) => (
                        <motion.div 
                          key={serviceIndex} 
                          className="flex items-center gap-3 p-3 rounded-lg bg-slate-50/50 hover:bg-white transition-all duration-300"
                          whileHover={{ scale: 1.01, x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} flex-shrink-0`}></div>
                          <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors duration-300 font-medium">
                            {service}
                          </span>
                        </motion.div>
                      ))}
                      {item.services.length > 3 && (
                        <div className="text-sm text-slate-500 font-medium pl-5">
                          +{item.services.length - 3} {t('ecosystem.more_companies')}
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button 
                      className={`group/btn relative overflow-hidden bg-gradient-to-r ${item.color} hover:shadow-xl text-white px-6 py-3 text-base font-bold rounded-xl transition-all duration-300 w-full`}
                      onClick={() => handleGroupNavigation(item.group)}
                    >
                      <motion.span 
                        className="relative z-10 flex items-center justify-center gap-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {t('ecosystem.button')}
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </motion.span>
                    </Button>
                  </motion.div>
                </CardContent>
                
                {/* Hover Effect Border */}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} rounded-b-2xl`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

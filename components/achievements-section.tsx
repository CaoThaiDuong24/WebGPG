'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Target, Zap, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, fadeInLeft, fadeInRight, fadeInScale, staggerContainer, hoverScale } from "./animations"

export function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "Top 500 Doanh nghiệp lớn nhất Việt Nam",
      year: "2023",
      description: "Được vinh danh trong bảng xếp hạng VNR500 do Vietnam Report công bố",
      color: "from-amber-500 to-orange-500",
      bgColor: "amber-50",
      shadowColor: "amber-200/30",
    },
    {
      icon: Star,
      title: "Doanh nghiệp xuất sắc ngành Logistics",
      year: "2022",
      description: "Giải thưởng do Hiệp hội Logistics Việt Nam trao tặng",
      color: "from-emerald-500 to-teal-500",
      bgColor: "emerald-50",
      shadowColor: "emerald-200/30",
    },
    {
      icon: Target,
      title: "Chứng nhận ISO 9001:2015",
      year: "2021",
      description: "Hệ thống quản lý chất lượng đạt tiêu chuẩn quốc tế",
      color: "from-blue-500 to-indigo-500",
      bgColor: "blue-50",
      shadowColor: "blue-200/30",
    },
    {
      icon: Zap,
      title: "Doanh nghiệp bền vững",
      year: "2023",
      description: "Cam kết phát triển bền vững và trách nhiệm xã hội",
      color: "from-purple-500 to-pink-500",
      bgColor: "purple-50",
      shadowColor: "purple-200/30",
    },
  ]

  return (
    <motion.section 
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Background Elements */}
      <motion.div 
        className="absolute top-0 left-1/4 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 20, 0],
          y: [0, -15, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="container mx-auto px-4 relative">
        <motion.div className="text-center mb-16" variants={staggerContainer}>
          <motion.div className="flex items-center justify-center gap-2 mb-6" variants={fadeInUp}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </motion.div>
            <Badge className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 text-blue-700 border-blue-200/50 shadow-sm">
              Thành tích nổi bật
            </Badge>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </motion.div>
          </motion.div>
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary text-balance leading-tight" variants={fadeInUp}>
            Những{" "}
            <motion.span 
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "300% 300%"
              }}
            >
              thành tựu
            </motion.span>{" "}
            đáng tự hào
          </motion.h2>
          <motion.p className="text-lg text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed" variants={fadeInUp}>
            16 năm phát triển với những dấu mốc quan trọng và sự ghi nhận từ cộng đồng doanh nghiệp Việt Nam
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={fadeInScale}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-500 shadow-lg hover:shadow-xl">
                {/* Gradient top border */}
                <motion.div 
                  className={`h-1 bg-gradient-to-r ${achievement.color} relative`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                
                <CardContent className="p-6 relative">
                  {/* Icon */}
                  <motion.div 
                    className="relative mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center mb-3 shadow-lg`}
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
                      <achievement.icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Year badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Badge className={`mb-3 bg-gradient-to-r ${achievement.color} text-white border-0 shadow-md px-3 py-1 text-sm font-semibold`}>
                      {achievement.year}
                    </Badge>
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h3 
                    className="text-lg font-bold text-slate-800 mb-3 text-balance leading-tight group-hover:text-slate-900 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {achievement.title}
                  </motion.h3>
                  
                  {/* Description */}
                  <motion.p 
                    className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    {achievement.description}
                  </motion.p>
                  
                  {/* Bottom accent line */}
                  <motion.div 
                    className={`mt-4 h-0.5 bg-gradient-to-r ${achievement.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
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
  )
}

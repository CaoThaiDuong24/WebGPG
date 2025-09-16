'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, Star, Heart, MessageCircle } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeInUp, fadeInLeft, fadeInRight, fadeInScale, staggerContainer, hoverScale } from "./animations"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Nguyễn Văn A",
      position: "Giám đốc điều hành",
      company: "Công ty ABC",
      content:
        "Genuine Partner đã hỗ trợ chúng tôi rất nhiều trong việc tối ưu hóa chuỗi cung ứng. Dịch vụ chuyên nghiệp và đáng tin cậy.",
      rating: 5,
      avatar: "/professional-business-person.png",
    },
    {
      name: "Trần Thị B",
      position: "Trưởng phòng Logistics",
      company: "Tập đoàn XYZ",
      content:
        "Với kinh nghiệm 16 năm, Genuine Partner hiểu rõ nhu cầu của doanh nghiệp và luôn đưa ra giải pháp tối ưu nhất.",
      rating: 5,
      avatar: "/professional-business-woman.png",
    },
    {
      name: "Lê Văn C",
      position: "Chủ tịch HĐQT",
      company: "Công ty DEF",
      content:
        "Hệ sinh thái đa dạng của Genuine Partner giúp chúng tôi tiết kiệm thời gian và chi phí trong việc tìm kiếm đối tác.",
      rating: 5,
      avatar: "/senior-business-executive.png",
    },
  ]

  return (
    <motion.section 
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50/30 relative overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:radial-gradient(ellipse_at_center,white,rgba(255,255,255,0.4))] -z-10" />
      <motion.div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-indigo-400/10 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 20, 0],
          y: [0, -15, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      
      <div className="container mx-auto px-4 relative">
        <motion.div className="text-center mb-20" variants={staggerContainer}>
          <motion.div className="flex items-center justify-center gap-3 mb-6" variants={fadeInUp}>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 text-red-500" />
            </motion.div>
            <Badge className="mb-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 text-blue-700 border-blue-200/50 shadow-sm px-4 py-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
              </motion.div>
              Khách hàng nói gì
            </Badge>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 text-red-500" />
            </motion.div>
          </motion.div>
          <motion.h2 className="text-5xl md:text-6xl font-bold mb-8 text-primary text-balance leading-tight" variants={fadeInUp}>
            Được{" "}
            <motion.span 
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent relative"
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
              tin tưởng
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-violet-600/30 rounded-full"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>{" "}
            bởi
          </motion.h2>
          <motion.p className="text-xl text-slate-600 max-w-4xl mx-auto text-pretty leading-relaxed" variants={fadeInUp}>
            Hàng nghìn doanh nghiệp đã chọn Genuine Partner làm đối tác chiến lược trong hành trình phát triển
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInScale}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group relative overflow-hidden border-0 bg-white/70 backdrop-blur-md hover:bg-white/80 transition-all duration-500 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/30">
                {/* Top gradient accent */}
                <motion.div 
                  className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 relative"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                
                <CardContent className="p-8 relative">
                  {/* Quote and rating */}
                  <motion.div 
                    className="flex items-center justify-between mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Quote className="w-10 h-10 text-blue-400/40 group-hover:text-blue-500/60 transition-colors duration-300" />
                      </motion.div>
                      <motion.div 
                        className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={`star-${testimonial.name}-${i}`}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + i * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.2 }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 transition-transform duration-300" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Testimonial content */}
                  <motion.div 
                    className="relative mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-slate-700 text-lg leading-relaxed italic group-hover:text-slate-800 transition-colors duration-300">
                      "{testimonial.content}"
                    </p>
                    {/* Decorative quote marks */}
                    <motion.div 
                      className="absolute -top-2 -left-2 text-4xl text-blue-200 font-serif opacity-50 group-hover:opacity-20 transition-opacity duration-300"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      "
                    </motion.div>
                    <motion.div 
                      className="absolute -bottom-2 -right-2 text-4xl text-blue-200 font-serif opacity-50 group-hover:opacity-20 transition-opacity duration-300 rotate-180"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    >
                      "
                    </motion.div>
                  </motion.div>

                  {/* User info */}
                  <motion.div 
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gradient-to-r from-blue-500 group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                      <motion.div 
                        className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                        {testimonial.position}
                      </p>
                      <p className="text-xs text-slate-500 group-hover:text-blue-600 transition-colors duration-300 font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </motion.div>

                  {/* Floating particles */}
                  <motion.div 
                    className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                  />
                  <motion.div 
                    className="absolute top-8 right-8 w-1.5 h-1.5 bg-indigo-400 rounded-full"
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div 
                    className="absolute bottom-8 left-4 w-1 h-1 bg-violet-400 rounded-full"
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
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

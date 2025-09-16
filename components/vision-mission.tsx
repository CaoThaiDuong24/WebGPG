'use client'

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Eye, 
  Target, 
  Heart, 
  Shield, 
  Star, 
  ArrowRight, 
  Sparkles, 
  Globe, 
  Crown,
  Leaf,
  Quote,
  Rocket,
  Play
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, fadeInScale, staggerContainer, hoverScale } from './animations';

const VisionMission = () => {
  const coreValues = [
    {
      icon: Shield,
      title: "Sự tin tưởng",
      description: "Xây dựng niềm tin vững chắc với khách hàng, đối tác và cộng đồng thông qua sự minh bạch, trung thực trong mọi hoạt động kinh doanh.",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: Heart,
      title: "Tinh thần trách nhiệm",
      description: "Thể hiện tinh thần trách nhiệm cao trong mọi công việc, cam kết mang lại giá trị tốt nhất cho khách hàng và xã hội.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-100"
    },
    {
      icon: Leaf,
      title: "Phát triển bền vững",
      description: "Hướng đến sự phát triển bền vững, cân bằng giữa lợi ích kinh tế, xã hội và môi trường cho thế hệ hiện tại và tương lai.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-100"
    }
  ];


  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
      {/* Hero Section with Enhanced Design */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%'
            }}
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
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
          <motion.div 
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div 
              className="mb-8"
              variants={fadeInUp}
            >
              <motion.div 
                className="inline-flex items-center gap-3 px-6 py-3 backdrop-blur-xl border border-white/30 rounded-full text-sm font-semibold shadow-xl bg-white/10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Globe className="w-4 h-4" />
                </motion.div>
                <span className="text-white/90">TẦM NHÌN • SỨ MỆNH • GIÁ TRỊ CỐT LÕI</span>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
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
                className="block mb-2 text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                TẦM NHÌN & SỨ MỆNH
              </motion.span>
              <motion.span 
                className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                TCT ĐỐI TÁC CHÂN THẬT
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.div 
              className="mb-12 max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="font-bold text-blue-200">Định hướng tương lai</span> với 
                <span className="font-semibold text-white"> tầm nhìn rõ ràng</span> và 
                <span className="font-semibold text-white"> sứ mệnh bền vững</span>
              </motion.p>
              <motion.p 
                className="text-base sm:text-lg text-white/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Chúng tôi cam kết mang lại 
                <span className="font-medium text-blue-200"> giá trị • đổi mới • phát triển bền vững</span> 
                cho doanh nghiệp và cộng đồng
              </motion.p>
            </motion.div>

            {/* Quote from Thượng tọa Thích Nghiêm Đạo */}
            <motion.div 
              className="mb-12 max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              <motion.div 
                className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative z-10">
                  <motion.div 
                    className="flex justify-center mb-6"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Quote className="w-12 h-12 text-yellow-400/80" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.p 
                    className="text-lg md:text-xl text-blue-100 leading-relaxed italic text-center font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    "Con đường đạt đến thành công không gì hơn trí tuệ và lòng nhẫn nại"
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg md:text-xl text-blue-100 leading-relaxed italic text-center mt-4 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  >
                    "Bền chắc trong sự thành công không gì hơn sự chân thật và tình yêu thương"
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center justify-center mt-6 gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                  >
                    <motion.div 
                      className="w-8 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.8 }}
                    />
                    <p className="text-sm text-blue-200 font-medium px-4">
                      Thượng tọa Thích Nghiêm Đạo
                    </p>
                    <motion.div 
                      className="w-8 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.8 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section 
        className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-indigo-100/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-100/25 to-blue-100/15 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.4, 0.25],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 text-blue-700 px-8 py-4 rounded-full text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Eye className="w-4 h-4 text-white" />
              </motion.div>
              Tầm nhìn
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                className="block text-gray-900 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Tương lai
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
                style={{
                  backgroundSize: "300% 300%"
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                chúng tôi hướng đến
              </motion.span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          <motion.div
            className="max-w-7xl mx-auto"
            variants={fadeInScale}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="relative overflow-hidden border-0 bg-white/90 backdrop-blur-xl hover:bg-white transition-all duration-700 shadow-2xl hover:shadow-3xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/30" />
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-indigo-100/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <CardContent className="relative p-8 md:p-12">
                <motion.div 
                  className="flex items-start gap-6 mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl shadow-xl group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 0px rgba(59, 130, 246, 0)",
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 0px rgba(59, 130, 246, 0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity
                    }}
                  >
                    <Eye className="w-10 h-10 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Tầm nhìn</h3>
                    <motion.div 
                      className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
                
                <div className="prose prose-lg prose-gray max-w-none">
                  <motion.p 
                    className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Bằng việc ứng dụng các công nghệ tiên tiến và thông minh, chúng tôi kiến tạo và kết nối các giá trị giúp 
                    <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {" "}hàng hoá lưu thông thông suốt trên thị trường một cách hiệu quả và tin cậy
                    </span> 
                    {" "}để phát triển cuộc sống con người, doanh nghiệp và nền kinh tế một cách bền vững.
                  </motion.p>
                  <motion.p 
                    className="text-lg md:text-xl text-gray-600 leading-relaxed mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Từ đó chúng tôi đóng góp để xây dựng một xã hội tốt đẹp hơn bằng việc cung cấp các sản phẩm và dịch vụ chất lượng phù hợp với xu hướng phát triển của thế giới nhằm nâng cao chất lượng đời sống của nhân viên, đối tác, khách hàng và công chúng.
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section 
        className="relative py-16 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50/40 to-pink-50/60"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-100/30 to-purple-100/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, -180, -360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-purple-100/25 to-pink-100/15 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.4, 0.25],
              x: [0, -30, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/50 text-indigo-700 px-8 py-4 rounded-full text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Target className="w-4 h-4 text-white" />
              </motion.div>
              Sứ mệnh
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                className="block text-gray-900 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Sứ mệnh
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                style={{
                  backgroundSize: "300% 300%"
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                của chúng tôi
              </motion.span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          <motion.div
            className="max-w-7xl mx-auto"
            variants={fadeInScale}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="relative overflow-hidden border-0 bg-white/90 backdrop-blur-xl hover:bg-white transition-all duration-700 shadow-2xl hover:shadow-3xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/30" />
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100/40 to-purple-100/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <CardContent className="relative p-8 md:p-12">
                <motion.div 
                  className="flex items-start gap-6 mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl shadow-xl group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 0px rgba(124, 58, 237, 0)",
                        "0 0 20px rgba(124, 58, 237, 0.3)",
                        "0 0 0px rgba(124, 58, 237, 0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity
                    }}
                  >
                    <Target className="w-10 h-10 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Sứ mệnh</h3>
                    <motion.div 
                      className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
                
                <div className="prose prose-lg prose-gray max-w-none">
                  <motion.p 
                    className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Không ngừng đổi mới và cải tiến công nghệ để mang đến cho doanh nghiệp và khách hàng các 
                    <span className="font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {" "}sản phẩm và dịch vụ chất lượng
                    </span>.
                  </motion.p>
                  <motion.p 
                    className="text-lg md:text-xl text-gray-600 leading-relaxed mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Không ngừng kiến tạo và cung cấp giá trị gia tăng cho tất cả các bên liên quan, góp phần tích cực vào sự phát triển bền vững của xã hội và đảm bảo giảm thiểu tác hại đến môi trường.
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section 
        className="relative py-16 overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50/40 to-teal-50/60"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100/30 to-green-100/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-100/25 to-teal-100/15 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.4, 0.25],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/50 text-emerald-700 px-8 py-4 rounded-full text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="p-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Star className="w-4 h-4 text-white" />
              </motion.div>
              Giá trị cốt lõi
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                className="block text-gray-900 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Giá trị cốt lõi
              </motion.span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              "Thành công của bạn là thành công của chúng tôi"
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={staggerContainer}
          >
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div 
                  key={index} 
                  className="group"
                  variants={fadeInScale}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full bg-white/90 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 relative overflow-hidden hover:bg-white group-hover:scale-105">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} opacity-20`} />
                    <motion.div 
                      className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-100/30 to-green-100/20 rounded-full blur-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    />
                    
                    <CardHeader className="relative z-10 p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div 
                          className={`p-4 bg-gradient-to-r ${value.color} rounded-3xl shadow-xl group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          animate={{
                            boxShadow: [
                              "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                              "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                              "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                            ]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: index * 0.3
                          }}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </motion.div>
                        <CardTitle className="text-2xl font-bold text-gray-900">
                          {value.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10 p-6 pt-0">
                      <CardDescription className="text-gray-700 leading-relaxed text-lg font-light">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                    
                    {/* Progress bar */}
                    <motion.div 
                      className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${value.color} rounded-b-xl`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        className="relative py-16 overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900 text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              variants={fadeInUp}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Crown className="w-5 h-5 text-yellow-400" />
              </motion.div>
              <span className="text-white/90 font-medium">Cùng chúng tôi xây dựng tương lai</span>
            </motion.div>

            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight"
              variants={fadeInUp}
            >
              Sẵn sàng{" "}
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent"
                style={{
                  backgroundSize: "300% 300%"
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                hợp tác?
              </motion.span>
            </motion.h2>

            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Hãy liên hệ với chúng tôi để tìm hiểu thêm về tầm nhìn, sứ mệnh và cách chúng tôi có thể hỗ trợ doanh nghiệp của bạn
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
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
                    Liên hệ ngay
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
                    Tìm hiểu thêm
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default VisionMission;

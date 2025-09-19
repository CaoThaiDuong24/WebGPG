'use client'
import React from 'react';
import { Building2, Users, Globe, Target, Leaf, Award, Star, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutGeneral = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/modern-business-skyline-with-glass-buildings-at-su.jpg"
            alt="Tòa nhà văn phòng hiện đại - Trụ sở TCT Đối Tác Chân Thật"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-indigo-800/80 to-blue-700/85"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center text-white mb-16">
              {/* Company Badge */}
              <motion.div 
                className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 mb-10 border border-white/30 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2.5 rounded-full shadow-md"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Building2 className="h-6 w-6 text-white" />
                </motion.div>
                <span className="text-white font-bold text-lg">TCT Đối Tác Chân Thật</span>
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
              </motion.div>
              
              {/* Main Title */}
              <motion.h1 
                className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block">Đối Tác</span>
                <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Chân Thật
                </span>
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p 
                className="text-xl md:text-2xl text-blue-100 leading-relaxed font-medium max-w-4xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Tổng Công ty Đối Tác Chân Thật - Đối tác logistics hàng đầu tại Việt Nam, 
                cam kết mang đến dịch vụ chất lượng cao và giải pháp toàn diện cho mọi nhu cầu vận chuyển.
              </motion.p>

              {/* Statistics */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {[
                  { number: "15+", label: "Năm kinh nghiệm" },
                  { number: "500+", label: "Đối tác tin cậy" },
                  { number: "50+", label: "Tỉnh thành phủ sóng" },
                  { number: "99%", label: "Tỷ lệ hài lòng" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.number}</div>
                    <div className="text-blue-100 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.button 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Khám phá ngay</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-flex items-center gap-3 bg-blue-100 rounded-full px-6 py-3 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Building2 className="h-5 w-5 text-blue-600" />
                <span className="text-blue-800 font-semibold">Giới thiệu công ty</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Về <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">TCT ĐTCT</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Tổng Công ty Đối Tác Chân Thật là một trong những đơn vị hàng đầu trong lĩnh vực logistics và vận tải tại Việt Nam.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building2 className="h-8 w-8" />,
                  title: "Trụ sở chính",
                  content: "Số 2A đường 5, phường An Phú, TP Thủ Đức, TP.HCM",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: <Target className="h-8 w-8" />,
                  title: "Sứ mệnh",
                  content: "Mang đến dịch vụ logistics chất lượng cao, đáng tin cậy và hiệu quả cho khách hàng",
                  color: "from-emerald-500 to-emerald-600"
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  title: "Giá trị cốt lõi",
                  content: "Sự tin tưởng, tinh thần trách nhiệm và phát triển bền vững",
                  color: "from-purple-500 to-purple-600"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl mb-6 shadow-lg`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 mb-10 border border-white/60 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-2.5 rounded-full shadow-md"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Globe className="h-6 w-6 text-white" />
                </motion.div>
                <span className="text-indigo-800 font-bold text-lg" data-translate>Hệ sinh thái</span>
                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-10 leading-tight tracking-tight">
                Hệ sinh thái <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">TCT Đối tác Chân Thật</span>
              </h2>
              
              <div className="bg-white/70 backdrop-blur-sm p-10 rounded-2xl border border-white/60 shadow-xl max-w-5xl mx-auto">
                <p className="text-xl text-gray-800 leading-relaxed font-medium mb-4">
                  TCT ĐTCT đã xây dựng <span className="font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Hệ sinh thái Đối Tác Chân Thật</span> với logistics là ngành trọng tâm.
                </p>
                <p className="text-xl text-gray-800 leading-relaxed font-medium">
                  Mục tiêu giải quyết các yêu cầu về phát triển bền vững, số hóa, vận chuyển đa phương thức, tuân thủ quy định, nhân lực tương lai và giảm khí thải.
                </p>
              </div>
            </motion.div>

            {/* Ecosystem Image */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">
                <Image
                  src="/hstgpg.png"
                  alt="Hệ sinh thái GPG - Sơ đồ tổng quan các lĩnh vực hoạt động"
                  width={1200}
                  height={500}
                  className="object-contain w-full h-[500px] p-6"
                />
              </div>
            </motion.div>

            {/* Ecosystem Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: <Building2 className="h-10 w-10" />,
                  title: "Logistics & Phụ trợ",
                  content: "Lĩnh vực kinh doanh chính của TCT ĐTCT, tạo ra nguồn thu để đầu tư phát triển Hệ sinh thái.",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: <Users className="h-10 w-10" />,
                  title: "Dịch vụ & Thương mại",
                  content: "Các hoạt động mở rộng đáp ứng nhu cầu sinh hoạt của thành viên trong Hệ sinh thái.",
                  color: "from-green-500 to-green-600"
                },
                {
                  icon: <Target className="h-10 w-10" />,
                  title: "Tư vấn & Công nghệ",
                  content: "Phát triển chiến lược kinh doanh, marketing, tư vấn công nghệ, tài chính và pháp lý.",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  icon: <Leaf className="h-10 w-10" />,
                  title: "Cộng đồng & An sinh",
                  content: "Thúc đẩy hoạt động cộng đồng và phúc lợi xã hội, tạo điều kiện phát triển bền vững.",
                  color: "from-orange-500 to-orange-600"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/60 shadow-lg text-center relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <motion.div 
                    className={`mx-auto bg-gradient-to-br ${item.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base font-medium">
                    {item.content}
                  </p>
                  <div className={`mt-4 w-full h-1 bg-gradient-to-r ${item.color} rounded-full`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto text-center">
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-xl rounded-full px-6 py-3 mb-6 border border-blue-200/60 shadow-lg">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-full shadow-md">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <span className="text-blue-800 font-semibold text-sm">Giá trị cốt lõi</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                Giá trị <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">cốt lõi</span>
              </h2>
              
              <p className="text-xl text-blue-100 leading-relaxed font-semibold max-w-4xl mx-auto">
                Ba trụ cột vững chắc định hướng mọi hoạt động của chúng tôi
              </p>
            </div>
            
            {/* Values Image */}
            <div className="relative mb-12">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm">
                <div className="relative z-10 p-8">
                  <Image
                    src="/Arow4Web-01.png"
                    alt="Giá trị cốt lõi GPG - Sơ đồ và thông tin về các giá trị SỰ TIN TƯỞNG, TINH THẦN TRÁCH NHIỆM, PHÁT TRIỂN BỀN VỮNG"
                    width={1200}
                    height={450}
                    className="object-contain w-full h-[450px] drop-shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Award className="h-8 w-8" />,
                  title: "SỰ TIN TƯỞNG",
                  content: "Xây dựng và duy trì niềm tin với khách hàng, đối tác thông qua sự minh bạch, trung thực và cam kết chất lượng trong mọi hoạt động.",
                  color: "from-blue-500 to-indigo-500",
                  bgColor: "from-blue-50/50 to-indigo-50/50",
                  borderColor: "border-blue-200/50"
                },
                {
                  icon: <Target className="h-8 w-8" />,
                  title: "TINH THẦN TRÁCH NHIỆM",
                  content: "Thể hiện tinh thần trách nhiệm cao trong công việc, luôn hoàn thành tốt nhiệm vụ và đóng góp tích cực cho sự phát triển của tổ chức.",
                  color: "from-emerald-500 to-cyan-500",
                  bgColor: "from-emerald-50/50 to-cyan-50/50",
                  borderColor: "border-emerald-200/50"
                },
                {
                  icon: <Leaf className="h-8 w-8" />,
                  title: "PHÁT TRIỂN BỀN VỮNG",
                  content: "Cam kết phát triển bền vững, cân bằng giữa lợi ích kinh tế, xã hội và môi trường để tạo giá trị lâu dài cho cộng đồng.",
                  color: "from-purple-500 to-pink-500",
                  bgColor: "from-purple-50/50 to-pink-50/50",
                  borderColor: "border-purple-200/50"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`group bg-white/90 backdrop-blur-xl p-6 rounded-2xl border ${item.borderColor} shadow-xl relative overflow-hidden`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-2xl`}></div>
                  <div className="relative z-10">
                    <div className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 text-center mb-4">{item.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed text-center">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Commitment */}
            <motion.div 
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Cam kết của chúng tôi</h3>
                </div>
                <p className="text-base leading-relaxed text-center text-blue-100">
                  Với ba giá trị cốt lõi này, TCT Đối Tác Chân Thật cam kết xây dựng niềm tin bền vững, thể hiện tinh thần trách nhiệm cao và phát triển bền vững, tạo nên sự khác biệt trong ngành logistics và đóng góp tích cực cho cộng đồng.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutGeneral;
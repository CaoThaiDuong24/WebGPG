"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Target, Shield, Medal, Sparkles, Calendar, Building, Users, TrendingUp, Award, CheckCircle, Crown, Zap } from "lucide-react"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleSystem } from "@/components/particle-system"

export default function AchievementsPage() {
  const majorAchievements = [
    {
      icon: Trophy,
      title: "Top 500 Doanh nghiệp lớn nhất Việt Nam",
      year: "2023",
      description: "Được vinh danh trong bảng xếp hạng VNR500 do Vietnam Report công bố",
      color: "from-amber-500 to-orange-500",
      highlight: true
    },
    {
      icon: Star,
      title: "Doanh nghiệp, doanh nhân TP. HCM tiêu biểu năm 2024",
      year: "2024",
      description: "Giải thưởng do UBND TP. Hồ Chí Minh trao tặng",
      color: "from-emerald-500 to-teal-500",
      highlight: true
    },
    {
      icon: Target,
      title: "Chứng nhận ISO 9001:2015",
      year: "2021",
      description: "Hệ thống quản lý chất lượng đạt tiêu chuẩn quốc tế",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Shield,
      title: "Doanh nghiệp bền vững",
      year: "2023",
      description: "Cam kết phát triển bền vững và trách nhiệm xã hội",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const allAwards = [
    {
      title: "Top 100 Doanh nhân trẻ khởi nghiệp xuất sắc năm 2016",
      year: "2016",
      issuer: "Hội doanh nhân trẻ Việt Nam",
      category: "Giải thưởng cá nhân",
      type: "award"
    },
    {
      title: "Top 10 Doanh nhân trẻ tiêu biểu TP.HCM",
      year: "2017",
      issuer: "Hội doanh nhân trẻ Tp.HCM",
      category: "Giải thưởng địa phương",
      type: "award"
    },
    {
      title: "Doanh nhân khởi nghiệp xuất sắc khu vực Đông Nam Á",
      year: "2018",
      issuer: "Diễn đàn doanh nhân trẻ ASEAN- Trung quốc",
      category: "Giải thưởng quốc tế",
      type: "award"
    },
    {
      title: "TOP 200 Doanh nhân tiêu biểu xuất sắc",
      year: "2019",
      issuer: "Chủ tịch UBND tỉnh Bình Dương",
      category: "Giải thưởng địa phương",
      type: "award"
    },
    {
      title: "Chứng nhận Hội viên chính thức Hiệp hội Giao nhận kho vận Việt Nam",
      year: "2013",
      issuer: "Hiệp hội Giao nhận kho vận Việt Nam",
      category: "Chứng nhận chuyên môn",
      type: "certification"
    },
    {
      title: "Chứng nhận Hội viên chính thức Hội Xuất Nhập khẩu tỉnh Bình Dương",
      year: "2014",
      issuer: "Hội Xuất Nhập Khẩu tỉnh Bình Dương",
      category: "Chứng nhận chuyên môn",
      type: "certification"
    },
    {
      title: "Chứng nhận ISO 9001:2015 - Hệ thống quản lý chất lượng",
      year: "2021",
      issuer: "Tổ chức chứng nhận quốc tế",
      category: "Chứng nhận quốc tế",
      type: "certification"
    },
    {
      title: "Bản tự công bố Chất lượng dịch vụ Depot & Container",
      year: "2023",
      issuer: "TCT Đối Tác Chân Thật",
      category: "Cam kết chất lượng",
      type: "certification"
    }
  ]

  const milestones = [
    {
      year: "2009",
      title: "Thành lập TCT Đối Tác Chân Thật",
      description: "Khởi đầu hành trình với tầm nhìn trở thành đối tác tin cậy trong lĩnh vực logistics",
      icon: "🚀"
    },
    {
      year: "2013",
      title: "Trở thành hội viên chính thức",
      description: "Gia nhập Hiệp hội Giao nhận kho vận Việt Nam và Hội Xuất Nhập khẩu tỉnh Bình Dương",
      icon: "🤝"
    },
    {
      year: "2016",
      title: "Giải thưởng doanh nhân trẻ",
      description: "Được vinh danh Top 100 Doanh nhân trẻ khởi nghiệp xuất sắc năm 2016",
      icon: "🏆"
    },
    {
      year: "2021",
      title: "Chứng nhận ISO 9001:2015",
      description: "Đạt chứng nhận hệ thống quản lý chất lượng quốc tế",
      icon: "✅"
    },
    {
      year: "2023",
      title: "Top 500 doanh nghiệp lớn nhất",
      description: "Lọt vào bảng xếp hạng VNR500 - Top 500 doanh nghiệp lớn nhất Việt Nam",
      icon: "📈"
    },
    {
      year: "2024",
      title: "Kỷ niệm 15 năm thành lập",
      description: "Đánh dấu 15 năm phát triển và nhận giải thưởng doanh nghiệp tiêu biểu TP.HCM",
      icon: "🎉"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <ParticleSystem />
      <CustomCursor />
      <Header />
      <ScrollIndicator />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,rgba(255,255,255,0.1))] -z-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-indigo-500/20 to-transparent rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span className="text-white/90 font-medium">Thành tựu & Vinh danh</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Hành trình{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent relative">
                vinh quang
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/50 via-indigo-400/50 to-violet-400/50 rounded-full" />
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              16 năm phát triển với những dấu ấn quan trọng và sự ghi nhận từ cộng đồng doanh nghiệp Việt Nam
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">16+</div>
                <div className="text-blue-200 text-sm">Năm kinh nghiệm</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">4</div>
                <div className="text-blue-200 text-sm">Lĩnh vực chính</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-200 text-sm">Nhân viên</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-blue-200 text-sm">Dự án thành công</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Achievements Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <Badge className="mb-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 text-blue-700 border-blue-200/50 shadow-sm">
                Thành tích nổi bật
              </Badge>
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-slate-800 text-balance leading-tight">
              Những{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent relative">
                thành tựu
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-violet-600/30 rounded-full" />
              </span>{" "}
              đáng tự hào
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto text-pretty leading-relaxed">
              Những giải thưởng và chứng nhận quan trọng nhất trong hành trình phát triển của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {majorAchievements.map((achievement, index) => (
              <Card key={achievement.title} className={`group relative overflow-hidden border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${achievement.highlight ? 'ring-2 ring-amber-200' : ''}`}>
                <div className={`h-2 bg-gradient-to-r ${achievement.color} relative`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                </div>
                
                <CardContent className="p-8 relative">
                  <div className="flex items-start gap-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <achievement.icon className="w-10 h-10 text-white drop-shadow-sm" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className={`bg-gradient-to-r ${achievement.color} text-white border-0 shadow-md px-4 py-1 text-sm font-semibold`}>
                          {achievement.year}
                        </Badge>
                        {achievement.highlight && (
                          <Badge className="bg-amber-100 text-amber-700 border-0">
                            <Crown className="w-3 h-3 mr-1" />
                            Nổi bật
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-800 mb-4 text-balance leading-tight group-hover:text-slate-900 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      
                      <p className="text-slate-600 text-pretty leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Hành trình phát triển
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Những cột mốc quan trọng trong lịch sử hình thành và phát triển của TCT Đối Tác Chân Thật
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">{milestone.icon}</span>
                          <Badge className="bg-blue-100 text-blue-700 border-0">
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg z-10 relative">
                    <span className="text-white font-bold text-lg">{milestone.year.slice(-2)}</span>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Giải thưởng & Chứng nhận
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tổng hợp tất cả các giải thưởng, chứng nhận và sự ghi nhận từ các tổ chức uy tín
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allAwards.map((item, index) => (
              <Card key={item.title} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${
                      item.type === 'award' 
                        ? 'bg-gradient-to-br from-yellow-500 to-amber-500' 
                        : 'bg-gradient-to-br from-green-500 to-emerald-500'
                    }`}>
                      {item.type === 'award' ? (
                        <Medal className="w-6 h-6 text-white" />
                      ) : (
                        <Shield className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <Badge className={`mb-3 border-0 ${
                        item.type === 'award' 
                          ? 'bg-yellow-100 text-yellow-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {item.category}
                      </Badge>
                      <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                        <Building className="w-4 h-4" />
                        <span>{item.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar className="w-4 h-4" />
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  )
}
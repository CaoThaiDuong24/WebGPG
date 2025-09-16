"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Users, Award, ArrowRight, CheckCircle, Star, Sparkles, Globe, Building2, Store, Truck, Lightbulb, BookOpen, Target, Zap, HandHeart, Shield, Home } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleSystem } from "@/components/particle-system"

export default function NhomThienPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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

  const activities = [
    {
      title: "Cộng đồng Công tác xã hội",
      description: "Với sự ra đời Công ty TNHH Cộng đồng Công tác xã hội (SWC), SWC là một doanh nghiệp xã hội hoạt động kinh doanh hướng về các hoạt động về giáo dục, y tế và các hoạt động công tác xã hội.",
      icon: HandHeart,
      gradient: "from-rose-500 to-pink-500",
      details: "TCT ĐTCT định hướng xây dựng những dự án và chương trình xã hội mang tính thường xuyên và bền vững, tạo dựng mô hình kinh doanh xã hội giúp cộng đồng phát triển tốt đẹp hơn."
    },
    {
      title: "Các tổ chức phi lợi nhuận",
      description: "TCT ĐTCT phối hợp cùng Trung tâm Công tác xã hội Thanh thiếu niên Việt Nam (YSW), các đối tác đồng hành, Hội Liên hiệp Thanh niên Việt Nam các tỉnh, thành phố triển khai và thực hiện Dự án 'Xây dựng 100 cầu An Yên'.",
      icon: Shield,
      gradient: "from-emerald-500 to-green-500",
      details: "Đây là một trong những dự án trọng điểm với mục tiêu từng bước xoá bỏ, thay thế cầu tạm, xây dựng nông thôn mới; giúp các em học sinh được đến trường an toàn; bà con đi lại dễ dàng hơn."
    },
    {
      title: "Phúc lợi xã hội",
      description: "Thúc đẩy hoạt động cộng đồng và phúc lợi xã hội của Hệ sinh thái TCT ĐTCT tạo điều kiện phát triển bền vững.",
      icon: Home,
      gradient: "from-blue-500 to-indigo-500",
      details: "Chúng tôi tin rằng việc phục vụ cộng đồng không chỉ là trách nhiệm xã hội mà còn là một phần tạo dựng giá trị và tôn vinh tinh thần nhân ái."
    }
  ]

  const achievements = [
    {
      number: "25+",
      label: "Bạn nhỏ",
      description: "Phẫu thuật hở hàm ếch thành công",
      icon: Heart,
      gradient: "from-rose-500 to-pink-500"
    },
    {
      number: "12",
      label: "Cây cầu",
      description: "An Yên được xây dựng",
      icon: Shield,
      gradient: "from-emerald-500 to-green-500"
    },
    {
      number: "12,5 tỷ",
      label: "Quyên góp",
      description: "Thiện nguyện",
      icon: Award,
      gradient: "from-blue-500 to-indigo-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50/30 to-pink-50/50 relative overflow-hidden">
      <ParticleSystem />
      <CustomCursor />
      <Header />
      <ScrollIndicator />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-400/20 to-green-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-600/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
      </div>
      
      {/* Hero Section */}
      <section ref={sectionRef} className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        {/* Background Image with Enhanced Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-rose-900/20 to-pink-900/30" />
          <img 
            src="/community-volunteers-helping-children-and-families.jpg" 
            alt="Community Volunteers" 
            className="w-full h-full object-cover opacity-15"
          />
          {/* Overlay Pattern */}
          <div className="absolute inset-0 opacity-40">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }} />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            {/* Enhanced Badge */}
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 backdrop-blur-xl border border-rose-200/60 rounded-full text-xs md:text-sm font-semibold shadow-2xl transition-all duration-500 hover:scale-110 group relative overflow-hidden bg-gradient-to-r from-white/20 via-rose-50/30 to-pink-50/20">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Heart className="w-4 md:w-5 h-4 md:h-5 animate-pulse text-rose-600" style={{ animationDuration: '4s' }} />
                <span className="font-bold tracking-wide text-xs md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600 relative z-10">NHÓM THIỆN • CỘNG ĐỒNG & AN SINH XÃ HỘI</span>
                <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-pink-600 animate-pulse" />
              </div>
            </div>

            {/* Title */}
            <h1 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 md:mb-12 transition-all duration-1000 leading-tight ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-pink-600 to-emerald-600 block sm:inline">
                Nhóm Thiện
              </span>
            </h1>

            {/* Enhanced Quote */}
            <div className={`max-w-4xl lg:max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/60 via-pink-50/40 to-emerald-50/60" />
                {/* Animated Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <img 
                    src="/community-volunteers-helping-children-and-families.jpg" 
                    alt="Community" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-24 h-24 md:w-36 md:h-36 bg-gradient-to-br from-rose-400/20 to-pink-600/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s' }} />
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 relative z-10">
                  <div className="text-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-6 rounded-full" />
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 md:mb-8">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">
                        Cộng đồng & An sinh Xã hội
                      </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 md:mb-8 font-medium">
                      Thúc đẩy hoạt động cộng đồng và phúc lợi xã hội của Hệ sinh thái TCT ĐTCT tạo điều kiện phát triển bền vững
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-emerald-500 mx-auto mt-6 rounded-full" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-rose-50/30 to-pink-50/50 relative overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #f43f5e 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #ec4899 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg">
              <Heart className="w-5 h-5" />
              VAI TRÒ CỦA NHÓM THIỆN
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Vai trò của Nhóm Thiện
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Nhóm Thiện tập trung vào việc thúc đẩy hoạt động cộng đồng và phúc lợi xã hội. Chúng tôi cam kết tạo dựng mô hình kinh doanh xã hội giúp cộng đồng phát triển tốt đẹp hơn và tôn vinh tinh thần nhân ái.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <HandHeart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-rose-600 transition-colors">
                    Tinh thần Nhân ái
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Phục vụ cộng đồng không chỉ là trách nhiệm xã hội mà còn là một phần tạo dựng giá trị
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors">
                    Phát triển Bền vững
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Tạo dựng mô hình kinh doanh xã hội giúp cộng đồng phát triển tốt đẹp hơn
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50/20 to-green-50/30 relative overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, #10b981 2px, transparent 2px),
                             radial-gradient(circle at 70% 70%, #059669 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg">
              <Award className="w-5 h-5" />
              CÁC HOẠT ĐỘNG CHÍNH
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Các Hoạt động Chính
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Nhóm Thiện thực hiện các dự án và chương trình xã hội mang tính thường xuyên và bền vững
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className={`w-20 h-20 bg-gradient-to-r ${activity.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {activity.description}
                      </p>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {activity.details}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #3b82f6 1px, transparent 1px),
                             linear-gradient(-45deg, #6366f1 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg">
              <Award className="w-5 h-5" />
              THÀNH TỰU NỔI BẬT
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Thành tựu Nổi bật
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Những con số ấn tượng thể hiện sự đóng góp của Nhóm Thiện cho cộng đồng
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${achievement.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className={`text-4xl font-bold mb-3 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                      {achievement.number}
                    </div>
                    <div className="text-xl font-bold text-slate-800 mb-2">
                      {achievement.label}
                    </div>
                    <div className="text-slate-600">
                      {achievement.description}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-600 via-pink-600 to-emerald-600 relative overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #ffffff 1px, transparent 1px),
                             radial-gradient(circle at 80% 80%, #ffffff 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-8 shadow-lg">
              <Heart className="w-5 h-5" />
              KẾT NỐI VỚI NHÓM THIỆN
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Kết nối với Nhóm Thiện
          </h2>
          <p className="text-xl sm:text-2xl text-rose-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Cùng chúng tôi tạo dựng giá trị và tôn vinh tinh thần nhân ái cho cộng đồng
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-rose-600 hover:bg-rose-50 px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
            >
              Tham gia hoạt động
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-rose-600 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Quyên góp ủng hộ
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

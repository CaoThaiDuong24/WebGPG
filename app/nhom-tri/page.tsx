"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Users, Award, ArrowRight, CheckCircle, Star, Sparkles, Globe, Building2, Heart, Store, Truck, Lightbulb, BookOpen, Target, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleSystem } from "@/components/particle-system"

export default function NhomTriPage() {
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

  const services = [
    {
      title: "Tư vấn Quản lý Doanh nghiệp",
      description: "Cung cấp các giải pháp tư vấn toàn diện về quản lý doanh nghiệp, chiến lược kinh doanh và tối ưu hóa hiệu suất hoạt động.",
      icon: Building2,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Tư vấn Tài chính",
      description: "Hỗ trợ tư vấn về quản lý tài chính, đầu tư và phát triển các chiến lược tài chính bền vững cho doanh nghiệp.",
      icon: Target,
      gradient: "from-emerald-500 to-green-500"
    },
    {
      title: "Tư vấn Marketing",
      description: "Phát triển chiến lược marketing hiệu quả, xây dựng thương hiệu và tối ưu hóa các kênh tiếp thị.",
      icon: Zap,
      gradient: "from-purple-500 to-violet-500"
    },
    {
      title: "Tư vấn Nhân sự",
      description: "Cung cấp giải pháp quản lý nhân sự, phát triển nguồn nhân lực và xây dựng văn hóa doanh nghiệp.",
      icon: Users,
      gradient: "from-rose-500 to-pink-500"
    },
    {
      title: "Tư vấn Công nghệ",
      description: "Hỗ trợ tư vấn về chuyển đổi số, ứng dụng công nghệ và phát triển các giải pháp công nghệ tiên tiến.",
      icon: Lightbulb,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      title: "Đào tạo Chuyên sâu",
      description: "Cung cấp các chương trình đào tạo chuyên sâu nhằm phát triển năng lực cá nhân và nhóm làm việc.",
      icon: BookOpen,
      gradient: "from-teal-500 to-cyan-500"
    }
  ]

  const companies = [
    {
      name: "LTTCI - Viện Tư vấn và Đào tạo Công nghệ Logistics",
      description: "Tổ chức chuyên về cung cấp các dịch vụ tư vấn chuyên nghiệp và đào tạo chất lượng cao",
      services: ["Tư vấn logistics", "Đào tạo chuyên sâu", "Giải pháp công nghệ"],
      icon: Brain,
      gradient: "from-blue-500 to-indigo-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      <ParticleSystem />
      <CustomCursor />
      <Header />
      <ScrollIndicator />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-violet-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
      </div>
      
      {/* Hero Section */}
      <section ref={sectionRef} className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        {/* Background Image with Enhanced Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-blue-900/20 to-indigo-900/30" />
          <img 
            src="/modern-tech-office-with-developers-working-on-comp.jpg" 
            alt="Modern Tech Office" 
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
              <div className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 backdrop-blur-xl border border-blue-200/60 rounded-full text-xs md:text-sm font-semibold shadow-2xl transition-all duration-500 hover:scale-110 group relative overflow-hidden bg-gradient-to-r from-white/20 via-blue-50/30 to-indigo-50/20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Brain className="w-4 md:w-5 h-4 md:h-5 animate-pulse text-blue-600" style={{ animationDuration: '4s' }} />
                <span className="font-bold tracking-wide text-xs md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 relative z-10">NHÓM TRÍ • TƯ VẤN & CÔNG NGHỆ</span>
                <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-indigo-600 animate-pulse" />
              </div>
            </div>

            {/* Title */}
            <h1 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 md:mb-12 transition-all duration-1000 leading-tight ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 block sm:inline">
                Nhóm Trí
              </span>
            </h1>

            {/* Enhanced Quote */}
            <div className={`max-w-4xl lg:max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-indigo-50/40 to-violet-50/60" />
                {/* Animated Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <img 
                    src="/modern-tech-office-with-developers-working-on-comp.jpg" 
                    alt="Technology" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-24 h-24 md:w-36 md:h-36 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s' }} />
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 relative z-10">
                  <div className="text-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full" />
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 md:mb-8">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Tư vấn, Đào tạo & Công nghệ
                      </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 md:mb-8 font-medium">
                      Phát triển chiến lược kinh doanh, chiến lược marketing, tư vấn về công nghệ, tài chính, nhân sự và vấn đề pháp lý
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mt-6 rounded-full" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #6366f1 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg">
              <Brain className="w-5 h-5" />
              VAI TRÒ CỦA NHÓM TRÍ
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Vai trò của Nhóm Trí
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Nhóm Trí tập trung vào việc cung cấp các dịch vụ tư vấn chuyên nghiệp và đào tạo chất lượng cao. Chúng tôi cam kết mang đến các giải pháp tối ưu và chương trình đào tạo cá nhân hóa để đáp ứng nhu cầu đa dạng của khách hàng.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                    Tư vấn Chuyên nghiệp
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Cung cấp các giải pháp tư vấn tối ưu và chương trình đào tạo cá nhân hóa
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors">
                    Đào tạo Chất lượng cao
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Phát triển năng lực cá nhân và nhóm làm việc với các chương trình đào tạo chuyên sâu
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-indigo-50/20 to-violet-50/30 relative overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, #6366f1 2px, transparent 2px),
                             radial-gradient(circle at 70% 70%, #8b5cf6 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg">
              <Award className="w-5 h-5" />
              CÁC DỊCH VỤ CHÍNH
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Các Dịch vụ Chính
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Nhóm Trí cung cấp đa dạng các dịch vụ tư vấn và đào tạo chuyên nghiệp
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 relative overflow-hidden">
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
              <Building2 className="w-5 h-5" />
              CÁC CÔNG TY THÀNH VIÊN
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Các Công ty Thành viên
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Nhóm Trí bao gồm các tổ chức chuyên về tư vấn và đào tạo
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => {
              const IconComponent = company.icon
              return (
                <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${company.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors text-lg leading-tight">
                      {company.name}
                    </h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
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
              <Brain className="w-5 h-5" />
              KẾT NỐI VỚI NHÓM TRÍ
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Kết nối với Nhóm Trí
          </h2>
          <p className="text-xl sm:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Tìm hiểu thêm về các dịch vụ tư vấn và đào tạo của chúng tôi
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
            >
              Liên hệ tư vấn
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Xem dịch vụ
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

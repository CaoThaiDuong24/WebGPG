"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Truck, MapPin, Users, Award, ArrowRight, CheckCircle, Star, Sparkles, Globe, Building2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleSystem } from "@/components/particle-system"

export default function NhomThanPage() {
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

  const companies = [
    {
      name: "GPG - Công ty Cổ phần Bốc Dỡ Chân Thật",
      description: "Dịch vụ bốc dỡ hàng hóa chuyên nghiệp",
      services: ["Bốc dỡ container", "Xử lý hàng hóa", "Dịch vụ kho bãi"]
    },
    {
      name: "GBL - Công ty TNHH MTV Logistics Bốc Tải Chân Thật",
      description: "Logistics và vận tải hàng hóa",
      services: ["Vận tải đường bộ", "Logistics tổng hợp", "Quản lý chuỗi cung ứng"]
    },
    {
      name: "GCL - Công ty TNHH MTV Logistics Chân Thật",
      description: "Dịch vụ logistics toàn diện",
      services: ["Vận chuyển", "Kho bãi", "Phân phối"]
    },
    {
      name: "AIC - Công ty Cổ phần Bốc Dỡ Thủy Sản",
      description: "Chuyên về bốc dỡ thủy sản",
      services: ["Bốc dỡ thủy sản", "Xử lý lạnh", "Vận chuyển chuyên dụng"]
    },
    {
      name: "WOOSUNG - Công ty TNHH Woosung Việt Nam",
      description: "Đối tác quốc tế trong logistics",
      services: ["Logistics quốc tế", "Vận tải biển", "Dịch vụ cảng"]
    },
    {
      name: "GFL - Công ty Cổ phần Logistics Chân Thật",
      description: "Logistics và phân phối",
      services: ["Phân phối", "Kho bãi", "Dịch vụ logistics"]
    },
    {
      name: "GIL - Công ty TNHH Logistics Quốc tế Chân Thật",
      description: "Logistics quốc tế chuyên nghiệp",
      services: ["Xuất nhập khẩu", "Logistics quốc tế", "Thủ tục hải quan"]
    }
  ]

  const depots = [
    {
      name: "Trung tâm khai thác Smart Cát Lái Depot (SCD)",
      location: "TP. Hồ Chí Minh",
      capacity: "15.000",
      status: "Đang hoạt động"
    },
    {
      name: "Trung tâm khai thác Tân Cảng Suối Tiên (TSD)",
      location: "TP. Hồ Chí Minh", 
      capacity: "50.000",
      status: "Đang hoạt động"
    },
    {
      name: "Trung tâm khai thác Smart Sihanoukville (SSD)",
      location: "Campuchia",
      capacity: "25.000",
      status: "Chuẩn bị đưa vào khai thác"
    },
    {
      name: "Trung tâm khai thác Smart Bangkok (SBD)",
      location: "Thái Lan",
      capacity: "30.000",
      status: "Chuẩn bị đưa vào khai thác"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <ParticleSystem />
      <CustomCursor />
      <Header />
      <ScrollIndicator />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-violet-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
      </div>
      
      {/* Hero Section */}
      <section ref={sectionRef} className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        {/* Background Image with Enhanced Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-blue-900/20 to-indigo-900/30" />
          <img 
            src="/modern-logistics-warehouse-with-containers-and-tru.jpg" 
            alt="Modern Logistics Warehouse" 
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
                <Truck className="w-4 md:w-5 h-4 md:h-5 animate-pulse text-blue-600" style={{ animationDuration: '4s' }} />
                <span className="font-bold tracking-wide text-xs md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 relative z-10">NHÓM THÂN • LOGISTICS & PHỤ TRỢ</span>
                <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-indigo-600 animate-pulse" />
              </div>
            </div>

            {/* Title */}
            <h1 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 md:mb-12 transition-all duration-1000 leading-tight ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 block sm:inline">
                Nhóm Thân
              </span>
            </h1>

            {/* Enhanced Quote */}
            <div className={`max-w-4xl lg:max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-indigo-50/40 to-violet-50/60" />
                {/* Animated Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <img 
                    src="/modern-logistics-warehouse-with-containers-and-tru.jpg" 
                    alt="Logistics" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-24 h-24 md:w-36 md:h-36 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s' }} />
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 relative z-10">
                  <div className="text-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full" />
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 md:mb-8">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Logistics & Phụ trợ
                      </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 md:mb-8 font-medium">
                      Là một trong những thành phần chính của Hệ sinh thái TCT ĐTCT liên quan đến hệ thống logistics – lĩnh vực kinh doanh chính của TCT ĐTCT
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
              <Truck className="w-5 h-5" />
              VAI TRÒ CỦA NHÓM THÂN
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Vai trò của Nhóm Thân
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Nhóm Thân là nền tảng quá trình TCT ĐTCT, có trách nhiệm thực hiện và vận hành các hoạt động logistics và phụ trợ. Nhóm Thân đảm bảo việc vận chuyển và cung cấp dịch vụ hỗ trợ một cách hiệu quả và chuyên nghiệp.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Truck className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                    Vận tải và Logistics
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Cung cấp dịch vụ vận tải toàn diện từ đường bộ đến đường biển
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors">
                    Kho bãi và Phân phối
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Hệ thống kho bãi hiện đại với công nghệ tiên tiến
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-purple-600 transition-colors">
                    Dịch vụ Phụ trợ
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Các dịch vụ hỗ trợ cho toàn bộ hệ sinh thái
                  </p>
                </div>
              </CardContent>
            </Card>
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
              Nhóm Thân bao gồm các công ty chuyên về logistics và dịch vụ phụ trợ
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Truck className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors text-lg leading-tight">
                    {company.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depots Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50/20 to-green-50/30 relative overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, #10b981 1px, transparent 1px),
                             radial-gradient(circle at 70% 70%, #059669 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg">
              <MapPin className="w-5 h-5" />
              HỆ THỐNG DEPOT & KHO BÃI
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Hệ thống Depot & Kho bãi
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Mạng lưới depot và kho bãi hiện đại phục vụ toàn bộ hệ sinh thái
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20">
              <thead className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
                <tr>
                  <th className="px-8 py-6 text-left font-semibold text-lg">Tên Depot</th>
                  <th className="px-8 py-6 text-left font-semibold text-lg">Địa điểm</th>
                  <th className="px-8 py-6 text-left font-semibold text-lg">Công suất (m²)</th>
                  <th className="px-8 py-6 text-left font-semibold text-lg">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {depots.map((depot, index) => (
                  <tr key={index} className="border-b border-gray-100/50 hover:bg-emerald-50/50 transition-all duration-300 group">
                    <td className="px-8 py-6 font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors">{depot.name}</td>
                    <td className="px-8 py-6 text-slate-600 flex items-center space-x-3 group-hover:text-slate-700 transition-colors">
                      <MapPin className="w-5 h-5 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
                      <span className="font-medium">{depot.location}</span>
                    </td>
                    <td className="px-8 py-6 text-slate-600 font-bold text-lg group-hover:text-emerald-600 transition-colors">{depot.capacity}</td>
                    <td className="px-8 py-6">
                      <Badge 
                        variant={depot.status.includes("Đang hoạt động") ? "default" : "secondary"}
                        className={`font-semibold px-4 py-2 ${
                          depot.status.includes("Đang hoạt động") 
                            ? "bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200" 
                            : "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200"
                        } transition-colors`}
                      >
                        {depot.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-purple-50/20 to-pink-50/30 relative overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8b5cf6 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #ec4899 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg">
              <Award className="w-5 h-5" />
              THỐNG KÊ NHÓM THÂN
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Thống kê ấn tượng
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                number: "7",
                label: "Công ty thành viên",
                description: "Chuyên về logistics",
                gradient: "from-blue-500 to-indigo-500"
              },
              {
                icon: MapPin,
                number: "4",
                label: "Depot & Kho bãi",
                description: "Trong và ngoài nước",
                gradient: "from-emerald-500 to-green-500"
              },
              {
                icon: Truck,
                number: "120.000",
                label: "m² Tổng diện tích",
                description: "Công suất kho bãi",
                gradient: "from-amber-500 to-orange-500"
              },
              {
                icon: Globe,
                number: "3",
                label: "Quốc gia",
                description: "Việt Nam, Campuchia, Thái Lan",
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className={`text-4xl font-bold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.number}
                    </div>
                    <div className="text-xl font-bold text-slate-800 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-slate-600">
                      {stat.description}
                    </div>
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
              <Truck className="w-5 h-5" />
              KẾT NỐI VỚI NHÓM THÂN
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Kết nối với Nhóm Thân
          </h2>
          <p className="text-xl sm:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Tìm hiểu thêm về các dịch vụ logistics và phụ trợ của chúng tôi
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

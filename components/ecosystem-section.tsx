'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Truck, ShoppingBag, Brain, Heart, ArrowRight, Sparkles, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const ecosystemData = [
  {
    icon: Truck,
    title: "Nhóm Thần",
    subtitle: "Logistics & Phụ trợ",
    description:
      "Nhóm Thần là nền tảng quá trình TCT ĐTCT, có trách nhiệm thực hiện và vận hành các hoạt động logistics và phụ trợ. Nhóm Thần đảm bảo việc vận chuyển và cung cấp dịch vụ hỗ trợ một cách hiệu quả và chuyên nghiệp.",
    services: [
      "GPG - Công ty Cổ phần Bốc Dỡ Chân Thật",
      "GBL - Công ty TNHH MTV Logistics Bốc Tải Chân Thật",
      "GCL - Công ty TNHH MTV Logistics Chân Thật",
      "AIC - Công ty Cổ phần Bốc Dỡ Thủy Sản",
      "WOOSUNG - Công ty TNHH Woosung Việt Nam",
      "GFL - Công ty Cổ phần Logistics Chân Thật",
      "GIL - Công ty TNHH Logistics Quốc tế Chân Thật",
    ],
    image: "/modern-logistics-warehouse-with-containers-and-tru.jpg",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: ShoppingBag,
    title: "Nhóm Tâm",
    subtitle: "Dịch vụ & Thương mại",
    description:
      "Bao trùm đông đa các lĩnh vực dịch vụ thương mại từ bán lẻ đến bán buôn, từ thương mại điện tử đến thương mại truyền thống. Nhóm Tâm tập trung vào việc cung cấp các sản phẩm và dịch vụ chất lượng cao.",
    services: [
      "FMCG - Công ty Cổ phần Hàng tiêu dùng Phú Yên",
      "SUZANO CARGO - Công ty TNHH Tư Vấn Vận Tải An",
      "GTC - Công ty TNHH Thương mại Chân Thật",
      "FMG - Công ty Thành Phú Gia Lai Chân Thật",
      "GRC - Công ty TNHH Bán lẻ Chân Thật",
    ],
    image: "/modern-retail-store-with-digital-displays-and-cust.jpg",
    color: "from-emerald-600 to-green-500",
  },
  {
    icon: Brain,
    title: "Nhóm Trí",
    subtitle: "Tư vấn, đào tạo & Công nghệ",
    description:
      "Nhóm không thể thiếu trong hệ sinh thái TCT ĐTCT, có trách nhiệm nghiên cứu và phát triển các giải pháp công nghệ, tư vấn chiến lược và đào tạo nhân lực chất lượng cao.",
    services: [
      "GCC - Công ty Cổ phần Tư vấn Quốc tế Chân Thật",
      "LTA - Công ty Cổ phần Tư vấn Công nghệ Logistics",
      "ELC - Công ty TNHH Tư vấn Đông Gia Lai",
      "GTC - Công ty TNHH Công nghệ Chân Thật",
    ],
    image: "/modern-tech-office-with-developers-working-on-comp.jpg",
    color: "from-purple-600 to-violet-500",
  },
  {
    icon: Heart,
    title: "Nhóm Thiện",
    subtitle: "Cộng đồng & An sinh xã hội",
    description:
      "Nhóm Thiện thể hiện trách nhiệm xã hội của TCT ĐTCT, tập trung vào các hoạt động từ thiện, hỗ trợ cộng đồng và phát triển bền vững.",
    services: [
      "CTYT - Câu lạc bộ Từ thiện Vì Trẻ em Thương",
      "GAF - Quỹ Từ thiện Tây Nguyên Hạnh phúc",
      "GWC - Công ty TNHH Chăm sóc Và Vệ sinh Môi trường",
    ],
    image: "/community-volunteers-helping-children-and-families.jpg",
    color: "from-orange-600 to-red-500",
  },
]

export function EcosystemSection() {
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
    <section ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Premium Luxury Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent"></div>
      
      {/* Premium Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse shadow-2xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-violet-400/30 rounded-full blur-3xl animate-pulse delay-1000 shadow-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-400/25 to-violet-400/25 rounded-full blur-2xl animate-pulse delay-500 shadow-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-spin shadow-2xl" style={{ animationDuration: '60s' }}></div>
        
        {/* Luxury Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-ping opacity-70"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full animate-ping delay-500 opacity-60"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full animate-ping delay-1000 opacity-80"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-ping delay-1500 opacity-50"></div>
        
        {/* Luxury Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:50px_50px] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Header */}
        <div className={`text-center mb-16 sm:mb-20 md:mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Luxury Badge */}
          <div className="relative inline-block mb-8">
            <Badge className="relative z-10 inline-flex items-center gap-3 px-8 py-4 mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-full">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="font-semibold tracking-wide">Lĩnh vực kinh doanh</span>
              <Star className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
            </Badge>
            {/* Badge Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
          </div>
          
          {/* Premium Title */}
          <div className="relative mb-8">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Hệ sinh thái
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                4 nhóm toàn diện
              </span>
            </h2>
            {/* Title Shadow */}
            <div className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-200/20 blur-sm -z-10 transform translate-x-2 translate-y-2">
              <span>Hệ sinh thái</span>
              <br />
              <span>4 nhóm toàn diện</span>
            </div>
          </div>
          
          {/* Enhanced Description */}
          <div className="relative max-w-5xl mx-auto mb-12">
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-600 leading-relaxed font-light">
              Kiến tạo hệ sinh thái doanh nghiệp đa ngành, đa lĩnh vực với 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold"> 4 trụ cột chính </span>
              tạo nên sức mạnh tổng thể
            </p>
            {/* Description Accent */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
          
          {/* Premium Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
            {[
              { number: "4", label: "Nhóm chính", icon: Star, emoji: "🏢" },
              { number: "20+", label: "Công ty thành viên", icon: Sparkles, emoji: "🚀" },
              { number: "63", label: "Tỉnh thành", icon: Star, emoji: "🌍" },
              { number: "1000+", label: "Nhân viên", icon: Sparkles, emoji: "👥" }
            ].map((stat, index) => (
              <div key={index} className={`group relative text-center p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/30 shadow-xl hover:shadow-3xl transition-all duration-700 hover:scale-110 hover:-translate-y-3 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${200 + index * 150}ms` }}>
                {/* Card Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="text-3xl mb-4 group-hover:scale-125 transition-transform duration-300">{stat.emoji}</div>
                  <div className="flex items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-blue-600 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-slate-700 tracking-wide uppercase">{stat.label}</p>
                </div>
                
                {/* Hover Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium 2x2 Masonry Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {[0, 1].map((colIndex) => (
            <div key={colIndex} className="space-y-12">
              {ecosystemData
                .filter((_, index) => index % 2 === colIndex)
                .map((item, index) => {
                  const originalIndex = colIndex + index * 2;
                  return (
                    <div
                      key={originalIndex}
                      className={`group relative transition-all duration-1000 ${animatedItems.has(originalIndex) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                      style={{ transitionDelay: `${originalIndex * 300}ms` }}
                    >
                      {/* Luxury Card Container */}
                      <Card className="relative overflow-hidden border-0 bg-white/95 backdrop-blur-xl hover:bg-white transition-all duration-700 hover:scale-[1.02] hover:-translate-y-4 shadow-2xl hover:shadow-4xl rounded-3xl">
                        {/* Premium Gradient Border */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[2px]`}>
                          <div className="w-full h-full bg-white rounded-3xl"></div>
                        </div>
                        
                        {/* Luxury Header Section */}
                        <div className="relative p-8 pb-6">
                          {/* Background Pattern */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5`}></div>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          
                          {/* Icon and Title */}
                          <div className="relative flex items-start gap-6">
                            <div className={`relative p-5 rounded-2xl bg-gradient-to-r ${item.color} group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-xl`}>
                              <item.icon className="w-10 h-10 text-white" />
                              {/* Icon Glow */}
                              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-3xl font-black text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300">
                                {item.title}
                              </h3>
                              <p className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                {item.subtitle}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Premium Image Section */}
                        <div className="relative mx-8 mb-6 overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-700">
                          <div className="relative h-64 overflow-hidden">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                            />
                            
                            {/* Premium Overlays */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-15 group-hover:opacity-25 transition-opacity duration-500`}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            
                            {/* Floating Badge */}
                            <div className={`absolute top-4 left-4 px-4 py-2 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-white/20 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1`}>
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} animate-pulse`}></div>
                                <span className={`text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                  {item.services.length} công ty
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <CardContent className="relative px-8 pb-8">
                          {/* Description */}
                          <p className="text-slate-600 text-lg leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300">
                            {item.description}
                          </p>

                          {/* Services Grid */}
                          <div className="grid grid-cols-1 gap-3 mb-8">
                            <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                              <div className={`w-1 h-6 bg-gradient-to-b ${item.color} rounded-full`}></div>
                              Công ty thành viên:
                            </h4>
                            <div className="space-y-3">
                              {item.services.map((service, serviceIndex) => (
                                <div key={serviceIndex} className="group/item flex items-center gap-4 p-4 rounded-xl bg-slate-50/50 hover:bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color} group-hover/item:scale-125 transition-transform duration-300 flex-shrink-0`}></div>
                                  <span className="text-base text-slate-700 group-hover/item:text-slate-900 transition-colors duration-300 font-medium">
                                    {service}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <Button className={`group/btn relative overflow-hidden bg-gradient-to-r ${item.color} hover:shadow-2xl text-white px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105 w-full`}>
                            <span className="relative z-10 flex items-center justify-center gap-3">
                              Tìm hiểu thêm
                              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                            </span>
                            {/* Button Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity duration-300`}></div>
                            {/* Button Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 skew-x-12"></div>
                          </Button>
                        </CardContent>
                        
                        {/* Premium Glow Effects */}
                        <div className={`absolute -inset-6 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-700 -z-10`}></div>
                        
                        {/* Hover Effect Border */}
                        <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
                      </Card>
                    </div>
                  );
                })
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

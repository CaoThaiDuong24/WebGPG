'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Award, Globe, TrendingUp, Sparkles, ArrowRight, CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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
          achievements.forEach((_, index) => {
            const timeout = setTimeout(() => {
              setAnimatedItems(prev => new Set([...prev, index]))
            }, index * 200)
            timeouts.push(timeout)
          })
          
          return () => {
            timeouts.forEach(clearTimeout)
          }
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

  const achievements = [
    {
      icon: Users,
      number: "1000+",
      label: "Nhân viên",
      description: "Đội ngũ chuyên nghiệp",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Award,
      number: "50+",
      label: "Giải thưởng",
      description: "Được công nhận",
      gradient: "from-indigo-500 to-violet-500",
    },
    {
      icon: Globe,
      number: "63",
      label: "Tỉnh thành",
      description: "Phủ sóng toàn quốc",
      gradient: "from-blue-400 to-indigo-400",
    },
    {
      icon: TrendingUp,
      number: "99%",
      label: "Hài lòng",
      description: "Khách hàng tin tưởng",
      gradient: "from-indigo-400 to-violet-400",
    },
  ]

  const highlights = [
    "16 năm kinh nghiệm trong ngành",
    "Hệ sinh thái đa dạng và toàn diện",
    "Triết lý kinh doanh bền vững",
    "Đối tác tin cậy hàng đầu Việt Nam"
  ]

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
      
      {/* Floating Elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 left-10 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="hidden md:block absolute bottom-20 right-10 w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-r from-indigo-400/10 to-violet-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Content Section */}
          <div className={`space-y-6 sm:space-y-8 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-4 sm:space-y-6">
              <Badge className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-700 border-blue-200/50 backdrop-blur-sm text-sm sm:text-base">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                Về chúng tôi
              </Badge>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                  16 năm
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Kinh nghiệm
                </span>
                <br />
                <span className="text-slate-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Đối tác tin cậy
                </span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                Được thành lập từ năm <span className="font-semibold text-blue-600">2009</span>, 
                <span className="font-semibold text-slate-800"> TCT Đối Tác Chân Thật</span> đã trở thành một trong những 
                tập đoàn hàng đầu Việt Nam trong lĩnh vực logistics, thương mại và dịch vụ.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                Với triết lý kinh doanh <span className="font-semibold text-indigo-600">"Kế Thừa - Tự Doanh - Xanh Hóa - Hạnh Phúc"</span>, 
                chúng tôi không ngừng phát triển và mở rộng hệ sinh thái để phục vụ tốt nhất cho khách hàng.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3 sm:space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 group justify-center lg:justify-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-300">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Tìm hiểu thêm
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-8 lg:mt-0">
            {achievements.map((item, index) => (
              <Card key={index} className={`group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${animatedItems.has(index) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}></div>
                <div className="absolute inset-[1px] bg-white rounded-xl"></div>
                
                <CardContent className="relative p-4 sm:p-6 md:p-8 text-center">
                  {/* Icon */}
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r ${item.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  
                  {/* Number */}
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                    {item.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm sm:text-base md:text-xl font-semibold text-slate-800 mb-1 sm:mb-2 group-hover:text-slate-900 transition-colors duration-300">
                    {item.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                    {item.description}
                  </div>
                  
                  {/* Hover Effect */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Bottom Section - Company Philosophy */}
        <div className={`mt-12 sm:mt-16 md:mt-20 text-center px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">
              Hệ sinh thái <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">4 nhóm</span> toàn diện
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[
                { name: "Thân", desc: "Logistics & Phụ trợ", color: "from-blue-500 to-indigo-500" },
                { name: "Tâm", desc: "Dịch vụ & Thương mại", color: "from-indigo-500 to-violet-500" },
                { name: "Trí", desc: "Tư vấn & Công nghệ", color: "from-blue-400 to-indigo-400" },
                { name: "Thiện", desc: "Cộng đồng & An sinh", color: "from-indigo-400 to-violet-400" }
              ].map((group, index) => (
                <div key={index} className={`group p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${800 + index * 100}ms` }}>
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r ${group.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                    <span className="text-white font-bold text-sm sm:text-base md:text-lg">{group.name}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-800 transition-colors duration-300">{group.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

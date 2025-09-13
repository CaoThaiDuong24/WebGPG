'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Users, Lightbulb, Shield, Sparkles, Globe, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function VisionMission() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section ref={sectionRef} className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-blue-900/10 to-indigo-900/20" />
          <img 
            src="/modern-business-skyline-with-glass-buildings-at-su.jpg" 
            alt="Modern Business Skyline" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 md:top-20 left-4 md:left-20 w-20 md:w-40 h-20 md:h-40 rounded-full blur-3xl animate-pulse" style={{ background: 'linear-gradient(to right, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15))', animationDuration: '6s' }} />
          <div className="absolute top-1/3 right-4 md:right-32 w-16 md:w-32 h-16 md:h-32 rounded-lg rotate-45 blur-2xl animate-pulse" style={{ background: 'linear-gradient(to right, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))', animationDuration: '8s', animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 left-1/4 w-24 md:w-48 h-24 md:h-48 rounded-full blur-3xl animate-pulse" style={{ background: 'linear-gradient(to right, rgba(99, 102, 241, 0.1), rgba(59, 130, 246, 0.1))', animationDuration: '10s', animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            {/* Badge */}
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 backdrop-blur-xl border border-blue-200/60 rounded-full text-xs md:text-sm font-semibold shadow-lg transition-all duration-500 hover:scale-105 group relative overflow-hidden" style={{background: 'linear-gradient(to right, rgba(96, 165, 250, 0.1), rgba(129, 140, 248, 0.1))', color: 'rgba(30, 64, 175, 1)'}}>
                <Globe className="w-3 md:w-4 h-3 md:h-4 animate-spin" style={{ animationDuration: '4s' }} />
                <span className="font-bold tracking-wide text-xs md:text-sm">TẦM NHÌN • SỨ MỆNH • GIÁ TRỊ</span>
                <Sparkles className="w-3 md:w-4 h-3 md:h-4" />
              </div>
            </div>

            {/* Title */}
            <h1 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 md:mb-12 transition-all duration-1000 leading-tight ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 block sm:inline">
                Tầm nhìn
              </span>
              <span className="text-gray-800 mx-2 md:mx-4 hidden sm:inline">•</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 block sm:inline mt-2 sm:mt-0">
                Sứ mệnh
              </span>
            </h1>

            {/* Quote */}
            <div className={`max-w-4xl lg:max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50" />
                {/* Background Image for Quote */}
                <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-5">
                  <img 
                    src="/community-volunteers-helping-children-and-families.jpg" 
                    alt="Community" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 relative z-10">
                  <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 italic leading-relaxed mb-4 md:mb-6">
                    "Con đường đạt đến thành công không gì hơn <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold">trí tuệ và lòng nhẫn nại</span><br className="hidden sm:block" />
                    <span className="block sm:inline">Bền chắc trong sự thành công không gì hơn <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 font-semibold">sự chân thật và tình yêu thương</span>"</span>
                  </blockquote>
                  <footer className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 not-italic font-medium">
                    — Thượng tọa Thích Nghiêm Đạo
                  </footer>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-20 relative">
        {/* Background Image for Mission */}
        <div className="absolute inset-0">
          <img 
            src="/modern-tech-office-with-developers-working-on-comp.jpg" 
            alt="Modern Tech Office" 
            className="w-full h-full object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-4 md:mb-6 px-4 md:px-6 py-2 text-sm md:text-base font-bold bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105">
              <Target className="w-4 md:w-5 h-4 md:h-5 mr-2" />
              SỨ MỆNH
            </Badge>
          </div>
          
          <div className={`max-w-4xl lg:max-w-6xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 group-hover:from-blue-50/50 group-hover:to-indigo-50/50 transition-all duration-500" />
              <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-6 md:mb-8">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    Sứ mệnh của chúng tôi
                  </span>
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 md:mb-12 text-center max-w-4xl mx-auto">
                  Không ngừng <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold">đổi mới và cải tiến công nghệ</span> để mang đến cho doanh nghiệp và khách hàng 
                  các sản phẩm và dịch vụ chất lượng. Không ngừng kiến tạo và cung cấp <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 font-semibold">giá trị gia tăng</span> 
                  cho tất cả các bên liên quan, góp phần tích cực vào sự phát triển bền vững của xã hội 
                  và đảm bảo giảm thiểu tác hại đến môi trường.
                </p>
                
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="group/item hover:scale-105 transition-all duration-300">
                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/50 hover:border-blue-300 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-2xl shadow-lg group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover/item:text-blue-700 transition-colors duration-300">Phục vụ khách hàng</h4>
                            <p className="text-gray-600 leading-relaxed group-hover/item:text-gray-700 transition-colors duration-300">Đặt lợi ích khách hàng lên hàng đầu, mang đến trải nghiệm tốt nhất</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="group/item hover:scale-105 transition-all duration-300">
                    <Card className="bg-gradient-to-br from-indigo-50 to-violet-50 border-indigo-200/50 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/20 to-violet-100/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-r from-indigo-500 to-violet-500 p-3 rounded-2xl shadow-lg group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                            <Lightbulb className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover/item:text-indigo-700 transition-colors duration-300">Đổi mới sáng tạo</h4>
                            <p className="text-gray-600 leading-relaxed group-hover/item:text-gray-700 transition-colors duration-300">Không ngừng cải tiến và phát triển công nghệ tiên tiến</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 md:py-20 relative bg-gradient-to-br from-indigo-50/50 to-violet-50/50">
        {/* Background Image for Vision */}
        <div className="absolute inset-0">
          <img 
            src="/modern-logistics-warehouse-with-containers-and-tru.jpg" 
            alt="Modern Logistics" 
            className="w-full h-full object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/70 to-violet-50/70" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-4 md:mb-6 px-4 md:px-6 py-2 text-sm md:text-base font-bold bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 transition-all duration-300 hover:scale-105">
              <Eye className="w-4 md:w-5 h-4 md:h-5 mr-2" />
              TẦM NHÌN
            </Badge>
          </div>
          
          <div className={`max-w-4xl lg:max-w-6xl mx-auto transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-violet-50/30 group-hover:from-indigo-50/50 group-hover:to-violet-50/50 transition-all duration-500" />
              <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-6 md:mb-8">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                    Tầm nhìn của chúng tôi
                  </span>
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 md:mb-12 text-center max-w-4xl mx-auto">
                  Bằng việc ứng dụng các <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 font-semibold">công nghệ tiên tiến và thông minh</span>, chúng tôi kiến tạo và kết nối 
                  các giá trị giúp hàng hoá lưu thông thông suốt trên thị trường một cách hiệu quả và tin cậy 
                  để phát triển cuộc sống con người, doanh nghiệp và nền kinh tế một cách bền vững. 
                  Từ đó chúng tôi đóng góp để xây dựng một <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 font-semibold">xã hội tốt đẹp hơn</span> bằng việc cung cấp các sản phẩm 
                  và dịch vụ chất lượng phù hợp với xu hướng phát triển của thế giới nhằm nâng cao chất lượng 
                  đời sống của nhân viên, đối tác, khách hàng và công chúng.
                </p>
                
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="group/item hover:scale-105 transition-all duration-300">
                    <Card className="bg-gradient-to-br from-indigo-50 to-violet-50 border-indigo-200/50 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/20 to-violet-100/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-r from-indigo-500 to-violet-500 p-3 rounded-2xl shadow-lg group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                            <Zap className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover/item:text-indigo-700 transition-colors duration-300">Công nghệ tiên tiến</h4>
                            <p className="text-gray-600 leading-relaxed group-hover/item:text-gray-700 transition-colors duration-300">Ứng dụng công nghệ thông minh để tối ưu hóa quy trình</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="group/item hover:scale-105 transition-all duration-300">
                    <Card className="bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200/50 hover:border-violet-300 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-100/20 to-purple-100/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-r from-violet-500 to-purple-500 p-3 rounded-2xl shadow-lg group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                            <Heart className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover/item:text-violet-700 transition-colors duration-300">Xã hội tốt đẹp</h4>
                            <p className="text-gray-600 leading-relaxed group-hover/item:text-gray-700 transition-colors duration-300">Góp phần xây dựng xã hội phát triển bền vững</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 md:py-20 relative">
        {/* Background SVG for Core Values */}
        <div className="absolute inset-0">
          <img 
            src="/gpg-values-banner.svg" 
            alt="GPG Values Banner" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-slate-100/80" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-4 md:mb-6 px-4 md:px-6 py-2 text-sm md:text-base font-bold bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 transition-all duration-300 hover:scale-105">
              <Heart className="w-4 md:w-5 h-4 md:h-5 mr-2" />
              GIÁ TRỊ CỐT LÕI
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">
                Giá trị cốt lõi của chúng tôi
              </span>
            </h2>
          </div>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              {
                icon: Heart,
                title: "Tình yêu thương",
                description: "Đặt tình yêu thương và sự quan tâm lên hàng đầu trong mọi hoạt động",
                gradient: "from-rose-500 to-pink-500",
                bgGradient: "from-rose-50 to-pink-50",
                borderColor: "border-rose-200/50 hover:border-rose-300"
              },
              {
                icon: Shield,
                title: "Chân thật",
                description: "Luôn trung thực, minh bạch trong mọi giao dịch và quan hệ đối tác",
                gradient: "from-blue-500 to-indigo-500",
                bgGradient: "from-blue-50 to-indigo-50",
                borderColor: "border-blue-200/50 hover:border-blue-300"
              },
              {
                icon: Users,
                title: "Đoàn kết",
                description: "Xây dựng tinh thần đoàn kết, hợp tác để cùng nhau phát triển",
                gradient: "from-emerald-500 to-green-500",
                bgGradient: "from-emerald-50 to-green-50",
                borderColor: "border-emerald-200/50 hover:border-emerald-300"
              },
              {
                icon: Lightbulb,
                title: "Sáng tạo",
                description: "Không ngừng đổi mới, sáng tạo để mang lại giá trị tốt nhất",
                gradient: "from-amber-500 to-orange-500",
                bgGradient: "from-amber-50 to-orange-50",
                borderColor: "border-amber-200/50 hover:border-amber-300"
              },
              {
                icon: Target,
                title: "Hiệu quả",
                description: "Tối ưu hóa mọi quy trình để đạt được hiệu quả cao nhất",
                gradient: "from-purple-500 to-violet-500",
                bgGradient: "from-purple-50 to-violet-50",
                borderColor: "border-purple-200/50 hover:border-purple-300"
              },
              {
                icon: Eye,
                title: "Tầm nhìn xa",
                description: "Luôn hướng tới tương lai với tầm nhìn chiến lược dài hạn",
                gradient: "from-indigo-500 to-blue-500",
                bgGradient: "from-indigo-50 to-blue-50",
                borderColor: "border-indigo-200/50 hover:border-indigo-300"
              }
            ].map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="group hover:scale-105 transition-all duration-300">
                  <Card className={`bg-gradient-to-br ${value.bgGradient} ${value.borderColor} border transition-all duration-300 hover:shadow-xl relative overflow-hidden h-full`}>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardContent className="p-6 sm:p-8 text-center relative z-10 h-full flex flex-col">
                      <div className={`bg-gradient-to-r ${value.gradient} w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1 group-hover:text-gray-700 transition-colors duration-300">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
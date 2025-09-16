"use client"

import { useEffect, useRef, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Building2, Calendar, Award, Globe, Truck, Factory, Users, Zap } from 'lucide-react'

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2009",
    title: "Thành lập TCT ĐTCT",
    description: "Tổng Công ty Đối Tác Chân Thật (TCT ĐTCT) được thành lập vào ngày 11/5/2009, đánh dấu bước khởi đầu quan trọng trong lĩnh vực logistics tại Việt Nam.",
    icon: <Building2 className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-500"
  },
  {
    year: "2010",
    title: "Thành lập Depot đầu tiên",
    description: "Thành lập Depot: trung tâm khai thác Chân Thật Sóng Thần, Chân Thật Phú Thuận CY - nền tảng cho hệ thống depot container.",
    icon: <Factory className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500"
  },
  {
    year: "2011-2012",
    title: "Mở rộng hệ thống công ty thành viên",
    description: "Thành lập các công ty thành viên: Công ty TNHH MTV Giải pháp Container VN, Công ty Cổ phần Tiếp Vận Tân Cảng Phương Đông, và Depot thứ 3 - Tân Cảng Phương Đông.",
    icon: <Users className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    year: "2013-2014",
    title: "Đối tác chiến lược và mở rộng dịch vụ",
    description: "Trở thành nhà cung cấp dịch vụ phân phối Coca Cola. Thành lập Depot thứ 4 & khai trương trung tâm bảo dưỡng và sửa chữa Container di động.",
    icon: <Truck className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500"
  },
  {
    year: "2015-2016",
    title: "Mở rộng quốc tế",
    description: "Khai trương thêm nhiều chi nhánh, văn phòng đại lý hãng tàu, văn phòng đại diện, depot, kho bãi tại Việt Nam & Campuchia.",
    icon: <Globe className="w-6 h-6" />,
    color: "from-rose-500 to-orange-500"
  },
  {
    year: "2017",
    title: "Tái cấu trúc và đổi mới công nghệ",
    description: "Thành lập bãi Container Tây Nam Bình Dương. Tái cấu trúc hệ thống lần thứ 2 thành công. Sản lượng 2017 tăng vọt. Triển khai & áp dụng thành công phần mềm HRMS. Khai thác tuyến vận tải đường sắt.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-orange-500 to-amber-500"
  },
  {
    year: "2018",
    title: "Năm của những giải thưởng",
    description: "Vinh dự nhận giải thưởng 'Doanh nghiệp TP.HCM tiêu biểu năm 2018'. Khai trương PTSC – Chân Thật Depot. Vinh dự nhận danh hiệu 'Top 200 giải thưởng vàng đất Việt 2018'.",
    icon: <Award className="w-6 h-6" />,
    color: "from-amber-500 to-yellow-500"
  },
  {
    year: "2019",
    title: "Ghi nhận từ Chính phủ",
    description: "Vinh dự nhận bằng khen của Thủ tướng Chính phủ. Vinh dự nhận cờ truyền thống của UBND TP.HCM. Vinh dự nhận bằng khen của UBTW Hội liên hiệp Thanh Niên Việt Nam.",
    icon: <Award className="w-6 h-6" />,
    color: "from-yellow-500 to-green-500"
  },
  {
    year: "2022",
    title: "Mở rộng hệ sinh thái và trách nhiệm xã hội",
    description: "Xây dựng thành công 15 Depot trong nước và quốc tế. Mở rộng 22 công ty thành viên thuộc hệ thống Tổng Công Ty. Đồng hành cùng Trung tâm Công tác Xã hội Thanh thiếu niên & CLB Chuyến Xe Yêu Thương trong dự án xây dựng 100 cây cầu An Yên tại các địa phương.",
    icon: <Users className="w-6 h-6" />,
    color: "from-green-500 to-teal-500"
  },
  {
    year: "T1/2023",
    title: "Chuyển đổi số và mở rộng quốc tế",
    description: "Hợp nhất với Công ty Ứng dụng Công nghệ Logistics (LTA), tiên phong chuyển đổi số trong hoạt động khai thác Container qua siêu ứng dụng i-Depot superAPP@LTA. Định hướng chiến lược mở rộng dịch vụ Container Depot sang Sihanoukville (Campuchia), Laem Chabang & Bangkok (Thái Lan).",
    icon: <Zap className="w-6 h-6" />,
    color: "from-teal-500 to-cyan-500"
  },
  {
    year: "T7/2023",
    title: "Kích hoạt Hệ sinh thái",
    description: "Chính thức kích hoạt Hệ sinh thái Tổng Công ty Đối Tác Chân Thật xoay quanh việc xây dựng một môi trường kinh doanh chắc chắn, ổn định và bền vững để tạo ra giá trị cho Khách hàng & các Đối tác liên quan.",
    icon: <Building2 className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-500"
  },
  {
    year: "2024",
    title: "Phát triển bền vững",
    description: "Tiếp tục phát triển hệ sinh thái Tổng Công ty Đối Tác Chân Thật một cách bền vững, dựa trên hệ thống logistics tiên tiến và thích ứng tích cực để đáp ứng mục tiêu về bền vững, số hóa, nhu cầu vận chuyển đa phương thức, tuân thủ quy định, lực lượng lao động tương lai và giảm khí thải.",
    icon: <Globe className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-500"
  }
]

export function HistoryTimeline() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems(prev => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) itemObserver.observe(ref)
    })

    return () => itemObserver.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-10" 
             style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', animationDuration: '12s' }} />
        <div className="absolute top-1/3 right-20 w-80 h-80 rounded-full blur-3xl animate-pulse opacity-8" 
             style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', animationDuration: '15s', animationDelay: '3s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full blur-3xl animate-pulse opacity-12" 
             style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', animationDuration: '18s', animationDelay: '6s' }} />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-200/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-3">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Elegant Hero Section */}
      <section ref={sectionRef} className="relative pt-40 pb-32 overflow-hidden">
        {/* Clean Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/90 to-gray-50/95" />
          <img 
            src="/modern-business-skyline-with-glass-buildings-at-su.jpg" 
            alt="Modern Business Skyline" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <Badge className="mb-8 px-8 py-3 text-lg font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-all duration-500 hover:scale-110 shadow-xl border border-blue-200">
              ✨ Lịch Sử Hình Thành ✨
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
                Hành Trình Vĩ Đại
              </span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-6 font-light">
                Sau gần <span className="font-bold text-blue-600">15 năm</span> phát triển
              </p>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                TCT ĐTCT trở thành <span className="font-semibold text-indigo-600">doanh nghiệp hàng đầu</span> logistics Việt Nam
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="mt-16 flex justify-center space-x-8">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Clean Timeline Section */}
      <section className="py-32 relative bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Clean Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-2 transform md:-translate-x-1/2 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-blue-400 via-indigo-500 via-purple-500 via-blue-600 to-indigo-700 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/30 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
            </div>
            
            {/* Timeline Events */}
            <div className="space-y-20">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index} 
                  ref={(el) => { itemRefs.current[index] = el }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-12 transition-all duration-1000 ${
                    visibleItems.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-16'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Clean Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-8 h-8 bg-gradient-to-r ${event.color} rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-xl z-20 animate-pulse`}>
                    <div className="absolute inset-1 bg-white/40 rounded-full animate-ping" />
                    <div className="absolute inset-2 bg-white/60 rounded-full" />
                  </div>
                  
                  {/* Clean Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-200 hover:border-blue-300 group hover:scale-105 relative overflow-hidden">
                      {/* Clean gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-5 transition-all duration-700`} />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                      
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-lg">
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-200/30 via-indigo-200/30 to-purple-200/30 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse" />
                      </div>
                      
                      <CardContent className="p-8 md:p-10 relative z-10">
                        <div className={`flex items-start space-x-6 ${index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse md:space-x-6' : ''}`}>
                          <div className="flex-shrink-0">
                            <div className={`w-16 h-16 bg-gradient-to-r ${event.color} rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl border border-white/30`}>
                              <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                                {event.icon}
                              </div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-4">
                              <Calendar className="w-5 h-5 text-blue-600" />
                              <span className="text-lg font-bold text-blue-700 bg-blue-100 px-4 py-2 rounded-full border border-blue-200">
                                {event.year}
                              </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors duration-500 leading-tight">
                              {event.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-500">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clean Summary Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Clean background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-8">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-300 to-indigo-400 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-300 to-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <Badge className="mb-8 px-8 py-4 text-xl font-bold bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-500 hover:scale-110 shadow-xl border border-blue-200">
              🏆 Thành Tựu Vượt Trội 🏆
            </Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent leading-tight">
              Genuine Partner Group
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
                Ngày Nay
              </span>
            </h2>
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-6 font-light">
                Từ <span className="font-bold text-blue-600">công ty khởi nghiệp</span> năm 2009
              </p>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                Phát triển thành <span className="font-semibold text-indigo-600">hệ sinh thái đa dạng</span> với 22 công ty thành viên và 15 depot container
              </p>
            </div>
            
            {/* Premium Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="group">
                <div className="bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-amber-500/20 transition-all duration-700 border border-slate-600/50 hover:border-amber-400/50 hover:scale-110 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-500">15+</div>
                    <div className="text-xl text-slate-300 font-semibold group-hover:text-amber-200 transition-colors duration-500">Depot Container</div>
                    <div className="text-sm text-slate-400 mt-2 group-hover:text-slate-300 transition-colors duration-500">Trong nước & Quốc tế</div>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 border border-slate-600/50 hover:border-blue-400/50 hover:scale-110 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-indigo-400/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-500">22</div>
                    <div className="text-xl text-slate-300 font-semibold group-hover:text-blue-200 transition-colors duration-500">Công ty thành viên</div>
                    <div className="text-sm text-slate-400 mt-2 group-hover:text-slate-300 transition-colors duration-500">Hệ sinh thái đa dạng</div>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 border border-slate-600/50 hover:border-purple-400/50 hover:scale-110 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-transparent to-indigo-400/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-500">15</div>
                    <div className="text-xl text-slate-300 font-semibold group-hover:text-purple-200 transition-colors duration-500">Năm kinh nghiệm</div>
                    <div className="text-sm text-slate-400 mt-2 group-hover:text-slate-300 transition-colors duration-500">Phát triển bền vững</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative bottom elements */}
            <div className="mt-20 flex justify-center space-x-12">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full" />
              <div className="w-4 h-4 bg-amber-400 rounded-full animate-pulse" />
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
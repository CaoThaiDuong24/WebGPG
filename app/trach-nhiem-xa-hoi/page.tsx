"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, BookOpen, Home, Utensils, GraduationCap, Shield, Globe, HandHeart, Building, Award, Star, Calendar, MapPin, Gift, CheckCircle, TrendingUp, Target } from "lucide-react"
import Image from "next/image"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleSystem } from "@/components/particle-system"

export default function SocialResponsibilityPage() {
  const socialActivities = [
    {
      icon: Heart,
      title: "Hỗ trợ cộng đồng",
      description: "Các hoạt động từ thiện và hỗ trợ cộng đồng địa phương",
      color: "from-red-500 to-pink-500",
      activities: [
        "Trao tặng 2,5 tấn gạo cho đồng bào huyện Tràng Định, tỉnh Lạng Sơn bị ảnh hưởng bởi cơn bão số 3",
        "Hỗ trợ cải tạo nhà vệ sinh tại các trường học",
        "Tổ chức các chương trình từ thiện định kỳ"
      ]
    },
    {
      icon: GraduationCap,
      title: "Giáo dục & Đào tạo",
      description: "Đầu tư vào giáo dục và phát triển nguồn nhân lực",
      color: "from-blue-500 to-indigo-500",
      activities: [
        "Hỗ trợ 631 áo ấm và 02 bộ máy vi tính cho học sinh",
        "Chương trình 'Nâng bước em đến trường'",
        "Hỗ trợ công trình nâng cấp thư viện cho các trường học"
      ]
    },
    {
      icon: Users,
      title: "Phát triển nhân viên",
      description: "Tạo môi trường làm việc tốt và phát triển con người",
      color: "from-green-500 to-emerald-500",
      activities: [
        "Hội nghị Người lao động định kỳ",
        "Chương trình đào tạo và phát triển kỹ năng",
        "Xây dựng văn hóa doanh nghiệp nhân văn"
      ]
    },
    {
      icon: Globe,
      title: "Môi trường bền vững",
      description: "Cam kết bảo vệ môi trường và phát triển bền vững",
      color: "from-emerald-500 to-teal-500",
      activities: [
        "Áp dụng các giải pháp logistics xanh",
        "Giảm thiểu tác động môi trường",
        "Thúc đẩy phát triển bền vững"
      ]
    }
  ]

  const socialActivities2024 = [
    {
      category: "Y tế & Khám chữa bệnh",
      activities: [
        {
          title: "Chương trình Xuân Tình nguyện 2024",
          description: "Phối hợp tổ chức chương trình 'Nghĩa tình dân vận - mùa xuân biên giới' tại An Giang - Tổ chức khám bệnh và trao tặng quà miễn phí cho 300 người dân có hoàn cảnh khó khăn",
          location: "An Giang",
          icon: Heart
        },
        {
          title: "Tư vấn, khám bệnh miễn phí",
          description: "Tổ chức tư vấn, khám bệnh, cấp phát thuốc miễn phí và tặng quà cho 400 người dân có hoàn cảnh khó khăn tại Xã Sơn Hà, huyện Sơn Hoà và xã An Hiệp, huyện Tuy An",
          location: "Phú Yên",
          icon: Heart
        }
      ]
    },
    {
      category: "Hỗ trợ thiên tai",
      activities: [
        {
          title: "Hỗ trợ bão Yagi",
          description: "Trao tặng 2,5 tấn gạo cho đồng bào huyện Tràng Định, tỉnh Lạng Sơn bị ảnh hưởng bởi cơn bão số 3 – bão Yagi",
          location: "Lạng Sơn",
          icon: Shield
        }
      ]
    },
    {
      category: "Hỗ trợ giáo dục",
      activities: [
        {
          title: "Cải tạo cơ sở vật chất trường học",
          description: "Hỗ trợ cải tạo 01 nhà vệ sinh tại Trường THCS An Tức, xã An Tức, huyện Tri Tôn, tỉnh An Giang",
          location: "An Giang",
          icon: GraduationCap
        },
        {
          title: "Chương trình 'Nâng bước em đến trường'",
          description: "Hỗ trợ 631 áo ấm và 02 bộ máy vi tính cho học sinh Trường TH&THCS Tân Lập, xã Tân Lập, huyện Lục Yên, tỉnh Yên Bái",
          location: "Yên Bái",
          icon: GraduationCap
        },
        {
          title: "Chương trình 'Kết nối yêu thương'",
          description: "Hỗ trợ công trình nâng cấp nhà vệ sinh, thư viện cho Trường Tiểu học Tân Lập, xã Tân Lập, huyện Lục Ngạn, tỉnh Bắc Giang và các Trường trên địa bàn huyện Yên Sơn, tỉnh Tuyên Quang",
          location: "Bắc Giang & Tuyên Quang",
          icon: GraduationCap
        }
      ]
    },
    {
      category: "Trao tặng & Hỗ trợ cộng đồng",
      activities: [
        {
          title: "Chương trình 'Xuân đoàn kết'",
          description: "Trao tặng 200 chăn ấm tại Chương trình 'Xuân đoàn kết, Tết thắm tình quân dân' tại tỉnh Sơn La",
          location: "Sơn La",
          icon: Gift
        },
        {
          title: "Hỗ trợ giáo viên và học sinh",
          description: "Tặng 100 bộ vải áo dài cho các cô giáo; Tặng 50 suất học bổng cho các em học sinh vượt khó học giỏi",
          location: "Phú Yên",
          icon: Users
        },
        {
          title: "Hỗ trợ hộ gia đình khó khăn",
          description: "Tặng hơn 550 phần quà cho các hộ gia đình khó khăn trên địa bàn Phường Phú Thạnh, TP. Tuy Hoà; xã An Định và Thị trấn Chí Thạnh, huyện Tuy An; Trường THPT Trần Phú",
          location: "Phú Yên",
          icon: Home
        },
        {
          title: "Hỗ trợ người khuyết tật",
          description: "Thăm hỏi, tặng quà và 20 xe lăn cho người khuyết tật (Hội Bảo trợ Người khuyết tật huyện Tuy An)",
          location: "Phú Yên",
          icon: Heart
        },
        {
          title: "Chương trình Xuân Biên giới",
          description: "Trao tặng 01 bộ máy vi tính, 01 phần quà Tết cho Đồn Biên phòng Bình Thạnh và 01 phần quà Tết cho gia đình Đoàn viên tại Ấp Tân Hoà Thuận, xã Tân Hội, TP. Hồng Ngự, tỉnh Đồng Tháp",
          location: "Đồng Tháp",
          icon: Shield
        },
        {
          title: "Chương trình 'Tết trọn niềm vui'",
          description: "Trao tặng 125 phần quà cho các hộ cận nghèo, có hoàn cảnh khó khăn hai xã Tân Thắng và xã Thắng Hải, huyện Hàm Tân",
          location: "Bình Thuận",
          icon: Gift
        },
        {
          title: "Chương trình 'Tết yêu thương'",
          description: "Tổ chức chương trình 'Tết yêu thương' năm 2024 tại tỉnh Thái Nguyên - Trao tặng 60 suất quà cho các cháu tại Trung tâm Thái Hà",
          location: "Thái Nguyên",
          icon: Heart
        }
      ]
    }
  ]

  const communitySupport = [
    {
      title: "Hoạt động năm 2024",
      count: "38",
      description: "Hoạt động trách nhiệm xã hội",
      icon: Calendar
    },
    {
      title: "Tỉnh thành hỗ trợ",
      count: "15+",
      description: "Địa phương trên cả nước",
      icon: MapPin
    },
    {
      title: "Người được hỗ trợ",
      count: "2000+",
      description: "Người dân và học sinh",
      icon: Users
    },
    {
      title: "Năm kinh nghiệm",
      count: "15+",
      description: "Năm hoạt động CSR",
      icon: Award
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
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/community-volunteers-helping-children-and-families.jpg"
            alt="Community volunteers helping children and families"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/90 to-indigo-900/90" />
        </div>
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,rgba(255,255,255,0.1))] -z-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-indigo-500/20 to-transparent rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-white/90 font-medium">Trách nhiệm xã hội</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Vì cộng đồng{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent relative">
                phát triển
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/50 via-indigo-400/50 to-violet-400/50 rounded-full" />
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Với 38 hoạt động trách nhiệm xã hội trong năm 2024, TCT Đối Tác Chân Thật đã hỗ trợ hơn 2000 người dân tại 15+ tỉnh thành trên cả nước
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Badge variant="secondary" className="px-6 py-3 text-lg bg-white/10 text-white border-white/20">
                <Heart className="w-4 h-4 mr-2" />
                Từ thiện & Cộng đồng
              </Badge>
              <Badge variant="secondary" className="px-6 py-3 text-lg bg-white/10 text-white border-white/20">
                <GraduationCap className="w-4 h-4 mr-2" />
                Giáo dục & Đào tạo
              </Badge>
              <Badge variant="secondary" className="px-6 py-3 text-lg bg-white/10 text-white border-white/20">
                <Globe className="w-4 h-4 mr-2" />
                Môi trường bền vững
              </Badge>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">38</div>
                <div className="text-gray-300 text-sm">Hoạt động</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-300 text-sm">Tỉnh thành</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">2000+</div>
                <div className="text-gray-300 text-sm">Người hỗ trợ</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300 text-sm">Cam kết</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/modern-business-skyline-with-glass-buildings-at-su.jpg"
            alt="Modern business skyline"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-blue-50/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tác động tích cực của chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những con số thể hiện cam kết và đóng góp của TCT Đối Tác Chân Thật cho cộng đồng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communitySupport.map((item, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <div className="text-5xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{item.count}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Activities Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/modern-tech-office-with-developers-working-on-comp.jpg"
            alt="Modern tech office with developers"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/85 to-blue-50/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Lĩnh vực hoạt động xã hội
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TCT Đối Tác Chân Thật tập trung vào 4 lĩnh vực chính trong hoạt động trách nhiệm xã hội
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialActivities.map((activity, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${activity.color} text-white flex-shrink-0`}>
                      <activity.icon className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{activity.title}</h3>
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{activity.description}</p>
                      <ul className="space-y-4">
                        {activity.activities.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mt-3 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Activities 2024 Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/modern-logistics-warehouse-with-containers-and-tru.jpg"
            alt="Modern logistics warehouse"
            fill
            className="object-cover opacity-8"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-blue-50/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hoạt động trách nhiệm xã hội năm 2024
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tổng hợp 38 hoạt động trách nhiệm xã hội của TCT Đối Tác Chân Thật trong năm 2024
            </p>
          </div>

          <div className="space-y-16">
            {socialActivities2024.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{category.category}</h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.activities.map((activity, activityIndex) => (
                    <Card key={activityIndex} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex-shrink-0">
                            <activity.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <MapPin className="w-4 h-4 text-gray-500" />
                              <span className="text-sm text-gray-500">{activity.location}</span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">{activity.title}</h4>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tổng kết hoạt động năm 2024</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">38</div>
                  <div className="text-gray-600">Hoạt động</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Tỉnh thành</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2000+</div>
                  <div className="text-gray-600">Người được hỗ trợ</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Cam kết</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/modern-retail-store-with-digital-displays-and-cust.jpg"
            alt="Modern retail store with digital displays"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/85 to-indigo-900/85" />
        </div>
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,rgba(255,255,255,0.1))] -z-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-indigo-500/20 to-transparent rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Giá trị cốt lõi
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Những giá trị định hướng mọi hoạt động trách nhiệm xã hội của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Heart className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">NHÂN VĂN</h3>
              <p className="text-gray-300 leading-relaxed">Đặt con người làm trung tâm, quan tâm đến hạnh phúc và phát triển của mọi người</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <HandHeart className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">PHỤC VỤ</h3>
              <p className="text-gray-300 leading-relaxed">Phục vụ cộng đồng với tinh thần tận tụy và cam kết mang lại giá trị thực sự</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">HỢP NHẤT</h3>
              <p className="text-gray-300 leading-relaxed">Đoàn kết, hợp tác để tạo ra sức mạnh tập thể vì mục tiêu chung</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">TRUNG THỰC</h3>
              <p className="text-gray-300 leading-relaxed">Minh bạch, trung thực trong mọi hoạt động và cam kết với cộng đồng</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  )
}

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Globe, Target, Leaf, Award, TrendingUp, Diamond, Users2, Star, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const AboutGeneral = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
      {/* Hero Section with Enhanced Design */}
      <div className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <Image
            src="/gpg-values-banner.svg"
            alt="Biểu đồ giá trị cốt lõi GPG - Tăng trưởng doanh số và tạo giá trị"
            fill
            className="object-cover bg-gradient-to-r from-blue-50 to-indigo-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-indigo-800/70 to-blue-700/80"></div>
          {/* Animated floating elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-300/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              {/* Company Badge with enhanced styling */}
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-8 py-4 mb-12 border border-white/30 shadow-2xl">
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-2 rounded-full">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-white font-semibold text-lg tracking-wide">TCT Đối Tác Chân Thật</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Title with enhanced typography */}
              <h1 className="text-6xl md:text-8xl font-black mb-8 text-white leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  Giới thiệu chung
                </span>
              </h1>
              
              {/* Subtitle with better spacing */}
              <p className="text-2xl md:text-3xl mb-16 text-blue-100 leading-relaxed max-w-5xl mx-auto font-light">
                Chúng tôi coi trọng việc chăm sóc <span className="text-white font-semibold">Khách hàng</span> và <span className="text-white font-semibold">Đối tác</span> ngang bằng với sự thành công trong kinh doanh
              </p>
              
              {/* Enhanced Statistics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="group bg-white/15 backdrop-blur-md rounded-2xl px-8 py-8 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <div className="text-5xl font-black text-white mb-3 group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-blue-200 text-lg font-medium">Năm kinh nghiệm</div>
                  <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-4 group-hover:w-full transition-all duration-500"></div>
                </div>
                
                <div className="group bg-white/15 backdrop-blur-md rounded-2xl px-8 py-8 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <div className="text-5xl font-black text-white mb-3 group-hover:scale-110 transition-transform duration-300">65K</div>
                  <div className="text-blue-200 text-lg font-medium">TEUs sức chứa</div>
                  <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mt-4 group-hover:w-full transition-all duration-500"></div>
                </div>
                
                <div className="group bg-white/15 backdrop-blur-md rounded-2xl px-8 py-8 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <div className="text-5xl font-black text-white mb-3 group-hover:scale-110 transition-transform duration-300">633K</div>
                  <div className="text-blue-200 text-lg font-medium">m² diện tích</div>
                  <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mt-4 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
              
              {/* Call to action button */}
              <div className="mt-16">
                <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                  <span>Tìm hiểu thêm về chúng tôi</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Introduction */}
      <div className="py-32 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full px-6 py-3 border border-blue-200/50 shadow-lg">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-full">
                      <Building2 className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-blue-700 font-semibold text-base">Về chúng tôi</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
                    TCT Đối Tác <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Chân Thật</span>
                  </h2>
                  
                  <p className="text-2xl text-gray-600 leading-relaxed font-light">
                    Doanh nghiệp hàng đầu trong lĩnh vực <span className="font-semibold text-blue-600">logistics</span> tại Việt Nam
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100/50 shadow-xl">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Tổng Công ty Đối Tác Chân Thật (TCT ĐTCT) được thành lập vào ngày <span className="font-bold text-blue-600">11/5/2009</span> toạ lạc tại tòa nhà số 2A đường 5, phường An Phú, TP Thủ Đức, TP.HCM. Sau gần <span className="font-bold text-indigo-600">15 năm</span> xây dựng và trưởng thành, TCT ĐTCT đã trở thành một trong những doanh nghiệp hàng đầu trong lĩnh vực logistics tại Việt Nam.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-2xl shadow-lg">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-900">Quy mô hoạt động</h3>
                    </div>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-2 h-2 rounded-full"></div>
                        <span className="font-medium">15 Depots với sức chứa <span className="text-blue-600 font-bold">65.000 TEUs</span></span>
                      </li>
                      <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300 delay-100">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-2 h-2 rounded-full"></div>
                        <span className="font-medium">Tổng diện tích hơn <span className="text-blue-600 font-bold">633.000 m²</span></span>
                      </li>
                      <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300 delay-200">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-2 h-2 rounded-full"></div>
                        <span className="font-medium">Hoạt động tại <span className="text-blue-600 font-bold">Việt Nam, Campuchia, Thái Lan</span></span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl border border-green-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-2xl shadow-lg">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-green-900">Dịch vụ chính</h3>
                    </div>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 w-2 h-2 rounded-full"></div>
                        <span className="font-medium">Dịch vụ <span className="text-green-600 font-bold">logistics</span></span>
                      </li>
                      <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300 delay-100">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 w-2 h-2 rounded-full"></div>
                        <span className="font-medium">Dịch vụ <span className="text-green-600 font-bold">depot container</span></span>
                      </li>
                      <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300 delay-200">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 w-2 h-2 rounded-full"></div>
                        <span className="font-medium">Dịch vụ <span className="text-green-600 font-bold">tàu biển và hàng hải</span></span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-white/20 p-3 rounded-2xl">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">Phương châm hoạt động</h3>
                    </div>
                    <p className="text-2xl leading-relaxed font-bold mb-6">
                      "An toàn – Chất lượng – Phục vụ kịp thời và nhanh chóng"
                    </p>
                    <p className="text-lg leading-relaxed text-blue-100">
                      Thương hiệu ĐTCT trong lĩnh vực logistics dần được khẳng định cả trong nước và khu vực qua chất lượng, tiến độ cùng quan hệ hợp tác với nhiều Đối tác, Khách hàng lớn.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white group-hover:shadow-3xl transition-all duration-500">
                  <Image
                    src="/partner-ecosystem.svg"
                    alt="Hệ sinh thái đối tác GPG - 15 năm phát triển với các đối tác chiến lược"
                    width={600}
                    height={700}
                    className="object-contain w-full h-[700px] p-8 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-50/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">Hệ sinh thái</span>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced floating stats card */}
                <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/50 group-hover:scale-105 transition-all duration-500">
                  <div className="flex items-center gap-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                      <Award className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <div className="text-4xl font-black text-gray-900 mb-1">15+</div>
                      <div className="text-gray-600 font-medium">Năm kinh nghiệm</div>
                      <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2"></div>
                    </div>
                  </div>
                </div>
                
                {/* Additional floating elements */}
                <div className="absolute top-1/4 -right-4 bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl shadow-xl text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold">65K</div>
                    <div className="text-xs">TEUs</div>
                  </div>
                </div>
                
                <div className="absolute bottom-1/4 -right-8 bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl shadow-xl text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold">633K</div>
                    <div className="text-xs">m²</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ecosystem Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <Globe className="h-5 w-5 text-indigo-600" />
                <span className="text-indigo-700 font-medium">Hệ sinh thái</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Hệ sinh thái <span className="text-indigo-600">TCT Đối tác Chân Thật</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                TCT ĐTCT đã xây dựng Hệ sinh thái Đối Tác Chân Thật với logistics là ngành trọng tâm, mục tiêu giải quyết các yêu cầu về phát triển bền vững, số hóa, vận chuyển đa phương thức, tuân thủ quy định, nhân lực tương lai và giảm khí thải.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="group">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="mx-auto bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Logistics & Phụ trợ</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lĩnh vực kinh doanh chính của TCT ĐTCT, tạo ra nguồn thu để đầu tư phát triển Hệ sinh thái.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="mx-auto bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Dịch vụ & Thương mại</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Các hoạt động mở rộng đáp ứng nhu cầu sinh hoạt của thành viên trong Hệ sinh thái.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="mx-auto bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Tư vấn & Công nghệ</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Phát triển chiến lược kinh doanh, marketing, tư vấn công nghệ, tài chính và pháp lý.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="mx-auto bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cộng đồng & An sinh</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Thúc đẩy hoạt động cộng đồng và phúc lợi xã hội, tạo điều kiện phát triển bền vững.
                  </p>
                </div>
              </div>
            </div>

            {/* Strategic Vision Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white">
                <Image
                  src="/company-statistics.svg"
                  alt="Thống kê hoạt động GPG - Số liệu về văn phòng, bãi container, logistics"
                  width={1200}
                  height={400}
                  className="object-contain w-full h-[400px] p-6"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-800/10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-center text-gray-800 max-w-4xl mx-auto">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Thành tựu hoạt động</h3>
                    <p className="text-xl text-blue-700 leading-relaxed">
                      Với hệ thống 11 văn phòng, 16 bãi container và đội xe logistics chuyên nghiệp, GPG phục vụ hơn 21 hãng tàu trên toàn quốc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainable Development Goals */}
      <div className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-2 mb-6">
                <Award className="h-4 w-4 text-green-600" />
                <span className="text-green-700 font-medium text-sm">Phát triển bền vững</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Mục tiêu <span className="text-green-600">Phát triển bền vững</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Hệ sinh thái GPG xoay quanh việc xây dựng một môi trường kinh doanh an toàn, ổn định và bền vững để tạo giá trị lâu dài cho tất cả các bên liên quan.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 p-3 rounded-xl flex-shrink-0">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-green-900">Phát triển bền vững</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Tích hợp các yếu tố sinh thái vào chuỗi cung ứng thông qua đối tác chiến lược và giải pháp sáng tạo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-xl flex-shrink-0">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-blue-900">Số hóa & Công nghệ</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Sử dụng công nghệ số hóa và phân tích tiên tiến để tối ưu hoá hoạt động và nâng cao hiệu suất.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 p-3 rounded-xl flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-purple-900">Phát triển nhân lực</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Đầu tư vào chương trình đào tạo và phát triển nhân lực để đáp ứng môi trường logistics thay đổi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <Diamond className="h-5 w-5 text-blue-300" />
                <span className="text-blue-200 font-medium">Giá trị cốt lõi</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Giá trị <span className="text-blue-300">cốt lõi</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Ba trụ cột vững chắc định hướng mọi hoạt động của chúng tôi
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <Badge variant="outline" className="text-lg px-6 py-3 mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30 font-bold">
                    AN TOÀN
                  </Badge>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Đảm bảo an toàn tuyệt đối trong mọi hoạt động và dịch vụ, ưu tiên hàng đầu cho sức khỏe và tính mạng
                  </p>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <Badge variant="outline" className="text-lg px-6 py-3 mb-6 bg-green-500/20 text-green-200 border-green-400/30 font-bold">
                    CHẤT LƯỢNG
                  </Badge>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Cam kết cung cấp dịch vụ chất lượng cao nhất, không ngừng cải tiến và hoàn thiện
                  </p>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-10 w-10 text-white" />
                  </div>
                  <Badge variant="outline" className="text-lg px-6 py-3 mb-6 bg-orange-500/20 text-orange-200 border-orange-400/30 font-bold">
                    KỊP THỜI
                  </Badge>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Phục vụ nhanh chóng và đáp ứng kịp thời mọi yêu cầu, tối ưu hóa thời gian cho khách hàng
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Cam kết của chúng tôi</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Với ba giá trị cốt lõi này, TCT Đối Tác Chân Thật không chỉ xây dựng niềm tin với khách hàng mà còn tạo nên sự khác biệt trong ngành logistics, góp phần phát triển bền vững cho cộng đồng và xã hội.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGeneral;
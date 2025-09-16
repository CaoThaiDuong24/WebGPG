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
                    src="/company-statistics.svg"
                    alt="Thống kê hoạt động TCT ĐTCT - Số liệu về văn phòng, bãi container, logistics"
                    width={600}
                    height={700}
                    className="object-contain w-full h-[700px] p-8 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-50/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">Thống kê</span>
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
      <div className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-200/10 to-blue-200/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-full px-8 py-4 mb-8 border border-white/50 shadow-2xl">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-2 rounded-full">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <span className="text-indigo-700 font-bold text-lg">Hệ sinh thái</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
                Hệ sinh thái <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">TCT Đối tác Chân Thật</span>
              </h2>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-xl max-w-5xl mx-auto">
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  TCT ĐTCT đã xây dựng <span className="font-bold text-indigo-600">Hệ sinh thái Đối Tác Chân Thật</span> với logistics là ngành trọng tâm, mục tiêu giải quyết các yêu cầu về phát triển bền vững, số hóa, vận chuyển đa phương thức, tuân thủ quy định, nhân lực tương lai và giảm khí thải.
                </p>
              </div>
            </div>

            {/* Ecosystem Network Image - Main Focus */}
            <div className="relative mb-20">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 group-hover:shadow-3xl transition-all duration-500">
                <Image
                  src="/partner-ecosystem.svg"
                  alt="Hệ sinh thái đối tác TCT ĐTCT - 15 năm phát triển với các đối tác chiến lược"
                  width={1200}
                  height={700}
                  className="object-contain w-full h-[700px] p-12 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                
                {/* Main Title Overlay */}
                <div className="absolute top-8 left-8 right-8">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl">
                        <Globe className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-white">Hệ sinh thái đối tác</h3>
                        <p className="text-blue-200 text-lg">15 năm phát triển bền vững</p>
                      </div>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed">
                      Mạng lưới đối tác chiến lược rộng khắp với hơn 20+ công ty liên kết, tạo nên hệ sinh thái logistics hoàn chỉnh
                    </p>
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute bottom-8 right-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-6 rounded-2xl shadow-2xl">
                  <div className="text-center">
                    <div className="text-4xl font-black">15+</div>
                    <div className="text-lg font-semibold">Năm phát triển</div>
                    <div className="text-sm text-blue-200">2009 - 2024</div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">20+</div>
                    <div className="text-xs">Đối tác</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="group">
                <div className="bg-white/90 backdrop-blur-md p-10 rounded-3xl border border-white/60 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <div className="mx-auto bg-gradient-to-br from-blue-500 to-blue-600 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                      <Building2 className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">Logistics & Phụ trợ</h3>
                    <p className="text-gray-600 leading-relaxed text-lg font-medium">
                      Lĩnh vực kinh doanh chính của TCT ĐTCT, tạo ra nguồn thu để đầu tư phát triển Hệ sinh thái.
                    </p>
                    <div className="mt-6 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/90 backdrop-blur-md p-10 rounded-3xl border border-white/60 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <div className="mx-auto bg-gradient-to-br from-green-500 to-green-600 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-green-600 transition-colors duration-300">Dịch vụ & Thương mại</h3>
                    <p className="text-gray-600 leading-relaxed text-lg font-medium">
                      Các hoạt động mở rộng đáp ứng nhu cầu sinh hoạt của thành viên trong Hệ sinh thái.
                    </p>
                    <div className="mt-6 w-full h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/90 backdrop-blur-md p-10 rounded-3xl border border-white/60 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <div className="mx-auto bg-gradient-to-br from-purple-500 to-purple-600 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                      <Target className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors duration-300">Tư vấn & Công nghệ</h3>
                    <p className="text-gray-600 leading-relaxed text-lg font-medium">
                      Phát triển chiến lược kinh doanh, marketing, tư vấn công nghệ, tài chính và pháp lý.
                    </p>
                    <div className="mt-6 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/90 backdrop-blur-md p-10 rounded-3xl border border-white/60 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <div className="mx-auto bg-gradient-to-br from-orange-500 to-orange-600 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                      <Leaf className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-orange-600 transition-colors duration-300">Cộng đồng & An sinh</h3>
                    <p className="text-gray-600 leading-relaxed text-lg font-medium">
                      Thúc đẩy hoạt động cộng đồng và phúc lợi xã hội, tạo điều kiện phát triển bền vững.
                    </p>
                    <div className="mt-6 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Statistics Image */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white group-hover:shadow-3xl transition-all duration-500">
                <Image
                  src="/company-statistics.svg"
                  alt="Thống kê hoạt động TCT ĐTCT - Số liệu về văn phòng, bãi container, logistics"
                  width={1200}
                  height={400}
                  className="object-contain w-full h-[400px] p-6 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-indigo-800/20"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Thống kê hoạt động</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="text-center text-white max-w-5xl mx-auto">
                    <h3 className="text-4xl md:text-5xl font-black mb-6 text-white drop-shadow-lg">Thành tựu hoạt động</h3>
                    <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl border border-white/30">
                      <p className="text-2xl text-white leading-relaxed font-medium drop-shadow-md">
                        Với hệ thống <span className="font-bold text-yellow-300">11 văn phòng</span>, <span className="font-bold text-yellow-300">16 bãi container</span> và đội xe logistics chuyên nghiệp, TCT ĐTCT phục vụ hơn <span className="font-bold text-yellow-300">21 hãng tàu</span> trên toàn quốc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating achievement badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl shadow-xl text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">11</div>
                  <div className="text-xs">Văn phòng</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl shadow-xl text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">16</div>
                  <div className="text-xs">Bãi container</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainable Development Goals */}
      <div className="py-32 bg-gradient-to-br from-white via-green-50 to-emerald-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full px-8 py-4 mb-8 border border-green-200/50 shadow-xl">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-full">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <span className="text-green-700 font-bold text-lg">Phát triển bền vững</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-8">
                Mục tiêu <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">Phát triển bền vững</span>
              </h2>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-xl max-w-5xl mx-auto">
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  Hệ sinh thái GPG xoay quanh việc xây dựng một môi trường kinh doanh <span className="font-bold text-green-600">an toàn</span>, <span className="font-bold text-green-600">ổn định</span> và <span className="font-bold text-green-600">bền vững</span> để tạo giá trị lâu dài cho tất cả các bên liên quan.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="group bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl border border-green-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Leaf className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-green-900 group-hover:text-green-700 transition-colors duration-300">Phát triển bền vững</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    Tích hợp các yếu tố sinh thái vào chuỗi cung ứng thông qua đối tác chiến lược và giải pháp sáng tạo.
                  </p>
                  <div className="mt-6 w-full h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl border border-blue-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-blue-900 group-hover:text-blue-700 transition-colors duration-300">Số hóa & Công nghệ</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    Sử dụng công nghệ số hóa và phân tích tiên tiến để tối ưu hoá hoạt động và nâng cao hiệu suất.
                  </p>
                  <div className="mt-6 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl border border-purple-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-purple-900 group-hover:text-purple-700 transition-colors duration-300">Phát triển nhân lực</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    Đầu tư vào chương trình đào tạo và phát triển nhân lực để đáp ứng môi trường logistics thay đổi.
                  </p>
                  <div className="mt-6 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-20">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-8 py-4 mb-8 border border-white/30 shadow-2xl">
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-2 rounded-full">
                  <Diamond className="h-6 w-6 text-white" />
                </div>
                <span className="text-blue-200 font-bold text-lg">Giá trị cốt lõi</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                Giá trị <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-200 bg-clip-text text-transparent">cốt lõi</span>
              </h2>
              
              <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-xl max-w-4xl mx-auto">
                <p className="text-2xl text-blue-100 leading-relaxed font-medium">
                  Ba trụ cột vững chắc định hướng mọi hoạt động của chúng tôi
                </p>
              </div>
            </div>
            
            {/* Core Values Image */}
            <div className="relative mb-20">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white group-hover:shadow-3xl transition-all duration-500">
                <Image
                  src="/gpg-values-banner.svg"
                  alt="Giá trị cốt lõi TCT ĐTCT - Tăng trưởng doanh số và tạo giá trị"
                  width={1200}
                  height={400}
                  className="object-contain w-full h-[400px] p-8 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-800/10"></div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-700">Giá trị cốt lõi</span>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">5</div>
                    <div className="text-xs">Mục tiêu chính</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mb-20">
              <div className="group">
                <div className="bg-white/15 backdrop-blur-md p-12 rounded-3xl border border-white/30 hover:bg-white/25 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                      <Award className="h-12 w-12 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xl px-8 py-4 mb-8 bg-blue-500/30 text-blue-200 border-blue-400/50 font-black rounded-full">
                      AN TOÀN
                    </Badge>
                    <p className="text-blue-100 text-xl leading-relaxed font-medium">
                      Đảm bảo an toàn tuyệt đối trong mọi hoạt động và dịch vụ, ưu tiên hàng đầu cho sức khỏe và tính mạng
                    </p>
                    <div className="mt-8 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white/15 backdrop-blur-md p-12 rounded-3xl border border-white/30 hover:bg-white/25 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                      <Target className="h-12 w-12 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xl px-8 py-4 mb-8 bg-green-500/30 text-green-200 border-green-400/50 font-black rounded-full">
                      CHẤT LƯỢNG
                    </Badge>
                    <p className="text-blue-100 text-xl leading-relaxed font-medium">
                      Cam kết cung cấp dịch vụ chất lượng cao nhất, không ngừng cải tiến và hoàn thiện
                    </p>
                    <div className="mt-8 w-full h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white/15 backdrop-blur-md p-12 rounded-3xl border border-white/30 hover:bg-white/25 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                      <TrendingUp className="h-12 w-12 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xl px-8 py-4 mb-8 bg-orange-500/30 text-orange-200 border-orange-400/50 font-black rounded-full">
                      KỊP THỜI
                    </Badge>
                    <p className="text-blue-100 text-xl leading-relaxed font-medium">
                      Phục vụ nhanh chóng và đáp ứng kịp thời mọi yêu cầu, tối ưu hóa thời gian cho khách hàng
                    </p>
                    <div className="mt-8 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-20">
              <div className="bg-white/20 backdrop-blur-md p-12 rounded-3xl border border-white/30 shadow-2xl max-w-5xl mx-auto relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="bg-white/20 p-3 rounded-2xl">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-white">Cam kết của chúng tôi</h3>
                  </div>
                  <p className="text-blue-100 text-xl leading-relaxed font-medium">
                    Với ba giá trị cốt lõi này, TCT Đối Tác Chân Thật không chỉ xây dựng niềm tin với khách hàng mà còn tạo nên sự khác biệt trong ngành logistics, góp phần phát triển bền vững cho cộng đồng và xã hội.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGeneral;
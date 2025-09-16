'use client'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, Sparkles, MessageCircle, Users, Building2, Star, Award, Shield, Zap, Heart, Crown } from "lucide-react"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleSystem } from "@/components/particle-system"
import { motion } from "framer-motion"
import { fadeInUp, fadeInLeft, fadeInRight, fadeInScale, staggerContainer, hoverScale } from "@/components/animations"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ParticleSystem />
      <CustomCursor />
      <Header />
      <ScrollIndicator />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.12),transparent_60%)]" />
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/8 to-purple-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Floating luxury elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-32 right-20 w-1 h-1 bg-indigo-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-100/80 to-indigo-100/80 backdrop-blur-sm text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-blue-200/50 shadow-lg">
              <Crown className="w-5 h-5 text-yellow-500" />
              <span>Liên hệ với chúng tôi</span>
              <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                Kết nối
              </span>
              <br />
              <span className="text-gray-800 relative">
                Đối tác tin cậy
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với chúng tôi để được tư vấn miễn phí về các giải pháp phù hợp nhất.
            </p>

            {/* Premium stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">16+</h3>
                <p className="text-gray-600 font-medium">Năm kinh nghiệm</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600 font-medium">Khách hàng tin tưởng</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">99%</h3>
                <p className="text-gray-600 font-medium">Hài lòng khách hàng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
        {/* Luxury background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/20 to-indigo-50/20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100/80 to-indigo-100/80 backdrop-blur-sm text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-lg">
              <Shield className="w-5 h-5 text-blue-600" />
              <span>Thông tin liên hệ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Kết nối với chúng tôi
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Luôn sẵn sàng hỗ trợ và tư vấn cho bạn mọi lúc, mọi nơi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address Card */}
            <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700" />
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <MapPin className="w-10 h-10 text-white" />
                  <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-yellow-800" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Địa chỉ</CardTitle>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-gray-600 leading-relaxed text-lg">
                  <span className="font-semibold text-gray-800">Tổng Công Ty Đối Tác Chân Thật</span><br />
                  <span className="text-blue-600 font-medium">(Genuine Partner Group)</span><br />
                  <span className="text-gray-600">TP. Hồ Chí Minh, Việt Nam</span>
                </p>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700" />
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-700 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <Phone className="w-10 h-10 text-white" />
                  <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <Zap className="w-3 h-3 text-green-800" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Điện thoại</CardTitle>
                <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-gray-600 leading-relaxed text-lg">
                  <a href="tel:+84123456789" className="hover:text-indigo-600 transition-colors duration-300 font-semibold text-gray-800 block mb-1">
                    +84 123 456 789
                  </a>
                  <a href="tel:+84987654321" className="hover:text-indigo-600 transition-colors duration-300 font-semibold text-gray-800 block">
                    +84 987 654 321
                  </a>
                </p>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700" />
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <Mail className="w-10 h-10 text-white" />
                  <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                    <Heart className="w-3 h-3 text-blue-800" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Email</CardTitle>
                <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto"></div>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-gray-600 leading-relaxed text-lg">
                  <a href="mailto:info@genuinepartner.com" className="hover:text-emerald-600 transition-colors duration-300 font-semibold text-gray-800 block mb-1">
                    info@genuinepartner.com
                  </a>
                  <a href="mailto:support@gpg.com" className="hover:text-emerald-600 transition-colors duration-300 font-semibold text-gray-800 block">
                    support@gpg.com
                  </a>
                </p>
              </CardContent>
            </Card>

            {/* Working Hours Card */}
            <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 bg-gradient-to-br from-amber-50/80 to-orange-50/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700" />
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-amber-500 via-orange-600 to-red-700 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <Clock className="w-10 h-10 text-white" />
                  <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-400 rounded-full flex items-center justify-center">
                    <Award className="w-3 h-3 text-red-800" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Giờ làm việc</CardTitle>
                <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto"></div>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-gray-600 leading-relaxed text-lg">
                  <span className="font-semibold text-gray-800">Thứ 2 - Thứ 6</span><br />
                  <span className="text-orange-600 font-medium">8:00 - 17:30</span><br />
                  <span className="text-gray-500">Thứ 7: 8:00 - 12:00</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Luxury background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.06),transparent_60%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100/80 to-indigo-100/80 backdrop-blur-sm text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-lg">
                <MessageCircle className="w-5 h-5 text-blue-600" />
                <span>Gửi tin nhắn</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Liên hệ với chúng tôi
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Điền thông tin vào form bên dưới và chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất. 
                Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <Card className="border-0 shadow-3xl bg-white/90 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <CardHeader className="pb-8 relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-bold text-gray-900">Liên hệ trực tiếp</CardTitle>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2"></div>
                    </div>
                  </div>
                  <CardDescription className="text-lg text-gray-600">
                    Chúng tôi sẽ phản hồi trong vòng 24 giờ với giải pháp tối ưu nhất
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Họ và tên *
                      </label>
                      <Input 
                        placeholder="Nhập họ và tên của bạn"
                        className="border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 h-12 text-lg transition-all duration-300 group-hover:border-blue-300"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Số điện thoại *
                      </label>
                      <Input 
                        placeholder="Nhập số điện thoại"
                        className="border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 h-12 text-lg transition-all duration-300 group-hover:border-blue-300"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email *
                    </label>
                    <Input 
                      type="email"
                      placeholder="Nhập địa chỉ email"
                      className="border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 h-12 text-lg transition-all duration-300 group-hover:border-blue-300"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Chủ đề
                    </label>
                    <Input 
                      placeholder="Tiêu đề tin nhắn"
                      className="border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 h-12 text-lg transition-all duration-300 group-hover:border-blue-300"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Nội dung tin nhắn *
                    </label>
                    <Textarea 
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                      rows={6}
                      className="border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 resize-none text-lg transition-all duration-300 group-hover:border-blue-300"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Send className="w-6 h-6 mr-3 relative z-10" />
                    <span className="relative z-10">Gửi tin nhắn ngay</span>
                  </Button>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <div className="space-y-10">
                {/* Quick Contact */}
                <Card className="border-0 shadow-3xl bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold">Liên hệ nhanh</CardTitle>
                        <div className="w-16 h-1 bg-white/30 rounded-full mt-2"></div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6 relative z-10">
                    <div className="flex items-center space-x-4 group">
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">Hotline 24/7</p>
                        <p className="text-blue-100 text-lg">+84 123 456 789</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 group">
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">Email hỗ trợ</p>
                        <p className="text-blue-100 text-lg">support@gpg.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 group">
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                        <Building2 className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">Văn phòng chính</p>
                        <p className="text-blue-100 text-lg">TP. Hồ Chí Minh</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="border-0 shadow-3xl bg-white/90 backdrop-blur-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full -translate-y-14 translate-x-14"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full translate-y-10 -translate-x-10"></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Crown className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900">Tại sao chọn chúng tôi?</CardTitle>
                        <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-2"></div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6 relative z-10">
                    <div className="flex items-start space-x-4 group">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700 text-lg font-medium">16 năm kinh nghiệm trong lĩnh vực</p>
                    </div>
                    <div className="flex items-start space-x-4 group">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700 text-lg font-medium">Đội ngũ chuyên gia giàu kinh nghiệm</p>
                    </div>
                    <div className="flex items-start space-x-4 group">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700 text-lg font-medium">Giải pháp tùy chỉnh theo nhu cầu</p>
                    </div>
                    <div className="flex items-start space-x-4 group">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700 text-lg font-medium">Hỗ trợ 24/7, phản hồi nhanh chóng</p>
                    </div>
                    <div className="flex items-start space-x-4 group">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700 text-lg font-medium">Cam kết chất lượng và uy tín</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
        {/* Luxury background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/20 to-indigo-50/20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100/80 to-indigo-100/80 backdrop-blur-sm text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-lg">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Vị trí văn phòng</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Tìm đường đến chúng tôi
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Văn phòng chính của chúng tôi tọa lạc tại trung tâm TP. Hồ Chí Minh, 
              dễ dàng tiếp cận và thuận tiện cho việc gặp gỡ, trao đổi.
            </p>
          </div>
          
          <Card className="border-0 shadow-3xl overflow-hidden bg-white/90 backdrop-blur-xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Company Info Card */}
              <div className="lg:col-span-1">
                <Card className="border-0 shadow-3xl bg-white/95 backdrop-blur-xl h-full">
                  <CardHeader className="pb-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900">Văn phòng chính</CardTitle>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2"></div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 mb-2">Tổng Công Ty Đối Tác Chân Thật</h4>
                        <p className="text-blue-600 font-medium text-lg">(Genuine Partner Group)</p>
                        <p className="text-gray-600 mt-2">TP. Hồ Chí Minh, Việt Nam</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <MapPin className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="text-gray-700 font-medium">Vị trí trung tâm TP.HCM</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <Phone className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-gray-700 font-medium">Dễ dàng tiếp cận</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <a 
                        href="https://www.google.com/maps/place/T%E1%BB%95ng+C%C3%B4ng+Ty+%C4%90%E1%BB%91i+T%C3%A1c+Ch%C3%A2n+Th%E1%BA%ADt+(Genuine+Partner+Group)/@10.8070702,106.7497269,17z/data=!4m14!1m7!3m6!1s0x317527f5ef3792f5:0x46105c7f8d75ed9c!2zVOG7lW5nIEPDtG5nIFR5IMSQ4buRaSBUw6FjIENow6JuIFRo4bqtdCAoR2VudWluZSBQYXJ0bmVyIEdyb3VwKQ!8m2!3d10.8070649!4d106.7523018!16s%2Fg%2F11h3vf2qfx!3m5!1s0x317527f5ef3792f5:0x46105c7f8d75ed9c!8m2!3d10.8070649!4d106.7523018!16s%2Fg%2F11h3vf2qfx?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <MapPin className="w-5 h-5 mr-2" />
                        Mở Google Maps
                      </a>
                      <a 
                        href="tel:+84123456789"
                        className="w-full inline-flex items-center justify-center border-2 border-blue-200 text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Gọi ngay
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Map */}
              <div className="lg:col-span-2">
                <div className="aspect-video relative overflow-hidden rounded-2xl shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789!2d106.7497269!3d10.8070702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527f5ef3792f5%3A0x46105c7f8d75ed9c!2zVOG7lW5nIEPDtG5nIFR5IMSQ4buRaSBUw6FjIENow6JuIFRo4bqtdCAoR2VudWluZSBQYXJ0bmVyIEdyb3VwKQ!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Vị trí Tổng Công Ty Đối Tác Chân Thật (Genuine Partner Group)"
                  ></iframe>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

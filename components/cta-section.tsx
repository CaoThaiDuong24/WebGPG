import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, Mail, Sparkles, Star, Zap } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,rgba(255,255,255,0.2))] -z-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-indigo-500/20 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-violet-500/15 to-transparent rounded-full blur-2xl -z-10" />
      
      <div className="container mx-auto px-4 relative">
        <Card className="group relative border-0 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/20 overflow-hidden hover:bg-white/15 transition-all duration-700">
          {/* Top gradient accent */}
          <div className="h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
          </div>
          <div className="absolute bottom-8 left-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            <Star className="w-6 h-6 text-indigo-300 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="absolute top-1/2 right-16 opacity-15 group-hover:opacity-30 transition-opacity duration-500">
            <Zap className="w-5 h-5 text-violet-300 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <CardContent className="p-12 md:p-16 text-center relative">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-white/20 mb-6">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-white/90 text-sm font-medium">Đối tác tin cậy của hàng nghìn doanh nghiệp</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white text-balance leading-tight">
              Sẵn sàng hợp tác cùng{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent relative">
                Genuine Partner
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/50 via-indigo-400/50 to-violet-400/50 rounded-full" />
              </span>
              ?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
              Hãy để chúng tôi trở thành đối tác tin cậy trong hành trình phát triển doanh nghiệp của bạn. Liên hệ ngay
              để được tư vấn miễn phí và khám phá những cơ hội tăng trưởng vượt bậc.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-10 py-5 text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Phone className="mr-3 w-5 h-5 group-hover:animate-pulse" />
                Gọi ngay
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group relative border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-5 text-lg font-semibold bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-3 w-5 h-5 group-hover:text-blue-300 transition-colors duration-300" />
                Gửi email
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all duration-300">
                  <Phone className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <div className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">Tư vấn miễn phí</div>
                <div className="text-white/70 group-hover:text-white/90 transition-colors duration-300">Phân tích nhu cầu chuyên sâu</div>
              </div>
              <div className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-violet-500/30 transition-all duration-300">
                  <Zap className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
                </div>
                <div className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">Giải pháp tối ưu</div>
                <div className="text-white/70 group-hover:text-white/90 transition-colors duration-300">Phù hợp với mọi doanh nghiệp</div>
              </div>
              <div className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400/20 to-violet-400/20 flex items-center justify-center group-hover:from-blue-400/30 group-hover:to-violet-400/30 transition-all duration-300">
                  <Star className="w-8 h-8 text-violet-400 group-hover:text-violet-300 transition-colors duration-300" />
                </div>
                <div className="text-2xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">Hỗ trợ 24/7</div>
                <div className="text-white/70 group-hover:text-white/90 transition-colors duration-300">Luôn đồng hành cùng bạn</div>
              </div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '0.8s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-violet-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1.2s' }} />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

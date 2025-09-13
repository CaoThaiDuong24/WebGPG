'use client';
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Sparkles, Star, Zap, Globe, Rocket, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-black pt-24 md:pt-28 pb-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/4MUhDeu7LtM?autoplay=1&mute=1&loop=1&playlist=4MUhDeu7LtM&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=1"
          title="GPG Hệ Sinh Thái Đối Tác Chân Thật"
          className="w-full h-full object-cover scale-110 transition-transform duration-[30s] ease-out hover:scale-125"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw', // 16:9 aspect ratio
            minHeight: '100vh',
            minWidth: '177.77vh', // 16:9 aspect ratio
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none'
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        {/* Advanced gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/85 to-indigo-900/80" style={{background: 'linear-gradient(to bottom right, rgba(15, 23, 42, 0.95), rgba(59, 130, 246, 0.85), rgba(99, 102, 241, 0.8))'}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/35 via-transparent to-indigo-900/25" style={{background: 'linear-gradient(to right, rgba(59, 130, 246, 0.35), transparent, rgba(99, 102, 241, 0.25))'}}></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800/25 via-transparent to-transparent" style={{background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.25), transparent, transparent)'}}></div>
      </div>

      {/* Futuristic Grid Pattern */}
      <div className="absolute inset-0 z-5 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Dynamic Animated Elements */}
      <div className="absolute inset-0 z-5">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full blur-2xl animate-pulse" style={{ background: 'linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(99, 102, 241, 0.2))', animationDuration: '6s' }} />
        <div className="absolute top-1/3 right-32 w-32 h-32 rounded-lg rotate-45 blur-xl animate-pulse" style={{ background: 'linear-gradient(to right, rgba(139, 92, 246, 0.25), rgba(59, 130, 246, 0.25))', animationDuration: '8s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full blur-3xl animate-pulse" style={{ background: 'linear-gradient(to right, rgba(99, 102, 241, 0.15), rgba(59, 130, 246, 0.15))', animationDuration: '10s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full blur-lg animate-pulse" style={{ background: 'linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))', animationDuration: '7s', animationDelay: '3s' }} />
        
        {/* Animated light rays */}
        <div className="absolute top-0 left-1/2 w-px h-full transform -translate-x-1/2 animate-pulse" style={{ background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.35), transparent, transparent)', animationDuration: '4s' }} />
        <div className="absolute top-1/2 left-0 w-full h-px transform -translate-y-1/2 animate-pulse" style={{ background: 'linear-gradient(to right, transparent, rgba(99, 102, 241, 0.25), transparent)', animationDuration: '5s', animationDelay: '1s' }} />
        
        {/* Floating particles with different sizes */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => {
            const positions = [
              { left: '10%', top: '20%' }, { left: '85%', top: '15%' }, { left: '25%', top: '70%' },
              { left: '70%', top: '30%' }, { left: '15%', top: '85%' }, { left: '90%', top: '60%' },
              { left: '40%', top: '10%' }, { left: '60%', top: '80%' }, { left: '5%', top: '50%' },
              { left: '95%', top: '40%' }, { left: '30%', top: '25%' }, { left: '75%', top: '75%' },
              { left: '20%', top: '90%' }, { left: '80%', top: '5%' }, { left: '45%', top: '55%' },
              { left: '65%', top: '35%' }, { left: '35%', top: '65%' }, { left: '55%', top: '45%' },
              { left: '12%', top: '35%' }, { left: '88%', top: '25%' }, { left: '22%', top: '75%' },
              { left: '78%', top: '85%' }, { left: '38%', top: '15%' }, { left: '62%', top: '95%' },
              { left: '8%', top: '65%' }
            ];
            const delays = ['0s', '1s', '2s', '3s', '4s', '5s', '6s', '7s'];
            const durations = ['4s', '5s', '6s', '7s', '8s', '9s', '10s'];
            
            return (
              <div
                key={i}
                className={`absolute rounded-full animate-pulse ${
                  i % 3 === 0 ? 'w-2 h-2' :
                  i % 3 === 1 ? 'w-1 h-1' :
                  'w-1.5 h-1.5'
                }`}
                style={{
                   backgroundColor: i % 3 === 0 ? 'rgba(59, 130, 246, 0.45)' :
                                   i % 3 === 1 ? 'rgba(99, 102, 241, 0.55)' :
                                   'rgba(139, 92, 246, 0.35)',
                   left: positions[i]?.left || '50%',
                   top: positions[i]?.top || '50%',
                   animationDelay: delays[i % delays.length],
                   animationDuration: durations[i % durations.length]
                 }}
              />
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        <div className="max-w-7xl mx-auto">
          {/* Futuristic Badge */}
          <div className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 px-8 py-4 backdrop-blur-xl border border-white/40 rounded-full text-sm sm:text-base font-semibold shadow-2xl transition-all duration-700 hover:scale-110 group relative overflow-hidden" style={{background: 'linear-gradient(to right, rgba(96, 165, 250, 0.25), rgba(129, 140, 248, 0.25))', color: 'rgba(241, 245, 249, 1)', boxShadow: '0 25px 50px -12px rgba(96, 165, 250, 0.4)'}}>'
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(to right, rgba(96, 165, 250, 0.15), rgba(129, 140, 248, 0.15))'}} />
              <Globe className="w-5 h-5 animate-spin" style={{ color: 'rgba(147, 197, 253, 1)', animationDuration: '4s' }} />
               <span className="relative z-10 bg-clip-text text-transparent font-bold tracking-wide" style={{background: 'linear-gradient(to right, white, rgba(241, 245, 249, 1), rgba(226, 232, 240, 1))', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>
                 TIÊN PHONG • 16 NĂM KINH NGHIỆM • ĐỔI MỚI SÁNG TẠO
               </span>
               <Rocket className="w-5 h-5 group-hover:animate-bounce" style={{ color: 'rgba(147, 197, 253, 1)' }} />
            </div>
          </div>

          {/* Revolutionary Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-10 sm:mb-14 text-balance leading-none tracking-tight">
            <div className="relative mb-4 sm:mb-6">
              <span className="block relative">
                <span className="bg-clip-text text-transparent animate-pulse font-extrabold" style={{background: 'linear-gradient(to right, rgba(226, 232, 240, 1), rgba(241, 245, 249, 1), rgba(191, 219, 254, 1))', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>
                  HỆ SINH THÁI
                </span>
                <div className="absolute -inset-2 blur-2xl rounded-2xl opacity-70 animate-pulse" style={{background: 'linear-gradient(to right, rgba(96, 165, 250, 0.35), rgba(129, 140, 248, 0.35))'}} />
              </span>
            </div>
            <div className="relative">
              <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2 sm:mb-4">
                <span className="bg-clip-text text-transparent font-black tracking-wider" style={{background: 'linear-gradient(to right, white, rgba(241, 245, 249, 1), rgba(226, 232, 240, 1))', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>
                  TCT
                </span>
              </span>
              <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="bg-clip-text text-transparent font-bold italic" style={{background: 'linear-gradient(to right, rgba(191, 219, 254, 1), rgba(226, 232, 240, 1), rgba(241, 245, 249, 1))', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>
                  ĐỐI TÁC CHÂN THẬT
                </span>
              </span>
            </div>
          </h1>

          {/* Modern Description */}
          <div className="mb-12 sm:mb-16 max-w-6xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 leading-relaxed font-light mb-6">
              <span className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl" style={{color: 'rgba(191, 219, 254, 1)'}}>16 năm tiên phong</span> trong việc kiến tạo 
              <span className="bg-clip-text text-transparent font-semibold" style={{background: 'linear-gradient(to right, rgba(226, 232, 240, 1), rgba(191, 219, 254, 1))', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>hệ sinh thái số</span> toàn diện
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed">
              Chúng tôi đang định hình tương lai của 
              <span className="bg-clip-text text-transparent font-medium" style={{background: 'linear-gradient(to right, rgba(191, 219, 254, 1), rgba(226, 232, 240, 1))', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>logistics • thương mại • công nghệ • tư vấn</span> 
              cho doanh nghiệp Việt Nam
            </p>
          </div>

          {/* Futuristic Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center mb-20 sm:mb-24">
            <Button
              size="lg"
              className="group relative text-white px-10 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl font-bold rounded-2xl shadow-2xl transition-all duration-700 hover:scale-110 border-2 border-white/25 overflow-hidden min-w-[280px]"
              style={{background: 'linear-gradient(to right, rgba(59, 130, 246, 1), rgba(99, 102, 241, 1))', boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.5)'}}

            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(to right, rgba(59, 130, 246, 0.25), rgba(99, 102, 241, 0.25))'}} />
              <span className="relative z-10 flex items-center gap-4">
                <Rocket className="w-6 h-6 group-hover:animate-bounce" />
                KHÁM PHÁ HỆ SINH THÁI
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group relative border-2 border-white/60 text-white hover:bg-white/20 px-10 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl font-bold bg-white/8 backdrop-blur-xl rounded-2xl transition-all duration-700 hover:scale-110 hover:border-white/90 overflow-hidden min-w-[280px]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(to right, rgba(147, 197, 253, 0.15), rgba(59, 130, 246, 0.15))'}} />
              <span className="relative z-10 flex items-center gap-4">
                <Play className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                XEM VIDEO GIỚI THIỆU
              </span>
            </Button>
          </div>

          {/* Advanced Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
            {[
              { number: "16+", label: "Năm Tiên Phong", icon: Zap, gradient: "rgba(147, 197, 253, 1), rgba(191, 219, 254, 1)", bg: "rgba(59, 130, 246, 0.25), rgba(99, 102, 241, 0.25)" },
              { number: "18+", label: "Trung Tâm Khai Thác", icon: Globe, gradient: "rgba(191, 219, 254, 1), rgba(147, 197, 253, 1)", bg: "rgba(99, 102, 241, 0.25), rgba(139, 92, 246, 0.25)" },
              { number: "28+", label: "Công Ty & Chi Nhánh", icon: Shield, gradient: "rgba(147, 197, 253, 1), rgba(191, 219, 254, 1)", bg: "rgba(139, 92, 246, 0.25), rgba(59, 130, 246, 0.25)" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="group relative text-center p-8 sm:p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/30 hover:border-white/60 transition-all duration-700 hover:scale-110 hover:bg-white/10 shadow-2xl hover:shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" style={{background: `linear-gradient(to bottom right, ${stat.bg})`}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 rounded-3xl shadow-2xl group-hover:scale-125 transition-transform duration-500 border border-white/20" style={{background: `linear-gradient(to right, ${stat.gradient})`}}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 bg-clip-text text-transparent group-hover:animate-pulse tracking-tight" style={{background: `linear-gradient(to right, ${stat.gradient})`, WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>
                      {stat.number}
                    </div>
                    <div className="text-lg sm:text-xl text-white/90 font-bold group-hover:text-white transition-colors duration-300 tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


    </section>
  )
}

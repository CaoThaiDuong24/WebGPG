import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Target, Zap, Sparkles } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "Top 500 Doanh nghiệp lớn nhất Việt Nam",
      year: "2023",
      description: "Được vinh danh trong bảng xếp hạng VNR500 do Vietnam Report công bố",
      color: "from-amber-500 to-orange-500",
      bgColor: "amber-50",
      shadowColor: "amber-200/30",
    },
    {
      icon: Star,
      title: "Doanh nghiệp xuất sắc ngành Logistics",
      year: "2022",
      description: "Giải thưởng do Hiệp hội Logistics Việt Nam trao tặng",
      color: "from-emerald-500 to-teal-500",
      bgColor: "emerald-50",
      shadowColor: "emerald-200/30",
    },
    {
      icon: Target,
      title: "Chứng nhận ISO 9001:2015",
      year: "2021",
      description: "Hệ thống quản lý chất lượng đạt tiêu chuẩn quốc tế",
      color: "from-blue-500 to-indigo-500",
      bgColor: "blue-50",
      shadowColor: "blue-200/30",
    },
    {
      icon: Zap,
      title: "Doanh nghiệp bền vững",
      year: "2023",
      description: "Cam kết phát triển bền vững và trách nhiệm xã hội",
      color: "from-purple-500 to-pink-500",
      bgColor: "purple-50",
      shadowColor: "purple-200/30",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <Badge className="mb-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 text-blue-700 border-blue-200/50 shadow-sm">
              Thành tích nổi bật
            </Badge>
            <Sparkles className="w-5 h-5 text-yellow-500" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-primary text-balance leading-tight">
            Những{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent relative">
              thành tựu
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-violet-600/30 rounded-full" />
            </span>{" "}
            đáng tự hào
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto text-pretty leading-relaxed">
            16 năm phát triển với những dấu mốc quan trọng và sự ghi nhận từ cộng đồng doanh nghiệp Việt Nam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={achievement.title} className={`group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-${achievement.bgColor}/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2`}>
              {/* Gradient top border */}
              <div className={`h-1 bg-gradient-to-r ${achievement.color} relative`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              </div>
              
              {/* Card shadow and glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg`} />
              <div className={`absolute inset-0 shadow-xl shadow-slate-200/50 group-hover:shadow-2xl group-hover:shadow-${achievement.shadowColor} transition-all duration-500 rounded-lg`} />
              
              <CardContent className="p-8 relative">
                {/* Icon with enhanced styling */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                  >
                    <achievement.icon className="w-8 h-8 text-white drop-shadow-sm" />
                  </div>
                  {/* Floating particles effect */}
                  <div className={`absolute -top-1 -right-1 w-3 h-3 ${index === 0 ? 'bg-amber-400' : index === 1 ? 'bg-emerald-400' : index === 2 ? 'bg-blue-400' : 'bg-purple-400'} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-100`} />
                  <div className={`absolute -bottom-1 -left-1 w-2 h-2 ${index === 0 ? 'bg-orange-400' : index === 1 ? 'bg-teal-400' : index === 2 ? 'bg-indigo-400' : 'bg-pink-400'} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-200`} />
                </div>
                
                {/* Year badge with premium styling */}
                <Badge className={`mb-4 bg-gradient-to-r ${achievement.color} text-white border-0 shadow-md px-3 py-1 text-sm font-semibold`}>
                  {achievement.year}
                </Badge>
                
                {/* Title with enhanced typography */}
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-balance leading-tight group-hover:text-slate-900 transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                {/* Description with better spacing */}
                <p className="text-slate-600 text-pretty leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {achievement.description}
                </p>
                
                {/* Bottom accent line */}
                <div className={`mt-6 h-0.5 bg-gradient-to-r ${achievement.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

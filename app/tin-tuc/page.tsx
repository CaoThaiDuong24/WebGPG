"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  Clock, 
  ExternalLink, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight,
  Newspaper,
  Megaphone,
  Award,
  Bell,
  Eye,
  Heart,
  Share2
} from "lucide-react"
import { useState, useMemo } from "react"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleSystem } from "@/components/particle-system"

const newsData = [
  {
    id: 1,
    title: "TCT Đối Tác Chân Thật Tham Gia VILOG 2025 – Triển Lãm Logistics Quốc Tế Việt Nam",
    excerpt: "TCT Đối Tác Chân Thật hân hạnh tham gia VILOG 2025 - Triển lãm Logistics Quốc tế Việt Nam, mang đến những giải pháp logistics tiên tiến và dịch vụ chuyên nghiệp.",
    date: "04/08/2025",
    category: "Tin tức",
    image: "/modern-logistics-warehouse-with-containers-and-tru.jpg",
    link: "https://genuinepartner.com/tin-tuc/",
    views: 1250,
    likes: 89
  },
  {
    id: 2,
    title: "Hội nghị Người lao động Quý II/2025: Chủ động hôm nay, Bền vững ngày mai",
    excerpt: "Ngày 29/6/2025 đã đánh dấu một cột mốc đáng nhớ trong hành trình phát triển của TCT Đối Tác Chân Thật với chủ đề 'Tự doanh – Xanh hóa: Chủ động hôm nay, bền vững ngày mai'.",
    date: "10/07/2025",
    category: "Tin tức",
    image: "/modern-tech-office-with-developers-working-on-comp.jpg",
    link: "https://genuinepartner.com/tin-tuc/",
    views: 980,
    likes: 76
  },
  {
    id: 3,
    title: "Thông Báo Biểu Phí Nâng, Hạ Container Tại Các Depot Của TCT Đối Tác Chân Thật mới nhất năm 2024",
    excerpt: "Thông báo cập nhật biểu phí nâng, hạ container tại các depot của TCT Đối Tác Chân Thật với mức giá cạnh tranh và dịch vụ chất lượng cao.",
    date: "09/2024",
    category: "Thông báo",
    image: "/modern-logistics-warehouse-with-containers-and-tru.jpg",
    link: "https://genuinepartner.com/tin-tuc/",
    views: 2100,
    likes: 45
  },
  {
    id: 4,
    title: "Đối Tác Chân Thật Tham Dự Hội nghị Quốc Tế Intermodal Europe 2024 tại Hà Lan",
    excerpt: "TCT Đối Tác Chân Thật vinh dự tham dự Hội nghị Quốc tế Intermodal Europe 2024 tại Hà Lan, mở rộng mạng lưới đối tác quốc tế và học hỏi kinh nghiệm từ các chuyên gia hàng đầu.",
    date: "10/2024",
    category: "Tin tức",
    image: "/modern-business-skyline-with-glass-buildings-at-su.jpg",
    link: "https://genuinepartner.com/tin-tuc/",
    views: 1560,
    likes: 92
  },
  {
    id: 5,
    title: "Chuỗi sự kiện Ngày Hội Gia Đình GPG 2024 tại Đà Nẵng",
    excerpt: "Chuỗi sự kiện Ngày Hội Gia Đình GPG 2024 tại Đà Nẵng đã diễn ra thành công với sự tham gia đông đảo của các thành viên trong đại gia đình TCT Đối Tác Chân Thật.",
    date: "10/2024",
    category: "Sự kiện",
    image: "/community-volunteers-helping-children-and-families.jpg",
    link: "https://genuinepartner.com/tin-tuc/",
    views: 3200,
    likes: 156
  },
  {
    id: 6,
    title: "Hội nghị khách hàng 2024_Chi nhánh Đà Nẵng",
    excerpt: "Hội Nghị Khách Hàng 2024 tại Đà Nẵng đã diễn ra thành công với sự tham gia của đông đảo khách hàng và đối tác, tạo cơ hội giao lưu và hợp tác phát triển.",
    date: "10/2024",
    category: "Tin tức",
    image: "/modern-retail-store-with-digital-displays-and-cust.jpg",
    link: "https://genuinepartner.com/tin-tuc/",
    views: 1890,
    likes: 78
  },
  {
    id: 7,
    title: "TCT Đối Tác Chân Thật kỷ niệm 20 năm Ngày Doanh Nhân Việt Nam (13/10/2004 – 13/10/2024)",
    excerpt: "TCT Đối Tác Chân Thật kỷ niệm 20 năm Ngày Doanh Nhân Việt Nam với nhiều hoạt động ý nghĩa, thể hiện tinh thần doanh nhân và đóng góp cho sự phát triển của đất nước.",
    date: "13/10/2024",
    category: "Sự kiện",
    image: "/modern-business-skyline-with-glass-buildings-at-su.jpg",
    link: "https://genuinepartner.com/tin-tuc/",
    views: 4500,
    likes: 234
  },
  {
    id: 8,
    title: "TCT Đối Tác Chân Thật nhận giải thưởng 'Doanh nghiệp, doanh nhân TP. HCM tiêu biểu năm 2024'",
    excerpt: "TCT Đối Tác Chân Thật vinh dự nhận giải thưởng 'Doanh nghiệp, doanh nhân TP. HCM tiêu biểu năm 2024', ghi nhận những đóng góp tích cực cho sự phát triển kinh tế của thành phố.",
    date: "11/2024",
    category: "Giải thưởng",
    image: "/company-statistics.svg",
    link: "https://genuinepartner.com/tin-tuc/",
    views: 2800,
    likes: 167
  },
  {
    id: 9,
    title: "GPG KIDS FIESTA 2024 – Chào mừng Quốc Tế Thiếu Nhi 1.6",
    excerpt: "Ngày 01/06/2024, TCT Đối Tác Chân Thật đã tổ chức chương trình 'GPG – Kids Fiesta 2024' chào mừng Ngày Quốc tế Thiếu Nhi với nhiều hoạt động vui tươi và ý nghĩa.",
    date: "04/06/2024",
    category: "Sự kiện",
    image: "/community-volunteers-helping-children-and-families.jpg",
    link: "https://genuinepartner.com/tin-tuc/",
    views: 2100,
    likes: 145
  },
  {
    id: 10,
    title: "TCT Đối Tác Chân Thật tham gia triển lãm Intermodal Asia 2024",
    excerpt: "Ngày 22/05/2024, TCT Đối Tác Chân Thật tham gia Triển lãm Vận tải đa phương thức Container Châu Á 2024 tại Trung tâm Hội nghị và Triển lãm Thế giới Thượng Hải.",
    date: "27/05/2024",
    category: "Tin tức",
    image: "/modern-logistics-warehouse-with-containers-and-tru.jpg",
    link: "https://genuinepartner.com/tin-tuc/",
    views: 1650,
    likes: 89
  },
  {
    id: 11,
    title: "Kỷ niệm 15 năm thành lập TCT Đối Tác Chân Thật (11.05.2009 – 11.05.2024)",
    excerpt: "Kỷ niệm 15 năm thành lập TCT Đối Tác Chân Thật và vinh danh Cán bộ, Nhân viên xuất sắc năm 2023, đánh dấu chặng đường phát triển đầy tự hào của công ty.",
    date: "24/05/2024",
    category: "Sự kiện",
    image: "/company-statistics.svg",
    link: "https://genuinepartner.com/tin-tuc/",
    views: 3800,
    likes: 198
  },
  {
    id: 12,
    title: "TCT Đối Tác Chân Thật tổ chức Hội nghị người lao động Quý 1/2024",
    excerpt: "Hội nghị Người Lao Động Quý 1/2024 với chủ đề 'Chúng ta đã tự chủ như thế nào?' đã diễn ra thành công với sự tham gia của Ban lãnh đạo các cấp và toàn thể nhân viên.",
    date: "24/05/2024",
    category: "Tin tức",
    image: "/modern-tech-office-with-developers-working-on-comp.jpg",
    link: "https://genuinepartner.com/tin-tuc/",
    views: 1200,
    likes: 67
  }
]

const categoryIcons = {
  "Tin tức": Newspaper,
  "Sự kiện": Megaphone,
  "Thông báo": Bell,
  "Giải thưởng": Award
}

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const categories = ["Tất cả", "Tin tức", "Sự kiện", "Thông báo", "Giải thưởng"]

  const filteredNews = useMemo(() => {
    let filtered = newsData

    if (searchTerm) {
      filtered = filtered.filter(news =>
        news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory !== "Tất cả") {
      filtered = filtered.filter(news => news.category === selectedCategory)
    }

    return filtered
  }, [searchTerm, selectedCategory])

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentNews = filteredNews.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <ParticleSystem />
      <CustomCursor />
      <Header />
      <ScrollIndicator />
      
      {/* Modern Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Tin tức cập nhật thường xuyên</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
              Tin Tức & Sự Kiện
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Khám phá hành trình phát triển và những thành tựu nổi bật của TCT Đối Tác Chân Thật
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span className="text-white text-sm">Xu hướng mới</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-indigo-400" />
                <span className="text-white text-sm">Nội dung chất lượng</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-violet-400" />
                <span className="text-white text-sm">Cập nhật nhanh</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Two Column Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-3 mb-6">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 font-semibold">
                {selectedCategory === "Tất cả" ? "Tin tức nổi bật" : selectedCategory}
              </span>
            </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {searchTerm ? `Kết quả tìm kiếm cho "${searchTerm}"` : "Cập nhật mới nhất"}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Theo dõi những sự kiện và thông báo quan trọng từ TCT Đối Tác Chân Thật
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content - Left Side */}
              <div className="lg:col-span-2">
                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentNews.length > 0 ? (
                currentNews.map((news, index) => {
                  const IconComponent = categoryIcons[news.category as keyof typeof categoryIcons]
                  return (
                    <Card key={news.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white hover:-translate-y-2 rounded-2xl">
                      <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 z-20">
                          <Badge className="bg-white/90 backdrop-blur-sm text-gray-800 border-0 shadow-lg flex items-center gap-1">
                            {IconComponent && <IconComponent className="w-3 h-3" />}
                            {news.category}
                          </Badge>
                        </div>

                        {/* Featured Badge */}
                        {index < 3 && (
                          <div className="absolute top-4 right-4 z-20">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                              Nổi bật
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{news.date}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{news.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              <span>{news.likes}</span>
                            </div>
                          </div>
                        </div>
                  <CardTitle className="text-lg font-bold line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {news.title}
                  </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed">
                          {news.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <a
                            href={news.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl group/link"
                          >
                            Đọc thêm
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                          </a>
                          
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-600">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })
              ) : (
                <div className="col-span-full text-center py-20">
                  <div className="max-w-md mx-auto">
                    <Search className="w-20 h-20 text-gray-300 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-600 mb-4">
                      Không tìm thấy kết quả
                    </h3>
                    <p className="text-gray-500 mb-8">
                      Không có tin tức nào phù hợp với từ khóa tìm kiếm của bạn
                    </p>
                    <Button
                      onClick={() => {
                        setSearchTerm("")
                        setSelectedCategory("Tất cả")
                        setCurrentPage(1)
                      }}
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 rounded-xl"
                    >
                      Xóa bộ lọc
                    </Button>
                  </div>
                </div>
              )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-12">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
                      <div className="flex items-center gap-2">
                        <Button
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          variant="outline"
                          className="px-4 py-2 rounded-xl border-2 border-gray-200 hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <Button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            variant={currentPage === page ? "default" : "outline"}
                            className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                              currentPage === page
                                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                                : "border-2 border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                            }`}
                          >
                            {page}
                          </Button>
                        ))}
                        
                        <Button
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          variant="outline"
                          className="px-4 py-2 rounded-xl border-2 border-gray-200 hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar - Right Side */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  {/* Search & Filter */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Search className="w-5 h-5 text-blue-600" />
                      Tìm kiếm & Lọc
                    </h3>
                    
                    {/* Search Bar */}
                    <div className="mb-6">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          type="text"
                          placeholder="Tìm kiếm tin tức..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-0 bg-gray-50 focus:bg-white transition-all text-sm"
                        />
                      </div>
                    </div>

                    {/* Category Filters */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Danh mục</h4>
                      {categories.map((category) => {
                        const IconComponent = categoryIcons[category as keyof typeof categoryIcons]
                        const count = category === "Tất cả" ? newsData.length : newsData.filter(news => news.category === category).length
                        return (
                          <button
                            key={category}
                            onClick={() => {
                              setSelectedCategory(category)
                              setCurrentPage(1)
                            }}
                            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                              selectedCategory === category
                                ? "bg-blue-50 border-2 border-blue-200 text-blue-700"
                                : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {IconComponent && <IconComponent className="w-4 h-4" />}
                              <span className="font-medium text-sm">{category}</span>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {count}
                            </Badge>
                          </button>
                        )
                      })}
                    </div>

                    {/* Results Counter */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Filter className="w-4 h-4" />
                        <span>Hiển thị {currentNews.length} trong {filteredNews.length} tin tức</span>
                      </div>
                    </div>
                  </div>

                  {/* Popular News */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      Tin nổi bật
                    </h3>
                    <div className="space-y-4">
                      {newsData.slice(0, 5).map((news, index) => (
                        <div key={news.id} className="flex gap-3 group cursor-pointer">
                          <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden">
                            <img
                              src={news.image}
                              alt={news.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                              {news.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                              <Calendar className="w-3 h-3" />
                              <span>{news.date}</span>
                              <div className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                <span>{news.views}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Bell className="w-5 h-5 text-blue-600" />
                      Đăng ký nhận tin
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Nhận thông báo về tin tức mới nhất từ TCT Đối Tác Chân Thật
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Email của bạn"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-0 text-sm"
                      />
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold">
                        Đăng ký
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="relative py-20 overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6">
              <Bell className="w-5 h-5 text-blue-400" />
              <span className="text-white/90 font-medium">Đăng ký nhận tin</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Theo dõi tin tức mới nhất
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Đăng ký nhận thông báo để không bỏ lỡ những tin tức và sự kiện quan trọng từ TCT Đối Tác Chân Thật
            </p>
            
            <div className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white/90 backdrop-blur-sm"
                />
                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Đăng ký
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-blue-200/80 text-sm mt-4">
                Chúng tôi cam kết bảo mật thông tin của bạn và không gửi spam
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
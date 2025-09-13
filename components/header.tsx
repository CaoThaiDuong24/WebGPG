"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">GP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Genuine Partner</h1>
              <p className="text-sm text-blue-600 font-medium">Đối Tác Chân Thật</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-blue-50">
                  <span>Về chúng tôi</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 z-[60] bg-white shadow-lg border border-gray-200">
                <DropdownMenuItem className="py-2">
                  <a href="/gioi-thieu-chung" className="w-full">
                    Giới thiệu chung
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2">
                  <a href="/tam-nhin-su-menh" className="w-full">
                    Tầm nhìn và sứ mệnh
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2">
                  <a href="/lich-su-hinh-thanh" className="w-full">
                    Lịch sử hình thành
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-blue-50">
                  <span>Hệ sinh thái</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 z-[60] bg-white shadow-lg border border-gray-200">
                <DropdownMenuItem className="py-3">
                  <div>
                    <div className="font-medium">Thần - Logistics & Phụ trợ</div>
                    <div className="text-sm text-gray-500">Vận tải, kho bãi, phân phối</div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3">
                  <div>
                    <div className="font-medium">Tâm - Dịch vụ & Thương mại</div>
                    <div className="text-sm text-gray-500">Bán lẻ, F&B, dịch vụ</div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3">
                  <div>
                    <div className="font-medium">Trí - Tư vấn & Công nghệ</div>
                    <div className="text-sm text-gray-500">Giải pháp số, tư vấn</div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3">
                  <div>
                    <div className="font-medium">Thiện - Cộng đồng</div>
                    <div className="text-sm text-gray-500">An sinh xã hội</div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              href="#achievements"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-blue-50"
            >
              Thành tích
            </a>
            <a
              href="#news"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-blue-50"
            >
              Tin tức
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-blue-50"
            >
              Liên hệ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              Tư vấn miễn phí
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 pt-4">
              <div className="space-y-1">
                <div className="text-gray-900 font-medium px-3 py-2 text-sm">
                  Về chúng tôi
                </div>
                <a
                  href="/gioi-thieu-chung"
                  className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium px-6 py-2 rounded-lg block text-sm"
                >
                  Giới thiệu chung
                </a>
                <a
                  href="/tam-nhin-su-menh"
                  className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium px-6 py-2 rounded-lg block text-sm"
                >
                  Tầm nhìn và sứ mệnh
                </a>
              </div>
              <a
                href="#ecosystem"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium px-3 py-3 rounded-lg"
              >
                Hệ sinh thái
              </a>
              <a
                href="#achievements"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium px-3 py-3 rounded-lg"
              >
                Thành tích
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium px-3 py-3 rounded-lg"
              >
                Liên hệ
              </a>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white w-full mt-4 py-3 rounded-lg font-medium">
                Tư vấn miễn phí
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

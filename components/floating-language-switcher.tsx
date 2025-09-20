"use client"

import { useState } from "react"
import { Globe, ChevronDown } from "lucide-react"
import { useLocale } from "@/components/locale-provider"

export function FloatingLanguageSwitcher() {
  const { t, locale, changeLocale } = useLocale()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Language Switcher - Floating */}
      <div className="lg:hidden fixed top-4 right-20 z-50">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative group bg-white/90 backdrop-blur-xl border border-blue-200 hover:border-blue-300 rounded-xl px-3 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                {locale === 'vi' ? 'VI' : locale === 'en' ? 'EN' : 'KM'}
              </span>
              <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsOpen(false)}
              />
              
              {/* Dropdown Content */}
              <div className="absolute top-full right-0 mt-2 w-40 bg-white/95 backdrop-blur-xl shadow-2xl border border-blue-100/50 rounded-2xl p-2 z-50">
                <div 
                  className={`py-2 px-3 rounded-xl transition-all duration-300 cursor-pointer ${
                    locale === 'vi' 
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50' 
                      : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                  onClick={() => {
                    changeLocale('vi')
                    setIsOpen(false)
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      locale === 'vi' 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    }`}></div>
                    <span className={`text-sm font-medium ${
                      locale === 'vi' 
                        ? 'text-blue-700' 
                        : 'text-gray-800'
                    }`}>Tiếng Việt</span>
                  </div>
                </div>
                
                <div 
                  className={`py-2 px-3 rounded-xl transition-all duration-300 cursor-pointer ${
                    locale === 'en' 
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50' 
                      : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                  onClick={() => {
                    changeLocale('en')
                    setIsOpen(false)
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      locale === 'en' 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    }`}></div>
                    <span className={`text-sm font-medium ${
                      locale === 'en' 
                        ? 'text-blue-700' 
                        : 'text-gray-800'
                    }`}>English</span>
                  </div>
                </div>
                
                <div 
                  className={`py-2 px-3 rounded-xl transition-all duration-300 cursor-pointer ${
                    locale === 'km' 
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50' 
                      : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                  onClick={() => {
                    changeLocale('km')
                    setIsOpen(false)
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      locale === 'km' 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    }`}></div>
                    <span className={`text-sm font-medium ${
                      locale === 'km' 
                        ? 'text-blue-700' 
                        : 'text-gray-800'
                    }`}>ភាសាខ្មែរ</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

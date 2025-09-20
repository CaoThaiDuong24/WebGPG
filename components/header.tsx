"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Sparkles, Globe, Crown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLocale } from "@/components/locale-provider"
export function Header() {
  const { t, locale, changeLocale } = useLocale()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) {
        const target = event.target as Element
        if (!target.closest('[data-mobile-menu]') && !target.closest('[data-mobile-menu-button]')) {
          setIsMenuOpen(false)
        }
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  // Auto-open submenu when on sub-page
  useEffect(() => {
    if (pathname.startsWith('/gioi-thieu-chung') || pathname.startsWith('/tam-nhin-su-menh') || pathname.startsWith('/lich-su-hinh-thanh') || pathname.startsWith('/thanh-tuu-cua-chung-toi')) {
      setOpenSubmenu('about')
    } else if (pathname.startsWith('/nhom-than') || pathname.startsWith('/nhom-tam') || pathname.startsWith('/nhom-tri') || pathname.startsWith('/nhom-thien')) {
      setOpenSubmenu('ecosystem')
    } else {
      setOpenSubmenu(null)
    }
  }, [pathname])

  // Helper function to check if a menu item is active
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  // Helper function to get menu item classes
  const getMenuClasses = (path: string) => {
    const baseClasses = "relative group transition-all duration-300 font-medium px-4 py-2.5 rounded-xl"
    const activeClasses = "text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm"
    const inactiveClasses = "text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50"
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`
  }

  // Helper function to toggle submenu
  const toggleSubmenu = (submenuName: string) => {
    setOpenSubmenu(openSubmenu === submenuName ? null : submenuName)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-blue-100/50' 
        : 'bg-gradient-to-r from-blue-50/80 via-white/90 to-blue-50/80 backdrop-blur-xl shadow-lg'
    }`}>
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="relative">
              <div className="w-24 h-12 sm:w-28 sm:h-14 lg:w-32 lg:h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img 
                  src="/Logo GPG.png" 
                  alt="Genuine Partner Group Logo" 
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <button
              onClick={() => router.push('/')}
              className={getMenuClasses('/')}
            >
              <span className="relative z-10">{t('header.nav.home')}</span>
              {!isActive('/') && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`relative group flex items-center space-x-1 transition-all duration-300 font-medium px-4 py-2.5 rounded-xl ${
                  isActive('/gioi-thieu-chung') || isActive('/tam-nhin-su-menh') || isActive('/lich-su-hinh-thanh') || isActive('/thanh-tuu-cua-chung-toi')
                    ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                }`}>
                  <span className="relative z-10">{t('header.nav.about')}</span>
                  <ChevronDown className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:rotate-180" />
                  {!(isActive('/gioi-thieu-chung') || isActive('/tam-nhin-su-menh') || isActive('/lich-su-hinh-thanh') || isActive('/thanh-tuu-cua-chung-toi')) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 z-[70] bg-white/95 backdrop-blur-xl shadow-2xl border border-blue-100/50 rounded-2xl p-2">
                <DropdownMenuItem 
                  className={`py-3 px-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    isActive('/gioi-thieu-chung') 
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50' 
                      : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                  onClick={() => router.push('/gioi-thieu-chung')}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      isActive('/gioi-thieu-chung') 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    }`}></div>
                    <span className={`font-medium ${
                      isActive('/gioi-thieu-chung') 
                        ? 'text-blue-700' 
                        : 'text-gray-800 hover:text-blue-700'
                    }`}>{t('header.about_menu.general')}</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={`py-3 px-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    isActive('/tam-nhin-su-menh') 
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50' 
                      : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                  onClick={() => router.push('/tam-nhin-su-menh')}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      isActive('/tam-nhin-su-menh') 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    }`}></div>
                    <span className={`font-medium ${
                      isActive('/tam-nhin-su-menh') 
                        ? 'text-blue-700' 
                        : 'text-gray-800 hover:text-blue-700'
                    }`}>{t('header.about_menu.vision')}</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={`py-3 px-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    isActive('/lich-su-hinh-thanh') 
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50' 
                      : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                  onClick={() => router.push('/lich-su-hinh-thanh')}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      isActive('/lich-su-hinh-thanh') 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    }`}></div>
                    <span className={`font-medium ${
                      isActive('/lich-su-hinh-thanh') 
                        ? 'text-blue-700' 
                        : 'text-gray-800 hover:text-blue-700'
                    }`}>{t('header.about_menu.history')}</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={`py-3 px-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    isActive('/thanh-tuu-cua-chung-toi') 
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50' 
                      : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                  onClick={() => router.push('/thanh-tuu-cua-chung-toi')}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      isActive('/thanh-tuu-cua-chung-toi') 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    }`}></div>
                    <span className={`font-medium ${
                      isActive('/thanh-tuu-cua-chung-toi') 
                        ? 'text-blue-700' 
                        : 'text-gray-800 hover:text-blue-700'
                    }`}>{t('header.about_menu.achievements')}</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`relative group flex items-center space-x-1 transition-all duration-300 font-medium px-4 py-2.5 rounded-xl ${
                  isActive('/nhom-than') || isActive('/nhom-tam') || isActive('/nhom-tri') || isActive('/nhom-thien')
                    ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                }`}>
                  <span className="relative z-10">{t('header.nav.ecosystem')}</span>
                  <ChevronDown className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:rotate-180" />
                  {!(isActive('/nhom-than') || isActive('/nhom-tam') || isActive('/nhom-tri') || isActive('/nhom-thien')) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 z-[70] bg-white/95 backdrop-blur-xl shadow-2xl border border-blue-100/50 rounded-2xl p-2">
                <DropdownMenuItem 
                  className={`py-4 px-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    isActive('/nhom-than') 
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50' 
                      : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                  onClick={() => router.push('/nhom-than')}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      isActive('/nhom-than') 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    }`}></div>
                    <div>
                      <div className={`font-medium ${
                        isActive('/nhom-than') 
                          ? 'text-blue-700' 
                          : 'text-gray-800 hover:text-blue-700'
                      }`}>{t('header.ecosystem_menu.than')}</div>
                      <div className="text-sm text-gray-500">{t('header.ecosystem_menu.than_desc')}</div>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={`py-4 px-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    isActive('/nhom-tam') 
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50' 
                      : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                  onClick={() => router.push('/nhom-tam')}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      isActive('/nhom-tam') 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    }`}></div>
                    <div>
                      <div className={`font-medium ${
                        isActive('/nhom-tam') 
                          ? 'text-blue-700' 
                          : 'text-gray-800 hover:text-blue-700'
                      }`}>{t('header.ecosystem_menu.tam')}</div>
                      <div className="text-sm text-gray-500">{t('header.ecosystem_menu.tam_desc')}</div>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={`py-4 px-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    isActive('/nhom-tri') 
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50' 
                      : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                  onClick={() => router.push('/nhom-tri')}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      isActive('/nhom-tri') 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    }`}></div>
                    <div>
                      <div className={`font-medium ${
                        isActive('/nhom-tri') 
                          ? 'text-blue-700' 
                          : 'text-gray-800 hover:text-blue-700'
                      }`}>{t('header.ecosystem_menu.tri')}</div>
                      <div className="text-sm text-gray-500">{t('header.ecosystem_menu.tri_desc')}</div>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={`py-4 px-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    isActive('/nhom-thien') 
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50' 
                      : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                  onClick={() => router.push('/nhom-thien')}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      isActive('/nhom-thien') 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    }`}></div>
                    <div>
                      <div className={`font-medium ${
                        isActive('/nhom-thien') 
                          ? 'text-blue-700' 
                          : 'text-gray-800 hover:text-blue-700'
                      }`}>{t('header.ecosystem_menu.thien')}</div>
                      <div className="text-sm text-gray-500">{t('header.ecosystem_menu.thien_desc')}</div>
                    </div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => router.push('/trach-nhiem-xa-hoi')}
              className={getMenuClasses('/trach-nhiem-xa-hoi')}
            >
              <span className="relative z-10">{t('header.nav.responsibility')}</span>
              {!isActive('/trach-nhiem-xa-hoi') && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
            <button
              onClick={() => router.push('/tin-tuc')}
              className={getMenuClasses('/tin-tuc')}
            >
              <span className="relative z-10">{t('header.nav.news')}</span>
              {!isActive('/tin-tuc') && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
            <button
              onClick={() => router.push('/lien-he')}
              className={getMenuClasses('/lien-he')}
            >
              <span className="relative z-10">{t('header.nav.contact')}</span>
              {!isActive('/lien-he') && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
          </nav>

          {/* Language Switcher & CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher - Simple Dropdown */}
            <div className="relative group">
              <Button 
                variant="outline" 
                size="sm"
                className="relative group bg-white/80 hover:bg-white border-blue-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 transition-all duration-300 px-3 py-2 rounded-xl"
              >
                <Globe className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">
                  {locale === 'vi' ? 'VI' : locale === 'en' ? 'EN' : 'KM'}
                </span>
              </Button>
              
              {/* Simple Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl shadow-2xl border border-blue-100/50 rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div 
                  className={`py-3 px-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    locale === 'vi' 
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50' 
                      : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                  onClick={() => changeLocale('vi')}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      locale === 'vi' 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    }`}></div>
                    <span className={`font-medium ${
                      locale === 'vi' 
                        ? 'text-blue-700' 
                        : 'text-gray-800 hover:text-blue-700'
                    }`}>{t('header.locales.vi')}</span>
                  </div>
                </div>
                <div 
                  className={`py-3 px-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    locale === 'en' 
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50' 
                      : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                  onClick={() => changeLocale('en')}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      locale === 'en' 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    }`}></div>
                    <span className={`font-medium ${
                      locale === 'en' 
                        ? 'text-blue-700' 
                        : 'text-gray-800 hover:text-blue-700'
                    }`}>{t('header.locales.en')}</span>
                  </div>
                </div>
                <div 
                  className={`py-3 px-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    locale === 'km' 
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50' 
                      : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                  onClick={() => changeLocale('km')}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      locale === 'km' 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    }`}></div>
                    <span className={`font-medium ${
                      locale === 'km' 
                        ? 'text-blue-700' 
                        : 'text-gray-800 hover:text-blue-700'
                    }`}>{t('header.locales.km')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button className="relative group bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white px-8 py-3 rounded-2xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 border border-blue-500/20">
              <span className="relative z-10 flex items-center space-x-2">
                <span>{t('header.cta')}</span>
                <Sparkles className="w-4 h-4 animate-pulse" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            {/* Tra cứu Button */}
            <button className="flex items-center space-x-2 px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg font-medium text-sm">
              <Crown className="w-4 h-4 text-orange-500" />
              <span>{t('header.lookup_button')}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative group p-2 sm:p-3 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 border border-blue-100/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
            data-mobile-menu-button
          >
            <div className="relative z-10">
              <div className="w-6 h-6 flex items-center justify-center">
                <Menu className={`w-5 h-5 sm:w-6 sm:h-6 text-blue-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                <X className={`w-5 h-5 sm:w-6 sm:h-6 text-blue-700 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0 mt-0 pb-0'
        }`} data-mobile-menu>
          {isMenuOpen && (
            <div className="border-t border-blue-100/50 pt-4">
              <nav className="flex flex-col space-y-2 sm:space-y-3">
                {/* Home */}
                <button
                  onClick={() => router.push('/')}
                  className={`relative group transition-all duration-300 font-medium px-4 py-3 rounded-2xl text-left ${
                    isActive('/') 
                      ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                >
                  <span className="relative z-10">{t('header.nav.home')}</span>
                  {!isActive('/') && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </button>

                {/* About Menu with Dropdown */}
                <div className="space-y-2">
                  <button
                    onClick={() => toggleSubmenu('about')}
                    className={`relative group transition-all duration-300 font-medium px-4 py-3 rounded-2xl text-left w-full flex items-center justify-between ${
                      isActive('/gioi-thieu-chung') || isActive('/tam-nhin-su-menh') || isActive('/lich-su-hinh-thanh') || isActive('/thanh-tuu-cua-chung-toi')
                        ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                    }`}
                  >
                    <span className="relative z-10">{t('header.nav.about')}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSubmenu === 'about' ? 'rotate-180' : ''}`} />
                    {!(isActive('/gioi-thieu-chung') || isActive('/tam-nhin-su-menh') || isActive('/lich-su-hinh-thanh') || isActive('/thanh-tuu-cua-chung-toi')) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </button>
                  
                  {/* About Submenu */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openSubmenu === 'about' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 space-y-1">
                      <button
                        onClick={() => router.push('/gioi-thieu-chung')}
                        className={`relative group transition-all duration-300 font-medium px-4 py-2 rounded-xl text-left text-sm w-full ${
                          isActive('/gioi-thieu-chung') 
                            ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm' 
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                        }`}
                      >
                        <span className="relative z-10 flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            isActive('/gioi-thieu-chung') 
                              ? 'bg-blue-600' 
                              : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                          }`}></div>
                          <span>{t('header.about_menu.general')}</span>
                        </span>
                        {!isActive('/gioi-thieu-chung') && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </button>
                      <button
                        onClick={() => router.push('/tam-nhin-su-menh')}
                        className={`relative group transition-all duration-300 font-medium px-4 py-2 rounded-xl text-left text-sm w-full ${
                          isActive('/tam-nhin-su-menh') 
                            ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm' 
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                        }`}
                      >
                        <span className="relative z-10 flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            isActive('/tam-nhin-su-menh') 
                              ? 'bg-blue-600' 
                              : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                          }`}></div>
                          <span>{t('header.about_menu.vision')}</span>
                        </span>
                        {!isActive('/tam-nhin-su-menh') && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </button>
                      <button
                        onClick={() => router.push('/lich-su-hinh-thanh')}
                        className={`relative group transition-all duration-300 font-medium px-4 py-2 rounded-xl text-left text-sm w-full ${
                          isActive('/lich-su-hinh-thanh') 
                            ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm' 
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                        }`}
                      >
                        <span className="relative z-10 flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            isActive('/lich-su-hinh-thanh') 
                              ? 'bg-blue-600' 
                              : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                          }`}></div>
                          <span>{t('header.about_menu.history')}</span>
                        </span>
                        {!isActive('/lich-su-hinh-thanh') && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </button>
                      <button
                        onClick={() => router.push('/thanh-tuu-cua-chung-toi')}
                        className={`relative group transition-all duration-300 font-medium px-4 py-2 rounded-xl text-left text-sm w-full ${
                          isActive('/thanh-tuu-cua-chung-toi') 
                            ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm' 
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                        }`}
                      >
                        <span className="relative z-10 flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            isActive('/thanh-tuu-cua-chung-toi') 
                              ? 'bg-blue-600' 
                              : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                          }`}></div>
                          <span>{t('header.about_menu.achievements')}</span>
                        </span>
                        {!isActive('/thanh-tuu-cua-chung-toi') && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Ecosystem Menu with Dropdown */}
                <div className="space-y-2">
                  <button
                    onClick={() => toggleSubmenu('ecosystem')}
                    className={`relative group transition-all duration-300 font-medium px-4 py-3 rounded-2xl text-left w-full flex items-center justify-between ${
                      isActive('/nhom-than') || isActive('/nhom-tam') || isActive('/nhom-tri') || isActive('/nhom-thien')
                        ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                    }`}
                  >
                    <span className="relative z-10">{t('header.nav.ecosystem')}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSubmenu === 'ecosystem' ? 'rotate-180' : ''}`} />
                    {!(isActive('/nhom-than') || isActive('/nhom-tam') || isActive('/nhom-tri') || isActive('/nhom-thien')) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </button>
                  
                  {/* Ecosystem Submenu */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openSubmenu === 'ecosystem' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 space-y-1">
                      <button
                        onClick={() => router.push('/nhom-than')}
                        className={`relative group transition-all duration-300 font-medium px-4 py-2 rounded-xl text-left text-sm w-full ${
                          isActive('/nhom-than') 
                            ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm' 
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                        }`}
                      >
                        <span className="relative z-10 flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            isActive('/nhom-than') 
                              ? 'bg-blue-600' 
                              : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                          }`}></div>
                          <span>{t('header.ecosystem_menu.than')} - {t('header.ecosystem_menu.than_desc')}</span>
                        </span>
                        {!isActive('/nhom-than') && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </button>
                      <button
                        onClick={() => router.push('/nhom-tam')}
                        className={`relative group transition-all duration-300 font-medium px-4 py-2 rounded-xl text-left text-sm w-full ${
                          isActive('/nhom-tam') 
                            ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm' 
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                        }`}
                      >
                        <span className="relative z-10 flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            isActive('/nhom-tam') 
                              ? 'bg-blue-600' 
                              : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                          }`}></div>
                          <span>{t('header.ecosystem_menu.tam')} - {t('header.ecosystem_menu.tam_desc')}</span>
                        </span>
                        {!isActive('/nhom-tam') && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </button>
                      <button
                        onClick={() => router.push('/nhom-tri')}
                        className={`relative group transition-all duration-300 font-medium px-4 py-2 rounded-xl text-left text-sm w-full ${
                          isActive('/nhom-tri') 
                            ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm' 
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                        }`}
                      >
                        <span className="relative z-10 flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            isActive('/nhom-tri') 
                              ? 'bg-blue-600' 
                              : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                          }`}></div>
                          <span>{t('header.ecosystem_menu.tri')} - {t('header.ecosystem_menu.tri_desc')}</span>
                        </span>
                        {!isActive('/nhom-tri') && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </button>
                      <button
                        onClick={() => router.push('/nhom-thien')}
                        className={`relative group transition-all duration-300 font-medium px-4 py-2 rounded-xl text-left text-sm w-full ${
                          isActive('/nhom-thien') 
                            ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm' 
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                        }`}
                      >
                        <span className="relative z-10 flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            isActive('/nhom-thien') 
                              ? 'bg-blue-600' 
                              : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                          }`}></div>
                          <span>{t('header.ecosystem_menu.thien')} - {t('header.ecosystem_menu.thien_desc')}</span>
                        </span>
                        {!isActive('/nhom-thien') && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                {/* Social Responsibility */}
                <button
                  onClick={() => router.push('/trach-nhiem-xa-hoi')}
                  className={`relative group transition-all duration-300 font-medium px-4 py-3 rounded-2xl text-left ${
                    isActive('/trach-nhiem-xa-hoi') 
                      ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                >
                  <span className="relative z-10">{t('header.nav.responsibility')}</span>
                  {!isActive('/trach-nhiem-xa-hoi') && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </button>

                {/* News */}
                <button
                  onClick={() => router.push('/tin-tuc')}
                  className={`relative group transition-all duration-300 font-medium px-4 py-3 rounded-2xl text-left ${
                    isActive('/tin-tuc') 
                      ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                >
                  <span className="relative z-10">{t('header.nav.news')}</span>
                  {!isActive('/tin-tuc') && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </button>

                {/* Contact */}
                <button
                  onClick={() => router.push('/lien-he')}
                  className={`relative group transition-all duration-300 font-medium px-4 py-3 rounded-2xl text-left ${
                    isActive('/lien-he') 
                      ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                >
                  <span className="relative z-10">{t('header.nav.contact')}</span>
                  {!isActive('/lien-he') && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </button>
              

                {/* CTA Button */}
                <Button className="relative group bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white w-full mt-6 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 border border-blue-500/20">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>{t('header.cta')}</span>
                    <Sparkles className="w-4 h-4 animate-pulse" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>

                {/* Mobile Tra cứu Button */}
                <button className="flex items-center justify-center space-x-2 px-4 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg font-medium text-sm w-full mt-4">
                  <Crown className="w-4 h-4 text-orange-500" />
                  <span>{t('header.lookup_button')}</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
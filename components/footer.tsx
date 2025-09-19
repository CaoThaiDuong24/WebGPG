import React from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Facebook, Linkedin, Youtube, ArrowRight, Sparkles } from "lucide-react"
import { useLocale } from "@/components/locale-provider"
import { useRouter } from "next/navigation"
export function Footer() {
  const { t } = useLocale()
  const router = useRouter()
  
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden z-10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        
        {/* Floating animated dots */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-6 sm:space-y-8">
            <div className="flex items-center">
              <div className="relative">
                <div className="w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
                  <img 
                    src="/Logo-GPG-01.png" 
                    alt="Genuine Partner Group Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
              {t('footer.description')}
            </p>
            
            {/* Vertical divider */}
            <div className="hidden lg:block w-px h-24 sm:h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-auto" />
            
            {/* Social Media */}
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              {[
                { icon: Facebook, color: 'from-blue-600 to-blue-500', url: 'https://www.facebook.com/GenuinePartnerGroup' },
                { icon: Linkedin, color: 'from-blue-700 to-blue-600', url: 'https://www.linkedin.com/company/genuine-partner-group/' },
                { icon: Youtube, color: 'from-red-600 to-red-500', url: 'https://www.youtube.com/@Genuinepartnergroup' }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-110 group flex items-center justify-center"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-300 group-hover:text-white relative z-10 transition-all duration-300 group-hover:animate-bounce" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 sm:space-y-8">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-6 sm:mb-8 relative flex items-center gap-2 sm:gap-3">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">{t('footer.sections.quick_links')}</span>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent hidden sm:block" />
            </h4>
            <div className="space-y-2 sm:space-y-3">
              {[
                { name: t('footer.links.about'), href: '/gioi-thieu-chung' },
                { name: t('footer.links.ecosystem'), href: '#' }, 
                { name: t('footer.links.responsibility'), href: '/trach-nhiem-xa-hoi' },
                { name: t('footer.links.news'), href: '/tin-tuc' },
                { name: t('footer.links.careers'), href: '/co-hoi-nghe-nghiep' }
              ].map((item, index) => (
                <button 
                  key={index} 
                  onClick={() => item.href !== '#' && router.push(item.href)}
                  className="group relative block p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 w-full text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base text-gray-200 group-hover:text-white font-medium transition-colors duration-300">{item.name}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6 sm:space-y-8">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-6 sm:mb-8 relative flex items-center gap-2 sm:gap-3">
              <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">{t('footer.sections.services')}</span>
              <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/50 to-transparent hidden sm:block" />
            </h4>
            <div className="space-y-2 sm:space-y-3">
              {[
                t('footer.services.logistics'),
                t('footer.services.commerce'),
                t('footer.services.consulting'),
                t('footer.services.community')
              ].map((item, index) => (
                <a key={index} href="#" className="group relative block p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base text-gray-200 group-hover:text-white font-medium transition-colors duration-300">{item}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-indigo-400 transform group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6 sm:space-y-8">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-6 sm:mb-8 relative flex items-center gap-2 sm:gap-3">
              <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">{t('footer.sections.contact')}</span>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent hidden sm:block" />
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: MapPin, label: t('footer.contact.address'), text: t('footer.contact.country'), gradient: 'from-blue-500 to-indigo-500' },
                { icon: Phone, label: t('footer.contact.phone'), text: t('footer.contact.phone_number'), gradient: 'from-indigo-500 to-violet-500' },
                { icon: Mail, label: t('footer.contact.email'), text: t('footer.contact.email_address'), gradient: 'from-blue-500 to-indigo-500' }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="group relative p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className={`relative p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${item.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white relative z-10" />
                        <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-400 text-xs uppercase tracking-wide font-medium mb-1">{item.label}</p>
                        <span className="text-sm sm:text-base text-white font-medium group-hover:text-white transition-colors duration-300 break-words">
                          {item.text}
                        </span>
                      </div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative mt-6 sm:mt-8 lg:mt-10">
          {/* Decorative gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 via-indigo-500/50 via-violet-500/50 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          
          <div className="pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 sm:space-y-6 lg:space-y-0">
              {/* Copyright */}
              <div className="flex flex-row items-center space-x-4 text-center sm:text-left">
                <p className="text-gray-300 font-medium text-sm sm:text-base">
                  © 2024 <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent font-bold">Genuine Partner Group</span>
                </p>
                <div className="w-1 h-1 bg-gray-500 rounded-full" />
                <p className="text-gray-400 text-xs sm:text-sm">{t('footer.rights')}</p>
              </div>
              
              {/* Footer Links */}
              <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 sm:gap-6 lg:gap-8">
                {[
                  t('footer.legal.privacy'),
                  t('footer.legal.terms'), 
                  t('footer.legal.sitemap'),
                  t('footer.legal.support')
                ].map((item, index) => (
                  <a key={index} href="#" className="group relative text-gray-400 hover:text-white text-xs sm:text-sm font-medium transition-all duration-300">
                    <span className="relative z-10">{item}</span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Additional bottom section */}
            <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-2 text-gray-400 text-xs order-2 sm:order-1">
                  <span>{t('footer.bottom.developed')}</span>
                  <span className="text-red-400 animate-pulse">{t('footer.bottom.love')}</span>
                  <span>{t('footer.bottom.location')}</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-gray-400 text-xs order-1 sm:order-2">
                  <span>{t('footer.bottom.version')}</span>
                  <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full" />
                  <span>{t('footer.bottom.last_update')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

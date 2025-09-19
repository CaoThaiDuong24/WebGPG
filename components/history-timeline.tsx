"use client"

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Building2, Calendar, Award, Globe, Truck, Factory, Users, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslations } from '@/hooks/use-i18n'

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

const getTimelineEvents = (t: any): TimelineEvent[] => [
  {
    year: "2009",
    title: t('history.timeline.2009.title'),
    description: t('history.timeline.2009.description'),
    icon: <Building2 className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-500"
  },
  {
    year: "2010",
    title: t('history.timeline.2010.title'),
    description: t('history.timeline.2010.description'),
    icon: <Factory className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500"
  },
  {
    year: "2011-2012",
    title: t('history.timeline.2011-2012.title'),
    description: t('history.timeline.2011-2012.description'),
    icon: <Users className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    year: "2013-2014",
    title: t('history.timeline.2013-2014.title'),
    description: t('history.timeline.2013-2014.description'),
    icon: <Truck className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500"
  },
  {
    year: "2015-2016",
    title: t('history.timeline.2015-2016.title'),
    description: t('history.timeline.2015-2016.description'),
    icon: <Globe className="w-6 h-6" />,
    color: "from-rose-500 to-orange-500"
  },
  {
    year: "2017",
    title: t('history.timeline.2017.title'),
    description: t('history.timeline.2017.description'),
    icon: <Zap className="w-6 h-6" />,
    color: "from-orange-500 to-amber-500"
  },
  {
    year: "2018",
    title: t('history.timeline.2018.title'),
    description: t('history.timeline.2018.description'),
    icon: <Award className="w-6 h-6" />,
    color: "from-amber-500 to-yellow-500"
  },
  {
    year: "2019",
    title: t('history.timeline.2019.title'),
    description: t('history.timeline.2019.description'),
    icon: <Award className="w-6 h-6" />,
    color: "from-yellow-500 to-green-500"
  },
  {
    year: "2022",
    title: t('history.timeline.2022.title'),
    description: t('history.timeline.2022.description'),
    icon: <Users className="w-6 h-6" />,
    color: "from-green-500 to-teal-500"
  },
  {
    year: "T1/2023",
    title: t('history.timeline.T1/2023.title'),
    description: t('history.timeline.T1/2023.description'),
    icon: <Zap className="w-6 h-6" />,
    color: "from-teal-500 to-cyan-500"
  },
  {
    year: "T7/2023",
    title: t('history.timeline.T7/2023.title'),
    description: t('history.timeline.T7/2023.description'),
    icon: <Building2 className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-500"
  },
  {
    year: "2024",
    title: t('history.timeline.2024.title'),
    description: t('history.timeline.2024.description'),
    icon: <Globe className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-500"
  }
]

export function HistoryTimeline() {
  const t = useTranslations()
  const timelineEvents = getTimelineEvents(t)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/90 to-gray-50/95" />
          <img 
            src="/slider01-Large-768x445.png" 
            alt="Modern Business Skyline" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="mb-8 px-8 py-3 text-lg font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-all duration-500 hover:scale-110 shadow-xl border border-blue-200">
                {t('history.hero.badge')}
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent leading-tight tracking-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {t('history.hero.title')}
              </motion.span>
            </motion.h1>
            
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-6 font-light">
                {t('history.hero.description1')}
              </p>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                {t('history.hero.description2')}
              </p>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="mt-16 flex justify-center space-x-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
              <motion.div 
                className="w-3 h-3 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 relative bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-2 transform md:-translate-x-1/2 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-blue-400 via-indigo-500 via-purple-500 via-blue-600 to-indigo-700" />
            </div>
            
            {/* Timeline Events */}
            <div className="space-y-20">
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-12`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-8 h-8 bg-gradient-to-r ${event.color} rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-xl z-20`}>
                    <div className="absolute inset-2 bg-white/60 rounded-full" />
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-200 hover:border-blue-300 group relative overflow-hidden">
                        <CardContent className="p-8 md:p-10 relative z-10">
                          <div className={`flex items-start space-x-6 ${index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse md:space-x-6' : ''}`}>
                            <div className="flex-shrink-0">
                              <div className={`w-16 h-16 bg-gradient-to-r ${event.color} rounded-2xl flex items-center justify-center shadow-xl border border-white/30`}>
                                <div className="text-white">
                                  {event.icon}
                                </div>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-4">
                                <Calendar className="w-5 h-5 text-blue-600" />
                                <span className="text-lg font-bold text-blue-700 bg-blue-100 px-4 py-2 rounded-full border border-blue-200">
                                  {event.year}
                                </span>
                              </div>
                              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                                {event.title}
                              </h3>
                              <p className="text-gray-600 leading-relaxed text-lg">
                                {event.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                  
                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-8 px-8 py-4 text-xl font-bold bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-500 hover:scale-110 shadow-xl border border-blue-200">
                {t('history.summary.badge')}
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent leading-tight"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('history.summary.title')}
              <br />
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {t('history.summary.subtitle')}
              </motion.span>
            </motion.h2>
            
            <motion.div 
              className="max-w-4xl mx-auto mb-16"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-6 font-light">
                {t('history.summary.description1')}
              </p>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                {t('history.summary.description2')}
              </p>
            </motion.div>
            
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <motion.div 
                className="group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-amber-500/20 transition-all duration-700 border border-slate-600/50 hover:border-amber-400/50 relative overflow-hidden">
                  <div className="relative z-10">
                    <motion.div 
                      className="text-5xl md:text-6xl font-black text-amber-400 mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t('history.statistics.depots.number')}
                    </motion.div>
                    <div className="text-xl text-slate-300 font-semibold group-hover:text-amber-200 transition-colors duration-500">{t('history.statistics.depots.title')}</div>
                    <div className="text-sm text-slate-400 mt-2 group-hover:text-slate-300 transition-colors duration-500">{t('history.statistics.depots.subtitle')}</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 border border-slate-600/50 hover:border-blue-400/50 relative overflow-hidden">
                  <div className="relative z-10">
                    <motion.div 
                      className="text-5xl md:text-6xl font-black text-blue-400 mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t('history.statistics.companies.number')}
                    </motion.div>
                    <div className="text-xl text-slate-300 font-semibold group-hover:text-blue-200 transition-colors duration-500">{t('history.statistics.companies.title')}</div>
                    <div className="text-sm text-slate-400 mt-2 group-hover:text-slate-300 transition-colors duration-500">{t('history.statistics.companies.subtitle')}</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 border border-slate-600/50 hover:border-purple-400/50 relative overflow-hidden">
                  <div className="relative z-10">
                    <motion.div 
                      className="text-5xl md:text-6xl font-black text-purple-400 mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t('history.statistics.experience.number')}
                    </motion.div>
                    <div className="text-xl text-slate-300 font-semibold group-hover:text-purple-200 transition-colors duration-500">{t('history.statistics.experience.title')}</div>
                    <div className="text-sm text-slate-400 mt-2 group-hover:text-slate-300 transition-colors duration-500">{t('history.statistics.experience.subtitle')}</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative bottom elements */}
            <motion.div 
              className="mt-20 flex justify-center space-x-12"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full" />
              <motion.div 
                className="w-4 h-4 bg-amber-400 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
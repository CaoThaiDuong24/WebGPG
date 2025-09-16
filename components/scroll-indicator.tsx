'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      {/* Progress Bar */}
      <div className="w-1 h-32 bg-gray-200/30 rounded-full overflow-hidden">
        <motion.div
          className="w-full bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"
          style={{ scaleY: scrollYProgress }}
          transformOrigin="top"
        />
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-blue-500" />
      </motion.div>
    </div>
  )
}

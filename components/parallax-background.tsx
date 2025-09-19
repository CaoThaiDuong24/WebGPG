'use client'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxBackgroundProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export function ParallaxBackground({ children, className = "", intensity = 0.3 }: ParallaxBackgroundProps) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${intensity * 100}%`])

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ y }}
    >
      {children}
    </motion.div>
  )
}

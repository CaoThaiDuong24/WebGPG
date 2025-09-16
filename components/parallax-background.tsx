'use client'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function ParallaxBackground({ children, className = "" }: ParallaxBackgroundProps) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={{ y }}
    >
      {children}
    </motion.div>
  )
}

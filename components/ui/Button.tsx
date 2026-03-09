'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-brand-blue text-white hover:bg-brand-blue-light shadow-[0_0_20px_#3B82F644] hover:shadow-[0_0_30px_#3B82F666]',
    secondary: 'border border-white/10 text-white hover:border-white/30 hover:bg-white/5',
    ghost: 'text-white/60 hover:text-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </motion.button>
  )
}

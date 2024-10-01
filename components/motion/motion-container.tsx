"use client"
import { FC } from "react"
import { HTMLMotionProps, motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { headingVariants } from "../ui/Heading"

interface MotionContainerProps extends HTMLMotionProps<"div"> {}

export const motion_container = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
}

export const motion_item = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}
export const motion_item_x_shift = {
  initial: { x: 0 },
  animate: {
    x: 10,
  },
}
export const motion_item_x_shift_parent = {
  animate: {
    transition: {
      delayChildren: 0,
    },
  },
}

const MotionContainer: FC<MotionContainerProps> = ({ children, initial, animate, ...props }) => {
  return (
    <motion.div initial={initial} animate={animate} {...props}>
      {children}
    </motion.div>
  )
}

export default MotionContainer

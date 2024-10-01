"use client"
import { FC } from "react"
import { HTMLMotionProps, motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { headingVariants } from "../ui/Heading"

interface MotionHeadingProps extends HTMLMotionProps<"h1">, VariantProps<typeof headingVariants> {}

export const animated_heading = {
  default_state: { opacity: 0, y: 20 },
  visible_state: {
    opacity: 1,
    y: 0,
  },
}

const MotionHeading: FC<MotionHeadingProps> = ({ children, className, size, variant, initial, animate, ...props }) => {
  return (
    <motion.h1 initial={initial} animate={animate} className={cn(headingVariants({ size, variant, className }), "animated_heading")} {...props}>
      {children}
    </motion.h1>
  )
}

export default MotionHeading

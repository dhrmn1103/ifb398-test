"use client"
import { FC } from "react"
import { HTMLMotionProps, motion } from "framer-motion"

interface MotionItemProps extends HTMLMotionProps<"span"> {}

const MotionItem: FC<MotionItemProps> = ({ children, ...props }) => {
  return <motion.span {...props}>{children}</motion.span>
}

export default MotionItem

import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

export const paragraphVariants = cva("max-w-prose text-slate-700 dark:text-slate-300 mb-2", {
  variants: {
    size: {
      default: "text-base sm:text-lg",
      sm: "text-sm sm:text-base",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphVariants> {}

// this allows this component to use all of the props of a standard html paragraph element and also the custom variant props of the paragraphVariants object
const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(({ className, size, children, ...props }, ref) => {
  return (
    <p ref={ref} {...props} className={cn(paragraphVariants({ size, className }))}>
      {children}
    </p>
  )
})

Paragraph.displayName = "Paragraph"

export default Paragraph

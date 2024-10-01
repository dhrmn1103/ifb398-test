import { FC } from "react"

import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"

export const headingVariants = cva("text-slate-800 dark:text-white text-center lg:text-left leading-tight tracking-tighter font-semibold", {
  variants: {
    size: {
      default: "text-4xl md:text-5xl lg:text-6xl",
      xl: "text-5xl md:text-7xl xl:text-9xl",
      lg: "text-5xl md:text-6xl lg:text-7xl",
      sm: "text-2xl md:text-3xl lg:text-4xl",
      xsm: "text-base md:text-xl ",
    },
    variant: {
      default: "",
      supportive: "text-purple-primary uppercase tracking-wide",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {}

const Heading: FC<HeadingProps> = ({ children, className, size, variant, ...props }) => {
  return (
    <h1 {...props} className={cn(headingVariants({ size, variant, className }))}>
      {children}
    </h1>
  )
}

export default Heading

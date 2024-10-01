import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import React from "react"

export const columnVariants = cva("gap-6 max-w-[80vw]", {
  variants: {
    variant: {
      horizontal: "flex",
      vertical: "flex flex-col justify-center ",
    },
  },
  defaultVariants: {
    variant: "horizontal",
  },
})

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof columnVariants> {
  children: React.ReactNode
}

const Column = React.forwardRef<HTMLDivElement, ColumnProps>(({ children, className, variant, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(columnVariants({ variant, className }))} {...props}>
      {children}
    </div>
  )
})

Column.displayName = "Column"

export default Column

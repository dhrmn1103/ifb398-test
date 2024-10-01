import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap font-medium rounded-lg text-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-slate-800 text-primary-foreground shadow hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "bg-none font-normal text-slate-800/80 hover:text-slate-800 transition",
      CTA: "bg-purple-primary text-slate-50 font-semibold tracking-wide",
      contact: "font-semibold bg-slate-50 tracking-wide border border-slate-700/10",
      none: "",
    },
    size: {
      xsm: "px-2 py-1",
      sm: "px-3 py-2",
      default: "px-4 py-2",
      lg: "px-6 py-3",
      xl: "px-8 py-4",
      none: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  showLoader?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, disabled, showLoader = false, children, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  if (showLoader) {
    return (
      <Comp disabled={disabled} className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {disabled && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
        {children}
      </Comp>
    )
  }
  return (
    <Comp disabled={disabled} className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
      {children}
    </Comp>
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }

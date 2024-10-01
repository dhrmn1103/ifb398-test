import { cn } from "@/lib/utils"
import React, { FC } from "react"

interface ColumnItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const ColumnItem: FC<ColumnItemProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {children}
    </div>
  )
}

export default ColumnItem

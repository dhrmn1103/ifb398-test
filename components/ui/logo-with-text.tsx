import React, { FC } from "react"
import { Logo } from "../svgs"
import Heading from "./Heading"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface LogoWithTextProps {
  className?: string
}

const LogoWithText: FC<LogoWithTextProps> = ({ className }) => {
  return (
    <Link href={"/"} className={cn("inline-flex gap-2 items-center", className)}>
      <Logo className="w-6 h-5 " />
      <Heading size="xsm" className="text-2xl font-bold">
        Unfaircontracts
      </Heading>
    </Link>
  )
}

export default LogoWithText

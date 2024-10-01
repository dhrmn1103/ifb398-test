"use client"

import { HelpCircle, Info, Mail, Menu, MousePointerClick, UserRoundCog, XIcon } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { useState } from "react"
import { Button } from "./ui/button"
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu"

const MobileMenu = () => {
  const [open, setNavOpen] = useState<boolean>(false)
  return (
    <nav className="md:hidden relative z-50  flex justify-center">
      <div className="rounded-lg w-10 ml-2">
        <DropdownMenu open={open} onOpenChange={setNavOpen}>
          <DropdownMenuTrigger asChild className="border-slate-300 shadow-lg bg-slate-50" onClick={() => setNavOpen((prev) => !prev)}>
            <Button variant="outline" size="sm" className="ml-2 w-10 h-10 ">
              {open ? <XIcon className="scale-125" /> : <Menu className="scale-125" />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 z-[60]">
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer rounded hover:bg-slate-100/10 transition-all" asChild>
                <Link href="/#about" className="w-full flex items-center gap-1.5 text-gray-950 dark:text-slate-100 ">
                  <Info className="mr-2 h-5 w-5" />
                  <span>About</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded hover:bg-slate-100/10 transition-all" asChild>
                <Link href="/#services" className="w-full flex items-center gap-1.5 text-gray-950 dark:text-slate-100 ">
                  <UserRoundCog className="mr-2 h-5 w-5" />
                  <span>Services</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded hover:bg-slate-100/10 transition-all" asChild>
                <Link href="/faq" className="w-full flex items-center gap-1.5 text-gray-950 dark:text-slate-100 ">
                  <HelpCircle className="mr-2 h-5 w-5" />
                  <span>FAQ</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded hover:bg-slate-100/10 transition-all" asChild>
                <Link href="/contact-us" className="w-full flex items-center gap-1.5 text-gray-950 dark:text-slate-100 ">
                  <Mail className="mr-2 h-5 w-5" />
                  <span>Contact Us</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded hover:bg-slate-100/10 transition-all" asChild>
                <Link href="/auth/login" className="w-full flex items-center gap-1.5 text-gray-950 dark:text-slate-100 ">
                  <MousePointerClick className="mr-2 h-5 w-5" />
                  <span>Get Started</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default MobileMenu

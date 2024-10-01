import React, { FC } from "react"
import { Button } from "./ui/button"
import { LoginButton } from "./auth/login-button"
import Link from "next/link"
import MobileMenu from "./mobile-menu"
import LogoWithText from "./ui/logo-with-text"
import { UserButton } from "./auth/user-button"

interface NavBarProps {
  children?: React.ReactNode
}

const NavBar: FC<NavBarProps> = async () => {
  return (
    <nav className="fixed md:backdrop-blur-sm bg-none md:bg-white/75 z-20  top-0 left-0 right-0 h-20 md:border-b px-6 md:border-slate-300  md:shadow-sm flex items-center justify-between">
      <div className=" w-full flex justify-end md:justify-between items-center">
        <LogoWithText className="max-md:hidden" />
        <div className="flex md:hidden">
          <MobileMenu />
        </div>

        <div className="hidden md:flex gap-4">
          <Button variant="link" size="sm" className="hover-underline-animation">
            <Link href="/#about">About</Link>
          </Button>
          <Button variant="link" size="sm" className="hover-underline-animation">
            <Link href="/#services">Services</Link>
          </Button>
          <Button variant="link" size="sm" className="hover-underline-animation">
            <Link href="/faq">FAQ</Link>
          </Button>
          <Button variant="link" size="sm" className="hover-underline-animation">
            <Link href="/contact-us">Contact Us</Link>
          </Button>
          <LoginButton asChild>
            <Button variant="CTA" size="sm">
              Get Started
            </Button>
          </LoginButton>
          <UserButton />
        </div>
      </div>
    </nav>
  )
}

export default NavBar

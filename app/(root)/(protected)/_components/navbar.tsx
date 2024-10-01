"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { UserButton } from "@/components/auth/user-button"

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="bg-card gap-x-2 flex justify-between items-center p-4 rounded-xl max-w-[80vw] w-[600px] shadow-sm scrollbar-x ">
      <div className="flex gap-x-2">
        <Button asChild variant={pathname === "/profile" ? "default" : "outline"}>
          <Link href="/profile">🤵 Profile</Link>
        </Button>
        <Button asChild variant={pathname === "/settings" ? "default" : "outline"}>
          <Link href="/settings">⚙️ Settings</Link>
        </Button>
      </div>
    </nav>
  )
}

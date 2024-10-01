"use client"

import { FaUser } from "react-icons/fa"
import { ExitIcon } from "@radix-ui/react-icons"

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useCurrentUser } from "@/hooks/use-current-user"
import { LogoutButton } from "@/components/auth/logout-button"
import Link from "next/link"
import { Cog } from "lucide-react"

export const UserButton = () => {
  const user = useCurrentUser()

  if (!user) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 -translate-x-4">
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer rounded hover:bg-slate-100/10 transition-all" asChild>
            <Link href="/settings">
              <Cog className="mr-2 h-5 w-5" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <LogoutButton>
            <DropdownMenuItem className="cursor-pointer rounded hover:bg-slate-100/10 transition-all">
              <ExitIcon className="h-5 w-5 mr-2" />
              Logout
            </DropdownMenuItem>
          </LogoutButton>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

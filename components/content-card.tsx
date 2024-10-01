import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Box, ChevronRight } from "lucide-react"
import Paragraph from "./ui/Paragraph"
import Link from "next/link"
import MotionItem from "./motion/motion-item"
import MotionContainer, { motion_item_x_shift, motion_item_x_shift_parent } from "./motion/motion-container"

interface ContentCardProps {
  children: React.ReactNode
  footerMessage?: string
}

export const ContentCard = ({ children, footerMessage }: ContentCardProps) => {
  return (
    <Card className="w-[500px] shadow-lg aspect-square bg-slate-50">
      <CardHeader>
        <div className="p-2 w-max aspect-square bg-indigo-500/15 rounded-lg">
          <Box className="stroke-purple-primary" />
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footerMessage && (
        <CardFooter>
          <Link href="#services">
            <MotionItem variants={motion_item_x_shift_parent} initial="initial" whileHover="animate" whileTap="animate" className="flex ">
              <Paragraph className="font-semibold text-purple-primary">{footerMessage}</Paragraph>
              <MotionContainer className="font-semibold p-1 text-purple-primary" variants={motion_item_x_shift}>
                <ChevronRight />
              </MotionContainer>
            </MotionItem>
          </Link>
        </CardFooter>
      )}
    </Card>
  )
}
;` `

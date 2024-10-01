import { LoginButton } from "@/components/auth/login-button"
import { ContentCard } from "@/components/content-card"
import MotionContainer, { motion_container, motion_item } from "@/components/motion/motion-container"
import MotionHeading, { animated_heading } from "@/components/motion/motion-heading"
import MotionItem from "@/components/motion/motion-item"
import Heading from "@/components/ui/Heading"
import Paragraph from "@/components/ui/Paragraph"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"
import React, { FC } from "react"

interface SocialProofSectionProps {}

const SocialProofSection: FC<SocialProofSectionProps> = ({}) => {
  return (
    <section id="social-proof" className="items-center  min-h-[40vh]  pt-36 flex flex-col gap-28">
      <MotionContainer variants={motion_container} initial="hidden" whileInView="visible" exit="hidden" className="h-full flex flex-col max-w-[80%] justify-start items-center">
        <MotionHeading variants={motion_item} size="xsm" className="text-slate-50 uppercase">
          Supportive text
        </MotionHeading>
        <MotionHeading variants={motion_item} size="xl" className="text-slate-50  ">
          Header
        </MotionHeading>
        <MotionItem variants={motion_item} className="flex gap-6 my-8">
          <LoginButton asChild>
            <Button size="lg" variant="contact" className="shadow-md">
              Get Started
            </Button>
          </LoginButton>
          <Link href="/contact-us">
            <Button size="lg" variant="contact" className="shadow-md bg-[#19154E] text-slate-50">
              Get In Touch!
            </Button>
          </Link>
        </MotionItem>
      </MotionContainer>
      <TagList />
    </section>
  )
}

export default SocialProofSection

type InfiniteLoopSliderProps = {
  children: React.ReactNode
  duration: number
  reverse?: boolean
}

type TagProps = {
  text: string
}

const TAGS = [
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
  "Customer Review",
]

const DURATION = 200000
const ROWS = 2
const TAGS_PER_ROW = 20

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min
const shuffle = (arr: string[]) => [...arr].sort(() => 0.5 - Math.random())

const InfiniteLoopSlider: React.FC<InfiniteLoopSliderProps> = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={
        {
          "--duration": `${duration}ms`,
          "--direction": reverse ? "reverse" : "normal",
        } as React.CSSProperties
      }
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  )
}

const Tag: React.FC<TagProps> = ({ text }) => (
  <div className="tag shadow-lg text-slate-50 bg-[#19154E] flex items-center ">
    <Star className="fill-yellow-500 stroke-yellow-500" /> {text}
  </div>
)

const TagList: React.FC = () => (
  <MotionContainer variants={motion_container} initial="hidden" whileInView="visible" exit="hidden" className="tag-list">
    <MotionContainer variants={motion_item} className="flex flex-col gap-6">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2 == 1}>
          {shuffle(TAGS)
            .slice(0, TAGS_PER_ROW)
            .map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
        </InfiniteLoopSlider>
      ))}
    </MotionContainer>
    <div className="fade" />
  </MotionContainer>
)

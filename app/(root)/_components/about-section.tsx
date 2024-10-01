import { ContentCard } from "@/components/content-card"
import MotionContainer, { motion_container, motion_item } from "@/components/motion/motion-container"
import MotionHeading, { animated_heading } from "@/components/motion/motion-heading"
import MotionItem from "@/components/motion/motion-item"
import Heading from "@/components/ui/Heading"
import Paragraph from "@/components/ui/Paragraph"
import React, { FC } from "react"

interface AboutSectionProps {}

const AboutSection: FC<AboutSectionProps> = ({}) => {
  return (
    <section id="about" className="items-center min-h-[80vh] pt-36 flex flex-col gap-28">
      <MotionContainer variants={motion_container} initial="hidden" whileInView="visible" exit="hidden" className="h-full flex flex-col max-w-[80%] justify-start items-center">
        <MotionHeading variants={motion_item} size="xsm" className="text-purple-primary uppercase">
          Supportive text
        </MotionHeading>
        <MotionHeading variants={motion_item} size="xl" className="text-slate-800  ">
          Header
        </MotionHeading>
      </MotionContainer>
      <MotionContainer variants={motion_container} initial="hidden" whileInView="visible" exit="hidden" className="flex gap-16 flex-wrap w-full justify-center">
        <MotionItem variants={motion_item} className="flex gap-6">
          <ContentCard footerMessage="Learn More">
            <Heading size="xsm" className="mb-2 text-left">
              Card Heading
            </Heading>
            <Paragraph>Card content goes here</Paragraph>
          </ContentCard>
        </MotionItem>
        <MotionItem variants={motion_item} className="flex gap-6">
          <ContentCard>
            <Heading size="xsm" className="mb-2 text-left">
              Card Heading
            </Heading>
            <Paragraph>Card content goes here</Paragraph>
          </ContentCard>
        </MotionItem>
        <MotionItem variants={motion_item} className="flex gap-6">
          <ContentCard footerMessage="See How It Works">
            <Heading size="xsm" className="mb-2 text-left">
              Card Heading
            </Heading>
            <Paragraph>Card content goes here</Paragraph>
          </ContentCard>
        </MotionItem>
      </MotionContainer>
    </section>
  )
}

export default AboutSection

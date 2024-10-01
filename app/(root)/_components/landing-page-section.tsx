import React, { FC } from "react"
import { LoginButton } from "@/components/auth/login-button"
import Heading from "@/components/ui/Heading"
import Paragraph from "@/components/ui/Paragraph"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import MotionContainer, { motion_container, motion_item } from "@/components/motion/motion-container"
import MotionItem from "@/components/motion/motion-item"
import Image from "next/image"
import BrisbaneCityImg from "@/public/brisbane city.png"

interface LandingSectionProps {}

const LandingPageSection: FC<LandingSectionProps> = ({}) => {
  return (
    <section className="gap-32 min-h-screen items-center lg:justify-around flex flex-col lg:flex-row max-lg:pt-28">
      <MotionContainer variants={motion_container} viewport={{ once: true }} initial="hidden" whileInView="visible" className="h-full gap-6 flex flex-col justify-start lg:justify-center bg-rad items-center lg:items-start">
        <MotionItem variants={motion_item}>
          <Heading size="xsm" variant="supportive">
            Construct with Confidence
          </Heading>
          <Heading size="xl" className="text-slate-800  ">
            Contract Solutions
          </Heading>
        </MotionItem>

        <MotionItem variants={motion_item}>
          <Paragraph className="max-w-xl lg:text-left">Understand your building contract, rights and obligations to have the best building experience possible</Paragraph>
        </MotionItem>
        <MotionItem variants={motion_item} className="flex gap-6">
          <LoginButton asChild>
            <Button size="lg" variant="CTA" className="shadow-md">
              Get Started
            </Button>
          </LoginButton>
          <Link href="/contact-us">
            <Button size="lg" variant="contact" className="shadow-md">
              Get In Touch!
            </Button>
          </Link>
        </MotionItem>
      </MotionContainer>

      <Image src={BrisbaneCityImg} alt="Brisbane City" className="w-[800px] max-w-[80vw] max-h-[70vh] text-center rounded-2xl text-slate-800/50 flex justify-center items-center bg-opacity-65 shadow-xl" />
    </section>
  )
}

export default LandingPageSection

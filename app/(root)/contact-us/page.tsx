import { ContactForm } from "@/components/contact-form"
import MotionContainer, { motion_container, motion_item, motion_item_x_shift, motion_item_x_shift_parent } from "@/components/motion/motion-container"
import MotionHeading from "@/components/motion/motion-heading"
import MotionItem from "@/components/motion/motion-item"
import Paragraph from "@/components/ui/Paragraph"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { FC } from "react"

const Faq: FC = () => {
  return (
    <div className="w-full px-10 py-20 gap-24 flex justify-center max-lg:flex-col items-center lg:items-start">
      <div className="flex gap-20 flex-col">
        <MotionContainer variants={motion_container} viewport={{ once: true }} initial="hidden" whileInView="visible" className="h-full w-full flex flex-col  items-center lg:items-start ">
          <MotionHeading variants={motion_item} size="xsm" className="text-purple-primary uppercase">
            contact us
          </MotionHeading>
          <MotionHeading variants={motion_item} size="lg" className="max-w-[600px]">
            We Can Help
          </MotionHeading>
        </MotionContainer>
        <ContactForm />
      </div>

      <MotionContainer variants={motion_container} initial="hidden" whileInView="visible" exit="hidden" className="h-full flex flex-col gap-12 lg:mt-[200px]">
        <div className="flex flex-col gap-4">
          <MotionHeading variants={motion_item} size="sm" className="text-slate-800  ">
            Get in touch
          </MotionHeading>
          <MotionContainer variants={motion_item} className="text-slate-800  ">
            <Paragraph className="max-w-xl text-center lg:text-left">Description</Paragraph>
          </MotionContainer>
        </div>
        <div className="flex flex-col gap-4">
          <MotionHeading variants={motion_item} size="sm" className="text-slate-800  ">
            Address
          </MotionHeading>
          <MotionContainer variants={motion_item} className="text-slate-800  ">
            <Paragraph className="max-w-xl text-center lg:text-left">unit 3000</Paragraph>
            <Paragraph className="max-w-xl text-center lg:text-left">xyz street, 4000</Paragraph>
            <Paragraph className="max-w-xl text-center lg:text-left">Ausstralia</Paragraph>
          </MotionContainer>
        </div>
        <div className="flex flex-col gap-4">
          <MotionContainer variants={motion_item} className="text-slate-800  ">
            <MotionItem variants={motion_item_x_shift_parent} initial="initial" whileHover="animate" whileTap="animate" className="flex ">
              <Link href={"mailto:support@unfaircontracts.com"} className="">
                <Paragraph className="font-semibold text-center lg:text-left text-purple-primary">support@unfaircontracts.com</Paragraph>
              </Link>
              <MotionContainer className="font-semibold p-1 text-purple-primary" variants={motion_item_x_shift}>
                <ChevronRight />
              </MotionContainer>
            </MotionItem>
            <Paragraph className="max-w-xl font-semibold text-center lg:text-left text-purple-primary">tel: 3333 333 333</Paragraph>
          </MotionContainer>
        </div>
      </MotionContainer>
    </div>
  )
}

export default Faq

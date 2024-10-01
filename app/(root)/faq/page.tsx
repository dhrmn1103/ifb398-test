import MotionContainer, { motion_container, motion_item } from "@/components/motion/motion-container"
import MotionHeading from "@/components/motion/motion-heading"
import Heading from "@/components/ui/Heading"
import Paragraph from "@/components/ui/Paragraph"
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/components/ui/accordion"
import { FC } from "react"

const Faq: FC = () => {
  return (
    <div className="w-full px-6 py-20 flex gap-20 flex-col items-center justify-center ">
      <MotionContainer variants={motion_container} initial="hidden" whileInView="visible" exit="hidden" className="h-full flex flex-col max-w-[80%] justify-start items-center">
        <MotionHeading variants={motion_item} size="xsm" className="text-purple-primary uppercase">
          FAQ
        </MotionHeading>
        <MotionHeading variants={motion_item} size="lg" className="lg:text-center max-w-[600px]">
          Frequently Asked Questions
        </MotionHeading>
      </MotionContainer>
      <Heading className="lg:text-center max-w-[600px] dark:text-light-gold"></Heading>
      <Accordion className=" bg-slate-100/0 dark:bg-slate-100/0 border border-none flex flex-col   gap-10 w-full max-w-6xl rounded-md  " type="single" defaultValue="item-1" collapsible>
        <AccordionItem className="shadow-lg border border-slate-800/10" value="Q1">
          <AccordionTrigger className="h-auto min-h-[60px] py-2">
            <Paragraph className="text-purple-primary m-0 text-left max-w-[85%]">Question</Paragraph>
          </AccordionTrigger>
          <AccordionContent>Answer....</AccordionContent>
        </AccordionItem>
        <AccordionItem className="shadow-lg border border-slate-800/10" value="Q2">
          <AccordionTrigger className="h-auto min-h-[60px] py-2">
            <Paragraph className="text-purple-primary m-0 text-left max-w-[85%]">Question</Paragraph>
          </AccordionTrigger>
          <AccordionContent>Answer....</AccordionContent>
        </AccordionItem>
        <AccordionItem className="shadow-lg border border-slate-800/10" value="Q3">
          <AccordionTrigger className="h-auto min-h-[60px] py-2">
            <Paragraph className="text-purple-primary m-0 text-left max-w-[85%]">Question</Paragraph>
          </AccordionTrigger>
          <AccordionContent>Answer....</AccordionContent>
        </AccordionItem>
        <AccordionItem className="shadow-lg border border-slate-800/10" value="Q4">
          <AccordionTrigger className="h-auto min-h-[60px] py-2">
            <Paragraph className="text-purple-primary m-0 text-left max-w-[85%]">Question</Paragraph>
          </AccordionTrigger>
          <AccordionContent>Answer....</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Faq

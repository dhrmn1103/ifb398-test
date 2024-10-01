import React, { FC } from "react"
import { LoginButton } from "@/components/auth/login-button"
import Heading from "@/components/ui/Heading"
import Paragraph from "@/components/ui/Paragraph"
import { Button } from "@/components/ui/button"
import MotionContainer, { motion_container, motion_item } from "@/components/motion/motion-container"
import MotionItem from "@/components/motion/motion-item"
import { CircleEllipsis } from "lucide-react"
import PeopleTalkingImg from "@/public/talking-people.png"
import Image from "next/image"

interface StickyImageSectionProps {}

const StickyImageSection: FC<StickyImageSectionProps> = ({}) => {
  return (
    <section className="gap-16 lg:justify-around flex flex-col max-lg:items-center lg:flex-row pt-28">
      <MotionContainer className="h-max lg:!sticky top-36 cursor-pointer" whileHover={{ rotate: -2, scale: 1.05 }}>
        <Image src={PeopleTalkingImg} alt="People Talking" className="max-h-[500px] rounded-2xl w-auto text-center text-slate-800/50 flex justify-center items-center bg-opacity-65 shadow-lg" />
      </MotionContainer>
      <div className="flex flex-col lg:max-w-[50%] gap-32">
        <MotionContainer variants={motion_container} initial="hidden" whileInView="visible" className="lg:min-h-[300px] gap-6 flex flex-col  ">
          <MotionItem variants={motion_item}>
            <Heading size="lg" className="text-slate-800 text-left max-lg:text-center">
              Our Services
            </Heading>
            <Paragraph className="max-w-xl text-left max-lg:text-center">We provide a 1-page report based on an analysis of your proposed Building Contract, helping you to identify positive and negative contract elements, providing contextual advice regarding your contract that you can take to your professional legal advisor for further information (with increased focus and reduced expense) to help you make high-value purchase decisions.</Paragraph>
          </MotionItem>

          <MotionItem variants={motion_item} className="flex gap-6 max-lg:justify-center">
            <LoginButton asChild>
              <Button size="lg" variant="CTA" className="shadow-md">
                Get Started
              </Button>
            </LoginButton>
          </MotionItem>
        </MotionContainer>
        <MotionContainer variants={motion_container} initial="hidden" whileInView="visible" className="lg:min-h-[300px] gap-6 flex flex-col  ">
          <MotionItem variants={motion_item} className="flex flex-col gap-6 max-lg:items-center">
            <CircleEllipsis className="w-12 h-12 stroke-slate-50 bg-purple-primary p-2 rounded-full" />
            <Heading size="lg" className="text-slate-800  ">
              Check your Contract
            </Heading>
            <Paragraph className="max-w-xl text-left max-lg:text-center">
              Our advertising portal showcases builders, legal advisors and other service providers who present ethically based services (finance, building, legal, accounting, etc.) to the client base after you&apos;ve been able to evaluate your contract in the context of the &apos;Contract Solutions&apos; stamp of approval for fairer contracts in your building process.
              <ol className="flex flex-col gap-4 max-w-prose text-slate-700 my-4 ml-4 italic dark:text-slate-300 text-base sm:text-sm">
                <li>
                  <span className="font-semibold">1. Budget overruns</span> - One of the most common complaints is that the final cost exceeded the initial budget estimates, which can happen due to unforeseen issues, material cost increases, change orders, or inaccurate initial budgeting.
                </li>
                <li>
                  <span className="font-semibold">2. Time delays</span> - Construction projects often take longer than anticipated, which can be frustrating and disruptive for homeowners, especially if you have to make temporary living arrangements.
                </li>
                <li>
                  <span className="font-semibold">3. Communication issues</span> - Poor communication from the builder, architect, and subcontractors can lead to misunderstandings, unrealistic expectations, and dissatisfaction in the process and with the final product.
                </li>
                <li>
                  <span className="font-semibold">4. Quality issues</span> - If the workmanship or materials used are subpar, it can result in defects, callbacks, and overall disappointment with the quality of the build.
                </li>
                <li>
                  <span className="font-semibold">5. Lack of homeowner involvement</span> - Some homeowners feel left out of the decision-making process or find that their preferences were not adequately considered or incorporated.
                </li>
                <li>
                  <span className="font-semibold">6. Personality clashes</span> - Differences in communication styles, values, or personalities between the homeowner and the builder involved can create tension and conflict.
                </li>
              </ol>
              Check your contract to see where you stand.
            </Paragraph>
          </MotionItem>
        </MotionContainer>
        <MotionContainer variants={motion_container} initial="hidden" whileInView="visible" className="lg:min-h-[300px] gap-6 flex flex-col  ">
          <MotionItem variants={motion_item} className="flex flex-col gap-6 max-lg:items-center">
            <CircleEllipsis className="w-12 h-12 stroke-slate-50 bg-purple-primary p-2 rounded-full" />
            <Heading size="lg" className="text-slate-800  ">
              Learning Modules
            </Heading>
            <Paragraph className="max-w-xl text-left max-lg:text-center">
              To help improve the experience for homeowners, our service can help in several ways, by:
              <ol className="flex flex-col gap-4 max-w-prose text-slate-700 my-4 ml-4 italic dark:text-slate-300 text-base sm:text-sm">
                <li>
                  <span className="font-semibold">1. Improving communication</span> - Regular progress meetings, clear documentation, client centric-contracts, and open lines of communication can help prevent misunderstandings and keep everyone informed.
                </li>
                <li>
                  <span className="font-semibold">2. Involving you as the homeowner</span> – We encourage homeowner participation in decision-making processes and promote their input throughout the project.
                </li>
                <li>
                  <span className="font-semibold">3. Using experienced professionals</span> - Work with reputable, experienced builders, architects, and contractors who have a track record of delivering quality work and good customer service
                </li>
                <li>
                  <span className="font-semibold">4. Managing budgets carefully</span> - Cost estimates and contingency plans for potential overruns, and transparency about any changes or additional costs
                </li>
                <li>
                  <span className="font-semibold">5. Emphasizing the quality providers and quality service</span> - We promote the value of prioritizing high-quality materials and skilled labour (but most people want to go by price).
                </li>
                <li>
                  <span className="font-semibold">6. Promoting realistic expectations</span> - clearly understanding the potential challenges, timelines, and costs upfront to help set appropriate expectations (and manage them with your service providers)
                </li>
              </ol>
              Check out our learning modules to take you through some project management/service provider solutions.
            </Paragraph>
          </MotionItem>
        </MotionContainer>
        <MotionContainer variants={motion_container} initial="hidden" whileInView="visible" className="lg:min-h-[300px] gap-6 flex flex-col  ">
          <MotionItem variants={motion_item} className="flex flex-col gap-6 max-lg:items-center">
            <CircleEllipsis className="w-12 h-12 stroke-slate-50 bg-purple-primary p-2 rounded-full" />
            <Heading size="lg" className="text-slate-800  ">
              Pricing Estimator
            </Heading>
            <Paragraph className="max-w-xl text-left max-lg:text-center">
              Using a cost pricing estimator can provide several valuable benefits for understanding what builders are charging and being able to sense check reasonable costs scenarios:
              <ol className="flex flex-col gap-4 max-w-prose text-slate-700 my-4 ml-4 italic dark:text-slate-300 text-base sm:text-sm">
                <li>
                  <span className="font-semibold">1. Pricing Transparency</span>: A good estimator tool can break down the various cost components that go into a construction project, giving you better visibility into what you&apos;re paying for and why.
                </li>
                <li>
                  <span className="font-semibold">2. Budget Planning</span>: With a detailed cost breakdown, you can more accurately budget and plan for the expenses involved in your construction project.
                </li>
                <li>
                  <span className="font-semibold">3. Competitive Pricing</span>: By understanding typical pricing in your area, you can ensure you are getting competitive quotes from builders and not overpaying.
                </li>
                <li>
                  <span className="font-semibold">4. Negotiate Effectively</span>: Armed with pricing knowledge, you are in a better position to negotiate rates and costs with potential builders.
                </li>
                <li>
                  <span className="font-semibold">5. Identify Cost Savings</span>: The estimator may reveal areas where you can potentially save money by making different material or design choices.
                </li>
              </ol>
              There are a variety of potential pricing information sources that builders work with:
              <ol className="flex flex-col gap-4 max-w-prose text-slate-700 my-4 ml-4 italic dark:text-slate-300 text-base sm:text-sm">
                <li>
                  <span className="font-semibold">1. Industry Pricing Databases</span>: subscription-based databases that provide detailed construction cost data used by professionals.
                </li>
                <li>
                  <span className="font-semibold">2. Builder Associations</span>: Local or national home builder associations compile and publish regional construction cost data for their members.
                </li>
                <li>
                  <span className="font-semibold">3. Suppliers and Subcontractors</span>: Builders get pricing from the suppliers and subcontractors they work with regularly.
                </li>
                <li>
                  <span className="font-semibold">4. Construction Estimating Software</span>: Specialized software that have updated pricing libraries.
                </li>
                <li>
                  <span className="font-semibold">5. Online Cost Guides</span>: There are websites that crowdsource construction pricing data from consumers and professionals.
                </li>
              </ol>
            </Paragraph>
          </MotionItem>
        </MotionContainer>

        <MotionContainer variants={motion_container} initial="hidden" whileInView="visible" className="lg:min-h-[300px] gap-6 flex flex-col  ">
          <MotionItem variants={motion_item} className="flex flex-col gap-6 max-lg:items-center">
            <CircleEllipsis className="w-12 h-12 stroke-slate-50 bg-purple-primary p-2 rounded-full" />
            <Heading size="lg" className="text-slate-800  ">
              Recommended Professional Services
            </Heading>
            <Paragraph className="max-w-xl text-left max-lg:text-center">Building your dream home is an exciting yet daunting endeavor. From finding the right architect and builder to coordinating dozens of contractors and vendors, the process can quickly become overwhelming. That&apos;s where our carefully curated list of vetted, trusted professional construction related service providers comes in.</Paragraph>
            <Paragraph className="max-w-xl text-left max-lg:text-center"> We understand that when it comes to something as important as building your home, you need to work with reliable, high-quality professionals you can trust. Through vetting and verifying each service provider on our list to ensure they meet standards for expertise, commendatin, professionalism, and customer satisfaction, you can have greater confidence in moving forward.</Paragraph>
            <Paragraph className="max-w-xl text-left max-lg:text-center">With our trusted list, you can confidently explore and connect with top-rated architects, builders, contractors, and specialized vendors in your area, backed by our seal of approval. We&apos;ve examined their credentials, portfolios, and customer reviews to bring you the best of the best in the construction industry. Our goal is to simplify the home-building process for you by providing a one-stop resource for finding the right professionals for the various stages of your project. </Paragraph>
          </MotionItem>
        </MotionContainer>
      </div>
    </section>
  )
}

export default StickyImageSection

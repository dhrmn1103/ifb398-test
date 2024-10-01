import React, { FC } from "react"
import AboutSection from "./_components/about-section"
import LandingPageSection from "./_components/landing-page-section"
import StickyImageSection from "./_components/sticky-image-section"
import FeatureSection from "./_components/feature-section"
import SocialProofSection from "./_components/social-proof-section"

interface pageProps {}

const HomePage: FC<pageProps> = ({}) => {
  return (
    <main>
      <div className="absolute top-0 left-0 w-full h-screen bg-radial-purple z-[-1]"></div>
      <div className="container relative">
        <LandingPageSection />
        <AboutSection />
        <StickyImageSection />
      </div>
      <div className="bg-purple-light w-full h-max pb-48">
        <div className="container relative">
          <FeatureSection />
        </div>
      </div>
      <div className="bg-purple-primary w-full h-max pb-48">
        <div className="container relative">
          <SocialProofSection />
        </div>
      </div>
    </main>
  )
}

export default HomePage

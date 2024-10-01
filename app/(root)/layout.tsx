import NavBar from "@/components/NavBar"
import Footer from "@/components/footer"
import ActiveSectionContextProvider from "@/context/active-section-context"
import React, { FC } from "react"

interface layoutProps {
  children: React.ReactNode
}

const HomeLayout: FC<layoutProps> = ({ children }) => {
  return (
    <ActiveSectionContextProvider>
      {/* Navigation for all routes root routes */}
      <NavBar />

      {children}

      {/* Footer for all routes root routes */}
      <Footer />
    </ActiveSectionContextProvider>
  )
}

export default HomeLayout

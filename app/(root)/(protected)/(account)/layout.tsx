import { Navbar } from "../_components/navbar"

interface ProtectedLayoutProps {
  children: React.ReactNode
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="w-full flex-col gap-y-10 min-h-screen flex items-center py-40 bg-radial-purple justify-center overflow-hidden">
      <Navbar />
      {children}
    </div>
  )
}

export default ProtectedLayout

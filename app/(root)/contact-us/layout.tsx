export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section lang="en" className="py-20 px-10 min-h-screen w-full">
      {children}
    </section>
  )
}

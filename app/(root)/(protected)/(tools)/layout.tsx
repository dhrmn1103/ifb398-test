import Script from "next/script"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section lang="en" className="min-h-screen overflow-x-hidden w-full">
      {children}
      <Script src="//embed.typeform.com/next/embed.js"></Script>
    </section>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section lang="en" className="py-20 min-h-screen">
      {children}
    </section>
  );
}

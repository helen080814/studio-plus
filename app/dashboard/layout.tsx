import type { ReactNode } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { BottomNav } from "@/components/dashboard/bottom-nav"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed -top-40 right-0 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-[160px]"
      />
      <Sidebar />
      <div className="md:pl-64">
        <main className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-28 pt-6 sm:px-6 sm:pt-8 md:pb-10 lg:px-8">
          {children}
        </main>
      </div>
      <BottomNav />
    </div>
  )
}

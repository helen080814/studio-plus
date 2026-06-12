import type { ReactNode } from "react"
import { Logo } from "@/components/logo"

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string
  subtitle: string
  children: ReactNode
  footer?: ReactNode
}) {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden px-4 py-10">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-20 h-[26rem] w-[26rem] rounded-full bg-primary/15 blur-[120px]"
      />

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <div className="glass rounded-3xl border border-border p-7 shadow-2xl shadow-black/40 sm:p-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-balance">{title}</h1>
            <p className="mt-1.5 text-sm text-muted-foreground text-pretty">{subtitle}</p>
          </div>
          {children}
        </div>
        {footer && <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>}
      </div>
    </main>
  )
}

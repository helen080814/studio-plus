import type { ReactNode } from "react"
import { NotificationBell } from "@/components/dashboard/notification-bell"

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: string
  action?: ReactNode
}) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div className="min-w-0">
        <h1 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground text-pretty">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        {action}
        <NotificationBell />
      </div>
    </header>
  )
}

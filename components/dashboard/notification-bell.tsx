"use client"

import { Bell } from "lucide-react"
import { useRouter } from "next/navigation"

export function NotificationBell() {
  const router = useRouter()

  return (
    <button
      type="button"
      aria-label="Notificaciones"
      onClick={() => router.push("/dashboard/notifications")}
      className="glass relative flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-secondary/60"
    >
      <Bell className="h-[18px] w-[18px]" />
      <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
      <span className="sr-only">Tienes notificaciones sin leer</span>
    </button>
  )
}

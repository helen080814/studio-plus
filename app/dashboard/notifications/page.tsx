"use client"

import { useState } from "react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCheck, ListTodo, FileText, CalendarDays } from "lucide-react"
import { notifications as initialNotifications, type Notification } from "@/lib/data"

const typeMeta: Record<Notification["type"], { icon: typeof ListTodo; color: string; label: string }> = {
  task: { icon: ListTodo, color: "var(--chart-1)", label: "Tarea" },
  exam: { icon: FileText, color: "var(--chart-3)", label: "Examen" },
  class: { icon: CalendarDays, color: "var(--chart-2)", label: "Clase" },
}

export default function NotificationsPage() {
  const [items, setItems] = useState<Notification[]>(initialNotifications)
  const unread = items.filter((n) => !n.read).length

  const markAll = () => setItems((prev) => prev.map((n) => ({ ...n, read: true })))
  const markOne = (id: string) => setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Notificaciones"
        subtitle={unread > 0 ? `Tienes ${unread} sin leer.` : "Estás al día."}
        action={
          <Button
            onClick={markAll}
            variant="outline"
            disabled={unread === 0}
            className="h-10 rounded-xl border-border bg-transparent disabled:opacity-50"
          >
            <CheckCheck className="h-4 w-4" /> Marcar todo como leído
          </Button>
        }
      />

      <ul className="flex flex-col gap-3">
        {items.map((n) => {
          const meta = typeMeta[n.type]
          return (
            <li key={n.id}>
              <Card
                className={`glass flex-row items-start gap-4 rounded-2xl border-border p-4 ${
                  n.read ? "opacity-70" : ""
                }`}
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: `color-mix(in oklch, ${meta.color} 22%, transparent)`,
                    color: meta.color,
                  }}
                >
                  <meta.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{n.title}</p>
                    {!n.read && <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />}
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground text-pretty">{n.detail}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{n.time}</p>
                </div>
                {!n.read && (
                  <button
                    type="button"
                    onClick={() => markOne(n.id)}
                    className="shrink-0 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                    aria-label="Marcar como leído"
                  >
                    <CheckCheck className="h-4 w-4" />
                  </button>
                )}
              </Card>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

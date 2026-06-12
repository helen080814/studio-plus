import { PageHeader } from "@/components/dashboard/page-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Clock, MapPin } from "lucide-react"
import { schedule, calendarEvents } from "@/lib/data"

const weekdays = ["L", "M", "X", "J", "V", "S", "D"]
// Junio 2025 empieza en domingo; desfase para que el día 1 caiga en la última columna
const firstOffset = 6
const daysInMonth = 30
const today = 12

const eventsByDay = new Map<number, { label: string; color: string }[]>()
for (const ev of calendarEvents) {
  const list = eventsByDay.get(ev.day) ?? []
  list.push({ label: ev.label, color: ev.color })
  eventsByDay.set(ev.day, list)
}

export default function CalendarPage() {
  const cells: (number | null)[] = [
    ...Array.from({ length: firstOffset }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Calendario"
        subtitle="Visualiza tu mes y tus eventos importantes."
        action={
          <Button className="h-10 rounded-xl shadow-lg shadow-primary/25">
            <Plus className="h-4 w-4" /> Agregar Evento
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="glass gap-0 rounded-2xl border-border p-5 lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold tracking-tight">Junio 2025</h2>
            <span className="text-xs text-muted-foreground">Mes actual</span>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {weekdays.map((d) => (
              <span key={d} className="py-1 text-xs font-medium text-muted-foreground">
                {d}
              </span>
            ))}
            {cells.map((day, i) => {
              if (day === null) return <div key={i} />
              const dayEvents = eventsByDay.get(day) ?? []
              const isToday = day === today
              return (
                <div
                  key={i}
                  className={
                    isToday
                      ? "flex aspect-square flex-col items-center justify-center gap-1 rounded-lg bg-primary text-sm font-semibold text-primary-foreground"
                      : "flex aspect-square flex-col items-center justify-center gap-1 rounded-lg text-sm text-foreground transition-colors hover:bg-secondary/60"
                  }
                >
                  <span>{day}</span>
                  <span className="flex h-1.5 items-center gap-0.5">
                    {dayEvents.slice(0, 3).map((ev, idx) => (
                      <span
                        key={idx}
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: isToday ? "var(--primary-foreground)" : ev.color }}
                      />
                    ))}
                  </span>
                </div>
              )
            })}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--chart-1)" }} /> Entregas
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--chart-3)" }} /> Exámenes
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--chart-5)" }} /> Proyectos
            </span>
          </div>
        </Card>

        <Card className="glass gap-0 rounded-2xl border-border p-5 lg:col-span-2">
          <h2 className="mb-4 text-lg font-semibold tracking-tight">Eventos de Hoy</h2>
          <ol className="flex flex-col gap-3">
            {schedule.map((cls) => (
              <li
                key={cls.id}
                className="rounded-xl border border-border/60 bg-secondary/30 p-3"
                style={{ borderLeftColor: cls.color, borderLeftWidth: 3 }}
              >
                <p className="text-sm font-medium">{cls.subject}</p>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {cls.start}–{cls.end}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {cls.room}
                  </span>
                </div>
              </li>
            ))}
          </ol>
          <h3 className="mb-3 mt-5 text-sm font-semibold tracking-tight text-muted-foreground">Próximos eventos</h3>
          <ul className="flex flex-col gap-2">
            {calendarEvents.slice(1, 5).map((ev) => (
              <li key={ev.day} className="flex items-center gap-3 rounded-xl border border-border/60 bg-secondary/30 p-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: ev.color }} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{ev.label}</p>
                  <p className="text-xs text-muted-foreground">{ev.day} de junio</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}

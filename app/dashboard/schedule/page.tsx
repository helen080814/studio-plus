import { Clock, MapPin } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Card } from "@/components/ui/card"
import { schedule } from "@/lib/data"

const days = ["Lun", "Mar", "Mié", "Jue", "Vie"]

export default function SchedulePage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Horario" subtitle="Tu horario semanal de clases de un vistazo." />

      <div className="flex gap-2 overflow-x-auto pb-1">
        {days.map((day, i) => (
          <button
            key={day}
            className={
              i === 2
                ? "flex flex-col items-center rounded-xl bg-primary px-4 py-2.5 text-primary-foreground"
                : "flex flex-col items-center rounded-xl border border-border bg-secondary/40 px-4 py-2.5 text-muted-foreground transition-colors hover:text-foreground"
            }
          >
            <span className="text-xs">{day}</span>
            <span className="text-base font-semibold">{10 + i}</span>
          </button>
        ))}
      </div>

      <Card className="glass gap-0 rounded-2xl border-border p-5">
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Miércoles, 12 de junio</h2>
        <ol className="flex flex-col">
          {schedule.map((cls, i) => (
            <li key={cls.id} className="flex gap-4">
              <div className="w-12 shrink-0 pt-0.5 text-right text-xs font-medium text-muted-foreground">
                {cls.start}
              </div>
              <div className="flex flex-col items-center">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: cls.color }} />
                {i < schedule.length - 1 && <span className="my-1 w-px flex-1 bg-border" />}
              </div>
              <div
                className="mb-4 flex-1 rounded-xl border border-border/60 bg-secondary/30 p-3"
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
              </div>
            </li>
          ))}
        </ol>
      </Card>
    </div>
  )
}

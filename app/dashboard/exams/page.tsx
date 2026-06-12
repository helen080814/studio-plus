import { Plus, CalendarDays, Clock, MapPin } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { exams } from "@/lib/data"

const priorityLabel: Record<string, string> = {
  high: "Alta",
  medium: "Media",
  low: "Baja",
}

const priorityClass: Record<string, string> = {
  high: "bg-destructive/15 text-destructive",
  medium: "bg-primary/15 text-primary",
  low: "bg-secondary text-muted-foreground",
}

const statusLabel: Record<string, string> = {
  pending: "Pendiente",
  studying: "Estudiando",
  ready: "Listo",
}

export default function ExamsPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Exámenes"
        subtitle="Prepárate para tus próximas evaluaciones."
        action={
          <Button className="h-10 rounded-xl shadow-lg shadow-primary/25">
            <Plus className="h-4 w-4" /> Agregar Examen
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {exams.map((exam) => (
          <Card key={exam.id} className="glass gap-0 rounded-2xl border-border p-5">
            <div className="flex items-center justify-between">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: `color-mix(in oklch, ${exam.color} 22%, transparent)`,
                  color: exam.color,
                }}
              >
                <CalendarDays className="h-5 w-5" />
              </span>
              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${priorityClass[exam.priority]}`}>
                Prioridad {priorityLabel[exam.priority]}
              </span>
            </div>
            <h2 className="mt-4 text-base font-semibold tracking-tight">{exam.subject}</h2>
            <div className="mt-3 flex flex-col gap-1.5 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-3.5 w-3.5" /> {exam.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5" /> {exam.time}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" /> {exam.room}
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
              <span className="text-xs text-muted-foreground">Estado</span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-foreground">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor:
                      exam.status === "ready"
                        ? "var(--chart-3)"
                        : exam.status === "studying"
                          ? "var(--primary)"
                          : "var(--muted-foreground)",
                  }}
                />
                {statusLabel[exam.status]}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

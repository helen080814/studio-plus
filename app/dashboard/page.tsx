import { ListTodo, BookOpen, CalendarClock, AlertTriangle, Plus, Clock, MapPin } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { StatCard } from "@/components/dashboard/stat-card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { tasks, schedule, subjects } from "@/lib/data"
import { cn } from "@/lib/utils"

const priorityStyles: Record<string, string> = {
  high: "bg-destructive/15 text-destructive",
  medium: "bg-primary/15 text-primary",
  low: "bg-secondary text-muted-foreground",
}

const priorityLabels: Record<string, string> = {
  high: "Urgente",
  medium: "Media",
  low: "Baja",
}

export default function DashboardPage() {
  const pending = tasks.filter((t) => !t.done)
  const urgent = pending.filter((t) => t.priority === "high")

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Hola, Helen 👋"
        subtitle="Esto es lo que ocurre con tus estudios hoy."
        action={
          <>
            <Avatar className="hidden h-10 w-10 border border-border sm:flex">
              <AvatarFallback className="bg-primary/15 text-sm font-medium text-primary">HA</AvatarFallback>
            </Avatar>
            <Button className="h-10 rounded-xl shadow-lg shadow-primary/25">
              <Plus className="h-4 w-4" /> Nueva Tarea
            </Button>
          </>
        }
      />

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Tareas Pendientes" value={String(pending.length)} icon={ListTodo} accent />
        <StatCard label="Materias" value={String(subjects.length)} icon={BookOpen} />
        <StatCard label="Clases Hoy" value={String(schedule.length)} icon={CalendarClock} />
        <StatCard label="Tareas Urgentes" value={String(urgent.length)} icon={AlertTriangle} />
      </section>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Próximas tareas */}
        <Card className="glass rounded-2xl border-border p-5 lg:col-span-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold tracking-tight">Próximas Tareas</h2>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
              Ver todas
            </Button>
          </div>
          <ul className="mt-4 flex flex-col gap-2">
            {pending.slice(0, 5).map((task) => (
              <li
                key={task.id}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-secondary/30 p-3 transition-colors hover:bg-secondary/60"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{task.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {task.subject} · {task.due}
                  </p>
                </div>
                <span
                  className={cn(
                    "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium",
                    priorityStyles[task.priority],
                  )}
                >
                  {priorityLabels[task.priority]}
                </span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Horario de hoy */}
        <Card className="glass rounded-2xl border-border p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold tracking-tight">Horario de Hoy</h2>
            <span className="text-xs text-muted-foreground">{schedule.length} clases</span>
          </div>
          <ol className="mt-4 flex flex-col gap-3">
            {schedule.map((cls) => (
              <li key={cls.id} className="flex gap-3">
                <div className="flex flex-col items-center pt-1">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: cls.color }} />
                  <span className="mt-1 w-px flex-1 bg-border" />
                </div>
                <div className="flex-1 pb-1">
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
    </div>
  )
}

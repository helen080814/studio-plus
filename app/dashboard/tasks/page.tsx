import { Plus } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { tasks } from "@/lib/data"
import { cn } from "@/lib/utils"

const priorityStyles: Record<string, string> = {
  high: "bg-destructive/15 text-destructive",
  medium: "bg-primary/15 text-primary",
  low: "bg-secondary text-muted-foreground",
}

const groups = [
  { key: "high", label: "Urgente" },
  { key: "medium", label: "En Progreso" },
  { key: "low", label: "Más Tarde" },
] as const

export default function TasksPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Tareas"
        subtitle="Lleva el control de todo en tus materias."
        action={
          <Button className="h-10 rounded-xl shadow-lg shadow-primary/25">
            <Plus className="h-4 w-4" /> Nueva Tarea
          </Button>
        }
      />

      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((group) => {
          const items = tasks.filter((t) => t.priority === group.key)
          return (
            <Card key={group.key} className="glass gap-0 rounded-2xl border-border p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-semibold tracking-tight">{group.label}</h2>
                <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                  {items.length}
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {items.map((task) => (
                  <li
                    key={task.id}
                    className="rounded-xl border border-border/60 bg-secondary/30 p-3 transition-colors hover:bg-secondary/60"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border",
                          task.done ? "border-primary bg-primary" : "border-border",
                        )}
                      >
                        {task.done && <span className="h-2 w-2 rounded-sm bg-primary-foreground" />}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className={cn("text-sm font-medium", task.done && "text-muted-foreground line-through")}>
                          {task.title}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {task.subject} · {task.due}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
                {items.length === 0 && (
                  <li className="rounded-xl border border-dashed border-border p-4 text-center text-xs text-muted-foreground">
                    Nada por aquí
                  </li>
                )}
              </ul>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

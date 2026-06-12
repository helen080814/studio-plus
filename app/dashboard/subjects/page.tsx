import { Plus, BookOpen } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { subjects } from "@/lib/data"

export default function SubjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Materias"
        subtitle="Sigue tu progreso en todos tus cursos."
        action={
          <Button className="h-10 rounded-xl shadow-lg shadow-primary/25">
            <Plus className="h-4 w-4" /> Agregar Materia
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => (
          <Card key={subject.id} className="glass gap-0 rounded-2xl border-border p-5">
            <div className="flex items-center justify-between">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: `color-mix(in oklch, ${subject.color} 22%, transparent)`, color: subject.color }}
              >
                <BookOpen className="h-5 w-5" />
              </span>
              <span className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                {subject.tasks} tareas
              </span>
            </div>
            <h2 className="mt-4 text-base font-semibold tracking-tight">{subject.name}</h2>
            <p className="text-xs text-muted-foreground">{subject.teacher}</p>

            <div className="mt-4">
              <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Progreso</span>
                <span className="font-medium">{subject.progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${subject.progress}%`, backgroundColor: subject.color }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

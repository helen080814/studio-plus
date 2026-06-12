"use client"

import { FileText, ListChecks, Lightbulb, ClipboardList, CalendarClock } from "lucide-react"
import { Card } from "@/components/ui/card"

const actions = [
  {
    icon: FileText,
    title: "Resumir apuntes",
    description: "Condensa tus notas en puntos clave.",
    prompt: "Ayúdame a resumir mis apuntes. Te los pego a continuación y dame los puntos clave más importantes.",
  },
  {
    icon: ListChecks,
    title: "Crear cuestionario",
    description: "Genera preguntas de práctica.",
    prompt: "Crea un cuestionario de práctica de 5 preguntas sobre un tema que te indicaré para repasar antes de un examen.",
  },
  {
    icon: Lightbulb,
    title: "Explicar un tema",
    description: "Entiende conceptos difíciles.",
    prompt: "Explícame un tema de forma sencilla y con ejemplos. El tema es:",
  },
  {
    icon: ClipboardList,
    title: "Organizar tareas",
    description: "Prioriza tu lista de pendientes.",
    prompt: "Ayúdame a organizar y priorizar mis tareas pendientes de la semana. Estas son mis tareas:",
  },
  {
    icon: CalendarClock,
    title: "Generar plan de estudio",
    description: "Crea un horario realista.",
    prompt: "Genera un plan de estudio semanal y realista para preparar mis exámenes. Estas son mis materias y fechas:",
  },
]

export function SuggestedActions({ onPick, disabled }: { onPick: (text: string) => void; disabled: boolean }) {
  return (
    <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {actions.map((action) => (
        <button
          key={action.title}
          type="button"
          disabled={disabled}
          onClick={() => onPick(action.prompt)}
          className="group text-left transition-transform disabled:opacity-50 enabled:hover:-translate-y-0.5"
        >
          <Card className="glass h-full gap-0 rounded-2xl border-border p-4 transition-colors group-enabled:group-hover:border-primary/40">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <action.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-3 text-sm font-semibold">{action.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground text-pretty">{action.description}</p>
          </Card>
        </button>
      ))}
    </div>
  )
}

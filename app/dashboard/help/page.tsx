import Link from "next/link"
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Card } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "¿Cómo agregar una tarea?",
    a: "Ve a la sección Tareas desde el menú lateral y pulsa el botón “Nueva Tarea”. Escribe el título, elige la materia, define la prioridad y la fecha de entrega, luego guarda. La tarea aparecerá en su columna correspondiente.",
  },
  {
    q: "¿Cómo registrar una materia?",
    a: "Abre la sección Materias y pulsa “Agregar Materia”. Ingresa el nombre del curso, elige un color y guarda. La materia quedará disponible al crear tareas y exámenes.",
  },
  {
    q: "¿Cómo programar un examen?",
    a: "Entra a la sección Exámenes y pulsa “Agregar Examen”. Selecciona la materia, la fecha, la hora y el aula, y define la prioridad. El examen también se mostrará en tu Calendario.",
  },
  {
    q: "¿Cómo activar Face ID?",
    a: "Ve a tu Perfil y abre la opción Face ID. Activa el interruptor y sigue las instrucciones de tu dispositivo para registrar tu rostro. Una vez habilitado, podrás iniciar sesión de forma rápida y segura.",
  },
]

export default function HelpPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Ayuda y Soporte" subtitle="Encuentra respuestas y ponte en contacto con nosotros." />

      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold tracking-tight">Preguntas Frecuentes</h2>
        </div>

        <Card className="glass gap-0 overflow-hidden rounded-2xl border-border p-2">
          {faqs.map((faq, i) => (
            <details
              key={faq.q}
              className={`group px-3 ${i !== 0 ? "border-t border-border" : ""}`}
            >
              <summary className="flex cursor-pointer list-none items-center gap-3 py-4 text-sm font-medium [&::-webkit-details-marker]:hidden">
                <span className="flex-1 text-pretty">{faq.q}</span>
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="pb-4 pr-7 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </Card>
      </section>

      <Card className="glass items-center gap-4 rounded-2xl border-border p-6 text-center sm:flex-row sm:text-left">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <MessageCircle className="h-6 w-6" />
        </span>
        <div className="flex-1">
          <h3 className="font-semibold tracking-tight">¿Necesitas más ayuda?</h3>
          <p className="text-sm text-muted-foreground">Nuestro equipo de soporte está disponible para asistirte.</p>
        </div>
        <Link
          href="mailto:soporte@studioplus.app"
          className={cn(buttonVariants(), "h-11 rounded-xl shadow-lg shadow-primary/25 max-sm:w-full")}
        >
          Contactar Soporte
        </Link>
      </Card>
    </div>
  )
}

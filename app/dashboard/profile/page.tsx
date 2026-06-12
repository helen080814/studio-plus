import Link from "next/link"
import { Mail, GraduationCap, Bell, Moon, ChevronRight, LogOut, ScanFace, LifeBuoy } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Card } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { tasks, subjects } from "@/lib/data"
import { cn } from "@/lib/utils"

const settings = [
  { icon: Bell, label: "Notificaciones", value: "Activadas", href: undefined },
  { icon: Moon, label: "Apariencia", value: "Oscuro", href: undefined },
  { icon: ScanFace, label: "Face ID", value: "Habilitado", href: undefined },
  { icon: LifeBuoy, label: "Ayuda y Soporte", value: "", href: "/dashboard/help" },
]

export default function ProfilePage() {
  const completed = tasks.filter((t) => t.done).length

  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Perfil" subtitle="Administra tu cuenta y preferencias." />

      <Card className="glass items-center gap-0 rounded-2xl border-border p-6 text-center sm:flex-row sm:text-left">
        <Avatar className="h-20 w-20 border border-border">
          <AvatarFallback className="bg-primary/15 text-xl font-semibold text-primary">HA</AvatarFallback>
        </Avatar>
        <div className="mt-4 flex-1 sm:ml-5 sm:mt-0">
          <h2 className="text-xl font-semibold tracking-tight">Helen Avery</h2>
          <p className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground sm:justify-start">
            <Mail className="h-3.5 w-3.5" /> helen.avery@universidad.edu
          </p>
          <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-muted-foreground sm:justify-start">
            <GraduationCap className="h-3.5 w-3.5" /> Año 2 · Ciencias de la Computación
          </p>
        </div>
        <Button variant="outline" className="mt-4 rounded-xl border-border bg-transparent sm:mt-0">
          Editar Perfil
        </Button>
      </Card>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Materias", value: subjects.length },
          { label: "Completadas", value: completed },
          { label: "Tareas Activas", value: tasks.length - completed },
        ].map((stat) => (
          <Card key={stat.label} className="glass gap-0 rounded-2xl border-border p-5 text-center">
            <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </div>

      <Card className="glass gap-0 overflow-hidden rounded-2xl border-border p-2">
        {settings.map((item) => {
          const content = (
            <>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-foreground">
                <item.icon className="h-[18px] w-[18px]" />
              </span>
              <span className="flex-1 text-sm font-medium">{item.label}</span>
              {item.value && <span className="text-xs text-muted-foreground">{item.value}</span>}
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </>
          )
          const className =
            "flex w-full items-center gap-3 rounded-xl px-3 py-3.5 text-left transition-colors hover:bg-secondary/60"

          return item.href ? (
            <Link key={item.label} href={item.href} className={className}>
              {content}
            </Link>
          ) : (
            <button key={item.label} className={className}>
              {content}
            </button>
          )
        })}
      </Card>

      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "h-11 rounded-xl border-destructive/30 bg-transparent text-destructive hover:bg-destructive/10 hover:text-destructive",
        )}
      >
        <LogOut className="h-4 w-4" /> Cerrar Sesión
      </Link>
    </div>
  )
}

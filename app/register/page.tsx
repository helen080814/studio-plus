import Link from "next/link"
import { Mail, User, Lock, ScanFace } from "lucide-react"
import { AuthShell } from "@/components/auth-shell"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function RegisterPage() {
  return (
    <AuthShell
      title="Crea tu cuenta"
      subtitle="Empieza a organizar tus estudios con Studio+"
      footer={
        <span>
          ¿Ya tienes una cuenta?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Iniciar sesión
          </Link>
        </span>
      }
    >
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Nombre completo</Label>
          <div className="relative">
            <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="name"
              type="text"
              placeholder="Nombre"
              autoComplete="name"
              className="h-11 rounded-xl bg-secondary/60 pl-10"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="tu@correo.edu"
              autoComplete="email"
              className="h-11 rounded-xl bg-secondary/60 pl-10"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Contraseña</Label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              autoComplete="new-password"
              className="h-11 rounded-xl bg-secondary/60 pl-10"
            />
          </div>
        </div>

        <button
          type="button"
          className="group flex items-center justify-between rounded-xl border border-dashed border-primary/40 bg-primary/5 px-4 py-3 text-left transition-colors hover:border-primary/70 hover:bg-primary/10"
        >
          <span className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <ScanFace className="h-5 w-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-medium">Registrar Face ID</span>
              <span className="text-xs text-muted-foreground">Configuración biométrica opcional</span>
            </span>
          </span>
          <span className="text-xs font-medium text-primary">Configurar</span>
        </button>

        <Link
          href="/dashboard"
          className={cn(buttonVariants(), "mt-1 h-11 rounded-xl text-sm font-medium shadow-lg shadow-primary/25")}
        >
          Crear Cuenta
        </Link>
      </form>
    </AuthShell>
  )
}

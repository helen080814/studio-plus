import Link from "next/link"
import { Mail, Lock } from "lucide-react"
import { AuthShell } from "@/components/auth-shell"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function LoginPage() {
  return (
    <AuthShell
      title="Bienvenida de nuevo"
      subtitle="Inicia sesión para continuar en tu espacio Studio+"
      footer={
        <span>
          ¿Nuevo en Studio+?{" "}
          <Link href="/register" className="font-medium text-primary hover:underline">
            Crear una cuenta
          </Link>
        </span>
      }
    >
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="tu@universidad.edu"
              autoComplete="email"
              className="h-11 rounded-xl bg-secondary/60 pl-10"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Contraseña</Label>
            <Link href="#" className="text-xs font-medium text-primary hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              className="h-11 rounded-xl bg-secondary/60 pl-10"
            />
          </div>
        </div>

        <Link
          href="/dashboard"
          className={cn(buttonVariants(), "mt-2 h-11 rounded-xl text-sm font-medium shadow-lg shadow-primary/25")}
        >
          Iniciar Sesión
        </Link>

        <div className="relative my-1 flex items-center gap-3">
          <span className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">o</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <Link
          href="/register"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-11 rounded-xl border-border bg-transparent text-sm font-medium hover:bg-secondary/60",
          )}
        >
          Crear Cuenta
        </Link>
      </form>
    </AuthShell>
  )
}

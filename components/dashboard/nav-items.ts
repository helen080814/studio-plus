import type { LucideIcon } from "lucide-react"
import {
  Home,
  ListTodo,
  CalendarDays,
  BookOpen,
  User,
  CalendarRange,
  FileText,
  Bell,
  BarChart3,
  Sparkles,
} from "lucide-react"

export type NavItem = {
  label: string
  href: string
  icon: LucideIcon
  primary?: boolean
}

export const navItems: NavItem[] = [
  { label: "Inicio", href: "/dashboard", icon: Home, primary: true },
  { label: "Tareas", href: "/dashboard/tasks", icon: ListTodo, primary: true },
  { label: "Horario", href: "/dashboard/schedule", icon: CalendarDays, primary: true },
  { label: "Materias", href: "/dashboard/subjects", icon: BookOpen, primary: true },
  { label: "Calendario", href: "/dashboard/calendar", icon: CalendarRange },
  { label: "Exámenes", href: "/dashboard/exams", icon: FileText },
  { label: "Estadísticas", href: "/dashboard/stats", icon: BarChart3 },
  { label: "Perfil", href: "/dashboard/profile", icon: User, primary: true },
]

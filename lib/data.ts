export type Task = {
  id: string
  title: string
  subject: string
  due: string
  priority: "high" | "medium" | "low"
  done: boolean
}

export type ClassEvent = {
  id: string
  subject: string
  room: string
  start: string
  end: string
  color: string
}

export type Subject = {
  id: string
  name: string
  teacher: string
  progress: number
  tasks: number
  color: string
}

export type Exam = {
  id: string
  subject: string
  date: string
  time: string
  room: string
  color: string
  priority: "high" | "medium" | "low"
  status: "pending" | "studying" | "ready"
}

export type CalendarEvent = {
  day: number
  label: string
  color: string
}

export type Notification = {
  id: string
  type: "task" | "exam" | "class"
  title: string
  detail: string
  time: string
  read: boolean
}

export const tasks: Task[] = [
  { id: "t1", title: "Serie de ejercicios de cálculo 7", subject: "Matemáticas", due: "Hoy, 6:00 PM", priority: "high", done: false },
  { id: "t2", title: "Leer capítulos 4–5", subject: "Literatura", due: "Mañana", priority: "medium", done: false },
  { id: "t3", title: "Informe de laboratorio: titulación", subject: "Química", due: "Mié, 11:59 PM", priority: "high", done: false },
  { id: "t4", title: "Esquema del ensayo de historia", subject: "Historia", due: "Jue", priority: "low", done: false },
  { id: "t5", title: "Diapositivas del proyecto grupal", subject: "Economía", due: "Vie", priority: "medium", done: false },
  { id: "t6", title: "Repasar tarjetas de estudio", subject: "Biología", due: "Sáb", priority: "low", done: true },
]

export const schedule: ClassEvent[] = [
  { id: "c1", subject: "Matemáticas", room: "Aula 204", start: "08:30", end: "09:45", color: "var(--chart-1)" },
  { id: "c2", subject: "Química", room: "Lab B", start: "10:00", end: "11:30", color: "var(--chart-3)" },
  { id: "c3", subject: "Literatura", room: "Aula 117", start: "13:00", end: "14:15", color: "var(--chart-2)" },
  { id: "c4", subject: "Economía", room: "Aula 309", start: "14:30", end: "15:45", color: "var(--chart-4)" },
]

export const subjects: Subject[] = [
  { id: "s1", name: "Matemáticas", teacher: "Dra. Lin", progress: 72, tasks: 4, color: "var(--chart-1)" },
  { id: "s2", name: "Literatura", teacher: "Sra. Okafor", progress: 58, tasks: 2, color: "var(--chart-2)" },
  { id: "s3", name: "Química", teacher: "Dr. Ahmed", progress: 84, tasks: 3, color: "var(--chart-3)" },
  { id: "s4", name: "Economía", teacher: "Sr. Vega", progress: 45, tasks: 5, color: "var(--chart-4)" },
  { id: "s5", name: "Historia", teacher: "Sra. Bauer", progress: 63, tasks: 1, color: "var(--chart-5)" },
  { id: "s6", name: "Biología", teacher: "Dr. Sato", progress: 91, tasks: 2, color: "var(--chart-2)" },
]

export const exams: Exam[] = [
  { id: "e1", subject: "Matemáticas", date: "Lun, 16 jun", time: "09:00", room: "Aula 204", color: "var(--chart-1)", priority: "high", status: "studying" },
  { id: "e2", subject: "Química", date: "Mié, 18 jun", time: "11:00", room: "Lab B", color: "var(--chart-3)", priority: "high", status: "pending" },
  { id: "e3", subject: "Literatura", date: "Vie, 20 jun", time: "13:00", room: "Aula 117", color: "var(--chart-2)", priority: "medium", status: "studying" },
  { id: "e4", subject: "Economía", date: "Mar, 24 jun", time: "10:30", room: "Aula 309", color: "var(--chart-4)", priority: "low", status: "ready" },
]

export const calendarEvents: CalendarEvent[] = [
  { day: 12, label: "Entrega de cálculo", color: "var(--chart-1)" },
  { day: 16, label: "Examen de Matemáticas", color: "var(--chart-1)" },
  { day: 18, label: "Examen de Química", color: "var(--chart-3)" },
  { day: 20, label: "Examen de Literatura", color: "var(--chart-2)" },
  { day: 24, label: "Examen de Economía", color: "var(--chart-4)" },
  { day: 27, label: "Proyecto grupal", color: "var(--chart-5)" },
]

export const notifications: Notification[] = [
  { id: "n1", type: "task", title: "Tarea próxima a vencer", detail: "Serie de ejercicios de cálculo 7 vence hoy a las 6:00 PM", time: "Hace 10 min", read: false },
  { id: "n2", type: "exam", title: "Recordatorio de examen", detail: "Examen de Matemáticas el lunes a las 09:00 en Aula 204", time: "Hace 1 h", read: false },
  { id: "n3", type: "class", title: "Clase por comenzar", detail: "Química inicia en 15 minutos en Lab B", time: "Hace 2 h", read: false },
  { id: "n4", type: "task", title: "Tarea calificada", detail: "Tu informe de laboratorio de titulación fue revisado", time: "Ayer", read: true },
  { id: "n5", type: "exam", title: "Recordatorio de examen", detail: "Examen de Química el miércoles a las 11:00 en Lab B", time: "Ayer", read: true },
  { id: "n6", type: "class", title: "Cambio de aula", detail: "Literatura se trasladó al Aula 117", time: "Hace 2 días", read: true },
]

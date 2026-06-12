"use client"

import { Bar, BarChart, CartesianGrid, XAxis, RadialBar, RadialBarChart, PolarRadiusAxis, Label } from "recharts"
import { PageHeader } from "@/components/dashboard/page-header"
import { StatCard } from "@/components/dashboard/stat-card"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { CheckCircle2, BookOpen, Clock, FileText } from "lucide-react"
import { tasks, subjects, exams } from "@/lib/data"

const completed = tasks.filter((t) => t.done).length
const completionRate = Math.round((completed / tasks.length) * 100)

const weeklyHours = [
  { day: "Lun", hours: 2.5 },
  { day: "Mar", hours: 3 },
  { day: "Mié", hours: 1.5 },
  { day: "Jue", hours: 4 },
  { day: "Vie", hours: 2 },
  { day: "Sáb", hours: 3.5 },
  { day: "Dom", hours: 1 },
]
const totalHours = weeklyHours.reduce((a, b) => a + b.hours, 0)

const hoursConfig = {
  hours: { label: "Horas", color: "var(--chart-1)" },
} satisfies ChartConfig

const completionConfig = {
  done: { label: "Completado", color: "var(--chart-1)" },
} satisfies ChartConfig

const completionData = [{ name: "tareas", done: completionRate, fill: "var(--chart-1)" }]

export default function StatsPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Estadísticas" subtitle="Tu progreso de estudio de un vistazo." />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Tareas completadas" value={`${completionRate}%`} icon={CheckCircle2} accent />
        <StatCard label="Materias activas" value={String(subjects.length)} icon={BookOpen} />
        <StatCard label="Horas de estudio" value={`${totalHours}h`} icon={Clock} />
        <StatCard label="Próximos exámenes" value={String(exams.length)} icon={FileText} />
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="glass gap-0 rounded-2xl border-border p-5 lg:col-span-3">
          <h2 className="text-lg font-semibold tracking-tight">Horas de estudio esta semana</h2>
          <p className="mb-4 text-sm text-muted-foreground">Total {totalHours} horas</p>
          <ChartContainer config={hoursConfig} className="aspect-auto h-56 w-full">
            <BarChart data={weeklyHours} margin={{ left: 0, right: 0, top: 8 }}>
              <CartesianGrid vertical={false} stroke="var(--border)" />
              <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Bar dataKey="hours" fill="var(--color-hours)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </Card>

        <Card className="glass items-center gap-0 rounded-2xl border-border p-5 lg:col-span-2">
          <h2 className="self-start text-lg font-semibold tracking-tight">Tasa de finalización</h2>
          <p className="mb-2 self-start text-sm text-muted-foreground">Tareas completadas</p>
          <ChartContainer config={completionConfig} className="mx-auto aspect-square h-52">
            <RadialBarChart data={completionData} startAngle={90} endAngle={90 - (completionRate / 100) * 360} innerRadius={80} outerRadius={130}>
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                          <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-semibold">
                            {`${completionRate}%`}
                          </tspan>
                          <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground text-xs">
                            Completado
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </PolarRadiusAxis>
              <RadialBar dataKey="done" background={{ fill: "var(--secondary)" }} cornerRadius={12} fill="var(--chart-1)" />
            </RadialBarChart>
          </ChartContainer>
        </Card>
      </div>

      <Card className="glass gap-0 rounded-2xl border-border p-5">
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Progreso por materia</h2>
        <div className="flex flex-col gap-4">
          {subjects.map((s) => (
            <div key={s.id} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 font-medium">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                  {s.name}
                </span>
                <span className="text-muted-foreground">{s.progress}%</span>
              </div>
              <Progress value={s.progress} className="h-2 bg-secondary" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

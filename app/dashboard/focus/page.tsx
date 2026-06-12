"use client"

import { useEffect, useRef, useState } from "react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw, Flame, CheckCircle2, Clock } from "lucide-react"

const FOCUS_SECONDS = 25 * 60

export default function FocusPage() {
  const [remaining, setRemaining] = useState(FOCUS_SECONDS)
  const [running, setRunning] = useState(false)
  const [sessions, setSessions] = useState(3)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setRemaining((prev) => {
          if (prev <= 1) {
            setRunning(false)
            setSessions((s) => s + 1)
            return FOCUS_SECONDS
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [running])

  const reset = () => {
    setRunning(false)
    setRemaining(FOCUS_SECONDS)
  }

  const minutes = String(Math.floor(remaining / 60)).padStart(2, "0")
  const seconds = String(remaining % 60).padStart(2, "0")
  const progress = ((FOCUS_SECONDS - remaining) / FOCUS_SECONDS) * 100

  // SVG ring geometry
  const radius = 130
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference - (progress / 100) * circumference

  const focusMinutesToday = sessions * 25

  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Concentración" subtitle="Técnica Pomodoro de 25 minutos para enfocarte mejor." />

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="glass items-center gap-0 rounded-2xl border-border p-8 lg:col-span-3">
          <div className="relative flex items-center justify-center">
            <svg width="300" height="300" viewBox="0 0 300 300" className="-rotate-90">
              <circle cx="150" cy="150" r={radius} fill="none" stroke="var(--secondary)" strokeWidth="14" />
              <circle
                cx="150"
                cy="150"
                r={radius}
                fill="none"
                stroke="var(--primary)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                style={{ transition: "stroke-dashoffset 1s linear" }}
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="font-mono text-6xl font-semibold tracking-tight tabular-nums">
                {minutes}:{seconds}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                {running ? "Enfocándote…" : remaining === FOCUS_SECONDS ? "Listo para comenzar" : "En pausa"}
              </span>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {running ? (
              <Button onClick={() => setRunning(false)} variant="outline" className="h-12 w-32 rounded-xl border-border bg-transparent">
                <Pause className="h-4 w-4" /> Pausar
              </Button>
            ) : (
              <Button onClick={() => setRunning(true)} className="h-12 w-32 rounded-xl shadow-lg shadow-primary/25">
                <Play className="h-4 w-4" /> Iniciar
              </Button>
            )}
            <Button onClick={reset} variant="outline" className="h-12 w-32 rounded-xl border-border bg-transparent">
              <RotateCcw className="h-4 w-4" /> Reiniciar
            </Button>
          </div>
        </Card>

        <div className="flex flex-col gap-4 lg:col-span-2">
          <h2 className="text-lg font-semibold tracking-tight">Estadísticas de hoy</h2>

          <Card className="glass flex-row items-center gap-4 rounded-2xl border-border p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Flame className="h-5 w-5" />
            </span>
            <div>
              <p className="text-2xl font-semibold tracking-tight">{sessions}</p>
              <p className="text-sm text-muted-foreground">Sesiones completadas</p>
            </div>
          </Card>

          <Card className="glass flex-row items-center gap-4 rounded-2xl border-border p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-foreground">
              <Clock className="h-5 w-5" />
            </span>
            <div>
              <p className="text-2xl font-semibold tracking-tight">{focusMinutesToday} min</p>
              <p className="text-sm text-muted-foreground">Tiempo de concentración</p>
            </div>
          </Card>

          <Card className="glass flex-row items-center gap-4 rounded-2xl border-border p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-foreground">
              <CheckCircle2 className="h-5 w-5" />
            </span>
            <div>
              <p className="text-2xl font-semibold tracking-tight">4</p>
              <p className="text-sm text-muted-foreground">Meta diaria de sesiones</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

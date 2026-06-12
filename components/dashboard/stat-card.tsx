import type { LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"

export function StatCard({
  label,
  value,
  icon: Icon,
  accent,
}: {
  label: string
  value: string
  icon: LucideIcon
  accent?: boolean
}) {
  return (
    <Card className="glass gap-0 rounded-2xl border-border p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span
          className={
            accent
              ? "flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"
              : "flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-foreground"
          }
        >
          <Icon className="h-[18px] w-[18px]" />
        </span>
      </div>
      <p className="mt-4 text-3xl font-semibold tracking-tight">{value}</p>
    </Card>
  )
}

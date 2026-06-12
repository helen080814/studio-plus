import type { UIMessage } from "ai"
import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

function getText(message: UIMessage): string {
  if (!message.parts || !Array.isArray(message.parts)) return ""
  return message.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("")
}

export function ChatMessage({ message }: { message: UIMessage }) {
  const isUser = message.role === "user"
  const text = getText(message)

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm leading-relaxed text-primary-foreground shadow-lg shadow-primary/20">
          <p className="whitespace-pre-wrap text-pretty">{text}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-3">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
        <Sparkles className="h-[18px] w-[18px]" />
      </span>
      <div
        className={cn(
          "glass max-w-[85%] rounded-2xl rounded-tl-md border border-border px-4 py-2.5 text-sm leading-relaxed text-foreground",
        )}
      >
        <p className="whitespace-pre-wrap text-pretty">{text}</p>
      </div>
    </div>
  )
}

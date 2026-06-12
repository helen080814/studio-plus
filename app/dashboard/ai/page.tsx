"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport, type UIMessage } from "ai"
import { PageHeader } from "@/components/dashboard/page-header"
import { SuggestedActions } from "@/components/ai/suggested-actions"
import { ChatMessage } from "@/components/ai/chat-message"
import { Sparkles, ArrowUp, Square } from "lucide-react"

export default function AiStudioPage() {
  const [input, setInput] = useState("")
  const { messages, sendMessage, status, stop } = useChat({
    transport: new DefaultChatTransport({ api: "/api/ai" }),
  })

  const scrollRef = useRef<HTMLDivElement>(null)
  const isBusy = status === "streaming" || status === "submitted"
  const hasMessages = messages.length > 0

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages])

  function submit(text: string) {
    const value = text.trim()
    if (!value || isBusy) return
    sendMessage({ text: value })
    setInput("")
  }

  return (
    <div className="flex h-[calc(100dvh-7rem)] flex-col gap-6 md:h-[calc(100dvh-5rem)]">
      <PageHeader title="IA Studio" subtitle="Tu asistente de estudio impulsado por IA." />

      <div className="flex min-h-0 flex-1 flex-col">
        {/* Conversation area */}
        <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto">
          {!hasMessages ? (
            <WelcomeState onPick={submit} disabled={isBusy} />
          ) : (
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 pb-4">
              {messages.map((message: UIMessage) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {status === "submitted" && <ThinkingBubble />}
            </div>
          )}
        </div>

        {/* Input */}
        <div className="mx-auto w-full max-w-3xl pt-4">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              submit(input)
            }}
            className="glass-strong flex items-end gap-2 rounded-2xl border border-border p-2 shadow-lg shadow-black/20"
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  submit(input)
                }
              }}
              rows={1}
              placeholder="Escribe tu mensaje…"
              className="max-h-40 flex-1 resize-none bg-transparent px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            {isBusy ? (
              <button
                type="button"
                onClick={stop}
                aria-label="Detener"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors hover:bg-secondary/70"
              >
                <Square className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                aria-label="Enviar"
                disabled={!input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-opacity disabled:opacity-40"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            )}
          </form>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            IA Studio puede cometer errores. Verifica la información importante.
          </p>
        </div>
      </div>
    </div>
  )
}

function WelcomeState({ onPick, disabled }: { onPick: (text: string) => void; disabled: boolean }) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-2 py-8 text-center">
      <div className="flex flex-col items-center gap-4">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
          <Sparkles className="h-8 w-8" />
        </span>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-balance">Hola, soy tu asistente de IA</h2>
          <p className="mt-2 text-pretty text-muted-foreground">
            Puedo ayudarte a estudiar, organizarte y entender cualquier tema. ¿Por dónde empezamos?
          </p>
        </div>
      </div>

      <SuggestedActions onPick={onPick} disabled={disabled} />
    </div>
  )
}

function ThinkingBubble() {
  return (
    <div className="flex items-center gap-1.5 px-1">
      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" />
    </div>
  )
}

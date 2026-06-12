import { streamText, convertToModelMessages, type UIMessage } from "ai"

export const maxDuration = 30

const SYSTEM_PROMPT = `Eres el asistente de IA de Studio+, una aplicación de productividad para estudiantes.
Respondes SIEMPRE en español, con un tono cercano, claro y motivador.
Ayudas a los estudiantes a: resumir apuntes, crear cuestionarios de práctica, explicar temas de forma sencilla,
organizar y priorizar tareas, y generar planes de estudio realistas.
Usa formato claro con listas y títulos cortos cuando sea útil. Sé conciso pero completo.`

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: "openai/gpt-5.4-mini",
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  })

  return result.toUIMessageStreamResponse()
}

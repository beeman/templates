import { devToolsMiddleware } from '@ai-sdk/devtools'
import { google } from '@ai-sdk/google'
import { createFileRoute } from '@tanstack/react-router'
import {
  convertToModelMessages,
  streamText,
  type UIMessage,
  wrapLanguageModel,
} from 'ai'

export const Route = createFileRoute('/api/ai/$')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { messages }: { messages: UIMessage[] } = await request.json()

          const model = wrapLanguageModel({
            middleware: devToolsMiddleware(),
            model: google('gemini-2.5-flash'),
          })
          const result = streamText({
            messages: await convertToModelMessages(messages),
            model,
          })

          return result.toUIMessageStreamResponse()
        } catch (error) {
          console.error('AI API error:', error)
          return new Response(
            JSON.stringify({ error: 'Failed to process AI request' }),
            {
              headers: { 'Content-Type': 'application/json' },
              status: 500,
            },
          )
        }
      },
    },
  },
})

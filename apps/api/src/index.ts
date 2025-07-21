import Fastify from 'fastify'
import cors from '@fastify/cors'
import dotenv from 'dotenv'
import { explainCommitFromUrl } from '../../../packages/utils/explainCommit'

dotenv.config()

const server = Fastify()

await server.register(cors)
server.register(async (fastify) => {
  fastify.post('/explain', async (request, reply) => {
    try {
      const { commitUrl } = request.body as { commitUrl: string }

      if (!commitUrl) {
        return reply.status(400).send({ error: 'Missing commitUrl' })
      }

      const explanation = await explainCommitFromUrl(commitUrl)
      return { explanation }
    } catch (error: any) {
      console.error('Error:', error)
      return reply.status(500).send({ error: 'Failed to generate explanation' })
    }
  })
})

server.listen({ port: 3001 }, () => {
  console.log('✅ Server running on http://localhost:3001')
})

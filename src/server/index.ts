import { Elysia } from 'elysia'
import { vike } from 'vike-node/elysia'
import { serve } from 'bun'

const port = +(process.env.PORT || 3000)

const app = new Elysia()
app.use(vike())
// app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
serve({
  fetch: app.fetch,
  port
})
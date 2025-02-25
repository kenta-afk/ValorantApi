import { Hono } from 'hono'
import valorant from './valorants/valorant'

const app = new Hono()
app.route('/valorant', valorant)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app

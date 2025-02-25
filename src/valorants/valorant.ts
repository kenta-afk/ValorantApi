import { Hono } from 'hono'

type Bindings = {
    API_KEY: string
}

const app = new Hono<{ Bindings: Bindings }>()



const url = 'https://ap.api.riotgames.com/val/status/v1/platform-data'


app.get('/getStatus', async (c) => {
    try {
        const apiKey = c.env.API_KEY

        const response = await fetch(`${url}?api_key=${apiKey}`)

        if (!response.ok) {

            const statusCode = response.status

            return c.json({ statusCode })
        }
        const data = await response.json() as Record<string, unknown>
        return c.json(data)
    }
    catch (e) {
        return c.json({ error: e })
    }
})


export default app
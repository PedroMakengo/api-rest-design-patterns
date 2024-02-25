import Express, { Response, Request } from 'express'

const app = Express()
app.use(Express.json())
const PORT = 8000

app.get('/', (request: Request, response: Response) => {
  return response.send({ message: 'Hello Word' })
})

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`)
})

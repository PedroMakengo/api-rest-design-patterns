import Express, { Response, Request } from 'express'
import UserController from './controllers/UserController'

const app = Express()
app.use(Express.json())
const PORT = 8000

app.get('/', (request: Request, response: Response) => {
  return response.send({ message: 'Hello Word 1' })
})

app.post('/createUser', UserController.createUser)

app.listen(PORT, () => {
  console.log(`Server is running ${PORT} `)
})

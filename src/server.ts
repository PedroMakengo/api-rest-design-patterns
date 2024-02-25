import Express from 'express'
import routes from './routes'

const app = Express()
app.use(Express.json())
const PORT = 8000

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is running ${PORT} `)
})

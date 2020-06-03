import express from 'express'
import routes from './routes'
const app = express()

app.use(express.json())

app.use(routes)

const users = [
  'Diego',
  'Cleiton',
  'Robson',
  'Daniel',
  'Gabriel'
]
app.get('/', (request,response)=>{

  return response.json({message:'Hello World'})
})

app.listen(3333)
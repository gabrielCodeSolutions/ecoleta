import express from 'express'

const app = express()

app.use(express.json())
// Rota é o endereço completo da nossa requisição;

// Recurso: Qual entidade estamos acessando do sistema.

//GET Buscar uma ou mais informações do back-end
//POST Criar uma informação no back-end
//PUT: Atualizar uma informação existentee

// Request Param: Parâmetro que vem na própria rota que identificam um return
// Query Param: Parâmetros que vem na rota geralmente opcionais para filtros, paginação e etc...
// Request Body: São parâmetros para criação e atualização de informações;
const users = [
  'Diego',
  'Cleiton',
  'Robson',
  'Daniel',
  'Gabriel'
]
app.get('/users', (request,response)=>{
  const search = String(request.query.search)

  const filteredUsers = search ? users.filter(user=> user.includes(search)) : users

  return response.json(filteredUsers)
})
app.get('/users/:id',(request,response)=>{
  const id = Number(request.params.id)

  const user = users[id]

  return response.json(user)
})
app.post('/users', (request,response)=>{
  const data = request.body

  const user ={
    name:data.name,
    email:data.email
  }

  return response.json(user)
})

app.listen(3333)
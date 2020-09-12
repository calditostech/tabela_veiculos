const express = require('express')

const server = express()

server.use(express.json())


    //Listar veiculo
const users = ["Carro",'Moto','Caminhao']

server.get('/veiculo', (req,res) =>{

	return res.json(users)
})

    
server.post('/veiculos',(req, res) =>{
	const { name } = req.body

	user.push(name)

	return.res.json(users)
})


   //Cadastrar veiculo
server.post('/veiculos', (req, res) => {
	const { name } = req.body

	users.push(name)

	return.res.json(users)
})


  //Editar veiculo

server.put('/users/:index', (req, res) =>{
     const { index } = req.params
     const { name } = req.body

     users[index] = name

     users.push(name)

     return res.json(users)

})

 //Deleta veiculo

 server.put('/users/:index', (req, res) =>{

 	users.splice(index, 1)
 
 })

server.listen(3000)
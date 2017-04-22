const app = require('./app_config.js')  
const userController = require('./controller/userController.js')
const validator = require('validator')


app.get("/", (req, res) => {
    res.end('Servidor on')
})

app.get('/users', (req, res) => {
    userController.list((result) => {
    	res.json(result)
	})
})

app.get('/users/:id', (req, res) => {
    let id = validator.trim(validator.escape(req.param('id')))  

	userController.user(id, (result) => {
    	res.json(result)
	})
})

app.put('/users', (req, res) => {
    let fullname = validator.trim(validator.escape(req.param('fullname')))  
	let email = validator.trim(validator.escape(req.param('email')))  
	let password = validator.trim(validator.escape(req.param('password')))  

	userController.save(fullname, email, password, result =>  {
		res.json(result)  
	})  
})

app.post('/users', (req, res) => {
    let id = validator.trim(validator.escape(req.param('id')))  
	let fullname = validator.trim(validator.escape(req.param('fullname')))  
	let email = validator.trim(validator.escape(req.param('email')))  
	let password = validator.trim(validator.escape(req.param('password')))  

	userController.update(id, fullname, email, password, result => {
		res.json(result)
	})
})

app.delete('/users/:id', (req, res) => {
    let id = validator.trim(validator.escape(req.param('id'))) 

	userController.delete(id, result => {
		res.json(result) 
	}) 
})


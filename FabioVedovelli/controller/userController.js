const db = require('../db_config.js')

const list = callback => {

	db.User.find({}, (error, users) =>  {

		if(error) {

			callback({error: 'Não foi possivel retornar os usuarios'})
		} else {

			callback(users) 
		}
	}) 
} 


const user = (id, callback) =>  {

	db.User.findById(id, (error, user) => {

		if(error) {
			callback({error: 'Não foi possivel retornar o usuario'}) 
		} else {
			callback(user) 
		}
	}) 
} 


const save = (fullname, email, password, callback) => {

	new db.User({
		'fullname': fullname,
		'email': email,
		'password': password,
		'created_at': new Date()
	}).save((error, user) => {
		if(error) {
			callback({error: 'Não foi possivel salvar o usuario'}) 
		} else {
			callback(user) 
		}
	}) 
} 


exports.update = (id, fullname, email, password, callback) => {

	db.User.findById(id, (error, user) => {

		if(fullname) {
			user.fullname = fullname 
		}

		if(email) {
			user.email = email 
		}

		if(password) {
			user.password = password 
		}

		user.save((error, user) => {

			if(error) {
				callback({error: 'Não foi possivel salvar o usuario'}) 
			} else {

				callback(user) 
			}
		}) 
	}) 
} 


exports.delete = (id, callback) => {

	db.User.findById(id, (error, user) => {

		if(error) {

			callback({error: 'Não foi possivel retornar o usuario'}) 
		} else {

			user.remove((error)  => {

				if(!error) {

					callback({response: 'Usuário excluido com sucesso'}) 
				}
			}) 
		}
	}) 
} 
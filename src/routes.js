const express = require('express');
const UserController = require('./controlers/userController')
const AmostraController = require('./controlers/amostraControler')

const routes = express.Router();

routes.post('/user', UserController.store)
routes.get('/user', UserController.index)

routes.post('/amostra', AmostraController.store)
routes.get('/amostra', AmostraController.index)
routes.put('/amostra', AmostraController.update)
routes.delete('/amostra', AmostraController.delete)

module.exports = routes;
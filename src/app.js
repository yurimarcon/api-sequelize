require('dotenv').config()

require('./database/index')
const express = require('express')
const routes = require('./routes.js')

const app = express()

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000)
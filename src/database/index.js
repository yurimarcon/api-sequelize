const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const User = require('../models/User')
const Amostra = require('../models/Amostra')

const connection = new Sequelize(dbConfig);

User.init(connection);
Amostra.init(connection);

module.exports = connection;
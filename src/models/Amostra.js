const { Model, DataTypes } = require('sequelize');

class Amostra extends Model {
    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
        },{
            sequelize : connection
        })
    }
}
module.exports = Amostra;
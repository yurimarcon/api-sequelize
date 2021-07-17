const Amostra = require('../models/Amostra');

module.exports = {
    async store(req, res){
        const {nome, descricao} = req.body;
        
        const amostra = await Amostra.create({ nome, descricao });

        return res.json(amostra);
    },

    async index(req, res){
        let amostras = await Amostra.findAll();

        return res.json(amostras);
    },

    async update(req,res){
        if(!req.body.id){
            return res.json({
                "statusCode": 400,
                "msg": "Para fazer um update você precisa infomar o id do objeto"
            })
        }

        let amostra = await Amostra.findByPk(req.body.id)
        let result;
        if(amostra){
            amostra.nome = req.body.nome;
            amostra.descricao = req.body.descricao;
            result = await amostra.save()
        }else{
            result = {
                "statusCode": 400,
                "msg": "não foi encontrado nenhum objeto com o id informado."
            }
        }
        return res.json(result)
    },

    async delete(req, res){
        let amostra = await Amostra.findByPk(req.body.id)
        if(amostra){
            await Amostra.destroy({ where : { id : req.body.id }})
            res.json({
                "statusCode":200,
                "msg": "Objeto excluído com sucesso."
            })
        }else{
            res.json({
                "statusCode":400,
                "msg": "Não foi localizado nenhum objeto com esse id."
            })
        }

        return res.json()

    }
}
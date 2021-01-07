//Faz a comunicação com o banco e serializa dados das requisições que vem da API com os serviços do arquivo .proto

const { Prova, ProvaInit } = require('../../../models');

module.exports = {
    async createProva(call, callback) {

        const  { id_processo, qtdQuestoes }  = call.request.prova;
        // validate

        const prova = await Prova.create({
            id_processo, qtdQuestoes
        })

        return callback(null, { requestIsSucess: true });

    }, //exemplo de criação de provas
}
//Faz a comunicação com o banco e serializa dados das requisições que vem da API com os serviços do arquivo .proto

const { Users } = require('../../../models');

const sequelize = require('sequelize')

module.exports = {
    async getUserById(call, callback) {
        const { id } = call.request;

        const user = await Users.findOne({
            where: {
                id: id
            }
        });

        if (!user) {
            return callback(null, { error: 'User not found.'});
        }

        user.password = undefined;

        return callback(null, { user });
    }, //lista usuário do id referenciado

    async registerUser(call, callback) {
        try {
            console.log(call)

            const { name, email, password } = call.request.user;

            const user = await Users.create({ name, email, password });
                        
            user.password = undefined;
            
            if (user) {
                return callback(null, { user });
            }
            
        } catch (error) {

            console.log(error)
            return callback(null, { user: { error: true } });
        }
    } //cria um usuário
}

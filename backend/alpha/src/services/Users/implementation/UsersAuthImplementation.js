//Faz a comunicação com o banco e serializa dados das requisições que vem da API com os serviços do arquivo .proto

const { Users } = require('../../../models');

module.exports = {
    async loginUser(call, callback) {
        const { email, password } = call.request;

        const user = await Users.findOne({
            where: {
                email,
                password,
            }
        })

    //     if (!(await Users.compareHash(password))) {
    //         return callback(null, { error: 'Invalid password' });
    //    }      

        if (!user) return callback(null, { error: "User not found." })

        return callback(null, { user });
    } //exemplo de login de um usuário
}
//Faz a comunicação com o banco e serializa dados das requisições que vem da API com os serviços do arquivo .proto

const { Companys } = require('../../../models');

module.exports = {
    
    async loginCompany(call, callback) {
        const { email, password } = call.request;

        const company = await Companys.findOne({
            where: {
                email,
                password,
            }
        });


        // if (!(await Companys.compareHash(this.password))) {
        //     return callback(null, { error: 'Invalid password' });
        // };      

        if (!company) return callback(null, { error: "Company not found." });

        return callback(null, { company });
    }//exemplo de login de um usuário
}
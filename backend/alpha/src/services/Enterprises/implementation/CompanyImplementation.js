//Faz a comunicação com o banco e serializa dados das requisições que vem da API com os serviços do arquivo .proto

const { Companys } = require('../../../models');

module.exports = {
    async getCompanyById(call, callback) {

        const { id } = call.request;

        const company = await Companys.findOne({
            where: {
                id: id
            }
        });

        if (!company) {
            return callback(null, { error: 'Company not found.'});
        }

        company.password = undefined;

        return callback(null, { company });
    }, //lista empresas por id referenciado

    async registerCompany(call, callback) {
            const { name, email, password, cnpj } = call.request.company;
        
            const company = await Companys.create({ name, email, password, cnpj
             });

            company.password = undefined;
            
            if (company) {
                return callback(null, { company });
            }
            
            return callback(null, { company: { error: true } });
    } //cria uma empresa
}

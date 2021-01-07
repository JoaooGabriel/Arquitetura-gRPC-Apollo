const alphaCompany  = require('../services/company');
const bcrypt = require('bcryptjs');

class CompanyController {
    async show(request, response) {
        const { id } = request.params;

        const company = await alphaCompany.getCompanyById({ id }); //faz a comunicação com o método do serviço dos arquivos ...implementation.js, que lista empresas por id

        if (!company) {
            return response.status(404).send('Company not found, id not exist.');
        }

        return response.status(200).json(company);
    } 
    
    async store(request, response) {

    const { name, email, password, cnpj } = request.body;

    let passwordHash = await bcrypt.hash(password, 8);
        
    const companyResponse = await alphaCompany.registerCompany({
        company: { email, name, password: passwordHash, cnpj }
    }); //faz a comunicação com o método do serviço dos arquivos ...implementation.js, que cira empresa

    passwordHash = undefined;
    
     return response.status(201).json(companyResponse);
    }
}

module.exports = new CompanyController();
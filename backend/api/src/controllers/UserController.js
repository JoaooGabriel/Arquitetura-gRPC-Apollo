const bcrypt = require('bcryptjs');

const alphaUser = require('../services/user');

class UserController { 
    async show(request, response) {
        const { id } = request.params;

        const user = await alphaUser.getUserById({ id });

        if (!user) {
            return response.status(404).send('User not found, id not exist.');
        }

        return response.status(200).json(user);
    } //faz a comunicação com o método do serviço dos arquivos ...implementation.js, que lista usuários por id
    
    async store(request, response) {
    
        const { name, email, password } = request.body;

        const passwordHash = await bcrypt.hash(password, 8);

        const user = await alphaUser.registerUser({
                    user: { email, name, password: passwordHash }
        })
        
        return response.status(201).json(user);
    } //faz a comunicação com o método do serviço dos arquivos ...implementation.js, que cria usuário
}

module.exports = new UserController();
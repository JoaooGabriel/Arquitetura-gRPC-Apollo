const alphaProva = require('../services/prova')

class ProvaController {
  async store(request, response) {
        console.log('aqui')

        const { prova } = request.body;
        const provas = await alphaProva.createProva({ prova })

        return response.json(provas)
  } //faz a comunicação com o método do serviço dos arquivos ...implementation.js, que cria provas
}

module.exports = new ProvaController();
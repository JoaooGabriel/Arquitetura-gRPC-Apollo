const fs = require('fs');
const path = require('path');
const protoLoader = require('@grpc/proto-loader');
const grpc = require('grpc');

module.exports = async function createService(grpcServer, nameServiceProto) {
    fs.readdirSync(path.resolve() + '/src/services/').forEach(file => {
        // percorre todas as pastas de service procurando arquivos .proto

        const packageDefinition = protoLoader.loadSync(
            path.resolve(
                __dirname,
                'services',
                '' + file + '',
                'pb',
                'messages.proto'
            ),
            {
                keepCase: true,
                longs: String,
                enums: String,
                defaults: true,
                oneofs: true,
            }
        ); // carrega o arquivo .proto

        const thisProto = grpc.loadPackageDefinition(packageDefinition); //carrega as configurações e armazena na variável

        // sincroniza o proto do serviço com os metodos criados
        fs.readdirSync('./src/services/' + file + '/').forEach(item => {
            if (path.extname(item) == '.js') {
                const thisMethod = require(path.resolve(
                    __dirname,
                    'services/' + file + '/' + item
                ));

                const number = Object.keys(thisProto).length - 1; //retorna o último servido do arquivo .proto

                // retirna e vincula o service no servidor
                return grpcServer.addService(
                    Object.values(thisProto)[number].service,
                    thisMethod
                );
            }
        }); //percorre cada item(arquivo) do arquivo .proto
    });
};

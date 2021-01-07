const grpc = require('grpc');

require('./database/index');

const loadeFunc = require('./loader')

const server = new grpc.Server();

// server.addService(proto.UserService.service, UserMethods);
// server.addService(proto2.CompanyService.service, CompanyMethods);

loadeFunc(server, 'CompanyService');

server.bind('0.0.0.0:3334', grpc.ServerCredentials.createInsecure()); //cria um server, passa a porta e credencias do gRPC

server.start();
const swaggerAutogen = require('swagger-autogen')();
const doc = {
  info: {
    title: 'API da Marvel',
    description: 'busca da saga Fall of the Mutants'
  },
  host: 'localhost:3000'
};

const outputFile = './swagger-output.json';
const routes = ['./src/marvel/domain/routes.ts'];


swaggerAutogen(outputFile, routes, doc);
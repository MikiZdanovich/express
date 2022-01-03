import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import yaml from 'yamljs';

import Routes from './src/routes';
import database from './src/db';

const PORT = process.env.PORT || 3000;
const app = express();

const swaggerDocument = yaml.load('./src/docs/swagger-config.yaml');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'SDET API',
      description: 'SDET API Sandbox',
      contact: {
        name: 'Miki',
      },
      servers: [`http://localhost:${PORT}`],
    },
  },
  apis: ['index.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/sandbox', swaggerUI.serve, swaggerUI.setup(swaggerDocument, swaggerDocs));

app.use(Routes);

database.connect()

app.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}...`)
});

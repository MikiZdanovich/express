import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import yaml from 'yamljs';
import bodyParser from 'body-parser';

import petRoutes from './src/routes/pets';
import database from './src/db/models';



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

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/sandbox', swaggerUI.serve, swaggerUI.setup(swaggerDocument, swaggerDocs));

app.use('/pet', petRoutes)

// database.connect()
// database.db.sync().then(result => {
//   console.log('Connection to DB succeed');

//   app.listen(PORT, () => {
//     console.log(`Server has been started on port:${PORT}...`)
//   });

// }).catch(err => {
//   console.log('Failed to connect to db');
// });


  app.listen(PORT, () => {
    console.log(`Server has been started on port:${PORT}...`)
  });
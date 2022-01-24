import { Sequelize } from 'sequelize'
import { path } from 'path'
import { fs } from 'fs'

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: 'postgres',
  },
)

const db = {}

fs
  .readdirSync(__dirname)
  .filter((file) => {
    const returnFile = (file.indexOf('.') !== 0)
      && (file !== 'index.js');
    return returnFile;
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize)
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default { db }

// const database = {
//   connect() {
//     console.log('connect to postgres')
//     database.db = new Sequelize(
//       process.env.PGDATABASE,
//       process.env.PGUSER,
//       process.env.PGPASSWORD,
//       {
//         host: process.env.PGHOST,
//         port: process.env.PGPORT,
//         dialect: 'postgres',
//       },
//     )
//   },
//   disconnect() {
//     return this.db.close()
//   },
// }

// module.exports = database

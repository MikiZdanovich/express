import { Sequelize } from 'sequelize'
import { join } from 'path'
import { readdirSync } from 'fs'

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

readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const model = sequelize.import(join(__dirname, file))

    db[model.name] = model;
  })

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

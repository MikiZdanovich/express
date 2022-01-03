import { Sequelize } from 'sequelize'

const database = {
  connect() {
    console.log('connect to postgres')
    database.db = new Sequelize(
      process.env.PGDATABASE,
      process.env.PGUSER,
      process.env.PGPASSWORD,
      {
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        dialect: 'postgres',
      },
    )
  },
  disconnect() {
    return this.db.close()
  },
}

module.exports = database

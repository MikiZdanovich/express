// import path from 'path'

// const models = path.join(__dirname, 'src', 'db', 'models')
import models from './src/db/models'

const { sequelize } = models.sequelize

sequelize.sync({
  force: true,
});

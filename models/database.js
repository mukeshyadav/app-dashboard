import { Sequelize } from 'sequelize';

const appSequelize = new Sequelize('', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
  operatorsAliases: 0,
  define: {
    timestamps: 0
  }
});

export default appSequelize;

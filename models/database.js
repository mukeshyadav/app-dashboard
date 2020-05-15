import { Sequelize } from 'sequelize';

const appSequelize = new Sequelize('gql_learn', 'root', '123456', {
  dialect: 'mysql',
  host: 'localhost',
  operatorsAliases: 0,
  define: {
    timestamps: 0
  }
});

export default appSequelize;

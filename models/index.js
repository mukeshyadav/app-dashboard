import appSequelize from './database';

const userModel = appSequelize.import('./user');
const carModel = appSequelize.import('./car');

const models = {
  User: userModel,
  Car: carModel
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export default models;

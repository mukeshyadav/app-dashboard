import appSequelize from './models/database';
import models from './models';
import { create } from 'domain';

const createData = async () => {
  await models.User.create(
    {
      name: 'Mukesh',
      cars: [
        {
          make: 'Maruti',
          model: 'Alto 800',
          color: 'Silver'
        }
      ]
    },
    {
      include: [models.Car]
    }
  );
  await models.User.create(
    {
      name: 'Rajan',
      cars: [
        {
          make: 'Maruti',
          model: 'Alto 800',
          color: 'Silver'
        }
      ]
    },
    {
      include: [models.Car]
    }
  );

  await models.User.create(
    {
      name: 'Anuj',
      cars: [
        {
          make: 'Maruti',
          model: 'Baleno',
          color: 'Blakc'
        }
      ]
    },
    {
      include: [models.Car]
    }
  );

  await models.User.create(
    {
      name: 'Raju',
      cars: [
        {
          make: 'Honda',
          model: 'City',
          color: 'Gold'
        }
      ]
    },
    {
      include: [models.Car]
    }
  );
};

appSequelize.sync().then(async () => {
  try {
    await createData();

    process.exit();
  } catch (error) {
    console.error(error);
  }
});

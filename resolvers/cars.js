const carResolvers = {
  Query: {
    cars: (parent, args, { models }) => models.Car.findAll(),
    car: (parent, { id }, { models }) => models.Car.findByPk(id),
    type: (parent, { type, val }, { models }) =>
      models.cars.filter(car => car[type] === val)
  },
  Mutation: {
    createCar: (parent, { model, make, color }, { models }) => {
      const car = { model, make, color };
      return models.Car.create(car);
    },
    removeCar: (parent, { id }, { models }) => {
      return models.Car.destroy({ where: { id } });
    }
  },
  Car: {
    owner: (parent, args, { models }) => {
      return models.User.findByPk(parent.userId);
    }
  }
};

export default carResolvers;

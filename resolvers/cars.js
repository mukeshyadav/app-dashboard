const carResolvers = {
  Query: {
    cars: (parent, args, { models }) => models.cars,
    car: (parent, { id }, { models }) =>
      models.cars.filter(car => car.id === id)[0],
    type: (parent, { type, val }, { models }) =>
      models.cars.filter(car => car[type] === val)
  },
  Mutation: {
    createCar: (parent, { model, make, color, id }, { models }) => {
      const car = { model, make, color, id };
      models.cars.push(car);
      return car;
    },
    removeCar: (parent, { id }, { models }) => {
      let found = false;
      cars = models.cars.filter(car => {
        if (car.id === id) {
          found = true;
        } else {
          return false;
        }
      });
      return found ? true : false;
    }
  },
  Car: {
    owner: (parent, args, { models }) =>
      models.users[parent.ownedBy - 1]
  }
};

export default carResolvers;

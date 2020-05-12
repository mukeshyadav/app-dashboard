const userResolvers = {
  Query: {
    users: (parent, args, { models }) => models.users,
    user: (parent, { id }, { models }) =>
      models.users.filter(user => user.id === id)[0],
    me: (parent, args, { me }) => me
  },
  Mutation: {
    makeUser: (parent, { id, name }, { models }) => {
      const user = { id, name };
      models.users.push(user);
      return user;
    },
    removeUser: (parent, { id }, { models }) => {
      let found = false;
      users = models.users.filter(user => {
        if (user.id === id) {
          found = true;
        } else {
          return false;
        }
      });
      if (found) {
        return true;
      } else {
        return false;
      }
    }
  },

  User: {
    car: (parent, args, { models }) =>
      parent.cars.map(carId => models.cars[carId - 1])
  }
};

export default userResolvers;

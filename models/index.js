let users = [
  {
    id: 1,
    name: 'Mukesh',
    cars: [1, 5, 10]
  },
  {
    id: 2,
    name: 'Anjali',
    cars: [2, 6, 9]
  },
  {
    id: 3,
    name: 'Lokesh',
    cars: [3, 7]
  },
  {
    id: 4,
    name: 'Pooja',
    cars: [4]
  }
];

let cars = [
  { make: 'Maruti', model: 'Alto', color: 'Red', id: 1, ownedBy: 1 },
  {
    make: 'Maruti',
    model: 'Baleno',
    color: 'Silver',
    id: 2,
    ownedBy: 2
  },
  {
    make: 'Maruti',
    model: 'Ciaz',
    color: 'Black',
    id: 3,
    ownedBy: 3
  },
  {
    make: 'Hyundai',
    model: 'Accent',
    color: 'Orange',
    id: 4,
    ownedBy: 4
  },
  { make: 'Hyundai', model: 'i20', color: 'Red', id: 5, ownedBy: 1 },
  {
    make: 'Hyundai',
    model: 'Grandi10',
    color: 'Green',
    id: 6,
    ownedBy: 2
  },
  { make: 'Honda', model: 'City', color: 'Black', id: 7, ownedBy: 3 },
  {
    make: 'Honda',
    model: 'Brio',
    color: 'Orange',
    id: 8,
    ownedBy: 1
  },
  { make: 'Audi', model: 'Q2', color: 'Black', id: 9, ownedBy: 2 },
  { make: 'Audi', model: 'Q3', color: 'Red', id: 10, ownedBy: 1 }
];

export default { users, cars };

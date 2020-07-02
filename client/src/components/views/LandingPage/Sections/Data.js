const price = [
  {
    _id: 0,
    name: "All",
    array: [],
  },
  {
    _id: 1,
    name: "$0 - $50",
    array: [0, 50],
  },
  {
    _id: 2,
    name: "$50 - $250",
    array: [50, 250],
  },
  {
    _id: 3,
    name: "$250 - $1,000",
    array: [250, 1000],
  },
  {
    _id: 4,
    name: ">$1,000",
    array: [1000, 1000000],
  },
];

const sizes = [
  {
    _id: 0,
    size: "--",
  },
  {
    _id: 1,
    size: "XS",
  },
  {
    _id: 2,
    size: "S",
  },
  {
    _id: 3,
    size: "M",
  },
  {
    _id: 4,
    size: "L",
  },
  {
    _id: 5,
    size: "XL",
  },
  {
    _id: 6,
    size: "XXL",
  },
];

export { price, sizes };

const pets = [
  { dog: 1 },
];

// eslint-disable-next-line import/prefer-default-export
export const getPets = (req, res) => {
  res.status(200).json(pets);
};

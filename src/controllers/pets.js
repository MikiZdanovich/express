// eslint-disable-next-line import/prefer-default-export
export const getPets = (req, res) => {
  const tags = req.params
  // eslint-disable-next-line no-template-curly-in-string
  // db.one('SELECT * FROM pets WHERE tags in $tags', [tags], (error, results) => {
  //   if (error) {
  //     throw error
  //   }
  res.status(200).json({})
  // })
};

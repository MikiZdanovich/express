const pgp = require('pg-promise')

const db = pgp('postgres://user:pass@postgres:5432/db')

// eslint-disable-next-line import/prefer-default-export
export const getPets = (req, res) => {
  const tags = req.params
  // eslint-disable-next-line no-template-curly-in-string
  db.one('SELECT * FROM pets WHERE tags in $tags', [tags], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
};

const usersRoutes = (app, fs) => {
  // variables
  const dataPath = '/../../data/users.json';

  // READ
  app.get('/users', (req, res) => {
    fs.readFile(__dirname + dataPath, 'utf8', (err, data) => {
      console.log(__dirname)
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = usersRoutes;
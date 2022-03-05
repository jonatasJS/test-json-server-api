const userProfessionRoutes = (app, fs) => {
  // variables
  const dataPath = '/../../data/users.json';

  // READ
  app.get('/user/:id/profession', (req, res) => {
    const id = Number(req.params.id);
    fs.readFile(__dirname + dataPath, 'utf8', (err, data) => {
      if (err) {
        return res.status(408).json({ err });
      }

      const dataJson = JSON.parse(data);


      res.send(dataJson[id - 1].profession);
    });
  });
};

module.exports = userProfessionRoutes;
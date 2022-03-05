const homeRoutes = (app, fs) => {

  // READ
  app.get('/', (req, res) => {
    res.render(__dirname + '/../../pages/index.html');
  });
};

module.exports = homeRoutes;
const user = require('./user');
const users = require('./users');
const userName = require('./userName');
const userProfession = require('./userProfession');
// const home = require('./home');

const appRouter = (app, fs) => {
  user(app, fs);
  users(app, fs);
  userName(app, fs);
  userProfession(app, fs);
  // home(app, fs);
};

module.exports = appRouter;
const Sequelize = require('sequelize');

// with password and options
//const sequelize = new Sequelize('', 'root', 'Elng.net82', {})

var sequelize = new Sequelize('books', 'user', 'passwd', {
    host: 'server',
    port: 3306,
    dialect: 'mysql'
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



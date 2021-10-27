const Sequelize= require("sequelize");

const sequelize = new Sequelize('expressKube', 'root', 'root!@!@!@', {
    host: 'localhost',
    dialect: 'mysql'
});

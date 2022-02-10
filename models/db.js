//importa o Sequelize:
const Sequelize = require("sequelize");

//Conexão com o banco de dados:
//informa-se sobre os parâmetros do banco de dados ao qual será utilizado
//Sequelize('nome-do-banco', 'usuario', 'senha', { host: "", dialect: "banco-utilizado" })
const sequelize = new Sequelize('postapp', 'root', 'senha', {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
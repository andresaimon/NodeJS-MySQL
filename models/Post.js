//criação de tabelas no banco:
const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

/* comentar essa linha sempre que ela for executada pela primeira vez
senão, a tabela será recriada
Post.sync({force: true})
*/

module.exports = Post
//importa o Express:
const express = require("express");
const app = express();

//importa o Body Parser:
const bodyParser = require('body-parser')

//importa o Handlebars:
const handlebars = require("express-handlebars");

//comunicar com o Post.js:
const Post = require('./models/Post')

//Configuração do Template Engine Handlebars:
app.engine('handlebars', handlebars.engine({defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

/*
runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
*/

//Configuração do Body Parser:
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/* exemplos de rotas:
app.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu app!");
});

app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre");
})

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog!");
})

app.get("/livedeteste", function(req, res){
    res.send("live")
})

app.get("/rotaDeTeste",function(req, res){
    res.send("xxxx")
})
*/

//rota de redirecionamento para quando o post for criado:
//listagem de todos os posts: Post.all()
app.get('/', function(req, res){
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
        res.render('home', {posts: posts})
    })
})

//criação de novas rotas:
app.get('/cad', function(req, res){
    res.render('formulario')
})

//rota e função para receber os dados do formulário:
app.post('/add', function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Houve um erro " + erro)
    })
})

//rota para deletar dados na tabela:
app.get('/deletar/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("postagem deletada com sucesso")
    }).catch(function(erro){
        res.send("essa postagem nao existe")
    })
})

app.listen(8081, function(){
    console.log("servidor rodando na url http://localhost:8081");
});
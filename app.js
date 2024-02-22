var express = require('express');
const load = require('express-load');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
var path = require('path');
var app = express();


app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(expressSession(
        { resave: true, saveUninitialized: true, secret: 'ntalk' }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


try{
        load('models')
        .then('controllers')
        .then('routes')
        .into(app);
}catch(err) {
        console.error('Erro ao carregar módulos:', err);
};

app.listen(3000, function(){
    console.log("Ntalk no ar.");
});



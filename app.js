var express = require('express')
,routes = require('./routes');
const load = require('express-load');
var path = require('path');
var app = express();


app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

load('models')
    .then('controllers')
    .then('routes')
    .into(app);

app.listen(3000, function(){
    console.log("Ntalk no ar.");
});
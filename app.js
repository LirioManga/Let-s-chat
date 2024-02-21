var express = require('express')
,routes = require('./routes');
var path = require('path');
var app = express();


app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function(){
    console.log("Ntalk no ar.");
});
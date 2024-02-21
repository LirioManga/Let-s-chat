module.exports = function(app){
    
    var home = app.controllers;
    app.get('/', home.index);
};
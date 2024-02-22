module.exports = function(app){
    var contactos = app.controllers.contactos;
    app.get('contactos', contactos.index);
};
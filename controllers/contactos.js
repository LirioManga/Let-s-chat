module.exports = function(app){
    var ContactoController = {
        index: function(req, res){
            var usuario = req.session.usuario,
            params = {usuario: usuario};
            res.render('contactos/index', params);
        }
    }
    return ContactoController;
};
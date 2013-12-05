/*
 * Router
 */
module.exports = function(app) {
    app.get('/', function(req, res){
        res.render('index')
    });
    app.get('/partials/:template', function(req, res){
        var template = req.params.template;
        console.log(template)
        if (!template) {
            throw Error('Undefined template name')
        }
        res.render('partials/' + template);
    });

    app.get('*', function(req, res){
        res.render('index');
    });
}





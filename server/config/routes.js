var mongoose = require('mongoose');
var Score = mongoose.model('Score');
bodyParser = require('body-parser').json();
var score = require('../controllers/scores.js');
console.log("skr routes.js")

module.exports = function(app){
	app.get('/scores', function(req, res) {
        score.index(req, res);
    })

    app.post('/scores/new', bodyParser, function(req, res) {
    	console.log("skr new routes.js")

        score.create(req, res);

    })

    app.post('/scores/:id', function(req, res) {
        score.update(req, res);
    })

    app.delete('/scores/:id', function(req, res) {
        score.delete(req, res);
	})
}

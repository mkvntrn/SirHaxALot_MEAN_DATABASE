var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var scoreSchema = new mongoose.Schema ({
	phone_iD : {type: String},
	name : {type: String},
	time : {type: String},
	combo : {type: String},
	total : {type: String},
	
})
console.log("skr score.js")
mongoose.model('Score', scoreSchema);
var express = require('express');
var path = require('path');
var app = express();
var bp = require('body-parser');



app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(bp.urlencoded({extended: true})); 
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(8000, function(){
	console.log("Sample project now running on port 8000");
})
console.log('Mongoose controller');
var mongoose = require('mongoose');
Score = mongoose.model('Score')
// var Model = mongoose.model('Model');

function scoresController() {
    var _this = this;
    this.index = function(req, res) {
        score.find({}, function(err, data) {
            res.json(data);
        });
    };


 	////////////////////////////////////////////////////////////////////////
    //                                                                    //
    // GET ALL Scores   (Scoreboard)                 		              //
    //                                                                    //
    ////////////////////////////////////////////////////////////////////////


Score.find({}, function(err, data) {
  if (err) throw err;

  // object of all the scores
  res.json(data);
  console.log(scores);
});

  	////////////////////////////////////////////////////////////////////////  
    //                                                                    //
    // create a score with ID                        		              //
    //                                                                    //
    ////////////////////////////////////////////////////////////////////////

score.create({ phone_iD: req.body.phone_iD }, function(err, score) {
  if (err) throw err;

                score = new Score({phone_iD: req.body.phone_iD, name: req.body.name, time: req.body.time, combo: req.body.combo, total: req.body.total, name: "pending"});
                console.log(score);

                score.save(function(err, newscore) {
                    if (err){
                        res.json(err);
                        console.log("error saving new score");
                    }
                    else{
                        res.json(newscore);
                    }
                });
});

    ////////////////////////////////////////////////////////////////////////
    //                                                                    //
    // Find A score & Update                     		     	          //
    //                                                                    //
    ////////////////////////////////////////////////////////////////////////


// ...update any records that match the query
Score.findByIdAndUpdate({ phone_iD: req.body.phone_iD }, { $set: {name: req.body.name, time: req.body.time, combo: req.body.combo, total: req.body.total}}, function(err, data){
 if (err) return handleError(err);
  res.json(data);
 // This code will run when the DB has attempted to update the matching record.
})


     ////////////////////////////////////////////////////////////////////////
    //                                                                    //
    // DeleEte                     		              					  //
    //                                                                    //
    ////////////////////////////////////////////////////////////////////////

// get the score starlord55
score.find({ phone_iD: req.body.phone_iD }, function(err, score) {
  if (err) throw err;

  // delete him
  score.remove(function(err) {
    if (err) throw err;

    console.log('score successfully deleted!');
  });
});




score.findOne({phone_iD: req.body.phone_iD}, function(err, score){
        if (err){
            console.log("error getting score to check");
        }
        else{
            if(score == null){

                score = new score({phone_iD: req.body.phone_iD, name: req.body.name, time: req.body.time, combo: req.body.combo, total: req.body.total});
                console.log(score);

                score.save(function(err, newscore) {
                    if (err){
                        res.json(err);
                        console.log("error saving new score");
                    }
                    else{
                        res.json(newscore);
                    }
                });

            }
            else{
                console.log("score already exists...");
                res.json({
                        errors: {
                            score: {
                                message: "score name already exists/taken. sKR",
                                kind: "what didn't work",
                                path: "reference to the schema's name",
                                value: "cause of the initial error"
                            }
                        },
                        name: "Validation error"
                 });
            }


}




module.exports = new Controller();
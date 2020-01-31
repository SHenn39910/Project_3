const User = require("../models/User");
const Post = require("../models/Post");
const Message = require("../models/Message");

module.exports = function(app) {
    //Adds user to databse
    app.post("/api/users", function(req, res) {
    // Searches db for input email
    User.findOne({email: req.body.email}, function(err, user){
        if(err) {
            console.log(err);
        } else {
            //If no duplicates present
            if (user === null){
                if (user === null) {
                    // Hash password
                    bcrypt.hash(req.body.password, 10, function(err, hash) {
                      if (err) {
                        console.log(err);
                      } else {
                        req.body.password = hash;
                        // Then add to db
                        User.create(req.body, function(err, post) {
                          if (err) {
                            console.log(err);
                          } else {
                            console.log(post);
                            req.session.user = post._id;
                          }
                          res.sendStatus(200);
                        });
                      }
                    });
                    // Otherwise escape
                  } else if (user) {
                    res.status(401).send("A user with this email already exists!");
                  }
                }
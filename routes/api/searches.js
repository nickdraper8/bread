const express = require("express");
const router = express.Router()
// const { text } = require("body-parser");
const User = require("../../models/User")


router.get("/test", (req, res) => res.json({ msg: "This is the search route" }));

// INDEX -- show all users

router.get('/search', (req, res) => {

    eval(require('locus'));
    console.log(res)

    const userSearch = new RegExp(/^(req.query.search)$/gi)

    if(req.query.search){
    
        User.find({ username: userSearch }, function(err, allUsers){
        if(err){
            console.log(err);
        } else {
            res.render("users/index", {users: allUsers});
        }
    });
    
    } else {
        // grab all users from db

        User.find({}, function(err, allUsers){
            if(err){ 
                console.log(err);
            }else{
                res.render("users/index",{users: allUsers});
            }
        });
    }

});

module.exports = router;
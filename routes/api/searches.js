const express = require("express");
const router = express.Router()
// const { text } = require("body-parser");
const User = require("../../models/User")


router.get("/test", (req, res) => res.json({ msg: "This is the search route" }));

// INDEX -- show all users

router.get('/search', (req, res) => {

    // const userSearch = new RegExp(`/^(${req.query.bounds})/gi`)
    if(req.query.bounds){
        User.find({ username: { $regex: `${req.query.bounds}`, $options: "g" } }, function (err, allUsers) {
          if (err) {
            console.log(err);
          }
        //   } else {
        //     res.json(allUsers);
        //   }
        }).lean().exec();
    
    } else {
        // grab all users from db

        User.find({}, function(err, allUsers){
            if(err){ 
                console.log(err);
            }else{
                res.json(allUsers);
            }
        });
    }

});

module.exports = router;
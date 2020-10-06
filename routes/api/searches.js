const { text } = require("body-parser");
const express = require("express");
const router = express.Router()
const User = require("../../models/User")


// INDEX -- show all users

router.get('/search', (req, res) => {

    // eval(require('locus'));

    // console.log(res)

    const userSearch = new RegExp(/^(req.query.search)$/gi)

    if(req.query.search){
    
        User.find({ username: userSearch }, function(err, allUsers){
        if(err){
            console.log(err);
        } else {
            res.render("users/index", {users:allUsers});
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

{/* <form action='/search' method="GET">

    <div>
        <input type='text' name='search' />
        <input type='submit' />
    </div>

</form> */}


module.exports = router;
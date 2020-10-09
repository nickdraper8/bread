const express = require("express");
const router = express.Router()
// const { text } = require("body-parser");
const User = require("../../models/User")


router.get("/test", (req, res) => res.json({ msg: "This is the search route" }));

// INDEX -- show all users

router.get('/search', (req, res) => {

    // const userSearch = new RegExp(`/^(${req.query.bounds})/gi`)
    if(req.query.bounds) {
        User
            .find({ username: { $regex: `${req.query.bounds}`, $options: "gi" } })
            .then(users => res.json(users))
            .catch(err => res.status(400).json(err));
  
    } else {
        // grab all users from db

        User
            .find()
            .then(users => res.json(users))
            .catch(err => res.status(400).json(err));

    }

});

module.exports = router;
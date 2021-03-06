const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require("../../models/User");
const Event = require("../../models/Event");
const bcrypt = require('bcryptjs');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const mongoose = require("mongoose");
const axios = require("axios");

router.get("/test", (req, res) => 
    res.json({ msg: "This is the users route" }));

router.post("/sendmessage", (req, res) => {
    axios({
            "method":"POST",
            "url":`https://twilio-sms.p.rapidapi.com/2010-04-01/Accounts/a/Messages.json`,
            "headers":{
            "content-type":"application/json",
            "x-rapidapi-host":"twilio-sms.p.rapidapi.com",
            "x-rapidapi-key":keys.twilioKey,
            "useQueryString":true
            },"params":{
            "from":"+19093651823",
            "body":req.body.message,
            "to":`+1${req.body.phoneNumber}`
            }, "data": {}
            })
            .then((res)=>{
            console.log(res)
            })
            .catch((error) => console.log( error )
            )
})


router.post('/signup', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: "That email is already registered!" })
            } else {
                const newUser = new User({
                    phone: req.body.phone,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user =>{
                                const payload = { id: user.id, username: user.username };
                                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                    res.json({
                                        success: true,
                                        token: "Bearer " + token
                                    });
                                })})

                            .catch(err => console.log(err));
                    })
                })
            
            }


        })
})

router.post("/login", (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username }).then(user => {
        if (!user) {
            errors.username = "That person doesn't exist :(";
            return res.status(400).json(errors);
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = { id: user.id, username: user.username };
                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                });
            } else {
                errors.password = "Incorrect password";
                return res.status(400).json(errors);
            }
        });
    });
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
    console.log('logged out');

})

router.post("/:id", (req, res) => {

    User.findBy({ friend_id }).then(user => {
        if (!user) {
            errors.friend_id = "That friend does not exist :(";
            return res.status(400).json(errors);
        }
        res.json({
            user_id: req.user.id,
            friend_id: req.user.id,
        });


    });
});

router.delete('/:id', (req, res) => {
    
    User.findByIdAndDelete(req.body.friend_id)
        .then(() => res.json({ msg: "Friend deleted." }))
        .catch(err =>
            res.status(400).json(errors))
});


router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username,
        email: req.user.email
    });
});


router.get("/:id/events", (req, res) => {
    Event.find({ attendees: { $in: req.params.id } })
    .select("name")
    .then((events) => {
      return res.json(events);
    });
});



module.exports = router;
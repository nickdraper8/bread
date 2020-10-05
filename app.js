const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const passport = require('passport');

require('./config/passport')(passport);

mongoose
.connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));


app.get("/", (req, res) => res.send("Bread"));

app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
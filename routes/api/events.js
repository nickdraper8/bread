const express = require("express");
const router = express.Router();
const Event = require("../../models/Event");
const mongoose = require("mongoose");
const Expense = require("../../models/Expense");


router.post("/new", (req, res) => {

  const newEvent = new Event(
    {
    name: req.body.name,
    attendees: req.body.attendees,
    description: req.body.description
  });

  newEvent.save().then((event) => res.json(event));
});

router.get("/", (req, res) => {
  Event.find((error, events) => {
    if (error) return res.status(404).json({ error });

    res.json(events.map((event) => event));
  });
});

router.get("/:id", (req, res) => {
  Event.findById(req.params.id)
    .then((event) => res.json(event))
    .catch((error) =>
      res.status(404).json({ noEventFound: "No Event found with that ID" })
    );
});

router.patch("/edit/:id", (req, res) => {
  Event.findById(req.params.id).then((event) => {
    event.description = 
      req.body.description === '' ? event.description : req.body.description
    event.name =
      req.body.name === "" ? event.name : req.body.name;
    event.attendees =
      req.body.attendees === "" ? event.attendees : req.body.attendees;

    event
      .save()
      .then((event) => res.json(event))
      .catch((err) => res.status(400).json(err));
  });
});

router.delete("/:eventId", (req, res) => {
  Event.findByIdAndRemove(req.params.eventId) //check this line
    .then((events) => {
      if (!events) {
        return res.status(404).send({
          message: "Events not found",
        });
      }
      return res.send({ message: "Events successfully deleted" });
    })
    .catch((err) => {
      res.status(400).send({ message: "Could not delete event" });
    });
});

router.get("/:id/expenses", (req, res) => {
  Expense.find({ event_id: { $in: req.params.id } }).select("description amount date payer_id")
    .then((events) => {
      return res.json(events);
    });
});

router.get("/:id/attendees", (req, res) => {
    Event.findById(req.params.id).then(event => {
      const attendees = event._doc.attendees;
  
      User.find({ _id: { $in: attendees } })
        .select("_id username firstname lastname phone email")
        .then((users) => {
          return res.json(users);
        });
    })
  });

router.get("/:id/total", (req, res) => {

  Expense.find( {event_id : {$in : req.params.id}})
  .then( expense => {

    const total = [];
    expense.forEach(expense => {
      total.unshift(expense.amount)
    })

    sum = 0;
    total.forEach(decimal => {
      sum += JSON.parse(decimal)
    })
    
    res.json(sum);
  })

});

module.exports = router;
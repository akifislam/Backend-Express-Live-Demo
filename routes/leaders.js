const express = require("express");
const router = express.Router();
const Leaders = require("../models/leaderSchema");

router.get("/", (req, res) => {
  Leaders.find()
    .then((leader) => {
      res.send(leader);
    })
    .catch((err) => res.send("Dayni Found 404 :( "));
});

router.get("/:leaderID", (req, res) => {
  Leaders.findById(req.params.leaderID)
    .then((leader) => {
      res.send(leader);
    })
    .catch((err) => res.send("Dayni Found 404 :( "));
});

router.post("/", (req, res) => {
  const new_leader = new Leaders(req.body);
  new_leader
    .save()
    .then(() => {
      res.send("Added new leader : " + new_leader);
    })
    .catch((err) => res.send("Dayni Found 404 :( "));
});

router.put("/:leaderID", (req, res) => {
  Leaders.findByIdAndUpdate(req.params.leaderID, req.body)
    .then(() => res.send("Updated with : " + req.body))
    .catch((err) => res.send("Dayni Found 404 :( "));
});

router.delete("/", (req, res) => {
  Leaders.remove({})
    .then(() => res.send("Deleted Farjana from the world :)"))
    .catch((err) => res.send("Dayni Found 404 :( "));
});

router.delete("/:leaderID", (req, res) => {
  Leaders.findByIdAndDelete(req.params.leaderID)
    .then(() => res.send("Deleted Farjana from the world :)"))
    .catch((err) => res.send("Dayni Found 404 :( "));
});
module.exports = router;

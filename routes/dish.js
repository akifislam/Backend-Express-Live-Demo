const express = require("express");
const router = express.Router();
const Dishes = require("../models/dishSchema");

router.get("/", (req, res) => {
  Dishes.find()
    .then((dish) => {
      res.send(dish);
    })
    .catch((err) => res.send("Dayni Found 404 :( "));
});

router.get("/:dishID", (req, res) => {
  Dishes.findById(req.params.dishID)
    .then((dish) => {
      res.send(dish);
    })
    .catch((err) => res.send("Dayni Found 404 :( "));
});

router.post("/", (req, res) => {
  const new_dish = new Dishes(req.body);
  new_dish
    .save()
    .then(() => {
      res.send("Added new dish : " + new_dish);
    })
    .catch((err) => res.send("Dayni Found 404 :( "));
});

router.put("/:dishID", (req, res) => {
  Dishes.findByIdAndUpdate(req.params.dishID, req.body).then(() =>
    res.send("Updated with : " + req.body)
  );
});

router.delete("/", (req, res) => {
  Dishes.remove({}).then(() => res.send("Deleted Farjana from the world :)"));
});

router.delete("/:dishID", (req, res) => {
  Dishes.findByIdAndDelete(req.params.dishID).then(() =>
    res.send("Deleted Farjana from the world :)")
  );
});
module.exports = router;

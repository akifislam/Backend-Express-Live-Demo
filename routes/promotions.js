const express = require("express");
const router = express.Router();
const Promotions = require("../models/promotionSchema");

router.get("/", (req, res) => {
  Promotions.find()
    .then((promotion) => {
      res.send(promotion);
    })
    .catch((err) => res.send("Dayni Found 404 :( "));
});

router.get("/:promotionID", (req, res) => {
  Promotions.findById(req.params.promotionID)
    .then((promotion) => {
      res.send(promotion);
    })
    .catch((err) => res.send("Dayni Found 404 :( "));
});

router.post("/", (req, res) => {
  const new_promotion = new Promotions(req.body);
  new_promotion
    .save()
    .then(() => {
      res.send("Added new promotion : " + new_promotion);
    })
    .catch((err) => res.send("Dayni Found 404 :( "));
});

router.put("/:promotionID", (req, res) => {
  Promotions.findByIdAndUpdate(req.params.promotionID, req.body).then(() =>
    res.send("Updated with : " + req.body)
  );
});

router.delete("/", (req, res) => {
  Promotions.remove({}).then(() =>
    res.send("Deleted Farjana from the world :)")
  );
});

router.delete("/:promotionID", (req, res) => {
  Promotions.findByIdAndDelete(req.params.promotionID).then(() =>
    res.send("Deleted Farjana from the world :)")
  );
});
module.exports = router;

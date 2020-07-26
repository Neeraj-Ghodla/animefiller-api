const express = require("express");
const router = express.Router();
const Episode = require("../models/episode");

router.get("/", async (req, res) => {
  Episode.find().distinct("anime", (err, anime) => {
    res.json({ anime });
  });
});

router.get("/:anime", async (req, res) => {
  const anime = await Episode.find({ anime: req.params.anime });
  if (!anime) {
    res.json({
      msg: `${anime} does not exists in the database. Please check that you have typed the correct name.`,
    });
  } else res.json(anime);
});

module.exports = router;

const mongoose = require("mongoose");

const EpisodeSchema = mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("episode", EpisodeSchema);

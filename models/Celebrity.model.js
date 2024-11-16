const mongoose = require("mongoose");

const CelebritySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A name is required"],
  },
  occupation: {
    type: String,
    required: [true, "An occupation is required"],
  },
  catchFrase: {
    type: String,
    required: [true, "A catch frase is required"],
  },
});

const Celebrity = mongoose.model("Celebrity",CelebritySchema );
module.exports = Celebrity;

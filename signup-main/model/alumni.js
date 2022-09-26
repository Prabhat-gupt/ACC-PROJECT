const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const userSchema = new mongoose.Schema({
  company: {
    type: String,
    maxlength: 50,
  },
  Branch: {
    type: String,
    maxlength: 50,
  },
  workExperience: {
    type: String,
    maxlength: 5000,
    minlength: 50
  },

  intershipExperience: {
    type: String,
    maxlength: 5000
    
  },
  github: {
    type: String,
    required: "URL can't be empty",
    maxlength: 70,
  },
  Linkedin: {
    type: String,
    required: "URL can't be empty",
    maxlength: 70,
  },
  object: {
    type: String,
    required: true,
  }
});

userSchema.path("github").validate((val) => {
  urlRegex =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return urlRegex.test(val);
}, "Invalid URL.");
userSchema.path("Linkedin").validate((val) => {
  urlRegex =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return urlRegex.test(val);
}, "Invalid URL.");

userSchema.plugin(uniqueValidator);

//check
module.exports = Alumni = mongoose.model("alumni", userSchema);

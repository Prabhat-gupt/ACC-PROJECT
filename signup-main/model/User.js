const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const {isEmail} = require("validator");

const userSchema = new mongoose.Schema({
    first_name:{
      type: String,
      required: true,
      minlength: 2
    },
    last_name: {
      type: String,
      required: true,
      minlength: 2
    },
    User_Type: {
      type: String,
      required: true,
      validate(value) {
        if(value.toLowerCase() != "core member" && value.toLowerCase() != "alumni"){
          throw new Error("Invalid User Type");
        }
      }
    },
    College: String,
  
    phone_no:{
      type: Number,
      // unique: true,
      required: true,
      minlength: 10,
    },
  
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
      validate: [isEmail, 'Please enter an valid email']
    },
    password: {
      type: String,
      required: [true, 'Please enter an password'],
      validate(value) {
        if(value.length<8){
          throw new Error('Minimum password length is 8');
        }
      }

    }
  });
  
userSchema.plugin(uniqueValidator);



module.exports = User = mongoose.model("user", userSchema);
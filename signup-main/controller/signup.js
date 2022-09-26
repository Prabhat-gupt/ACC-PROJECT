const bodyParser = require("body-parser"); 
const md5 = require('md5');
const bcrypt = require('bcrypt');
const handlerror = require('../middleware/err')
const  jwt  = require("jsonwebtoken")
require("dotenv").config();

//JWT function
const createtoken = (id,User_Type)=>{

  const userpower= md5(User_Type);
  const maxAge = 3*24*60*60;
  const Token = jwt.sign({id,userpower},process.env.TOKEN_HEADER_KEY,{
      expiresIn: maxAge
  });
  
  return Token;
}
const postRegister = async (req, res) => {
  
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const User_Type = req.body.User_Type;
    const College = req.body.College;
    const phone_no = req.body.phone_no;
    const email = req.body.email;
    const password =  req.body.password;
    const confirm_password =  req.body.confirm_password;
    
    console.log(req.body)
    if(confirm_password != password){
      res.status(400).json({"msg":"confirm password doesn't match"});
    }
    else if(password.length<8){
      res.status(400).json("Minimum password length 8 character");
    }
        encryptedPassword = await bcrypt.hash(password, 10);

        try{
          const user = await User.create({
            first_name,
            last_name,
            User_Type,
            College,
            phone_no,
            email: email.toLowerCase(),
            password: encryptedPassword,
          });

        
        const token = createtoken(user._id,user.User_Type);
        console.log(token)
        res.cookie('auth',token,{httpOnly: true, maxAge: 3*24*60*60*1000});
        res.status(201).json({user : user._id})
      
      
  }catch(err){
    const error = handlerror(err);
    res.status(400).json(error);
  }
}
const getRegister = (req, res) => {
    res.send("signup");
  }

module.exports={
    getRegister,
    postRegister
}
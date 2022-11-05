const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const handlerror = require('../middleware/err')
const md5 = require('md5');
const User = require('../model/User');
require("dotenv").config();

// jwt function
const createtoken = (id,User_Type)=>{
  const userpower= md5(User_Type);
  const maxAge = 3*24*60*60;
  const Token = jwt.sign({id,userpower},process.env.TOKEN_HEADER_KEY,{
      expiresIn: maxAge
  });
  return Token;
}

// for get request 
const log = function(req, res){
    res.send("login");
    }

const PostLogin = async (req, res) => {

    try{
    const {email,User_Type,password} = req.body;
      
  
    if (!(email && password)) {
      res.status(400).json({"err":"Enter email and password"});
    }
    if(!(User_Type))
    {
      res.status(400).json({"err":"Enter user type"});
    }
    const user = await User.findOne({ email });
    if(User_Type!=user.User_Type){
      res.status(400).json({"err":"User is not core member"});
    }

    // console.log(user)
    else if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = createtoken(user._id,user.User_Type);

      // save user token
      console.log('login')
      res.cookie('auth',token,{httpOnly: true, maxAge: 3*24*60*60*1000});
      // user
      res.status(200).json({ token });


    }
    else
    res.status(400).send({error:"Enter correct Credentials"})
  } catch (err) {
    const errors = handlerror(err);
      console.log(err);
      res.status(400).json({errors});
  }
}
  
    

module.exports= {
    PostLogin,
    log
}
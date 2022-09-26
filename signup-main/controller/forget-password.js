const bodyParser = require("body-parser"); 
const md5 = require('md5');
const bcrypt = require('bcrypt');
const handlerror = require('../middleware/err')
const  jwt  = require("jsonwebtoken")
require("dotenv").config();
const nodemailer = require("nodemailer");

const createtoken = (id,password,email)=>{
  
    const Token = jwt.sign({id,email},process.env.TOKEN_HEADER_KEY+password,{
        expiresIn: '15m'
    });
    return Token;
  }
  
const forget = async (req,res)=>{
    res.send('forget password page')
}

const Postforget = async (req,res)=>{
    const email= req.body.email;
   
    if (!(email)) {
        res.status(400).json({"err":"Enter email"});
      }
      const user = await User.findOne({ email });
      if(!user){
        res.send('User not exist');
        return;
      }
      const token = createtoken(user._id,user.password,user.email);
      const link = 'http://localhost:'+process.env.PORT+'/reset-token/'+user.id+'/'+token;
      console.log(link)
      let testAccount = await nodemailer.createTestAccount();
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });
      let info = await transporter.sendMail({
        from: "no-reply@acc.com", // sender address
        to: "jyaman694@gmail.com", // list of receivers
        subject: "Reset Link", // Subject line
        
        html: `<b>Rest Link ${link}</b>`, // html body
      });

      console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      res.send("Sent to the Email");


}

module.exports= {
    Postforget,
    forget 
}
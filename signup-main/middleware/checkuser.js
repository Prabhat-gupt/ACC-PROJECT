const jwt = require('jsonwebtoken');
const md5 = require('md5');

const alumicheck = (req,res)=>{
    const token =
    req.cookies.auth;
    try {
        jwt.verify(token, config.TOKEN_HEADER_KEY,(err, decodedToken)=>{
          if(err){
            return res.status(302).redirect("/login");
          }else{
            console.log(decodedToken);
            const userCheck = md5('alumni');
            if(decodedToken.userpower===userCheck){
                res.status(200).redirect('/alumni');
            }else{
                res.status(403).redirect('/home');
            }
          }
        });
        
      } catch (err) {
        return res.status(302).redirect("/login");
      }
}


const corecheck = (req,res)=>{
    const token =
    req.cookies.auth;
    try {
        jwt.verify(token, config.TOKEN_HEADER_KEY,(err, decodedToken)=>{
          if(err){
            return res.status(302).redirect("/login");
          }else{
            console.log(decodedToken);
            const userCheck = md5('core member');
            if(decodedToken.userpower===userCheck){
                res.status(200).redirect('/core');
            }else{
                res.status(403).redirect('/core');
            }
          }
        });
        
      } catch (err) {
        return res.status(302).redirect("/login");
      }
}
module.exports = {alumicheck,corecheck}
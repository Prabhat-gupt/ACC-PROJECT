
const bodyParser = require("body-parser"); 
const md5 = require('md5');
const bcrypt = require('bcrypt');
const handlerror = require('../middleware/err')
const  jwt  = require("jsonwebtoken")



const getreset = async (req,res)=>{
    const {id,token} = req.params;
    
    const user = await User.findOne({ id });
    
    if(!user){
        res.send('Not valid link');
        return
    }

    // If we have valid id now we will check for the valid token
    try{
        const payload = jwt.verify(token,process.env.TOKEN_HEADER_KEY+user.password);
        res.send('Reset page')
    }catch(error){
        res.json(error.message)
    }
}


const postreq = async (req,res)=>{
    const {id, token} = req.params;
    const {password,confirm_password} = req.body;

    //Cheching for password is same or not
    if(password!==confirm_password){
        res.send('Password not match')
    }
    
    //Finding the user with userid
    const user = await User.findById(id);
    try{
        const payload = jwt.verify(token,process.env.TOKEN_HEADER_KEY+user.password);
        encryptedPassword = await bcrypt.hash(password, 10);
        
        user.password = encryptedPassword;
        await user.save();
        res.json(user);
    }catch(error){
        
        res.send(error.message)
    }

}

module.exports ={
    postreq,getreset
}
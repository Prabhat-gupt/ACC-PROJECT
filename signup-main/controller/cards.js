const Alumni = require('../model/alumni')

const getreq = async(req,res)=>{
    const {id}= req.params;

    try{
        const user = await User.findById(id);
        const alumni = await Alumni.findOne({"object":id});
        if(!(alumni)||!(user)){
            res.send('No data found');
            return;
        }
        res.json({user,alumni});

    }catch(e){
        res.json({"message" : "No Data found"} );
    }    
}

module.exports = {getreq};
const Alumni = require('../model/alumni')

const postreq = async(req, res) => {
    const {id} = req.params;
    // Find user in database with the id 
    const user = await User.findById(id);
    const {github,Linkedin,Branch,workExperience,intershipExperience,Company} = req.body;
    console.log(user)
    let alumni1 = new Alumni({
        object: id,
        github,
        Linkedin,
        Branch,
        workExperience,
        intershipExperience,
        Company
    })
    try{
        alumni1= await alumni1.save();
        res.send('saved').status(200);
    } catch(e){
        res.send(e.message);
    }
}

const getreq = async (req,res)=>{

    const {id} = req.params;

    // Find user in database with the id 
    const user = await User.findById(id);
    console.log(user)
    res.send("alumni dashboard").status(200);
}
module.exports =  { postreq,getreq };
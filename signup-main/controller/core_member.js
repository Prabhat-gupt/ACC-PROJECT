const Coremember = require('../model/core_mem')

const postreq = async(req, res) => {
    const {id} = req.params;
    // Find user in database with the id 
    const user = await User.findById(id);
    const core = await Coremember.find({object:id});

    console.log(req.body.github);
    let core_mem = new Coremember({
        role: (req.body.role!==undefined)?req.body.role:core.role,
        object: id,
        github: (req.body.github!==undefined)?req.body.github:core.github,
        Linkedin: (req.body.Linkedin!==undefined)?req.body.Linkedin:core.Linkedin,
        Branch: (req.body.Branch!==undefined)?req.body.Branch:core.Branch
    })
    try{
        core_mem= await core_mem.save();
        res.send('saved').status(200);
    } catch(e){
        res.send(e.message);
    }
}

const getreq = async (req,res)=>{

    const {id} = req.params;

    // Find user in database with the id 
    try{
        const user = await User.findById(id);
        res.send("dashboard").status(200);
    }catch(e){
        res.status(400).send('No core member');
    }
}
module.exports =  { postreq,getreq };
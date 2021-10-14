import express from 'express'
const User = ('../models/User')
const router = express.Router();

//get all user
router.get('/',async(req,res) =>{
    try{
        const user = await this.User.find();
        res.json(user);
    }catch(err){
        res.json({message:err})
    }

});

//post all user
router.post('/',async (req,res) => {
    const { name, title, description } = req.body;
    const user = new User({
        name,
        title,
        description,
    });
    try{
    const savedUser= await user.save()
    res.json(savedUser)
    }
    catch(err){
        res.json({message:err});
    }
});

//remove user
router.delete('/:userId',async(req,res) =>{
    try{
    const user= await User.findById (req,params,userId)
    res.json(user);
    }catch(err){
        res.json({message:err})
    }
});

//edit user
router.patch('/:userId', async(req,res) =>{
    try{
        const updatedUser = await User.updateOne(
            {_id:req.params.userId},
            {$set:{title:req.body.title}}
            );
            res.json(updatedUser)
    }catch(err){
        res.json({message:err})
    }
})




module.exports = router
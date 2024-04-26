const express=require('express');
const router=express.Router();
const Article=require('C:\\Users\\yadav\\OneDrive\\Desktop\\blogapi\\model.js');
router.use(express.json());
router.get('/',async(req,res)=>{
    const data=await Article.find({});
    res.json(data);
    
})
router.post('/',async(req,res)=>{
    const art= await Article.create(req.body);
    res.status(200).json()


})
module.exports=router;
const mongoose=require('mongoose');
const mschema=mongoose.Schema({
    title:{
        required:true,
        type:String
    }
});
module.exports=mongoose.model('Article',mschema);
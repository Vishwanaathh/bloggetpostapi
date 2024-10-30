const express=require('express');
const app=express();
const cors=require('cors');
const arouter=require('./routes/articles');
const mongoose=require('mongoose');
mongoose.connect()
.then(()=>{
    console.log('connected to db');
});
app.use('/articles',arouter);


app.get('/',(req,res)=>{
    res.send('Hello');
})
app.listen(5050,()=>{
    console.log("Listening on 5050");
})

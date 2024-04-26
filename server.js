const express=require('express');
const app=express();
const cors=require('cors');
const arouter=require('./routes/articles');
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://admin:root@cluster0.kwlzyeo.mongodb.net/ARTICLE?retryWrites=true&w=majority&appName=Cluster0')
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
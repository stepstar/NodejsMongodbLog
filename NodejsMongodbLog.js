const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://172.21.2.236:27017/190110910123')
const app = express();

const schema={
    name: String,
    age: Number,
    health: String,
    hobby: String
}
const Cat = mongoose.model('cat1', schema); 

app.use('/',express.static('html'));
app.get("/input",(req,res)=>{
    res.send(req.query);
    console.log(req.query);
    const kitty = new Cat({ name: req.query.first, health:req.query.second });
    kitty.save().then(() => console.log('success'));
});
app.listen(60123);

const express = require("express");
const mongoose = require('mongoose');
const app = express();
app.use('/',express.static('html'));
app.get("/input",(req,res)=>{
    res.send(req.query);
    console.log(req.query);
});
app.listen(60123);
/**
 * const schema={
    name: String,
    age: Number,
    health: String,
    hobby: String
}
const Cat = mongoose.model('cat1', schema); 
const kitty = new Cat({ name: 'test' });
kitty.save().then(() => console.log('testmeow'));
 */
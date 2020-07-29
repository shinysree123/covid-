var Express= require('express');
var Parser=require('body-parser');
var Mongoose=require('mongoose');
var app=Express();
var Coviddetailsrouter=require('../routers/covid details');
app.use('/',Coviddetailsrouter);
var Testrouter=require('../routers/testroutes');
app.use('/',Testrouter);
Mongoose.connect('mongo "mongodb+srv://cluster0.oav55.mongodb.net/<dbname>" --username shinyjoseph');
app.use(Parser.urlencoded({extended:false}));
app.listen(process.env.PORT||4000,()=>{
    console.log("server started");
});
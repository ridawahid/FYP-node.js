const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost/alidb");
let db = mongoose.connection;

//check connection
db.once("open",function(){
	console.log("Connected to mongodb");
});

//check for db errors
db.on("error",function(){
	console.log(err);
});


//Init app
const app = express();

//Bring in models
let Image = require('./models/image');

//body-parser middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//load view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');

//Home route
app.get('/',function(req,res){
	//let images = [
	//{
	//	id:1,
	//	title:'Checking',
	//	author: 'check author'
	//},
	//{
        //        id:2,
        //        title:'Checking2',
        //        author: 'check2 author'
        //},
	//{
        //        id:3,
        //        title:'Checking3',
        //        author: 'check3 author'
        //}

	//];

	Image.find({},function(err,images){
		if(err){
			console.log(err);
		}else {
			//res.render("index",{
                	//title:'Images',
                	//images: images,
        		//});
			//console.log(images);
			res.json(images);
		}
	});
});


//Add Submit POST Rout
app.post('/images/add',function(req,res){
	let image = new Image();
	image.name = req.body.name;
	image.url = req.body.url;
	
	image.save(function(err){
		if(err){
			console.log(err);
			return;
		}else{
			res.redirect('/');	
		}
	});
	
});


//Add Route
app.get('/images/add',function(req,res){
	 res.render("add_image",{
                title:'Add Image'
        });

});

//Start Server
app.listen('3000',function(){
	console.log("Server up at 3000");
});

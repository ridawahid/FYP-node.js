let mongoose = require('mongoose');

//Image schema
let imageSchema = mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	url:{
		type:String,
		required:true
	}
});

let Image = module.exports = mongoose.model("Image",imageSchema);

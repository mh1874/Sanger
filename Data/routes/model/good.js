var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
var mySchema = Schema({
	_id: String,
	englishName: String,
	chineseName: String,
	details_explain: String,
	swipeImg: String,
	sweetNum: Number,
	distribution: String,
	portion: String,
	introduce: String,
	label: Array,
	materials: Array,
	group: Array,
	price: String,
	details: Array,
	detailsImg: Array
});

/* global db */
module.exports = mongoose.model('good', mySchema);
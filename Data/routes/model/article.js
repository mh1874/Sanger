var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
var mySchema = Schema({
	_id: String,
	title: String,
	time: String,
	articleImg: Array
});

/* global db */
module.exports = mongoose.model('article', mySchema);
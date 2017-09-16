var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
var mySchema = Schema({
	_id: String,
	name: String,
	src: String
});

/* global db */
module.exports = mongoose.model('menu', mySchema);
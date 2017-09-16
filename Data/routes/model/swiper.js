var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
var mySchema = Schema({
	_id: String,
	src: String
});

/* global db */
module.exports = mongoose.model('swiper', mySchema);
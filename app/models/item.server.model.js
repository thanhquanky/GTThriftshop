'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Item Schema
 */
var ItemSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Item name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	description: {
		type: String,
		default: '',
		required: 'Please fill Item description',
		trim: true
	},
	price: {
		type: Number,
		default: 0
	},
	user: {
        	type: Schema.ObjectId,
        	ref: 'User'
    	},
	category: {
        	type: String,
        	default: ''
    	},
	image:{
		type:String,
		default:''
	}
	
});

mongoose.model('Item', ItemSchema);

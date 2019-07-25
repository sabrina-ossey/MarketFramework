var mongoose = require('mongoose')
    , _ = require( 'lodash' )
	, quantifyData = require( './quantifyData.json' );
const fs = require('fs');
var path = require('path');

const Quantify = require('./quantify-self');

var x = populateIntoMongodb();

async function populateIntoMongodb() {
	// clear all existing documents from the collections
  // Connect to DB
  await mongoose.connect('mongodb://localhost/quantify',  { useNewUrlParser: true })
   .then(() => console.log('MongoDB connected…'))
   .catch(err => console.log(err));
	Quantify.find().remove();

	// populate the collection from json data
	for( var i = 0; i < quantifyData.length; i++ ) {
    console.log(quantifyData.length);
    console.log(quantifyData[i]);
	  new Quantify(quantifyData[i]).save();
	}
  var test = 0;
  return test;
};

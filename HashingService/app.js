const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const mongoose = require('mongoose');
//const PRE = require('bm-pre');


var crypto = require('crypto');
const fs = require('fs');

const app = express()
var port = process.env.PORT || 8000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// an Element can be an agreement, a transaction or an event
function generateHash(element) {
	var jsonElement = JSON.stringify(element);
	return crypto.createHash('sha256').update(jsonElement).digest('hex');

}


app.get('/hashing/generateHash', function(req, res){
	var id =  req.body.id;
	var id = mongoose.Types.ObjectId(id);

	console.log(id);

	request.get('http://localhost:8080/agreements/' + id, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	console.log(body);
	var obj = JSON.parse(body);
	var agreement = obj.token;
	let hashedElement = generateHash(agreement);
  console.log(hashedElement);
	res.send(hashedElement);
});

});


/*app.get('/hashing/generateKey', function(req, res){
	console.log("initializing PRE...")
	PRE.init({g: "The generator for G1", h: "The generator for G2", returnHex: false}).then(params => {
	    const plain = PRE.randomGen();

	    let A = PRE.keyGenInG1(params, {returnHex: true});
			res.send(A);
		//	console.log(A);
		//	console.log("promise resolved")
		})
	//	console.log("generateKey called")

}) */

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

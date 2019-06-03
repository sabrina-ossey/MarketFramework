const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');
const fs = require('fs');
const mongoose = require('mongoose');

const Token = require('../models/token');

// PRIVATE and PUBLIC key
var privateKEY  = fs.readFileSync('./Certificate/private.key', 'utf8');
var publicKEY  = fs.readFileSync('./Certificate/public.key', 'utf8');
//var expirationTime = Math.floor(Date.now() / 1000) - 30; //The time the JWT was issued

// Create Token
function generateToken (){

  var payload = {
    data1: "Data 1",
    data2: "Data 2",
  };

  let signOptions =  {
    issuer : 'sabrina', // The issuer of the token
    subject: 'amansabrina', // The subject of the token
    audience: 'amansabrina.ossey@gmail.com', // The audience, API adress of the token
    expiresIn: "12h", // The expiration data of the token
    /*iat:Math.floor(Date.now() / 1000) - 30, //The time the JWT was issued
    jti:'234', //the unique identifier for the JWT
    scope:'test', // what data access this token has */
    algorithm: 'RS256'
  };

  let token = jwt.sign(payload, privateKEY, signOptions);
//  console.log(token);
  return token;
}

function verifyAgreement(agreementCode, clientId, codeVerifier = undefined){

return true;
}

function verifyToken(token){
  var verifyOptions = {
 iss:  'sabrina',
 sub:  'amansabrina',
 aud:  'amansabrina.ossey@gmail.com',
 //exp:  (60 * 60 * 1000),
 //jti:'234',
 //scope:'test',
 algorithm:  'RS256'
};
var legit = jwt.verify(token, publicKEY, verifyOptions);
console.log("\nJWT verification result: " + JSON.stringify(legit));
}

router.get('/verifyToken/:token', (req, res, next) => {
  let token = req.params.token;
console.log(token);

var verifyOptions = {
  issuer : 'sabrina', // The issuer of the token
  subject: 'amansabrina', // The subject of the token
  audience: 'amansabrina.ossey@gmail.com', // The audience, API adress of the token
  expiresIn: "12h",
  algorithm: ["RS256"]

}

var legit = jwt.verify(token, publicKEY, verifyOptions);
console.log("\nJWT verification result:" + JSON.stringify(legit));
});


router.post('/generateToken', (req, res) => {
  let token = generateToken();

  const tokengenerated = new Token({
    _id: new mongoose.Types.ObjectId(),
    token: token,
    accessTokenExpiresAt: "2020-01-18T22:41:46.167Z",
    client: req.body.client,
    user: req.body.user,
    agreementID: req.body.agreementID
  });
  tokengenerated
  .save()
  .then(result =>{
    console.log(result);
    res.status(201).json({
      message: 'Token created'
    });
  })
  .catch( err =>{
    console.log(err);
    res.status(500).json({
      error:err
    });
  });

});

router.get('/:tokenId',(req, res, next) => {
  const id = req.params.tokenId;
  Token.findById(id).select('expirationTime')
     .exec()
     .then(token =>{
       console.log("From database", token);
       if (token) {
         res.status(200).json({
             token: token
           });
       } else{
         res.status(404).json({message: 'No valid entry found for provided ID'}); // if document not fin in the database
       }
     })
     .catch(err => {
       console.log(err);
       res.status(500).json({error:err});//For invalid document entry
     });
});



module.exports = router;

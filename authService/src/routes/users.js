const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//const bcrypt = require('bcrypt'); // hashing
//const jwt = require('jsonwebtoken');


const User = require('../models/user');

router.post('/signup',(req, res, next) => {
  console.log('test');
  User.find({email: req.body.email}).exec().then(user =>{
    if (user.length>= 1){ // if we have already an email address otherwise it will be null
      return res.status(409).json({
        message: 'Mail exists'
      });
    } else {
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: req.body.password
          });
          user
          .save()
          .then(result =>{
            console.log(result);
            res.status(201).json({
              message: 'User created'
            });
          })
          .catch( err =>{
            console.log(err);
            res.status(500).json({
              error:err
            });
          });
    }
  })
});



router.get('/:userId',(req, res, next) => {
  const id = req.params.userId;
  User.findById(id).select('email')
     .exec()
     .then(user =>{
       console.log("From database", user);
       if (user) {
         res.status(200).json({
             user: user
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

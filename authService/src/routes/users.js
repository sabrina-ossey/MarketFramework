const express = require('express');
const router = express.Router();
var passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require('../config/database');

// Bring in user model
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
let newUser = new User({
  firstname: req.body.firstname,
  lastname: req.body.lastname,
  telefone: req.body.telefone,
  role: req.body.role,
  email: req.body.email,
  username: req.body.username,
  password: req.body.password
});

User.addUser(newUser, (err, user) => {
  if(err){
    res.json({success: false, msg:'Failed to register user'});
  } else{
    res.json({success : true, msg:'User registered'});
  }
});
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({success: false, msg: 'No User found'});
    }
    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch){

        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800
        });

        res.json({
          success: true,
          token: token,
          //token: 'JWT' +token,
          user: {
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            telefone: user.telefone,
            role: user.role,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({
          success: false,
          msg:'Wrong password'
        });
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({
    user: req.user
  });
});


module.exports = router;

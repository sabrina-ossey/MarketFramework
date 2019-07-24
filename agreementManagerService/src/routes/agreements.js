const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Agreement = require('../models/agreement');

router.post('/register', (req, res) => {

  const agreement = new Agreement({
    _id: new mongoose.Types.ObjectId(),
    term: req.body.term,
    ttype: req.body.ttype,
    description: req.body.description,
    purpose: req.body.purpose,
    owner: req.body.owner,
    consumer: req.body.consumer,
    dob: req.body.dob,
    compensation: req.body.compensation,
    laws: req.body.laws,
    nonsensitive: req.body.nonsensitive,
    maximumavailable: req.body.maximumavailable,
    downtime: req.body.downtime,
    monthly: req.body.monthly,
    transactionpm: req.body.transactionpm,
    staticaccess: req.body.staticaccess,
    dataprocessor: req.body.dataprocessor,
    access: req.body.access,
    licence: req.body.licence
  });
  agreement
  .save()
  .then(result =>{
    console.log(result);
    res.status(201).json({
      message: 'Agreement created'
    });
  })
  .catch( err =>{
    console.log(err);
    res.status(500).json({
      error:err
    });
  });

});

router.get('/:agreementId',(req, res, next) => {
  const id = req.params.agreementId;
  Agreement.findById(id)//.select('description')
     .exec()
     .then(agreement =>{
       console.log("From database", agreement);
       if (agreement) {
         res.status(200).json({
             token: agreement
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

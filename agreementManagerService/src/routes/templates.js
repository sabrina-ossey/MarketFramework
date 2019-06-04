const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Template = require('../models/template');

router.post('/register', (req, res) => {

  const template = new Template({
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
  template
  .save()
  .then(result =>{
    console.log(result);
    res.status(201).json({
      message: 'Template created'
    });
  })
  .catch( err =>{
    console.log(err);
    res.status(500).json({
      error:err
    });
  });

});

router.get('/:templateId',(req, res, next) => {
  const id = req.params.templateId;
  Template.findById(id).select('description')
     .exec()
     .then(template =>{
       console.log("From database", template);
       if (template) {
         res.status(200).json({
             token: template
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

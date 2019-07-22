const express = require('express');
const bodyParser = require('body-parser');

const Practitionner = require('./practitionner');

const app = express()
var port = process.env.PORT || 8083;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.post('/practitionner', (req, res, next) => {
  const practitionner = new Practitionner(request.body);
  practitionner
  .save()
  .then(result => {
    console.log(result);
    res.status(201).json({
      result
      }
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

});

// Connect to DB
mongoose.connect('mongodb://localhost/custodian',  { useNewUrlParser: true })
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies




// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

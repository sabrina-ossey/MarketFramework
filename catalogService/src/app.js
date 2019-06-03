var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	cors = require('cors'),
	OAuth2Server = require('oauth2-server'),
	Request = OAuth2Server.Request,
	Response = OAuth2Server.Response;

  var app = express();

	// CORS(CROSS_ORIGIN_RESSOURCE_SHARING) HANDLING
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); //url access control
  res.header("Access-Control-Allow-Headers",
   "Origin, X-Requested-With, Content-Type, Accept, Authorization"
 );
 // Check if the http request is equal to the options
 if (req.method ==='OPTIONS'){
   res.header("Access-Control-Allow-Method", "PUT, POST, PATCH, DELETE, GET" );
   return res.status(200).json({}); //return response status with a json data load
 }
next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var mongoUri = 'mongodb://localhost:27017/oauth';

mongoose.connect(mongoUri, {
	useCreateIndex: true,
	useNewUrlParser: true
}, function(err, res) {

	if (err) {
		return console.error('Error connecting to "%s":', mongoUri, err);
	}
	console.log('Connected successfully to "%s"', mongoUri);
});

const userRoutes = require('./routes/users');
const authorizationRoutes = require('./routes/authorizations');
const templateRoutes = require('./routes/templates');
const agreementsRoutes = require('./routes/agreements');

// Routes handle REST API request
app.use('/users', userRoutes);
app.use('/authorizations', authorizationRoutes);
app.use('/templates', templateRoutes);
app.use('/agreements', agreementsRoutes);


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000);

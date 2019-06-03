const express = require('express');
const bodyParser = require('body-parser');
const chp = require('chainpoint-client');
const cors = require ('cors');
const mongoose = require('mongoose');

const MonitoringData = require('./monitoringDataModel');
const ProofData = require('./proofModel');
const VerifiedProofData = require('./verifiedProofModel');
const app = express()



// Set the body parser options

var options = {

  type: 'application/json'

};


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

// Connect to DB
mongoose.connect('mongodb://localhost/monitoring',  { useNewUrlParser: true })
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err));

 //mongoose.Promise = global.Promise;

// Using the options above, create a bodyParser middleware that returns raw responses.

var itrBodyParser = bodyParser.raw(options)

var arrayMonitoring = [];



// Submit a hash to a chainpoint
async function chainpointSubmit(hashes) {

	return new Promise(async (resolve, reject) => {

		console.log(hashes)

		// Retrieve 2 Chainpoint Nodes to submit our hashes to

		let nodes = await chp.getNodes(2).catch(error => console.log("Error retrieving chainpoint nodes: "+error))

		// Now send our hash to the chainpoint node

		let proofHandles = await chp.submitHashes(hashes, nodes).catch(error => console.log(error))

		console.log("Submitted Proof Objects: Expand objects below to inspect.")

		console.log(proofHandles)

		resolve(proofHandles)

	});

}



// Update Chainpoint Proof
async function chainpointUpdateProofs(proofHandles, sleep=12000) {

	return new Promise(async (resolve, reject) => {

		// Sleep for, to wait for proofs to be generated

		console.log("Sleeping "+sleep+" seconds to wait for proofs to generate...")

		await new Promise(resolve => setTimeout(resolve, sleep))

		// Retrieve proofs from chainpoint

		let proofs = await chp.getProofs(proofHandles).catch(error => console.log("Error retrieving chainpoint proofs: "+error))

		console.log("Proof Objects: Expand objects below to inspect.")

		console.log(proofs)

		// if proof is not returned, we should reject the promise. Todo.

		resolve(proofs)

	})

}



// Verify Hash Proof
async function chainpointVerifyProofs(proofs) {

	return new Promise(async (resolve, reject) => {

		// Verify every anchor in every Calendar proof

		let verifiedProofs = await chp.verifyProofs(proofs).catch(error => console.log("Error verifying chainpoint proofs: "+error))

		console.log("Verified Proof Objects: Expand objects below to inspect.")

		console.log(verifiedProofs)

		resolve(verifiedProofs)

	})

}


//Upload hash Attachment
async function uploadProof(proofs, proofHandles, element) {

	return new Promise((resolve, reject) => {

		console.log("Upload Proof")



		var fileData = { "element": element.toJSON(), "proofs": [], "proofHandles": [] }



		// Add proofs & proofHandles to file data

		proofs.map(proof => fileData['proofs'].push(proof))

		proofHandles.map(proofHandle => fileData['proofHandles'].push(proofHandle))



		var proofFilename = generateInvoiceHash(invoice)+"-cp-proofs.txt"



		fs.writeFile("./files/"+proofFilename, JSON.stringify(fileData), function(err) {

		 if(err) {

			  return console.log(err);

			  reject(err)

		 }

			console.log("The file was saved!");

			const attachmentTemplate = {

				FileName: proofFilename,

				MimeType: 'text/plain',

			 };


			 const proofFile = "./files/"+proofFilename;

			 const attachmentPlaceholder = xeroClient.core.attachments.newAttachment(

				attachmentTemplate

			 );



			 var result = attachmentPlaceholder.save(`Invoices/${invoice.InvoiceID}`, proofFile, false)



			 console.log("the file was uploaded")



			 resolve(result)



		});



	})



}


/*app.get('/getMonitoring', async function(req, res) {
  MonitoringData.findOne(req.params.monitoredData)
   .exec()
   .then( monitoringData => {
     if(!monitoringData) {
       return res.status(404).json({
         message: 'Order not found!'
       });
     }
     arrayMonitoring.push(monitoringData);
     console.log('test100');
     console.log('arrayMonitoring2',arrayMonitoring);
     res.status(200).json({
       monitoringData: monitoringData,
     });
   })
   .catch(err =>{
     res.status(500).json({
     error: err
     });
   });

   MonitoringData.find().lean().exec(function (err, monitoring){
     //return res.end(JSON.stringify(monitoring));
  //   console.log(JSON.stringify(monitoring));
     var test = JSON.stringify(monitoring);
     console.log('test____', test);
    // return res.end(test);

   });


}); */


app.get('/saveMonitoring', async(req, res, next) => {

  console.log("save data");
//  var monitoringElement = "Agreement";

//  var hashElement = '4d4e6d4e73141184cc444f566fd72977e060942fede1123055486d3bbe1ec526'; // for Agreement Storage
//  var hashElement = '9c4311cd95c2a314c8b3cec65a35fa412110e8d68ad147995b0879c99329c863'; // for transaction storage

  var hashElement = '23b88ce2bf617e4ebf0d5a6c959c0bcf7ea54e762113c683a715ae2c5f72e477'; // for transaction exchange
//var hashElement = 'c3d398ca88ade3f6827d0c6b51badf1dd7cdd2a937a0591309ff239eb013fce3'; Agreement exchange

  var proofElementHash = await chainpointSubmit(Array(hashElement));
  let proofElement = await chainpointUpdateProofs(proofElementHash, 12000);
  let verify = await chainpointVerifyProofs(proofElement);

  console.log("data is saved");

  var newhashDefinition = [];

  var o = {"hashElements": proofElementHash};
  var p = {"proofElements": proofElement};
  var q = {"verifiedElements": verify};
  var r = {"monitoringElement": [{"monitoredData" : "Data Exchange Transaction ID: 01E"}]};
  //res.json( q);

  var obj = o;
  var obj2 = p;
  var obj3 = q;
  var obj4 = r;
  var xtable = [];
  xtable[0] = Object.assign(obj4.monitoringElement[0], obj.hashElements[0], obj2.proofElements[0], obj3.verifiedElements[0]);
  xtable[1] = Object.assign(obj4.monitoringElement[0], obj.hashElements[1], obj2.proofElements[1], obj3.verifiedElements[1]);
  //xtable.push(monitoringElement);

  console.log(xtable);
  console.log(xtable[0].uri);

  const monitoringData = new MonitoringData({
      _id: mongoose.Types.ObjectId(),
      monitoredData: xtable[0].monitoredData,
      hash: xtable[0].hash,
      uri: xtable[0].uri,
      hashIdNode: xtable[0].hashIdNode,
      groupId: xtable[0].groupId,
      proof: xtable[0].proof,
      anchorsComplete: xtable[0].anchorsComplete,
      hashIdCore: xtable[0].hashIdCore,
      hashSubmittedNodeAt: xtable[0].hashSubmittedNodeAt,
      hashSubmittedCoreAt: xtable[0].hashSubmittedCoreAt,
      branch: xtable[0].branch,
      type: xtable[0].type,
      anchorId: xtable[0].anchorId,
      expectedValue: xtable[0].expectedValue,
      verified: xtable[0].verified,
      verifiedAt: xtable[0].verifiedAt
    });

    monitoringData.save().then(values => {
        console.log(values);
        res.json({
          message:"Creating monitoring successfully",
          monitoringData:values
        });
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

  });



    app.get('/getMonitoringData', async(req, res, next) =>  {
        MonitoringData
        .find()
        .exec()
        .then(docs =>{
        //  var monitored = [];
        //  monitored.push(docs);
          console.log(docs);
        res.status(200).json(docs);
 }).catch(err => {
    res.status(500).json({
      error: err
    });
  });
});


/*  var data = proofElementHash;

//  for (var i = 0; i < data.length; i++) {
    //if (data[i].proofE == proofHashObject.proofE && data[i].proofE == verifiedProofHashObject.proofE) alreadyInList = true;
    newhashDefinition.push({"element": "hashElement", "hashElements": proofElementHash, "proofElements": proofElement, "verifiedElements": verify});
//  }
  console.log(newhashDefinition);
res.json(newhashDefinition);*/
  /*

    const monitoringData = new MonitoringData({
        _id: mongoose.Types.ObjectId(),
        monitoredData: monitoringElement,
        hashData: proofElementHash,
      });

    const proofData = new ProofData({
      _id: mongoose.Types.ObjectId(),
      monitoredData: monitoringElement,
      proofs: proofElement
    });

    const verifiedProofData = new VerifiedProofData ({
    _id: mongoose.Types.ObjectId(),
    monitoredData: monitoringElement,
    verifiedProofs: verify
  });

Promise.all([monitoringData.save(), proofData.save(), verifiedProofData.save()]).then(values => {
    console.log(values);
    res.json({
      message:"Creating monitoring successfully"
    });
}).catch(err => {
  console.log(err);
  res.status(500).json({
    error: err
  });
}); */
//});

// Tell our app to listen on port 3000

app.listen(3002, function (err) {

  if (err) { throw err  }

  console.log('Server started on port 3002')

})

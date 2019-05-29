const mongoose = require('mongoose');
const Transport = require('./transport')

exports.create_transportation = (req, res, next) => {
  console.log(Transport);
        const transport = new Transport({
        _id: mongoose.Types.ObjectId(),
        journeyInstance:  req.body.journeyInstance,
        TransactionDate:  req.body.TransactionDate,
        Destination:  req.body.Destination,
        EndTime:  req.body.EndTime,
        StartTime:  req.body.StartTime,
        Origin:  req.body.Origin,
      });
      transport
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message:"Creating transport successfully",
          createdTransport: { // perform mapping
            journeyInstance:  result.journeyInstance,
            TransactionDate: result.TransactionDate,
            Destination:  result.Destination,
            EndTime:  result.EndTime,
            StartTime:  result.StartTime,
            Origin:  result.Origin,
            _id: result._id,
            request: {
              type: 'POST',
              url: "http://localhost:3000/api/transports" + result._id
            }
          }
        });
      })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

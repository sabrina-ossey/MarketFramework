// External Dependancies
const mongoose = require('mongoose');
var SchemaTypes = mongoose.Schema.Types;

const practitionerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  startTime: Date,
  dayOfWeek:Number,
  isWeekday:Boolean,
  isWeekend:Boolean,
  caloriesBurned:Number,
  caloriesBMR:Number,
  stepsDistance:Number,
  Elevation:Number,
  restingHeartRate:Number,
  floors:Number,
  Minutessedentary:Number,
  MinuteslightlyActive:Number,
  MinutesFairlyActive:Number,
  MinutesVeryActive:Number,
  ActivityCalories:Number,
  ActiveScore:Number,
  CardioMinutes:Number,
  Cardiocalories:SchemaTypes.Double,
  FatBurnminutes:Number,
  FatBurncalories:SchemaTypes.Double,
  Peakminutes:Number,
  Peakcalories:SchemaTypes.Double,
  NormalCardiocalories:SchemaTypes.Double,
  NormalCardiominutes:Number
});

module.exports = mongoose.model('Practitioner', practitionerSchema);

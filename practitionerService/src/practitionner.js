// External Dependancies
const mongoose = require('mongoose');

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
  Cardiocalories:Number,
  FatBurnminutes:Number,
  FatBurncalories:Number,
  Peakminutes:Number,
  Peakcalories:Number,
  NormalCardiocalories:Number,
  NormalCardiominutes:Number
});

module.exports = mongoose.model('Practitioner', practitionerSchema);

// External Dependancies
const mongoose = require('mongoose');
var SchemaTypes = mongoose.Schema.Types;

const quantifySchema = new mongoose.Schema({
  //_id: mongoose.Schema.Types.ObjectId,
  UserID: String,
  Name: String,
  Date: Date,
  //startTime: Date,
  dayOfWeek:Number,
  isWeekday:Number,
  isWeekend:Number,
  caloriesBurned:Number,
  caloriesBMR:Number,
  steps: Number,
  distance:Number,
  elevation:Number,
  restingHeartRate:Number,
  floors:Number,
  minutesSedentary:Number,
  minuteSlightlyActive:Number,
  minutesFairlyActive:Number,
  MinutesVeryActive:Number,
  activityCalories:Number,
  activeScore:Number,
  cardioMinutes:Number,
  cardioCalories:Number,
  fatBurnMinutes:Number,
  fatBurnCalories:Number,
  peakMinutes:Number,
  peakCalories:Number,
  normalCardioCalories:Number,
  normalCardioMinutes:Number,
  sleepEfficiency:Number,
  minutesAsleep:Number,
  minutesToFallAsleep:Number,
  sleepStartTime:String,
  sleepEndTime:String,
  timeInBed:Number,
  minutesDeepSleep:Number,
  deepSleepCount:Number,
  minutesLightSleep:Number,
  lightSleepCount:Number,
  minutesREMSleep:Number,
  REMSleepCount:Number,
  minutesAwake:Number,
  minutesAwakeCount:Number,
  deepSleep:Number,
  lightSleep:Number,
  REMSleep:Number
});

module.exports = mongoose.model('Quantify', quantifySchema);

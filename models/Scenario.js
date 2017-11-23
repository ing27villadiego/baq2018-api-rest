
const mongoose = require('mongoose')

let scenarioSchema = new mongoose.Schema({
  nameScenario: {
    type: String,
    required: true
  },
  descriptionScenario: {
    type: String,
  },
  imageScenario: {
    type: String
  }
})

let Scenario = mongoose.model('Scenario', scenarioSchema)

module.exports = Scenario
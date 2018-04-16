/// /////////////////////////////////////////////
//
// Copyright (c) 2017 Matheus Medeiros Sarmento
//
/// /////////////////////////////////////////////

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SanitySchema = require('./sanity');
const SimulationGroup = rootRequire('database/models/simulation_group');

const State = {
  Executing: 0,
  Finished: 1,
  Canceled: 2
}

const simulationSchema = Schema({

  _simulationGroup: {
    type: Schema.ObjectId,
    ref: 'SimulationGroup',
    required: true
  },
  _binary: {
    type: Schema.ObjectId,
    ref: 'Binary',
    required: true
  },
  _document: {
    type: Schema.ObjectId,
    ref: 'Document',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  state: {
    type: Number,
    default: State.Executing
  },
  sanity: SanitySchema,
  instanceDurationMean: {
    type: Number
  }

})

simulationSchema.statics.State = State

simulationSchema.statics.countActive = function (simulationGroupId) {
  const condition = {
    _simulationGroup: simulationGroupId,
    state: State.Executing
  }

  return model.count(condition)
}

simulationSchema.statics.countFinishedInstance = (simulationId, error = false) => {
  const data = {
    $inc: {
      "sanity.errors": (error ? 1 : 0),
      "sanity.total": 1
    }
  };
  return model
    .findByIdAndUpdate(simulationId, data)
    .then((simulation) => {
      SimulationGroup.countFinishedInstance(simulation._simulationGroup, error);
    });
};

const model = mongoose.model('Simulation', simulationSchema)

module.exports = model

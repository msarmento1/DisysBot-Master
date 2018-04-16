﻿// APIs
const logApi = rootRequire('servers/web/api/log')
const taskApi = rootRequire('servers/web/api/task')
const workerApi = rootRequire('servers/web/api/worker')

// Authentication
const LocalStrategy = require('passport-local').Strategy
const User = rootRequire('database/models/user')
const userMethods = rootRequire('servers/web/methods/user')
const taskMethods = rootRequire('servers/web/methods/task')

module.exports = function (app, passport) {
  setupAPIs(app)
  setupMethods(app, passport)
}

function setupMethods(app, passport) {
  userMethods(app, passport)
  taskMethods(app)
}

function setupAPIs(app) {
  logApi(app)
  taskApi(app)
  workerApi(app)
}
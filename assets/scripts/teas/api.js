'use strict'

const config = require('../config.js')
// const store = require('../store.js')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/teas',
    method: 'GET'
  })
}

const show = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/teas/' + data,
    method: 'GET'
  })
}

module.exports = {
  index,
  show
}

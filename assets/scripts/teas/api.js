'use strict'

const config = require('../config.js')
// const store = require('../store.js')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/teas',
    method: 'GET'// ,
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // }
  })
}

const show = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/teas/' + data,
    method: 'GET'// ,
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // }
  })
}

module.exports = {
  index,
  show
}

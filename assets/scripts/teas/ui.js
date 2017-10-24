'use strict'

const store = require('../store.js')
const showhide = require('../reviews/showhide.js')
const showTeasTemplate = require('../templates/tea-listing.handlebars')
const showTeaTemplate = require('../templates/single-tea.handlebars')

const getTeasSuccess = function (data) {
  showhide.createClick()
  store.teas = data.teas
  const showTeasHTML = showTeasTemplate({ teas: store.teas })
  $('.see-teas').html(showTeasHTML)
}

const getTeasError = function () {
  $('.see-reviews-content').text('Sorry, tea retrieval did not work.')
}

const getTeaSuccess = function (data) {
  showhide.createClick()
  const showTeaHTML = showTeaTemplate({ tea: data.tea })
  $('.show-tea').html(showTeaHTML)
}

const getTeaError = function () {
  $('.see-reviews-content').text('Sorry, selected tea retrieval did not work.')
}

module.exports = {
  getTeasSuccess,
  getTeasError,
  getTeaSuccess,
  getTeaError
}

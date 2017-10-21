'use strict'

const getFormFields = require('../../.././lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetReviews = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.getReviewsSuccess)
    .catch(ui.getReviewsError)
}

const addHandlers = function () {
  $('.see-reviews').on('submit', onGetReviews)
}

module.exports = {
  addHandlers
}

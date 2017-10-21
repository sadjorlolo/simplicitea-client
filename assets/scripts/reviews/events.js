'use strict'

// const getFormFields = require('../../.././lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetReviews = function (event) {
  console.log('onGetReviews event is', event)
  event.preventDefault()
  api.index()
    .then(ui.getReviewsSuccess)
    .catch(ui.getReviewsError)
}

const onGetReview = function (event) {
  event.preventDefault()
  const selectedReviewId = $(this).attr('data-id')
  api.show(selectedReviewId)
    .then(ui.getReviewSuccess)
    .catch(ui.getReviewError)
}

const onDeleteReview = function (event) {
  event.preventDefault()
  console.log('ondelete event is', event)
  const reviewForDelete = $(this).attr('id')
  console.log(reviewForDelete)
}

const addHandlers = function () {
  $('.see-reviews-content').on('click', '.see-review', onGetReview)
  $('.see-reviews').on('submit', onGetReviews)
  $('.see-review-content').on('click', '.delete-review', onDeleteReview)
}

module.exports = {
  addHandlers
}

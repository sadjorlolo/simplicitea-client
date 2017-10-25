'use strict'

const store = require('../store.js')
const showhide = require('./showhide.js')
const showReviewsTemplate = require('../templates/review-listing.handlebars')
const showReviewTemplate = require('../templates/single-review.handlebars')
const editReviewTemplate = require('../templates/edit-review.handlebars')

const getReviewsSuccess = function (data) {
  showhide.seeReviewsClick()
  store.reviews = data.reviews
  const showReviewsHTML = showReviewsTemplate({ reviews: store.reviews })
  $('.see-reviews-content').html(showReviewsHTML)
}

const getReviewsError = function () {
  $('.see-reviews-content').text('Sorry, review retrieval did not work.')
}

const insertCuppa = function (rating) {
  for (let i = 0; i < rating; i++) {
    $('.cuppa').append("<img src='https://raw.githubusercontent.com/sadjorlolo/simplicitea-client/cuppa/images/cuppa.png'>")
  }
}

const getReviewSuccess = function (data) {
  $('.see-reviews-content').html('')
  const showReviewHTML = showReviewTemplate(data.review)
  $('.see-review-content').html(showReviewHTML)
  insertCuppa(data.review.rating)
}

const createReviewSuccess = function (data) {
  $('.show-tea').html('')
  getReviewSuccess(data)
  $('.new-created').text('Your review was created successfully!')
}

const createReviewError = function (data) {
  $('.new-created').text('Something went wrong.')
  $('.show-tea').html('')
  $('.create-review').show()
  $('.see-reviews').show()
}

const editReviewSuccess = function (data) {
  $('.see-review-content').html('')
  const editReviewHTML = editReviewTemplate(data.review)
  $('.update-review-content').html(editReviewHTML)
  $('#edit-review-rating').val(data.review.rating)
  $('#edit-review-water-temp').val(data.review.water_temp)
}

const editReviewError = function () {
  $('edit-review-msg').show()
  $('edit-review-msg').text('Sorry, cannot retrieve review for edit.')
  $('.create-review').show()
  $('.see-reviews').show()
}

const updateReviewSuccess = function (data) {
  $('.update-review-content').html('')
  $('.new-update').text('Your review has been updated.')
  getReviewSuccess(data)
}

const updateReviewError = function () {
  $('.update-review-content').html('')
  $('.update-error-msg').text('Something went wrong. Please try again.')
}

const deleteReviewSuccess = function () {
  $('.see-review-content').html('')
  $('.delete-review-msg').text('')
  $('.delete-review-msg').show()
  $('.delete-review-msg').text('This review has been successfully deleted')
}

const deleteReviewError = function () {
  $('.delete-review-msg').text('')
  $('.delete-review-msg').show()
  $('.delete-review-msg').text('Something went wrong. Please try again.')
}

module.exports = {
  getReviewsSuccess,
  getReviewsError,
  getReviewSuccess,
  createReviewSuccess,
  createReviewError,
  deleteReviewSuccess,
  deleteReviewError,
  editReviewSuccess,
  editReviewError,
  updateReviewSuccess,
  updateReviewError,
  insertCuppa
}

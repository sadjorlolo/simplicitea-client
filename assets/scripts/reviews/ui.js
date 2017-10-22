'use strict'

const store = require('../store.js')
// const showhide = require('../show-hide-ui.js')
const showReviewsTemplate = require('../templates/review-listing.handlebars')
const showReviewTemplate = require('../templates/single-review.handlebars')

const getReviewsSuccess = function (data) {
  $('.see-review-content').html('')
  console.log('data is', data)
  store.reviews = data.reviews
  const showReviewsHTML = showReviewsTemplate({ reviews: store.reviews })
  console.log('data.review', store.reviews)
  $('.see-reviews-content').html(showReviewsHTML)
}

const getReviewsError = function () {
  $('.see-reviews-content').text('Sorry, review retrieval did not work.')
}

const getReviewSuccess = function (data) {
  $('.see-reviews-content').html('')
  console.log('getreview data is', data.review)
  const showReviewHTML = showReviewTemplate(data.review)
  $('.see-review-content').html(showReviewHTML)
}

const createReviewSuccess = function (data) {
  $('.show-tea').html('')
  getReviewSuccess(data)
  console.log('create review was a success!')
  console.log('create review success data is ', data)
}

const createReviewError = function (data) {
  console.log('something went wrong writh create review.')
}

const deleteReviewSuccess = function () {
  $('.see-review-content').html('')
  $('.delete-review-msg').text('This review has been successfully deleted')
}

const deleteReviewError = function () {
  $('.delete-review-msg').text('Something went wrong. Please try again.')
}

module.exports = {
  getReviewsSuccess,
  getReviewsError,
  getReviewSuccess,
  createReviewSuccess,
  createReviewError,
  deleteReviewSuccess,
  deleteReviewError
}

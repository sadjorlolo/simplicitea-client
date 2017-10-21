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

module.exports = {
  getReviewsSuccess,
  getReviewsError,
  getReviewSuccess
}

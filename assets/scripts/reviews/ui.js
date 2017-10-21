'use strict'

const store = require('../store.js')
// const showhide = require('../show-hide-ui.js')
const showReviewsTemplate = require('../templates/review-listing.handlebars')

const getReviewsSuccess = function (data) {
  console.log(data)
  const showReviewsHtml = showReviewsTemplate({ reviews: data.reviews })
  $('.see-reviews-content').html(showReviewsHtml)
}

const getReviewsError = function () {
  $('.see-reviews-content').text('Sorry, review retrieval did not work.')
}

module.exports = {
  getReviewsSuccess,
  getReviewsError
}

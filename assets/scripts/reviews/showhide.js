'use strict'

const initialHide = function () {
  $('.see-reviews').hide()
  $('.create-review').hide()
}

const signInShow = function () {
  $('.see-reviews').show()
  $('.create-review').show()
}

const signOutHide = function () {
  $('.see-reviews').hide()
  $('.create-review').hide()

  $('.see-reviews-content').html('')
  $('.see-review-content').html('')
  $('.delete-review-msg').html('')
  $('.update-review-content').html('')
  $('.see-teas').html('')
  $('.show-tea').html('')
}

const createClick = function () {
  $('.see-reviews-content').html('')
  $('.see-review-content').html('')
  $('.delete-review-msg').html('')
  $('.update-review-content').html('')
  $('.see-teas').html('')
  $('.show-tea').html('')
  // $('.see-reviews').hide()
}

const seeReviewsClick = function () {
  $('.see-review-content').html('')
  $('.delete-review-msg').html('')
  $('.update-review-content').html('')
  $('.see-teas').html('')
  $('.show-tea').html('')
}

module.exports = {
  initialHide,
  signInShow,
  signOutHide,
  createClick,
  seeReviewsClick
}

'use strict'

const getFormFields = require('../../.././lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const teaApi = require('../teas/api.js')
const teaUi = require('../teas/ui.js')

const onGetReviews = function (event) {
  $('.show-tea').html('')
  $('.create-review').hide()
  $('.see-reviews').hide()
  $('.update-error-msg').hide()
  event.preventDefault()
  api.index()
    .then(ui.getReviewsSuccess)
    .catch(ui.getReviewsError)
}

const onCancelView = function (event) {
  $('.see-reviews-content').html('')
  $('.create-review').show()
  $('.see-reviews').show()
}

const onGetReview = function (event) {
  event.preventDefault()
  const selectedReviewId = $(this).parent().attr('data-id')
  api.show(selectedReviewId)
    .then(ui.getReviewSuccess)
    .catch(ui.getReviewError)
}

const onDeleteReview = function (event) {
  $('.new-update').text('')
  $('.new-created').text('')
  $('.create-review').show()
  $('.see-reviews').show()
  event.preventDefault()
  const reviewForDelete = $(this).parent().attr('data-id')
  api.destroy(reviewForDelete)
    .then(ui.deleteReviewSuccess)
    .catch(ui.deleteReviewError)
}

const onEditReview = function (event) {
  $('.new-update').text('')
  $('.new-created').text('')
  event.preventDefault()
  const reviewForEdit = $(this).parent().attr('data-id')
  api.show(reviewForEdit)
    .then(ui.editReviewSuccess)
    .catch(ui.editReviewError)
}

const onCloseReview = function (event) {
  $('.new-update').text('')
  $('.new-created').text('')
  event.preventDefault()
  $('.see-review-content').html('')
  $('.create-review').show()
  $('.see-reviews').show()
}

const onUpdateReview = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.update(data)
    .then(ui.updateReviewSuccess)
    .catch(ui.updateReviewError)
}

const onCancelUpdate = function (event) {
  event.preventDefault()
  $('.update-review-content').html('')
  $('.create-review').show()
  $('.see-reviews').show()
}

const onGetTeas = function (event) {
  $('.create-review').hide()
  $('.see-reviews').hide()
  $('.update-error-msg').hide()
  event.preventDefault()
  teaApi.index()
    .then(teaUi.getTeasSuccess)
    .catch(teaUi.getTeasError)
}

const onCancelCreate = function (event) {
  event.preventDefault()
  $('.see-teas').html('')
  $('.create-review').show()
  $('.see-reviews').show()
}

const onCancelReview = function (event) {
  event.preventDefault()
  $('.show-tea').html('')
  $('.create-review').show()
  $('.see-reviews').show()
}

const onSelectTea = function (event) {
  event.preventDefault()
  $('.see-teas').html('')
  const selectedTeaId = $(this).parent().attr('data-id')
  teaApi.show(selectedTeaId)
    .then(teaUi.getTeaSuccess)
    .catch(teaUi.getTeaError)
}

const onSubmitReview = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.create(data)
    .then(ui.createReviewSuccess)
    .catch(ui.createReviewError)
}

const addHandlers = function () {
  $('.see-reviews').on('submit', onGetReviews)
  $('.see-reviews-content').on('click', '.view-review', onGetReview)
  $('.see-reviews-content').on('click', '.close-view-reviews', onCancelView)

  $('.see-review-content').on('click', '.delete-review', onDeleteReview)
  $('.see-review-content').on('click', '.edit-review', onEditReview)
  $('.see-review-content').on('click', '.close-view', onCloseReview)

  $('.create-review').on('click', onGetTeas)
  $('.see-teas').on('click', '.select-tea', onSelectTea)
  $('.see-teas').on('click', '.cancel-create', onCancelCreate)

  $('.show-tea').on('submit', '.new-review', onSubmitReview)
  $('.show-tea').on('click', '.cancel-review', onCancelReview)
  $('.update-review-content').on('submit', '.update-review', onUpdateReview)
  $('.update-review-content').on('click', '.cancel-update', onCancelUpdate)
}

module.exports = {
  addHandlers
}

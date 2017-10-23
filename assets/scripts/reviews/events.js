'use strict'

const getFormFields = require('../../.././lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const teaApi = require('../teas/api.js')
const teaUi = require('../teas/ui.js')

const onGetReviews = function (event) {
  console.log('onGetReviews event is', event)
  event.preventDefault()
  api.index()
    .then(ui.getReviewsSuccess)
    .catch(ui.getReviewsError)
}

const onGetReview = function (event) {
  event.preventDefault()
  const selectedReviewId = $(this).parent().attr('data-id')
  api.show(selectedReviewId)
    .then(ui.getReviewSuccess)
    .catch(ui.getReviewError)
}

const onDeleteReview = function (event) {
  event.preventDefault()
  console.log('ondelete event is', event)
  const reviewForDelete = $(this).parent().attr('data-id')
  console.log(reviewForDelete)
  api.destroy(reviewForDelete)
    .then(ui.deleteReviewSuccess)
    .catch(ui.deleteReviewError)
}

const onEditReview = function (event) {
  event.preventDefault()
  const reviewForEdit = $(this).parent().attr('data-id')
  api.show(reviewForEdit)
    .then(ui.editReviewSuccess)
    .catch(ui.editReviewError)
}

const onGetTeas = function (event) {
  event.preventDefault()
  console.log('onselecttea event is', event)
  teaApi.index()
    .then(teaUi.getTeasSuccess)
    .catch(teaUi.getTeasError)
}

const onSelectTea = function (event) {
  event.preventDefault()
  $('.see-teas').html('')
  const selectedTeaId = $(this).parent().attr('data-id')
  console.log('slected tea id is', selectedTeaId)
  teaApi.show(selectedTeaId)
    .then(teaUi.getTeaSuccess)
    .catch(teaUi.getTeaError)
}

const onSubmitReview = function (event) {
  const data = getFormFields(this)
  console.log('onSubmitData is', data)
  event.preventDefault()
  api.create(data)
    .then(ui.createReviewSuccess)
    .catch(ui.createReviewError)
}

const addHandlers = function () {
  $('.see-reviews').on('submit', onGetReviews)
  $('.see-reviews-content').on('click', '.view-review', onGetReview)
  $('.see-review-content').on('click', '.delete-review', onDeleteReview)
  $('.see-review-content').on('click', '.edit-review', onEditReview)
  $('.create-review').on('click', onGetTeas)
  $('.see-teas').on('click', '.select-tea', onSelectTea)
  $('.show-tea').on('submit', '.new-review', onSubmitReview)
}

module.exports = {
  addHandlers
}

'use strict'

const config = require('../config.js')
const store = require('../store.js')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/reviews',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/reviews',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + data.review.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const destroy = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}

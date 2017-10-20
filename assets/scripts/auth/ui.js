'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  $('.auth-msg-box').text('Sign up successful!')
}

const signUpFailure = function () {
  $('.auth-msg-box').text('Sign up failed. Please try again.')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.sign-in-as').text('You are signed in as ' + store.user.email + '!')
}

const signInFailure = function () {
  $('.auth-msg-box').text('Sign in failed. Please try again.')
}

const changePasswordSuccess = function (data) {
  $('.pswd-msg-box').text('Changed password successfully!')
}

const changePasswordFailure = function () {
  $('.pswd-msg-box').text('Change Password failed.')
}

const signOutSuccess = function (data) {
  $('.auth-msg-box').text('Signed out successfully!')
  store.user = null
}

const signOutFailure = function () {
  $('.auth-msg-box').text('Sign out failed.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}

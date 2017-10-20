'use strict'

const store = require('../store.js')
const showhide = require('./showhide.js')

const signUpSuccess = function (data) {
  $('.auth-msg-box').text('Sign up successful!')
  showhide.clearSignUp()
}

const signUpFailure = function () {
  $('.auth-msg-box').text('Sign up failed. Please try again.')
  showhide.clearSignUp()
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.sign-in-as').text('You are signed in as ' + store.user.email + '!')
  showhide.clearSignIn()
  showhide.signInShowHide()
}

const signInFailure = function () {
  $('.auth-msg-box').text('Sign in failed. Please try again.')
  showhide.clearSignIn()
}

const changePasswordSuccess = function (data) {
  $('.pswd-msg-box').text('Changed password successfully!')
  showhide.clearPassword()
}

const changePasswordFailure = function () {
  $('.pswd-msg-box').text('Change Password failed.')
  showhide.clearPassword()
}

const signOutSuccess = function (data) {
  $('.auth-msg-box').text('Signed out successfully!')
  store.user = null
  showhide.signOutShowHide()
  showhide.signOutClearMessage()
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

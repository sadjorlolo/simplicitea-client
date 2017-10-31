'use strict'

const store = require('../store.js')
const showhide = require('./showhide.js')

const signUpSuccess = function (data) {
  $('.sign-up-auth-msg-box').fadeIn(3)
  $('.sign-up-auth-msg-box').text('Sign up successful!').fadeOut(3000)
  showhide.clearSignUp()
}

const signUpFailure = function () {
  $('.sign-up-auth-msg-box').fadeIn(3)
  $('.sign-up-auth-msg-box').text('Sign up failed. Please try again.')
  showhide.clearSignUp()
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.sign-in-as').text('You are signed in as ' + store.user.email + '!')
  showhide.clearSignIn()
  showhide.signInShowHide()
}

const signInFailure = function () {
  $('.sign-in-auth-msg-box').text('Sign in failed. Please try again.')
  showhide.clearSignIn()
}

const changePasswordSuccess = function (data) {
  $('.pswd-msg-box').fadeIn(5)
  $('.pswd-msg-box').text('')
  $('.pswd-msg-box').text('Changed password successfully!').fadeOut(5000)
  showhide.clearPassword()
}

const changePasswordFailure = function () {
  $('.pswd-msg-box').fadeIn(5)
  $('.pswd-msg-box').text('')
  $('.pswd-msg-box').text('Change Password failed.').fadeOut(5000)
  showhide.clearPassword()
}

const signOutSuccess = function (data) {
  $('.new-update').text('')
  $('.new-created').text('')
  $('.sign-out-auth-msg-box').fadeIn(5)
  $('.sign-out-auth-msg-box').text('Signed out successfully!').fadeOut(5000)
  store.user = null
  showhide.signOutShowHide()
  showhide.signOutClearMessage()
  showhide.clearPassword()
}

const signOutFailure = function () {
  $('.sign-out-auth-msg-box').fadeIn(5)
  $('.sign-out-auth-msg-box').text('Sign out failed.')
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

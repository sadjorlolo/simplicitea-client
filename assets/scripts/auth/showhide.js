'use strict'

const reviewShowhide = require('../reviews/showhide.js')

const initialLoadHide = function () {
  $('.change-pswd').hide()
  $('.sign-out').hide()

  reviewShowhide.initialHide()
}

const clearSignUp = function () {
  $('.signup_email').val('')
  $('.signup_pswd').val('')
  $('.signup_conf').val('')
}

const clearSignIn = function () {
  $('.signin_email').val('')
  $('.signin_pswd').val('')
  $('.sign-in-auth-msg-box').val('')
  $('.sign-up-auth-msg-box').val('')
}

const clearPassword = function () {
  $('.pswd_old').val('')
  $('.pswd_new').val('')
}

const signInShowHide = function () {
  $('.sign-out').show()
  $('.change-pswd').show()
  $('.sign-in-as').show()
  $('.pswd-msg-box').show()

  reviewShowhide.signInShow()

  $('.sign-in').hide()
  $('.sign-up').hide()
  $('.sign-in-play').hide()
  $('.sign-up-auth-msg-box').text('')
  $('.sign-in-auth-msg-box').text('')
  $('.sign-out-auth-msg-box').text('')
}

const signOutShowHide = function () {
  $('.sign-in').show()
  $('.sign-up').show()
  $('.sign-in-play').show()
  $('.sign-in-auth-msg-box').text('')
  $('.sign-up-auth-msg-box').text('')

  $('.change-pswd').hide()
  $('.sign-out').hide()
  $('.sign-in-as').hide()
  $('.pswd-msg-box').hide()

  reviewShowhide.signOutHide()
}

const signOutClearMessage = function () {
  $('.message-box').text('')
  $('.pswd-msg-box').text('')
}

module.exports = {
  initialLoadHide,
  clearSignUp,
  clearSignIn,
  clearPassword,
  signInShowHide,
  signOutShowHide,
  signOutClearMessage
}

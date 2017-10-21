'use strict'

const initialLoadHide = function () {
  $('.change-pswd').hide()
  $('.sign-out').hide()
}

const clearSignUp = function () {
  $('.signup_email').val('')
  $('.signup_pswd').val('')
  $('.signup_conf').val('')
}

const clearSignIn = function () {
  $('.signin_email').val('')
  $('.signin_pswd').val('')
  $('.auth-msg-box').val('')
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
  $('.see-reviews').show()

  $('.sign-in').hide()
  $('.sign-up').hide()
  $('.sign-in-play').hide()
  $('.auth-msg-box').hide()
}

const signOutShowHide = function () {
  $('.sign-in').show()
  $('.sign-up').show()
  $('.sign-in-play').show()
  $('.auth-msg-box').show()

  $('.change-pswd').hide()
  $('.sign-out').hide()
  $('.sign-in-as').hide()
  $('.pswd-msg-box').hide()
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

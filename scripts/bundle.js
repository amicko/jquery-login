(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
$(document).ready(function () {

	var users = [{ username: 'aaron@theironyard.com', password: 'password123' }, { username: 'admin@google.com', password: 'pandas' }];

	var $username = $('#username');
	var $errorUsername = $('#errorUsername');
	var $password = $('#password');
	var $errorPassword = $('#errorPassword');

	var $button = $('#button');

	$button.on('click', function (e) {
		e.preventDefault();

		var $user = $username.val();
		if (!$user.indexOf('@')) {
			$errorUsername.html('Please enter an email address before logging in');
		} else {
			$errorUsername.html('');
		}

		if (!$password.val()) {
			$errorPassword.html('Please enter a password before logging in');
		} else {
			$errorPassword.html('');
		}

		var validInput = false;

		for (var i = 0; i < users.length; i++) {
			if ($user === users[i].username && $password.val() === users[i].password) {
				validInput = true;
			}
			if ($user !== users[i].username) {
				$errorUsername.html('Your user was not found');
			} else {
				$errorUsername.html('');
			}
		}

		if (validInput === true) {
			window.location.replace('http://theironyard.com');
		}
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
'use strict';
$(document).ready(function() {

	var users = [
	{username: 'aaron@theironyard.com', password: 'password123'},
	{username: 'admin@google.com', password: 'pandas'}
	]


	var $username = $('#username');
	var $errorUsername = $('#errorUsername');
	var $password = $('#password');
	var $errorPassword = $('#errorPassword');

	var $button = $('#button');

	$button.on('click', function(e) {
		e.preventDefault();

		var $user = $username.val();
		if (!$user.indexOf('@')) {
			$errorUsername.html('Please enter an email address before logging in');
		}
		else {
			$errorUsername.html('');
		}

		if (!$password.val()) {
			$errorPassword.html('Please enter a password before logging in');
		}
		else {
			$errorPassword.html('');
		}

		var validInput = false;

		for(var i = 0; i < users.length; i++) {
			if($user === users[i].username && $password.val() === users[i].password) {
				validInput = true;
			}
			if($user !== users[i].username) {
				$errorUsername.html('Your user was not found');
			}
			else {
				$errorUsername.html('');
			}
		}


		if (validInput === true) {
			window.location.replace('http://theironyard.com')
		}

	})


});
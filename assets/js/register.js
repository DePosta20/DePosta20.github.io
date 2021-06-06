$("#register").click(function (e) {
	e.preventDefault();
	var firstname = $("#firstname").val();
	if (firstname == "") {
		$("#firstname").toggleClass("is-invalid");
		return;
	} else {
		try {
			$("#firstname").removeClass("is-invalid");
		} catch (e) {}
	}
	var lastname = $("#lastname").val();
	if (lastname == "") {
		$("#lastname").toggleClass("is-invalid");
		return;
	} else {
		try {
			$("#lastname").removeClass("is-invalid");
		} catch (e) {}
	}
	var username = $("#username").val();
	if (username == "") {
		$("#username").toggleClass("is-invalid");
		return;
	} else {
		try {
			$("#username").removeClass("is-invalid");
		} catch (e) {}
	}
	var email = $("#email").val();
	if (email == "") {
		$("#email").toggleClass("is-invalid");
		return;
	} else {
		try {
			$("#email").removeClass("is-invalid");
		} catch (e) {}
	}
	var phone = $("#phone").val();
	if (phone == "") {
		$("#phone").toggleClass("is-invalid");
		return;
	} else {
		try {
			$("#phone").removeClass("is-invalid");
		} catch (e) {}
	}
	var gender = $("#gender").val();
	if (gender == "") {
		$("#gender").toggleClass("is-invalid");
		return;
	} else {
		try {
			$("#gender").removeClass("is-invalid");
		} catch (e) {}
	}
	var password = $("#password").val();
	var conf_password = $("#conf_password").val();
	if (password == "") {
		$("#password").toggleClass("is-invalid");
		return;
	} else {
		if (password != conf_password) {
			$("#password").toggleClass("is-invalid");
			$("#conf_password").toggleClass("is-invalid");
		} else {
			$("#password").removeClass("is-invalid");
			$("#conf_password").removeClass("is-invalid");
		}
	}
	var data = JSON.stringify({
		"firstname": firstname,
		"lastname": lastname,
		"username": username,
		"email": email,
		"phone": phone,
		"gender": gender,
		"password": password,
	});
	var url = "customer_next.php?data=" + data;
	process_request_text("display", url);
});
///////////////////////////////////////////////////////////////
$("#braider_register").click(function (e) {
	e.preventDefault();
	var firstname = $("#firstname").val();
	if (firstname == "") {
		$("#firstname").toggleClass("is-invalid");
		return;
	} else {
		try {
			$("#firstname").removeClass("is-invalid");
		} catch (e) {}
	}
	var lastname = $("#lastname").val();
	if (lastname == "") {
		$("#lastname").toggleClass("is-invalid");
		return;
	} else {
		try {
			$("#lastname").removeClass("is-invalid");
		} catch (e) {}
	}
	var username = $("#username").val();
	if (username == "") {
		$("#username").toggleClass("is-invalid");
		return;
	} else {
		try {
			$("#username").removeClass("is-invalid");
		} catch (e) {}
	}
	var email = $("#email").val();
	if (email == "") {
		$("#email").toggleClass("is-invalid");
		return;
	} else {
		try {
			$("#email").removeClass("is-invalid");
		} catch (e) {}
	}
	var phone = $("#phone").val();
	if (phone == "") {
		$("#phone").toggleClass("is-invalid");
		return;
	} else {
		try {
			$("#phone").removeClass("is-invalid");
		} catch (e) {}
	}
	var gender = $("#gender").val();
	if (gender == "") {
		$("#gender").toggleClass("is-invalid");
		return;
	} else {
		try {
			$("#gender").removeClass("is-invalid");
		} catch (e) {}
	}
	var password = $("#password").val();
	var conf_password = $("#conf_password").val();
	if (password == "") {
		$("#password").toggleClass("is-invalid");
		return;
	} else {
		if (password != conf_password) {
			$("#password").toggleClass("is-invalid");
			$("#conf_password").toggleClass("is-invalid");
		} else {
			$("#password").removeClass("is-invalid");
			$("#conf_password").removeClass("is-invalid");
		}
	}
	var data = JSON.stringify({
		"firstname": firstname,
		"lastname": lastname,
		"username": username,
		"email": email,
		"phone": phone,
		"gender": gender,
		"password": password,
	});
	var url = "braider_next.php?data=" + data;
	process_request_text("display", url);
});
///////////////////////////////////////////////////////////////
function emailCustomer_validity(obj) {
	var email = obj.value;
	var url = "customer_email_validity.php?email=" + email;
	alert(url);
	process_request_text("email_err", url);
}
///////////////////////////////////////////////////////////////
function braiderCustomer_validity(obj) {
	var email = obj.value;
	var url = "braider_email_validity.php?email=" + email;
	alert(url);
	process_request_text("email_err", url);
}
/////////////////////////////////////////////////////////////////////////////
function isNumeric(str) {
	if (typeof str != "string") return false;
	return !isNaN(str) && !isNaN(parseFloat(str));
}
/////////////////////////////////////////////////////////////////////////////
function startupload_dms() {
	document.getElementById("wait").innerHTML = "<img src='../images/wait.gif'>";
}
/////////////////////////////////////////////////////////////////////////////
function startupload_save_details() {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
}
////////////////////////////////////////////////////////////////////////////
function stopUpload_dms_display(file_path) {
	if (file_path != "") {
		document.getElementById("wait").innerHTML = "File uploaded successful";
		document.getElementById("img_path").value = file_path;
		eval("change_dp()");
		try {
			$("#upload").attr(disabled, true);
		} catch (e) {}
	} else {
		document.getElementById("wait").innerHTML = "Fail upload file";
	}
}
////////////////////////////////////////////////////////////////////////////
function close_toast() {
	try {
		$("#toast").toggleClass("show");
	} catch (e) {}
}
/////////////////////////////////////////////////////////////////////////////
function remove_arr(arr, value) {
	for (var i = arr.length; i--;) {
		if (arr[i] === value) {
			arr.splice(i, 1);
		}
	}
}
////////////////////////////////////////////////////////////////////////////
function display_alert_html(title_, html_content) {
	Swal.fire({
		title: title_,
		html: html_content,
		width: '300px',
		customClass: 'swal-wide',
		padding: '3em',
		showCancelButton: false,
		showConfirmButton: false
	});
}
////////////////////////////////////////////////////////////////////////////
function process_request_toast(id, url) {
	var ajaxRequest;
	ajaxRequest = obshii(ajaxRequest);
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function () {
		if (ajaxRequest.readyState == 4) {
			var ajaxDisplay = document.getElementById(id);
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
			document.getElementById("wait").innerHTML = "&nbsp;";
			var html_content = ajaxRequest.responseText;
			display_alert_html("", html_content);
			return 1;
		}
	};
	var res = url.split("?");
	ajaxRequest.open("POST", res[0], true);
	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send(res[1]);
}
/////////////////////////////////////////////////////////////////////////////
function get_input_value_byid(id) {
	var value = "";
	try {
		value = document.getElementById(id).value;
	} catch (e) {}
	return value;
}
////////////////////////////////////////////////////////////////////////////////
var date_diff_indays = function (date1, date2) {
	dt1 = new Date(date1);
	dt2 = new Date(date2);
	return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
};
/////////////////////////////////////////////////////////////////////////////////////////
function is_complex(a) {
	if (a.match("^[a-zA-Z0-9]*$")) {
		return false;
	} else {
		//Not alphanumeric
		if (is_small_capital_number(a) == true) {
			return true;
		}
	}
}
/////////////////////////////////////////////////////////////////////////////
function process_request_redirect(url) {
	var ajaxRequest;
	ajaxRequest = obshii(ajaxRequest);
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function () {
		if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {
			window.location.href = ajaxRequest.responseText; //one level up
			return 1;
		}
	};
	var res = url.split("?");
	ajaxRequest.open("POST", res[0], true);
	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send(res[1]);
}
/////////////////////////////////////////////////////////////////////////////
function process_request_tag_many_args(id, url, args_src) {
	var args = args_src.split(";");
	var ajaxRequest;
	ajaxRequest = obshii(ajaxRequest);
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function () {
		if (ajaxRequest.readyState == 4) {
			var ajaxDisplay = document.getElementById(id);
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
			document.getElementById("wait").innerHTML = "&nbsp;";
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
			for (var i = 0; i < args.length; i++) {
				eval(args[i]);
			}
			return 1;
		}
	}
	var res = url.split("?");
	ajaxRequest.open("POST", res[0], true);
	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send(res[1]);
}
//////////////////////////////////////
function initilize_dataTable_type2(id) {
	$(document).ready(function () {
		$('#' + id).DataTable({
			pageLength: 100,
			"oLanguage": {
				"sSearch": "_INPUT_",
				"sSearchPlaceholder": "Search...",
			},
			dom: 'Bfrtip',
			lengthMenu: [100, 200, 500],
		});
	});
}
////////////////////////////////////////////////////////////////////////////
function process_request_text(id, url) {
	var ajaxRequest;
	ajaxRequest = obshii(ajaxRequest);
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function () {
		if (ajaxRequest.readyState == 4) {
			var ajaxDisplay = document.getElementById(id);
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
			document.getElementById("wait").innerHTML = "&nbsp;";
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
			eval("evaluates()");
			return 1;
		}
	}
	var res = url.split("?");
	ajaxRequest.open("POST", res[0], true);
	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send(res[1]);
}
///////////////////////////////////////////////////
function obshii(ajaxRequest) {
	try {
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e) {
		// Internet Explorer Browsers
		try {
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	return ajaxRequest;
}
////////////////////////////////////////////////////////////////////////////
function process_request_swal_no_response(url) {
	var ajaxRequest;
	ajaxRequest = obshii(ajaxRequest);
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function () {
		if (ajaxRequest.readyState == 4) {
			var response_ = ajaxRequest.responseText;
			var json_obj = JSON.parse(response_);
			var code = json_obj.code;
			var text = "",
				title = "",
				icon = "",
				button = "";
			if (code == 200) {
				text = json_obj.text;
				title = "success";
				icon = "success";
				button = "Done";
				eval("evaluates()");
			} else if (code == 400) {
				text = json_obj.error;
				title = "warning";
				icon = "warning";
				button = "Try Again";
			}
			$("input").val("");
			$("textarea").val("");
			display_alert(text, title, icon, button);
		}
	};
	var res = url.split("?");
	ajaxRequest.open("POST", res[0], true);
	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send(res[1]);
}
////////////////////////////////////////////////////////////////////////////
function process_request_swal(id, url) {
	var ajaxRequest;
	ajaxRequest = obshii(ajaxRequest);
	ajaxRequest.onreadystatechange = function () {
		if (ajaxRequest.readyState == 4) {
			var ajaxDisplay = document.getElementById(id);
			var response_ = ajaxRequest.responseText;
			var json_obj = JSON.parse(response_);
			var code = json_obj.code;
			var html_response = json_obj.html_response;
			ajaxDisplay.innerHTML = html_response;
			document.getElementById("wait").innerHTML = "&nbsp;";
			ajaxDisplay.innerHTML = html_response;
			var text = "",
				title = "",
				icon = "",
				button = "";
			if (code == 200) {
				text = json_obj.text;
				title = "success";
				icon = "success";
				button = "Done";
				eval("evaluates()");
			} else if (code == 400) {
				text = json_obj.error;
				title = "warning";
				icon = "warning";
				button = "Try Again";
			}
			display_alert(text, title, icon, button);
		}
	};
	var res = url.split("?");
	ajaxRequest.open("POST", res[0], true);
	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send(res[1]);
}
////////////////////////////////////////////////////////////////////////////
function process_request_swal_exc(id, url) {
	var ajaxRequest;
	ajaxRequest = obshii(ajaxRequest);
	ajaxRequest.onreadystatechange = function () {
		if (ajaxRequest.readyState == 4) {
			var ajaxDisplay = document.getElementById(id);
			var response_ = ajaxRequest.responseText;
			var json_obj = JSON.parse(response_);
			var code = json_obj.code;
			var html_response = json_obj.html_response;
			ajaxDisplay.innerHTML = html_response;
			document.getElementById("wait").innerHTML = "&nbsp;";
			ajaxDisplay.innerHTML = html_response;
			var text = "",
				title = "",
				icon = "",
				button = "";
			if (code == 200) {
				text = json_obj.text;
				var execute = json_obj.execute;
				title = "success";
				icon = "success";
				button = "Done";
				eval(execute);
			} else if (code == 400) {
				text = json_obj.error;
				title = "warning";
				icon = "warning";
				button = "Try Again";
			}
			display_alert(text, title, icon, button);
		}
	};
	var res = url.split("?");
	ajaxRequest.open("POST", res[0], true);
	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send(res[1]);
}
///////////////////////////////////////////////////////////
function replaceee(text, substr, newstring) {
	for (var i = 0; i < text.length; i++) {
		text = text.replace(substr, newstring);
	}
	return text;
}

////////////////////////////////////////////////////////////////////////////
function process_request_modal(url) {
	var ajaxRequest;
	ajaxRequest = obshii(ajaxRequest);
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function () {
		if (ajaxRequest.readyState == 4) {
			try {
				document.getElementById("wait").innerHTML = "&nbsp;";
			} catch (e) {
				document.getElementById("status").innerHTML = "&nbsp;";
			}
			var html_content = ajaxRequest.responseText;
			$("#modal_body").html(html_content);
			var modal = new mdb.Modal(document.getElementById('modal'));
			modal.show();
			eval("evaluates()");
			return 1;
		}
	};
	var res = url.split("?");
	ajaxRequest.open("POST", res[0], true);
	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send(res[1]);
}
////////////////////////////////////////////////////////////////////////////
function process_request_toast(url) {
	var ajaxRequest;
	ajaxRequest = obshii(ajaxRequest);
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function () {
		if (ajaxRequest.readyState == 4) {
			try {
				document.getElementById("wait").innerHTML = "&nbsp;";
			} catch (e) {
				document.getElementById("status").innerHTML = "&nbsp;";
			}
			var html_content = ajaxRequest.responseText;
			display_alert_html("", html_content);
			return 1;
		}
	};
	var res = url.split("?");
	ajaxRequest.open("POST", res[0], true);
	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send(res[1]);
}
/////////////////////////////////////////////////////////////////////////////
function process_request_toast_many_args(url, args_src) {
	var args = args_src.split(";");
	var ajaxRequest;
	ajaxRequest = obshii(ajaxRequest);
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function () {
		if (ajaxRequest.readyState == 4) {
			document.getElementById("wait").innerHTML = "&nbsp;";
			var html_content = ajaxRequest.responseText;
			for (var i = 0; i < args.length; i++) {
				eval(args[i]);
			}
			display_alert_html("", html_content);
			return 1;
		}
	};
	var res = url.split("?");
	ajaxRequest.open("POST", res[0], true);
	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send(res[1]);
}
/////////////////////////////////////////////////////////////////////////////
function process_request_no_response(url) {
	var ajaxRequest;
	ajaxRequest = obshii(ajaxRequest);
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function () {
		if (ajaxRequest.readyState == 4) {}
	};
	var res = url.split("?");
	ajaxRequest.open("POST", res[0], true);
	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send(res[1]);
}
/////////////////////////////////////////////////////////////////////////////
function display_alert(text_, title_, icon_, button_) {
	swal({
		title: title_,
		text: text_,
		icon: icon_,
		button: button_
	});
}
////////////////////////////////////////////////////////////////////////////
function display_alert_html(title_, html_content) {
	Swal.fire({
		title: title_,
		html: html_content,
		customClass: 'swal-wide',
		showCancelButton: false,
		showConfirmButton: false
	});
}
////////////////////////////////////////////////////////////////////////////
function initialize_slick(id_) {
	$("." + id_).slick({
		autoplay: true,
		infinite: true,
		slidesToShow: 3,
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplaySpeed: 2000,
	});
}
//////////////////////////////////////
function load_CKEDITOR(id_) {
	CKEDITOR.replace(id_, {
		uiColor: '#2196f3',
		removeButtons: 'Source',
		toolbar: [{
				name: 'clipboard',
				items: ['PasteFromWord', '-', 'Undo', 'Redo']
			}, {
				name: 'basicstyles',
				items: ['Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat', 'Subscript', 'Superscript']
			}, {
				name: 'links',
				items: ['Link', 'Unlink']
			}, {
				name: 'paragraph',
				items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote']
			}, {
				name: 'insert',
				items: ['Image', 'Table']
			}, {
				name: 'editing',
				items: ['Scayt']
			},
			'/',
			{
				name: 'styles',
				items: ['Format', 'Font', 'FontSize']
			},
			{
				name: 'colors',
				items: ['TextColor', 'BGColor', 'CopyFormatting']
			},
			{
				name: 'align',
				items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
			},
			{
				name: 'document',
				items: ['Print', 'PageBreak', 'Source']
			}
		],
		// The rest of options...
	});
}
//////////////////////////////////////
function get_value_CKEDITOR(id_) {
	return CKEDITOR.instances[id_].getData();
}
//////////////////////////////////////
function initialize_chart(id, data_) {
	var ctx = document.getElementById(id).getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [{
				label: '# of Votes',
				data: data_,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	});
}
////////////////////////////////////////////////////////////////// 
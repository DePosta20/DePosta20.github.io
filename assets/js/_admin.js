/////////////////////////////////////////////////////////////////////////////
function evaluates() {
	eval("count_appointment()");
}
/////////////////////////////////////////////////////////////////////////////
function appointments() {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	$("#legend").html("Your Appointments");
	var url = "braider_mod/appointment_list.php";
	process_request_text("content", url);
}
/////////////////////////////////////////////////////////////////////////////
function appointment_next(appointment_id, decision) {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	$("#legend").html("Your Appointments");
	var data = JSON.stringify({
		"appointment_id": appointment_id,
		"decision": decision,
	});
	var url = "braider_mod/appointment_next.php?data=" + data;
	process_request_swal_exc("content", url);
}
/////////////////////////////////////////////////////////////////////////////
function count_appointment() {
	var url = "ws/braider_appointment.php";
	process_request_text("count_appointment", url);
}
/////////////////////////////////////////////////////////////////////////////
function saloons() {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	$("#legend").html("Salons");
	var url = "admin_mod/salon_list.php";
	process_request_tag_many_args("content", url, "initilize_dataTable_type2('dtBasicExample');");
}
/////////////////////////////////////////////////////////////////////////////
function reports() {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	$("#legend").html("Reports");
	var url = "braider_mod/reports.php";
	process_request_tag_many_args("content", url, "initilize_dataTable_type2('dtBasicExample');");
}
/////////////////////////////////////////////////////////////////////////////
function show_report() {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	var from_date = get_input_value_byid("from_date");
	var to_date = get_input_value_byid("to_date");
	$("#legend").html("Reports from " + from_date + " to " + to_date);
	var url = "braider_mod/reports_show.php?from_date=" + from_date + "&to_date=" + to_date;
	process_request_tag_many_args("display", url, "initilize_dataTable_type2('dtBasicExample');");
}
/////////////////////////////////////////////////////////////////////////////
function employee() {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	$("#legend").html("USERS");
	var url = "admin_mod/employee_list.php";
	process_request_tag_many_args("content", url, "initilize_dataTable_type2('dtBasicExample');");
}
/////////////////////////////////////////////////////////////////////////////
function add_salon() {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	$("#legend").html("Add New Saloons");
	var url = "braider_mod/salon_add.php";
	process_request_tag_many_args("content", url, "load_CKEDITOR('description');");
}
/////////////////////////////////////////////////////////////////////////////
function register_employee() {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	$("#legend").html("Add New User");
	var url = "admin_mod/employee_add.php";
	process_request_text("content", url);
}
/////////////////////////////////////////////////////////////////////////////
function register_salon_next() {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	var full_name = document.getElementById("full_name").value;
	if (full_name == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("name_err").innerHTML = "Please Enter Full Name";
		return;
	}
	var location = document.getElementById("location").value;
	if (location == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("username_err").innerHTML = "Please Enter Location";
		return;
	}
	var description = get_value_CKEDITOR("description");
	if (description == "") {
		document.getElementById("click").disabled = false;
		return;
	}
	var phone_no = get_input_value_byid("phone_no");
	if (phone_no == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("phone_err").innerHTML = "Please Type Phone no";
		return;
	}
	var photo = get_input_value_byid("img_path");
	description = encodeURIComponent(encodeString(description));
	var data = JSON.stringify({
		"full_name": full_name,
		"location": location,
		"phone_no": phone_no,
		"description": description,
		"photo": photo
	});
	var url = "admin_mod/salon_save.php?data=" + data;
	process_request_text("result", url);
}
/////////////////////////////////////////////////////////////////////////////
function edit_salon_next() {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	var full_name = document.getElementById("full_name").value;
	if (full_name == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("name_err").innerHTML = "Please Enter Full Name";
		return;
	}
	var location = document.getElementById("location").value;
	if (location == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("username_err").innerHTML = "Please Enter Location";
		return;
	}
	var description = get_value_CKEDITOR("description");
	if (description == "") {
		document.getElementById("click").disabled = false;
		return;
	}
	var phone_no = get_input_value_byid("phone_no");
	if (phone_no == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("phone_err").innerHTML = "Please Type Phone no";
		return;
	}
	var photo = get_input_value_byid("img_path");
	description = encodeURIComponent(encodeString(description));
	var data = JSON.stringify({
		"full_name": full_name,
		"location": location,
		"phone_no": phone_no,
		"description": description,
		"photo": photo
	});
	var url = "braider_mod/salon_details_edit_next.php?data=" + data;
	process_request_swal("result", url);
}
/////////////////////////////////////////////////////////////////////////////
function display_salon_details(id) {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	var url = "braider_mod/salon_details.php?id=" + id;
	process_request_toast(url);
}
/////////////////////////////////////////////////////////////////////////////
function display_employee_details(id) {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	var url = "admin_mod/employee_details.php?id=" + id;
	process_request_toast(url);
}
/////////////////////////////////////////////////////////////////////////////
function display_service_details(id) {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	var url = "braider_mod/service_details.php?id=" + id;
	process_request_toast(url);
}
/////////////////////////////////////////////////////////////////////////////
function delete_employee(id) {
	y = confirm("Are you sure?");
	if (y == true) {
		$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
		var url = "admin_mod/employee_delete.php?id=" + id;
		process_request_swal("content", url);
	} else {
		return;
	}
}
/////////////////////////////////////////////////////////////////////////////
function delete_salon(id) {
	y = confirm("Are you sure?");
	if (y == true) {
		$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
		var url = "braider_mod/salon_delete.php?id=" + id;
		process_request_swal("content", url);
	} else {
		return;
	}
}

/////////////////////////////////////////////////////////////////////////////
function delete_service(id) {
	y = confirm("Are you sure?");
	if (y == true) {
		$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
		var url = "braider_mod/service_delete.php?id=" + id;
		process_request_swal("content", url);
	} else {
		return;
	}
}
/////////////////////////////////////////////////////////////////////////////
function edit_employee(id) {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	var url = "admin_mod/employee_details_edit.php?id=" + id;
	process_request_text("content", url);
}
/////////////////////////////////////////////////////////////////////////////
function edit_service(id) {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	var url = "braider_mod/service_details_edit.php?id=" + id;
	process_request_tag_many_args("result", url, "load_CKEDITOR('description');");
}
/////////////////////////////////////////////////////////////////////////////
function edit_salon(id) {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	var url = "braider_mod/salon_details_edit.php?id=" + id;
	process_request_tag_many_args("content", url, "load_CKEDITOR('description');");
}
/////////////////////////////////////////////////////////////////////////////
function register_employee_next() {
	document.getElementById("wait").innerHTML = "<img src='../assets/img/wait.png' >";
	var firstname = get_input_value_byid("firstname");
	if (firstname == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("name_err").innerHTML = "Please Enter First Name";
		return;
	}
	var lastname = get_input_value_byid("lastname");
	if (lastname == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("name_err").innerHTML = "Please Enter Last Name";
		return;
	}
	var user_name = get_input_value_byid("username");
	if (user_name == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("username_err").innerHTML = "Please Enter Username";
		return;
	}
	var email_address = get_input_value_byid("email");
	if (email_address == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("email_err").innerHTML = "Please Enter email";
		return;
	}
	var gender = get_input_value_byid("gender");
	var phone_no = document.getElementById("phone_no").value;
	if (phone_no == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("phone_err").innerHTML = "Please Type Phone no";
		return;
	}
	var data = JSON.stringify({
		"firstname": firstname,
		"lastname": lastname,
		"user_name": user_name,
		"phone_no": phone_no,
		"email_address": email_address,
		"gender": gender
	});
	var url = "admin_mod/employee_save.php?data=" + data;
	process_request_text("result", url);
}
/////////////////////////////////////////////////////////////////////////////
function edit_employee_next() {
	document.getElementById("wait").innerHTML = "<img src='../assets/img/wait.png' >";
	var firstname = get_input_value_byid("firstname");
	if (firstname == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("name_err").innerHTML = "Please Enter First Name";
		return;
	}
	var lastname = get_input_value_byid("lastname");
	if (lastname == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("name_err").innerHTML = "Please Enter Last Name";
		return;
	}
	var user_name = get_input_value_byid("username");
	if (user_name == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("username_err").innerHTML = "Please Enter Username";
		return;
	}
	var email_address = get_input_value_byid("email");
	if (email_address == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("email_err").innerHTML = "Please Enter email";
		return;
	}
	var work = get_input_value_byid("work");
	if (work == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("work_err").innerHTML = "Please Enter Work";
		return;
	}
	var gender = get_input_value_byid("gender");
	var salon_id = get_input_value_byid("salon_id");
	var phone_no = document.getElementById("phone_no").value;
	if (phone_no == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("phone_err").innerHTML = "Please Type Phone no";
		return;
	}
	var data = JSON.stringify({
		"firstname": firstname,
		"lastname": lastname,
		"user_name": user_name,
		"phone_no": phone_no,
		"email_address": email_address,
		"gender": gender,
		"work": work,
		"salon_id": salon_id
	});
	var url = "admin_mod/employee_details_edit_next.php?data=" + data;
	process_request_swal("result", url);
}
/////////////////////////////////////////////////////////////////////////////
function back_() {
	var tagx = decodeString(document.getElementById("tag").value);
	document.getElementById(tag_id).innerHTML = tagx;
	try {
		initilize_dataTable_type2('dtBasicExample');
	} catch (e) {}
}
/////////////////////////////////////////////////////////////////////////////
function settings() {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	$("#legend").html("Settings");
	var url = "braider_mod/settings.php";
	process_request_text("content", url);
}
/////////////////////////////////////////////////////////////////////////////
function services() {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	$("#legend").html("Services");
	var url = "braider_mod/services.php";
	process_request_text("content", url);
}
/////////////////////////////////////////////////////////////////////////////
function show_services(obj) {
	var salon_id = obj.value;
	var url = "braider_mod/services_show.php?salon_id=" + salon_id;
	process_request_tag_many_args("_display", url, "initilize_dataTable_type2('dtBasicExample');");
}
/////////////////////////////////////////////////////////////////////////////
function show_services1(salon_id) {
	var url = "braider_mod/services_show.php?salon_id=" + salon_id;
	process_request_tag_many_args("_display", url, "initilize_dataTable_type2('dtBasicExample');");
}
/////////////////////////////////////////////////////////////////////////////
function register_services() {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	$("#s_header").html("Add New Service");
	var url = "braider_mod/service_add.php";
	process_request_tag_many_args("result", url, "load_CKEDITOR('description');");
}
/////////////////////////////////////////////////////////////////////////////
function register_service_next() {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	var full_name = document.getElementById("full_name").value;
	if (full_name == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("name_err").innerHTML = "Please Enter Full Name";
		return;
	}
	var price = document.getElementById("price").value;
	if (price == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("username_err").innerHTML = "Please Enter Price";
		return;
	}
	var description = get_value_CKEDITOR("description");
	if (description == "") {
		document.getElementById("click").disabled = false;
		return;
	}
	var photo = get_input_value_byid("img_path");
	description = encodeURIComponent(encodeString(description));
	var data = JSON.stringify({
		"full_name": full_name,
		"price": price,
		"description": description,
		"photo": photo
	});
	var url = "braider_mod/service_save.php?data=" + data;
	process_request_text("result", url);
}
/////////////////////////////////////////////////////////////////////////////
function edit_service_next() {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	var full_name = document.getElementById("full_name").value;
	if (full_name == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("name_err").innerHTML = "Please Enter Full Name";
		return;
	}
	var price = document.getElementById("price").value;
	if (price == "") {
		document.getElementById("click").disabled = false;
		document.getElementById("username_err").innerHTML = "Please Enter Price";
		return;
	}
	var description = get_value_CKEDITOR("description");
	if (description == "") {
		document.getElementById("click").disabled = false;
		return;
	}
	var photo = get_input_value_byid("img_path");
	description = encodeURIComponent(encodeString(description));
	var data = JSON.stringify({
		"full_name": full_name,
		"price": price,
		"description": description,
		"photo": photo
	});
	var url = "braider_mod/service_details_edit_next.php?data=" + data;
	process_request_text("result", url);
}
/////////////////////////////////////////////////////////////////////////////
function profile() {
	$("#wait").html("Wait ... <img src='assets/images/wait.gif' >");
	$("#legend").html("Your Appointments");
	var url = "profile_mod/braider_profile.php";
	process_request_text("content", url);
}
/////////////////////////////////////////////////////////////////////////////
function display_form() {
	$("#change_dp_form").show("slow");
	$("#btn_id").hide("slow");
}
/////////////////////////////////////////////////////////////////////////////
var loadFile = function (event) {
	var image = document.getElementById('display_after_upload');
	var image_ = document.getElementById("file");
	var img = new Image();
	if (typeof (image_.files) != "undefined") {
		var size = parseInt(image_.files[0].size / 1024);
		if (size >= 2048) {
			document.getElementById("wait").innerHTML = "File too Big, please select a file less than 2mb";
		} else if (size < 20) {
			document.getElementById("wait").innerHTML = "File too small, please select a file greater than 2kb";
		} else {
			document.getElementById("wait").innerHTML = "";
			image.src = URL.createObjectURL(event.target.files[0]);
		}
	} else {
		alert("This browser does not support HTML5.");
	}
};
/////////////////////////////////////////////////////////////////////////////
function change_dp() {
	var url = "ws/braider_dp.php";
	process_request_text("dp", url);
}
/////////////////////////////////////////////////////////////////////////////
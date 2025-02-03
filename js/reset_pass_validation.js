let reset_password_form = document.getElementById("reset_password_form");
let registation_form_flag = 0;
let check_password = document.getElementById("check_password");
let check_eye_icon = document.getElementById("check_eye_icon");
let password = document.getElementById("password");
let eye_icon = document.getElementById("eye_icon");

reset_password_form.addEventListener("submit", (event) => {
	console.log(registation_form_flag);
	if(registation_form_flag === 1){
		event.preventDefault();
	}
})

password.addEventListener("input", () => {
	let error_msg = document.getElementById("password_error");
	let pattern = new RegExp(`^${password.pattern}$`);

	if(password.value !== check_password.value){
		match_error.innerText = "パスワードが一致しません";
		registation_form_flag = 1;
	} else {
		match_error.innerText = "";
		registation_form_flag = 0;
	}
	
	if (!pattern.test(password.value)) {
		error_msg.innerText = "半角英数字、特殊文字の8桁以上16桁以下で入力してください";
	} else {
		error_msg.innerText = "";
	}
});

eye_icon.addEventListener("click", () => {
	if(password.type === "password"){

		//  passwordからtextへ
		password.type = "text";
		eye_icon.innerText  = "visibility";
	} else {

		//  textからpasswordへ
		password.type = "password";
		eye_icon.innerText  = "visibility_off";
	}
});

//パスワードと一致しているか、半角英数字か
check_password.addEventListener("input", () => {
	let check_password_error = document.getElementById("check_password_error");
	let pattern = new RegExp(`^${check_password.pattern}$`);
	
	if(password.value !== check_password.value){
		match_error.innerText = "パスワードが一致しません";
		registation_form_flag = 1;
	} else {
		match_error.innerText = "";
		registation_form_flag = 0;
	}

	if (!pattern.test(check_password.value)) {
		check_password_error.innerText = "半角英数字、特殊文字の8桁以上16桁以下で入力してください";
	} else {
		check_password_error.innerText = "";
	}
});

check_eye_icon.addEventListener("click", () => {
	if(check_password.type === "password"){

		//  passwordからtextへ
		check_password.type = "text";
		check_eye_icon.innerText  = "visibility";
	} else {

		//  textからpasswordへ
		check_password.type = "password";
		check_eye_icon.innerText  = "visibility_off";
	}
});
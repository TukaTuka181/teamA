let info_form = document.getElementById("info_form");
let registation_form_flag = 0;
let check_password = document.getElementById("check_password");
let check_eye_icon = document.getElementById("check_eye_icon");
let password = document.getElementById("password");
let eye_icon = document.getElementById("eye_icon");
let match_error = document.getElementById("match_error");
let birth_day = document.getElementById("birth_day");
let age = document.getElementById("age");
let phone = document.getElementById("phone");

info_form.addEventListener("submit", (event) => {
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

//誕生日から年齢を求める
birth_day.addEventListener("input", () => {
    
    // 現在の日時を取得
    let today = new Date();
    
    // 生まれた日時を取得
    let birthday = new Date(birth_day.value);
    
    if (isNaN(birthday.getTime())) {
        age.value = "";
        return;
    }

    // 年齢を計算
    let years = today.getFullYear() - birthday.getFullYear();
    let hasBirthdayPassed = (today.getMonth() > birthday.getMonth()) || 
                            (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());

    if (!hasBirthdayPassed) {
        years -= 1; // 誕生日が来ていなければ年齢を1つ減らす
    }

    age.value = years;
});

phone.addEventListener("input", () => {
	let tel_error = document.getElementById("tel_error");
	let pattern = new RegExp(`^${phone.pattern}$`);

	if (!pattern.test(phone.value)) {
		tel_error.innerText = "半角数字、10~11桁で入力してください";
	} else {
		tel_error.innerText = "";
	}
})
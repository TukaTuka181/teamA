//ログイン画面のパスワード表示非表示切り替え処理

let password = document.getElementById("password");
let eye_icon = document.getElementById("eye_icon");

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
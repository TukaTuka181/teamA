let vali_number = document.getElementById("credit_card_number");

vali_number.addEventListener("input", () => {
	let error_msg = document.getElementById("number_error");
	let pattern = new RegExp(`^${vali_number.pattern}$`);
	
	if (!pattern.test(vali_number.value)) {  
		error_msg.innerText = "半角数字14~16桁で入力してください";
	} else {
		error_msg.innerText = "";
	}
});

let vali_month = document.getElementById("expire_month");

vali_month.addEventListener("input", () => {
	let error_msg = document.getElementById("expire_month_error");
	let pattern = new RegExp(`^${vali_month.pattern}$`);
	
	if (!pattern.test(vali_month.value)) {
		error_msg.innerText = "半角数字2桁で月を入力してください(1月→01)";
	} else {
		error_msg.innerText = "";
	}
});

let vali_year = document.getElementById("expire_year");

vali_year.addEventListener("input", () => {
	let error_msg = document.getElementById("expire_year_error");
	let pattern = new RegExp(`^${vali_year.pattern}$`);
	
	if (!pattern.test(vali_year.value)) {  
		error_msg.innerText = "半角数字2桁で入力してください";
	} else {
		error_msg.innerText = "";
	}
});

let vali_code = document.getElementById("security_code");

vali_code.addEventListener("input", () => {
	let error_msg = document.getElementById("code_error");
	let pattern = new RegExp(`^${vali_code.pattern}$`);
	
	if (!pattern.test(vali_code.value)) {  
		error_msg.innerText = "半角数字3~4桁で入力してください";
	} else {
		error_msg.innerText = "";
	}
});
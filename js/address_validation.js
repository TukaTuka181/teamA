let zip = document.getElementById("zip_code");

zip.addEventListener("input", () => {
	let error_msg = document.getElementById("zip_code_error");
	let pattern = new RegExp(`^${zip.pattern}$`);
	
	if (!pattern.test(zip.value)) {  
		error_msga.innerText = "半角数字7桁で入力してください";
	} else {
		error_msga.innerText = "";
	}
});
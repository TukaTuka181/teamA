let do_flag = 0;

// アラートの表示
function show_alert(show_text) {
	if(do_flag === 1){
		return
	} else {
		do_flag = 1;
	}

	let alert_window = document.getElementById("alert_window");
	let alert_text = document.getElementById("alert_text");
	let alert_border = document.getElementById("alert_border");

	alert_window.classList.add("view");
	alert_text.innerText = show_text;
	alert_border.classList.add("view");

	setTimeout(() => {
		alert_window.classList.remove("view");
		alert_border.classList.remove("view");
		do_flag = 0;
	}, 2000);
}

window.show_alert = show_alert;
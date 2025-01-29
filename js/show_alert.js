//アラートの表示
function show_alert(show_text){
	
	let alert_window = document.getElementById("alert_window");
	let alert_text = document.getElementById("alert_text");

	alert_window.classList.toggle("view");
	alert_text.innerText = show_text;

	setTimeout(() => {
		alert_window.classList.toggle("view");
	},2000);
}

window.show_alert = show_alert;
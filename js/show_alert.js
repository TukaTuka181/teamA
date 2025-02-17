let count = 0;
let alert_window_style = document.getElementById("alert_window").style;
let headerHeighta = document.querySelector("header").offsetHeight;

// アラートの表示
function show_alert(show_text) {

	//headerの高さに合わせてalertを表示する
	alert_window_style.top = headerHeighta + 10 + "px";

	let alert_window = document.getElementById("alert_window");

	// alertを追加
	let child = document.createElement("div");
	child.setAttribute("class", "alert");
	child.innerHTML = `
	<span class="material-symbols-outlined">
		check_circle
	</span>
	<p class="alert_text" id="${count}">${show_text}</p>
	<div class="alert_border" id="count${count}"></div>
	`;
	alert_window.append(child);

	alert_window.classList.add("view");
	let new_border = document.getElementById("count"+count);
	setTimeout(() => {
		new_border.classList.add("view");
	}, 10);
	

	count++;

	setTimeout(() => {
		if(alert_window.childElementCount < 1){
			alert_window.classList.remove("view");
		}
		alert_window.removeChild(alert_window.children[0]);
	}, 2000);
}

window.show_alert = show_alert;
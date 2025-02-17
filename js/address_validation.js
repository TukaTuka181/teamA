let zip = document.getElementById("zip_code");

zip.addEventListener("input", () => {
	let error_msg = document.getElementById("zip_code_error");
	let pattern = new RegExp(`^${zip.pattern}$`);
	
	if (!pattern.test(zip.value)) {  
		error_msg.innerText = "半角数字7桁で入力してください";
	} else {
		error_msg.innerText = "";
	}
});

// 送信時に住所が一つも登録されていないときエラーを出す

let address_main_box = document.getElementById("main_box");

address_main_box.addEventListener("submit", (event) => {
	let address_choose_list = document.getElementById("address_choose_list");
    let address_add_button = document.getElementById("address_add_button");
    let non_address_error = document.getElementById("non_address_error");

    //もし住宅が一つも登録されていなかったら
    if(!address_choose_list.childElementCount > 0){
        event.preventDefault();

        let btnRect = address_add_button.getBoundingClientRect();
        let headerHeight = document.querySelector("header").offsetHeight;
        let scrollY = window.scrollY + btnRect.top - headerHeight - 10; // 10pxの余白を追加

        non_address_error.innerText = "住所を登録してください";

        window.scrollTo({ top: scrollY, behavior: "smooth" });

        // ボタンを強調（赤枠アニメーション）
        address_add_button.style.border = "2px solid red";
        setTimeout(() => {
            address_add_button.style.border = "";
            non_address_error.innerText = "";
        }, 2000);
    }
});
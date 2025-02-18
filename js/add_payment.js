//お支払い情報ページでクレジットカードを追加する処理

import {hidden_payment} from "./payment_modal_window.js";

const req_name = document.getElementById("credit_card_name");
const req_number = document.getElementById("credit_card_number");
const req_expire_month = document.getElementById("expire_month");
const req_expire_year = document.getElementById("expire_year");
const req_security_code = document.getElementById("security_code");
const payment_form = document.getElementById("payment_form");

payment_form.addEventListener("submit", () => {
	
	let xhr = new XMLHttpRequest();

    //サーバーサイドに送るデータ
    let req_data = `owner_name=${req_name.value}&`;
    req_data += `number=${req_number.value}&`;
    req_data += `month=${req_expire_month.value}&`;
	req_data += `year=${req_expire_year.value}&`;
    req_data += `security_code=${req_security_code.value}`;

	xhr.open('POST', '/pictsuba/api/card_id.json');
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	xhr.onload = function() {
		// レスポンス取得成功時
		if(xhr.status === 200){
			// レスポンス取得成功時
			let respData = JSON.parse(xhr.responseText);
			let resp_id = respData.card_id;
			
			//モーダルウィンドウを非表示
			hidden_payment();
	
			// クレジットカード選択画面に追加
			let items = document.getElementById("items");
			let child = document.createElement("div");
			child.setAttribute("class", "item");
			
			//カード番号を＊で隠ぺい
			let replace_length = req_number.value.length - 4;
			let pattern  = new RegExp("[0-9]{" + replace_length + "}", "d");
	
			let hidden_number = req_number.value.replace(pattern, () => {
				let resp_text = "";
				for(let i = 0; i < replace_length; i++){
					resp_text += "*";
				}
				return resp_text;
			});
	
			child.innerHTML = `
			<div class="item_info">カード番号：${hidden_number}</div>
			<button class="delete_button" id="${resp_id}" onclick="delete_payment(${resp_id})">削除</button>
			`;
			items.append(child);
	
			//追加ボタンを押した後、inputタグを初期化
			req_name.value = null;
			req_number.value = null;
			req_expire_month.value = null;
			req_expire_year.value = null;
			req_security_code.value = null;
		}
	};
	
	xhr.send(req_data);
});
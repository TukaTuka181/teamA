//住所情報ページで住所をサーバ側に送る処理

import {hidden_address} from "./address_modal_window.js";
const req_zip_code = document.getElementById("zip_code");
const req_pref = document.getElementById("pref");
const req_municipalities = document.getElementById("municipalities");
const req_street = document.getElementById("street");
const req_building = document.getElementById("building");
const address_form = document.getElementById("address_form");

//住所情報の追加
address_form.addEventListener("submit", () => {

    //郵便番号の検索結果がない時、送信を止める
    if(address_form_flag === 1){
        return;
    }
    
    let xhr = new XMLHttpRequest();

    //サーバーサイドに送るデータ
    let req_data = `zip_code=${req_zip_code.value}&`;
    req_data += `pref=${req_pref.value}&`;
    req_data += `municipalities=${req_municipalities.value}&`;
    req_data += `street=${req_street.value}&`;
    req_data += `building=${req_building.value}`;

    xhr.open('POST', '/pictsuba/api/address_id.json');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function() {
        // レスポンス取得成功時
        if(xhr.status === 200){
            
            let respData = JSON.parse(xhr.responseText);
            let resp_id = respData.address_id;
            
            // モーダルウィンドウを非表示
            hidden_address();
        
            // 住所選択画面に追加
            let address_choose_list = document.getElementById("items");
            let child = document.createElement("div");
            child.setAttribute("class", "item");
            child.innerHTML = `
            <div class="item_info">
                〒${req_zip_code.value.toString().substring(0, 3)}-${req_zip_code.value.toString().substring(3, 7)}<br>
                    ${req_pref.value} ${req_municipalities.value} ${req_street.value}<br>
                    ${req_building.value}
            </div>
            <button class="delete_button" id="${resp_id}" onclick="delete_address(${resp_id})">削除</button>
            `;
            address_choose_list.append(child);

            //追加ボタンを押した後、inputタグを初期化
			req_zip_code.value = null;
			req_pref.value = null;
			req_municipalities.value = null;
			req_street.value = null;
			req_building.value = null;
        }
    };
    
    xhr.send(req_data);
});
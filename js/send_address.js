//注文確認画面で住所を追加したときの処理

import {hidden_address} from "./address_modal_window.js";
const req_zip_code = document.getElementById("zip_code");
const req_pref = document.getElementById("pref");
const req_municipalities = document.getElementById("municipalities");
const req_street = document.getElementById("street");
const req_building = document.getElementById("building");
const address_form = document.getElementById("address_form");

window.address_form_flag = 0;

address_form.addEventListener("submit", () => {
    
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
            let address_choose_list = document.getElementById("address_choose_list");
            let child = document.createElement("label");
            child.setAttribute("class", "choose");
            child.setAttribute("for", "address" + resp_id);
            child.innerHTML = `
            <div class="left_box">
                <input type="radio" name="address_radio" id="${"address" + resp_id}" value=${resp_id} required checked>
            </div>
            <div class="right_box">
                <div class="address_info">
                    〒${req_zip_code.value.toString().substring(0, 3)}-${req_zip_code.value.toString().substring(3, 7)}<br>
                    ${req_pref.value} ${req_municipalities.value} ${req_street.value}<br>
                    ${req_building.value}
                </div>
            </div>
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
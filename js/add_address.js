import {hidden_address} from "./address_modal_window.js";
const req_zip_code = document.getElementById("zip_code");
const req_pref = document.getElementById("pref");
const req_municipalities = document.getElementById("municipalities");
const req_street = document.getElementById("street");
const req_building = document.getElementById("building");
const add_address = document.getElementById("add_address");

//住所情報の追加
add_address.addEventListener("click", () => {

    let error_text = "";

    //未入力チェック
    if(req_zip_code.value === ""){
        error_text = "郵便番号が未入力です。\n";
    }
    if(req_pref.value === ""){
        error_text += "都道府県が未入力です。\n";
    }
    if(req_municipalities.value === ""){
        error_text += "市区町村が未入力です。\n";
    }
    if(req_street.value === ""){
        error_text += "番地が未入力です";
    }
    
    if(error_text !== ""){
        alert(error_text);
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
                ${req_pref.value} ${req_municipalities.value}<br>
                ${req_street.value}<br>
                ${req_building.value}
            </div>
            <button class="delete_button" id="${resp_id}" onclick="delete_address(${resp_id})">削除</button>
            `;
            address_choose_list.append(child);
        }
    };
    
    xhr.send(req_data);
});
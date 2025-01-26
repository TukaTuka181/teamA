import {hidden_payment} from "../js/payment_modal_window.js";

const req_name = document.getElementById("credit_card_name");
const req_number = document.getElementById("credit_card_number");
const req_expire_month = document.getElementById("expire_month");
const req_expire_year = document.getElementById("expire_year");
const req_security_code = document.getElementById("security_code");
const add_credit_card = document.getElementById("add_credit_card");

add_credit_card.addEventListener("click", () => {

    let error_text = "";

    //未入力チェック
    if(req_name.value === ""){
        error_text = "お名前が未入力です。\n";
    }
    if(req_number.value === ""){
        error_text += "カード番号が未入力です。\n";
    }
    if(req_expire_month.value === ""){
        error_text += "有効期限（月）が未入力です。\n";
    }
    if(req_expire_year.value === ""){
        error_text += "有効期限（年）が未入力です。\n";
    }
    if(req_security_code.value === ""){
        error_text += "セキュリティコードが未入力です";
    }
    
    if(error_text !== ""){
        alert(error_text);
        return;
    }

    let xhr = new XMLHttpRequest();

    //サーバーサイドに送るデータ
    let req_data = `owner_name=${req_name.value}&`;
    req_data += `number=${req_number.value}&`;
    req_data += `expire=${req_expire_month.value}&`;
    req_data += `expire=${req_expire_year.value}&`;
    req_data += `security_cord=${req_security_code.value}`;

    xhr.open('POST', '/pictsuba/api/card_id.json');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function() {
        if(xhr.status === 200){
            // レスポンス取得成功時
            let respData = JSON.parse(xhr.responseText);
            let resp_id = respData.card_id;
            
            //モーダルウィンドウを非表示
            hidden_payment();
    
            // 住所選択画面に追加
            let items = document.getElementById("items");
            let child = document.createElement("label");
            child.setAttribute("class", "item");
            child.setAttribute("for", "credit_card" + resp_id);
            
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
            <input type="radio" name="credit_card" id="${"credit_card" + resp_id}" value="${resp_id} checked>
            <div class="item_info">カード番号：${hidden_number}</div>
            `;
            items.append(child);
        }
    };

    xhr.send(req_data);

});
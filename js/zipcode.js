const close_icons = document.getElementById("address_close_icon");
const modal_window = document.getElementById("address_modal_window");
const zip_code = document.getElementById("zip_code");
const error_msg = document.getElementById("zip_code_error");

close_icons.addEventListener("click", (event) => {
    error_msg.innerText = "";
});
modal_window.addEventListener("click", () => {
    error_msg.innerText = "";
});

zip_code.addEventListener("change", () => {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://zip-cloud.appspot.com/api/search?zipcode=' + zip_code.value);

    xhr.onload = function() {
    if(xhr.status === 200){
        // レスポンス取得成功
        let respData = JSON.parse(xhr.responseText);
        
        if(respData.status === 400 || respData.results == null){
            error_msg.innerText = "郵便番号から住所が検索できませんでした。";
            address_form_flag = 1;
            return;
        }

        address_form_flag = 0; 
        
        // JSONデータの処理
        error_msg.innerText = "";
        let respaddress = respData.results[0];
        let pref = respaddress.address1;
        let municipalities = respaddress.address2 + respaddress.address3;

        document.getElementById("pref").value = pref;
        document.getElementById("municipalities").value = municipalities;

        //バリテーションで使えるようにする
        window.resp_pref = pref;
        window.resp_municipalities = municipalities;
    }
    };

    xhr.send();
});
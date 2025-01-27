//住所情報の削除

function delete_address(address_id){

    //キャンセル
    if(!confirm("本当に削除しますか？")){
        return
    }
    
    //サーバーサイドに送る

    let xhr = new XMLHttpRequest();

    //サーバーサイドに送るデータ
    let req_data = `address_id=${address_id}`;

    xhr.open('POST', '/pictsuba/api/****');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(req_data);
}
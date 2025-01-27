//クレジットカードの削除

function delete_payment(card_id){

    //キャンセル
    if(!confirm("本当に削除しますか？")){
        return
    }
    
    //サーバーサイドに送る

    let xhr = new XMLHttpRequest();

    //サーバーサイドに送るデータ
    let req_data = `card_id=${card_id}`;

    xhr.open('POST', '/pictsuba/api/****');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(req_data);
}
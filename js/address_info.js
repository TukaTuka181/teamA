//住所の削除

function delete_address(address_id){

    //キャンセル
    if(!confirm("本当に削除しますか？")){
        return
    }
    
    //サーバーサイドに送る
    

    window.location.reload(true);
}
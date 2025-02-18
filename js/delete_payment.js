//お支払い情報画面の削除ボタンを押したときの処理

function delete_payment(card_id){

	//キャンセル
	if(!confirm("本当に削除しますか？")){
		return
	}
	
	let delete_button = document.getElementById(card_id);
	let parent = delete_button.closest(".item");
	parent.remove();

	// サーバーサイドに送る
	let xhr = new XMLHttpRequest();

	//サーバーサイドに送るデータ
	let req_data = `card_id=${card_id}`;

	xhr.open('POST', '/pictsuba/api/rm-card');
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	xhr.send(req_data);
}
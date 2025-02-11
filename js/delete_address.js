//住所情報画面の削除ボタンを押したときの処理

function delete_address(address_id){

	//キャンセル
	if(!confirm("本当に削除しますか？")){
		return
	}
	
	let delete_button = document.getElementById(address_id);
	let parent = delete_button.closest(".item");
	parent.remove();

	// サーバーサイドに送る
	let xhr = new XMLHttpRequest();

	//サーバーサイドに送るデータ
	let req_data = `address_id=${address_id}`;

	xhr.open('POST', '/pictsuba/api/rm-address');
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	xhr.send(req_data);
}
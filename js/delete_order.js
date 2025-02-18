//注文確認画面で”この注文を取り消す”ボタンを押したときの処理

function delete_order(order_id){

	if(!confirm("本当に削除しますか？")){
		return;
	}
	
	let xhr = new XMLHttpRequest();
	
	//サーバーサイドに送るデータ
	let req_data = `order_id=${order_id}`;

	xhr.open('POST', '/pictsuba/api/****');
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	xhr.send(req_data);
}
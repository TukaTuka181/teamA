//商品をカートに追加する
function add_cart(product_id){
	
	alert("カートに追加しました");

	let xhr = new XMLHttpRequest();
			
	//サーバーサイドに送るデータ
	let req_data = `product_id=${product_id}`;
	
	xhr.open('POST', '/pictsuba/api/****');
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	xhr.send(req_data);
}
//お気に入り商品の削除
function delete_favorite(product_id){

	let delete_button = document.getElementById(product_id);
	let parent = delete_button.closest(".product");
	parent.remove();

	let xhr = new XMLHttpRequest();
			
	//サーバーサイドに送るデータ
	let req_data = `product_id=${product_id}`;
	
	xhr.open('POST', '/pictsuba/api/****');
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	xhr.send(req_data);

	//お気に入り商品が一つもなかったら何もなことを表示する
	let products = document.getElementById("products");
	let is_null = document.getElementById("is_null");

	if(products.childElementCount <= 0){
		is_product_null(products, is_null);
	}
}
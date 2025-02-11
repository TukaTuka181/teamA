//お気に入り画面の”カートに入れる”ボタンの処理

function add_cart(product_id){

	show_alert("カートに追加しました");

	let delete_button = document.getElementById(product_id);
	let parent = delete_button.closest(".product");
	parent.remove();

	let req_data = `product_id=${product_id}`;
	
	// //お気に入りからの削除
	let del_favorite_xhr = new XMLHttpRequest();
	del_favorite_xhr.open('POST', '/pictsuba/api/rm-favorite');
	del_favorite_xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	del_favorite_xhr.send(req_data);

	// //カートに追加
	let add_cart_xhr = new XMLHttpRequest();
	add_cart_xhr.open('POST', '/pictsuba/api/cart');
	add_cart_xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	add_cart_xhr.send(req_data);

	// //お気に入り商品が一つもなかったら何もなことを表示する
	let products = document.getElementById("products");
	let is_null = document.getElementById("is_null");

	is_product_null(products, is_null, 0);
}
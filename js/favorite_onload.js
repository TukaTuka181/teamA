//画面読み込み時、お気に入りがなかった時の処理

window.onload = () => {
	let products = document.getElementById("products");
	let is_null = document.getElementById("is_null");

	is_product_null(products, is_null, 0);
}
//ページ読み込み時、カートに何もない時の処理

window.onload = () => {
	let products = document.getElementById("products");
	let is_null = document.getElementById("is_null");

	is_product_null(products, is_null, 1);
}
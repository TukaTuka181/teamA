//検索結果一覧画面で検索結果がなかった時の処理

window.onload = () => {
	let products = document.getElementById("products");
	let is_null = document.getElementById("is_null");

	is_product_null(products, is_null, 1);
}
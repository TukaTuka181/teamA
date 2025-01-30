function is_product_null(main_elem, null_elem){
	main_elem.classList.remove("view");
	null_elem.classList.add("view");
}

window.onload = () =>{
	//お気に入り商品が一つもなかったら何もなことを表示する
	let products = document.getElementById("products");
	let is_null = document.getElementById("is_null");

	if(products.childElementCount <= 0){
		is_product_null(products, is_null);
	}
}

window.is_product_null = is_product_null;
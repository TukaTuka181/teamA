function is_product_null(main_elem, null_elem){
	main_elem.classList.remove("view");
	null_elem.classList.add("view");
}

window.is_product_null = is_product_null;
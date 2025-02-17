function is_product_null(main_elem, null_elem, limit){
	if(main_elem.childElementCount <= limit){
		main_elem.classList.remove("view");
		null_elem.classList.add("view");
	}
}

window.is_product_null = is_product_null;
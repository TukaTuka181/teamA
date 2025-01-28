const favorite_icon = document.getElementById("favorite_icon");

//favorite_iconのスタイル適用
favorite_icon.addEventListener("click", () => {            
	favorite_icon.classList.toggle("click");
})

function click_icon(product_id){
	
	if(favorite_icon.getAttribute("class") !== "click"){
		
		//お気に入り商品の追加
		alert("お気に入りに追加しました");

		let xhr = new XMLHttpRequest();
		
		//サーバーサイドに送るデータ
		let req_data = `product_id=${product_id}`;
		
		xhr.open('POST', '/pictsuba/api/****');
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		
		xhr.send(req_data);
	} else {
		
		//お気に入り商品の削除
		
		let xhr = new XMLHttpRequest();
			
		//サーバーサイドに送るデータ
		let req_data = `product_id=${product_id}`;
		
		xhr.open('POST', '/pictsuba/api/****');
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		
		xhr.send(req_data);
	}
}

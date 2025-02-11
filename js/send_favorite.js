//商品詳細画面でお気に入りアイコンをクリックしたときの処理

const non_icon = document.getElementById("non_icon");
const favorite_icon = document.getElementById("favorite_icon");
const favorite_btn = document.getElementById("favorite_btn");

function click_icon(product_id){
	
	if(non_icon.getAttribute("class") === "view"){
		
		//お気に入り商品の追加
		show_alert("お気に入りに追加しました");

		favorite_icon.classList.add("view");
		non_icon.classList.remove("view");

		let xhr = new XMLHttpRequest();
		
		//サーバーサイドに送るデータ
		let req_data = `product_id=${product_id}`;
		
		xhr.open('POST', '/pictsuba/api/favorite');
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		
		xhr.send(req_data);
	} else {
		
		//お気に入り商品の削除
		show_alert("お気に入りから削除しました");

		favorite_icon.classList.remove("view");
		non_icon.classList.add("view");
		
		let xhr = new XMLHttpRequest();
			
		//サーバーサイドに送るデータ
		let req_data = `product_id=${product_id}`;
		
		xhr.open('POST', '/pictsuba/api/rm-favorite');
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		
		xhr.send(req_data);
	}
}

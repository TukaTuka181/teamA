//カート内商品の削除

function delete_cart(cart_id){
    
	let delete_button = document.getElementById(cart_id);
	let parent = delete_button.closest(".cart_box");
	parent.remove();


    //サーバーサイドに送る

    let xhr = new XMLHttpRequest();

    // //サーバーサイドに送るデータ
    let req_data = `cart_id=${cart_id}`;

    xhr.open('POST', '/pictsuba/api/****');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(req_data);
}
//購入確認のポイントを使うの欄に入力したポイントを
//ご請求金額のところに表示する

const details_amount_points = document.querySelectorAll(".details_amount_point");
let use_point = document.getElementById("use_point");
const is_use_point = document.getElementById("is_use_point");
const point = document.getElementById("point");

is_use_point.addEventListener("change", ()=>{
	if(is_use_point.checked){
		details_amount_points.forEach((details_amount_point)=>{
			details_amount_point.classList.add("view");
		});

		use_point.textContent = "0";
	} else {
		details_amount_points.forEach((details_amount_point)=>{
			details_amount_point.classList.remove("view");
		});

		point.value = 0;
	}
})

point.addEventListener("change", (event)=>{
	use_point.textContent = "-" + point.value;
});

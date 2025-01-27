//購入確認のポイントを使うの欄に入力したポイントを
//ご請求金額のところに表示する

const details_amount_points = document.querySelectorAll(".details_amount_point");
let use_point = document.getElementById("use_point");
const is_use_point = document.getElementById("is_use_point");
const point = document.getElementById("point");
const show_product_total = document.getElementById("show_product_total");
const product_total = document.getElementById("product_total");
const total_amount = document.getElementById("total_amount");
const show_postage =document.getElementById("show_postage");

const postage = 500;

window.onload = () => {
	show_product_total.innerText = product_total.value;
	show_postage.innerText = postage;

	calc_amount(Number(product_total.value), Number(postage), Number(point.value));
};

is_use_point.addEventListener("change", ()=>{
	if(is_use_point.checked){
		details_amount_points.forEach((details_amount_point)=>{
			details_amount_point.classList.add("view");
		});

		point.value = 0;
		use_point.textContent = "0";
	} else {
		details_amount_points.forEach((details_amount_point)=>{
			details_amount_point.classList.remove("view");
		});

		point.value = 0;
		use_point.textContent = "0";
	}
})

point.addEventListener("change", (event)=>{
	use_point.textContent = "-" + point.value;
	calc_amount(Number(product_total.value), Number(postage), Number(point.value));
});

function calc_amount(product_total, postage, point){
	total_amount.innerText = product_total + postage - point;
}
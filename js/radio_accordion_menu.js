// 確認画面のお支払い方法選択時、クレジットカード支払いを選んだら
// 登録されているクレジットカードを表示する
// 表示時はrequiredを付ける

const payment_radios = document.getElementsByName("payment_radio");
const credit_cart_radios = document.getElementsByName("credit_card");
const details = document.querySelector(".details");

payment_radios.forEach((payment_radio) => {
    payment_radio.addEventListener("click", () =>{
        if(payment_radio.id == "payment_radio1"){
            details.classList.add("view");
            add_required();
        } else {
            details.classList.remove("view");
            remove_required();
        }
    });
});

function add_required(){
    credit_cart_radios.forEach((credit_cart_radio) => {
        credit_cart_radio.setAttribute("required", "required");
    });
};
function remove_required() {
    credit_cart_radios.forEach((credit_cart_radio) => {
        credit_cart_radio.checked = false;
        credit_cart_radio.removeAttribute("required");
    });
};
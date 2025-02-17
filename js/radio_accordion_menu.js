// 確認画面のお支払い方法選択時、クレジットカード支払いを選んだら
// 登録されているクレジットカードを表示する
// 表示時はrequiredを付ける

let payment_radios = document.getElementsByName("pay_type");
let credit_cart_radios = document.getElementsByName("credit_card");
let details = document.querySelector(".details");
let main_box = document.getElementById("main_box");

payment_radios.forEach((payment_radio) => {
    payment_radio.addEventListener("click", () =>{
        if(payment_radio.id == "payment_radio1"){
            details.classList.add("view");
            add_required();
            main_box.addEventListener("submit", non_card)

        } else {
            details.classList.remove("view");
            remove_required();
            main_box.removeEventListener("submit", non_card)
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


function non_card(){
    let items = document.getElementById("items");
    let payment_add_button = document.getElementById("payment_add_button");
    let non_card_error = document.getElementById("non_card_error");

    //もしクレジットカードが一つも登録されていなかったら
    if(!items.childElementCount > 0){
        event.preventDefault();

        let btnRect = payment_add_button.getBoundingClientRect();
        let headerHeight = document.querySelector("header").offsetHeight;
        let scrollY = window.scrollY + btnRect.top - headerHeight - 10; // 10pxの余白を追加

        non_card_error.innerText = "クレジットカードを登録してください";

        window.scrollTo({ top: scrollY, behavior: "smooth" });

        // ボタンを強調（赤枠アニメーション）
        payment_add_button.style.border = "2px solid red";
        setTimeout(() => {
            payment_add_button.style.border = "";
            non_card_error.innerText = "";
        }, 2000);
    }
}
// クレジットカード登録ウィンドウを表示する

const payment_add_button = document.getElementById("payment_add_button");
const payment_close_icon = document.getElementById("payment_close_icon");
const payment_modal_window = document.getElementById("payment_modal_window");
const payment_modal_content = document.getElementById("payment_modal_content");
const payment_nonscroll = document.documentElement;

payment_add_button.addEventListener("click", (event) => {
    event.preventDefault()
    show_payment();
});

payment_close_icon.addEventListener("click", (event) => {
    event.stopPropagation();
    hidden_payment();
});

payment_modal_content.addEventListener("click", (event) => {
    event.stopPropagation();
});

payment_modal_window.addEventListener("click", () => {
    hidden_payment();
});

function show_payment(){
    payment_modal_window.classList.add("view");
    payment_nonscroll.classList.add("nonscroll");
};
export function hidden_payment(){
    payment_modal_window.classList.remove("view");
    payment_nonscroll.classList.remove("nonscroll");
};
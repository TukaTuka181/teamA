const address_add_button = document.getElementById("address_add_button");
const address_close_icon = document.getElementById("address_close_icon");
const address_modal_window = document.getElementById("address_modal_window");
const address_modal_content = document.getElementById("address_modal_content");
const address_nonscroll = document.documentElement;

address_add_button.addEventListener("click", (event) => {
    event.preventDefault()
    show_address();
});

address_close_icon.addEventListener("click", (event) => {
    event.stopPropagation();
    hidden_address();
});

address_modal_content.addEventListener("click", (event) => {
    event.stopPropagation();
});

address_modal_window.addEventListener("click", () => {
    hidden_address();
});

function show_address(){
    address_modal_window.classList.add("view");
    address_nonscroll.classList.add("nonscroll");
};
export function hidden_address(){
    address_modal_window.classList.remove("view");
    address_nonscroll.classList.remove("nonscroll");
};
const add_button = document.getElementById("address_add_button");
const close_icon = document.getElementById("address_close_icon");
const modal_window = document.getElementById("address_modal_window");
const modal_content = document.getElementById("address_modal_content");
const nonscroll = document.documentElement;

add_button.addEventListener("click", (event) => {
    event.preventDefault()
    modal_window_toggle();
});

close_icon.addEventListener("click", (event) => {
    event.stopPropagation();
    modal_window_toggle();
});

modal_content.addEventListener("click", (event) => {
    event.stopPropagation();
});

modal_window.addEventListener("click", () => {
    modal_window_toggle();
});

function modal_window_toggle(){
    modal_window.classList.toggle("view");
    nonscroll.classList.toggle("nonscroll");
};
const add_button = document.getElementById("add_button");
const close_icons = document.getElementById("close_icon");
const modal_window = document.getElementById("modal_window");
const modal_contents = document.getElementById("modal_content");
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
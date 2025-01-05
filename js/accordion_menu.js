const contentList = document.querySelectorAll(".details");

function toggleAccordion(num){
    contentList[num].classList.toggle("view");
}
//アコーディオンメニューの表示非表示の切り替え処理

const contentList = document.querySelectorAll(".details");

function toggleAccordion(num){
    contentList[num].classList.toggle("view");
}
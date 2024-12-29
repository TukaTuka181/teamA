const slide_show = document.getElementById('slide_show');
const slide_btn = document.getElementsByClassName('slide_btn');
const arrow_left = document.getElementById('arrow_left');
const arrow_right = document.getElementById('arrow_right');

let index=0;
let timerID;

window.onload = () =>{
  nextView();
  arrow_left.addEventListener("touchstart", () =>{
    to_slide(index - 1);
  });
  arrow_right.addEventListener("touchstart", () =>{
    to_slide(index + 1);
  });
};

function nextView() {
  to_slide(index);
  timerID = setTimeout(function(){
      index = (index + 1) % 3;
      nextView();
  }, 5000); // 再帰的に呼び出し
}

function to_slide(num){
  //はじめのスライドで左を押したときの処理
  if(num == -1){
    num = 2;
  }
  clearTimeout(timerID);

  index = num % 3;
  slide_show.style.transform = `translateX(-${index * 100}%)`;

  // 全てのボタンから "view" クラスを削除
  Array.from(slide_btn).forEach(btn => btn.classList.remove("view"));

  // 指定されたボタンに "view" クラスを追加
  slide_btn[index].classList.add("view");
};

// タップ時の誤動作を防ぐためのスワイプ時の処理を実行しない最小距離
const minimumDistance = 30
// スワイプ開始時の座標
let startX = 0
let startY = 0
// スワイプ終了時の座標
let endX = 0
let endY = 0

// 移動を開始した座標を取得
window.addEventListener('touchstart', (e) =>  {
  startX = e.touches[0].pageX
  startY = e.touches[0].pageY
})

//　移動した座標を取得
window.addEventListener('touchmove', (e) =>  {
  endX = e.changedTouches[0].pageX
  endY = e.changedTouches[0].pageY
})


// 移動距離から左右or上下の処理を実行
window.addEventListener('touchend', (e) =>  {
  // スワイプ終了時にx軸とy軸の移動量を取得
  // 左スワイプに対応するためMath.abs()で+に変換
  const diffX = startX - endX;
  const distanceX = Math.abs(endX - startX);
  const distanceY = Math.abs(endY - startY);

  // 左右のスワイプ距離の方が上下より長い && 小さなスワイプは検知しないようにする
  if (distanceX > distanceY && distanceX > minimumDistance) {
    if(diffX > 0){
      to_slide(index + 1);
    } else {
      to_slide(index - 1);
    }
  }
})

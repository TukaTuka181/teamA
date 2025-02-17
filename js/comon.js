document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.getElementById('hamburger');
	const mobileMenu = document.getElementById('mobile_menu');
	const bg_cover = document.getElementById('bg_cover');
	const nonscroll = document.documentElement;

	hamburger.addEventListener('click', function() {
		nonscroll.classList.toggle('nonscroll');
		mobileMenu.classList.toggle('active');
		hamburger.classList.toggle('open');
		bg_cover.classList.toggle('active');
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const images = document.querySelectorAll(".bg_img");
	const speed = 0.00025; // 動きの速さ（速くするために少し値を大きくしました）

	// 各画像の初期設定
	images.forEach((image) => {
		image.style.opacity = 1;
	
		// ターゲットの初期値を設定
		// 位置：より広い範囲でランダムに配置
		image.dataset.targetX = (Math.random() - 0.5) * 200; // -100vw 〜 +100vw
		image.dataset.targetY = (Math.random() - 0.5) * 200; // -100vh 〜 +100vh
		image.dataset.targetScale = Math.random() * 2.0 + 0.3; // サイズ：0.3〜2.5倍
		image.dataset.targetRotate = Math.random() * 720; // 回転：0〜720度（回転をもっと多様に）
		image.dataset.targetOpacity = Math.random() * 0.5 + 0.3; // 透明度：0.3〜0.8
	});
	
	// ランダムな新しいターゲットを設定する関数
	function setNewTarget(image) {
		// X, Y位置を均等に分布させるための補正
		const randomX = (Math.random() - 0.5) * 400; // -200vw 〜 +200vw に分布
		const randomY = (Math.random() - 0.5) * 400; // -200vh 〜 +200vh に分布
	
		// サイズ、回転、透明度を広範囲で設定
		image.dataset.targetX = randomX;
		image.dataset.targetY = randomY;
		image.dataset.targetScale = Math.random() * 2.0 + 0.3; // サイズ：0.3〜2.5倍
		image.dataset.targetRotate = Math.random() * 720; // 回転：0〜720度
	image.dataset.targetOpacity = Math.random() * 0.5 + 0.3; // 透明度：0.3〜0.8
	};
	
	  // アニメーションを実行する関数
	function animate() {
		images.forEach((image) => {
			// 画面サイズを取得
			const screenWidth = window.innerWidth;
			const screenHeight = window.innerHeight;
			
			// 現在の値を取得
			const currentTransform = image.style.transform.match(/translate\((.*?)vw, (.*?)vh\) scale\((.*?)\) rotate\((.*?)deg\)/);
			const currentX = parseFloat(currentTransform?.[1] || 0);
			const currentY = parseFloat(currentTransform?.[2] || 0);
			const currentScale = parseFloat(currentTransform?.[3] || 1);
			const currentRotate = parseFloat(currentTransform?.[4] || 0);
			const currentOpacity = parseFloat(image.style.opacity || 1);
			//ターゲット値を取得
			const targetX = parseFloat(image.dataset.targetX);
			const targetY = parseFloat(image.dataset.targetY);
			const targetScale = parseFloat(image.dataset.targetScale);
			const targetRotate = parseFloat(image.dataset.targetRotate);
			const targetOpacity = parseFloat(image.dataset.targetOpacity);
			
			// サイズに応じて制限を調整（画像が画面外に出ないように）
			const maxWidth = screenWidth - (targetScale * 85); // 画面の幅に合わせて調整
			const maxHeight = screenHeight - (targetScale * 85); // 画面の高さに合わせて調整
			
			// X, Y位置の制限（画面外に出ないように）
			const newX = Math.min(Math.max(currentX + (targetX - currentX) * speed, -maxWidth), maxWidth);
			const newY = Math.min(Math.max(currentY + (targetY - currentY) * speed, -maxHeight), maxHeight);
			
			// サイズ、回転、透明度のスムーズな更新
			const newScale = currentScale + (targetScale - currentScale) * speed;
			const newRotate = currentRotate + (targetRotate - currentRotate) * speed;
			const newOpacity = currentOpacity + (targetOpacity - currentOpacity) * speed;
	
			// 更新された値を適用
			image.style.transform = `translate(${newX}vw, ${newY}vh) scale(${newScale}) rotate(${newRotate}deg)`;
			image.style.opacity = newOpacity;
			
			// ターゲットに近づいたら新しいターゲットを設定
			const threshold = 0.75; // ターゲットへの近さの閾値（少し広げました）
			if (
				 Math.abs(targetX - currentX) < threshold &&
				 Math.abs(targetY - currentY) < threshold &&
				 Math.abs(targetScale - currentScale) < threshold &&
				 Math.abs(targetRotate - currentRotate) < threshold &&
				 Math.abs(targetOpacity - currentOpacity) < threshold
			) {
				setNewTarget(image);
			}
		});
		
		requestAnimationFrame(animate); // 次のフレームを呼び出す
	}

	// アニメーションの開始
	animate();
});
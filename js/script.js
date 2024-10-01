"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const icon = document.querySelector(".header__theme");
	const main = document.querySelector(".main")
	const mainImages = document.querySelectorAll(".main__item img");
	const menu = document.querySelector(".header__menu");
	const otherTools = document.querySelector(".header__shell")
	const info = document.querySelector(".footer__info");

	// Preload functions
	function preloadImages(...imageUrls) {
		imageUrls.forEach((url) => {
				const img = new Image();
				img.src = url;
		});
	}

	// Preloading images
	preloadImages('../img/moon.svg');
	// ----------------------------- // 

	// Toggle menu
	if (menu && otherTools) {
		menu.addEventListener("click", () => {
			document.body.classList.toggle("lock");
			menu.classList.toggle("active");
			otherTools.classList.toggle("active");
			main.classList.toggle("active");
		});
	}

	// Toggle theme
	if (icon && mainImages.length > 0 && menu && info) {
		const setBrightness = (brightnessValue) => {
			mainImages.forEach(image => {
				image.style.filter = brightnessValue;
			});
			menu.style.filter = brightnessValue;
		};

		icon.addEventListener("click", () => {
			document.body.classList.toggle("light");
			if (document.body.classList.contains("light")) {
				setBrightness("brightness(6.55%)");
				icon.src = "img/icons/moon.svg";
			} 
			else {
				setBrightness("none");
				icon.src = "img/icons/sun.svg";
			}
		});
	}
});


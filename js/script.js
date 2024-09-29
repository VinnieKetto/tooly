"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const icon = document.querySelector(".header__theme");
	const mainImages = document.querySelectorAll(".main__item img");
	const menu = document.querySelector(".header__menu");
	const info = document.querySelector(".footer__info");
	const infoBlock = document.querySelector(".footer__info-block");

	if (icon && mainImages.length > 0 && menu && info) {
		const setBrightness = (brightnessValue) => {
			mainImages.forEach(image => {
				image.style.filter = brightnessValue;
			});
			menu.style.filter = info.style.filter = brightnessValue;
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
		
		if (infoBlock) {
			info.addEventListener("click", () => {
				const isHidden = infoBlock.style.transform === "scale(0)";
				infoBlock.style.transform = isHidden ? "scale(1)" : "scale(0)";
			});
		}
	}
});


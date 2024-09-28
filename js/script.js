"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const icon = document.querySelector(".header__theme");
	const mainImages = document.querySelectorAll(".main__item img");
	const menu = document.querySelector(".header__menu");
	const info = document.querySelector(".footer__info");

	icon.onclick = () => {
		document.body.classList.toggle("light");
		if (document.body.classList.contains("light")) {
			mainImages.forEach(image => {
				image.style.filter = "brightness(6.55%)";
			});
			menu.style.filter = info.style.filter = "brightness(6.55%)";
			icon.src = "img/icons/moon.svg";
		} 
		else {
			mainImages.forEach(image => {
				image.style.filter = "none"; 
			});
			menu.style.filter = info.style.filter = "none";
			icon.src = "img/icons/sun.svg";
		}
	};
});


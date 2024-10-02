import { icon, menu, mainImages, info } from './script.js';

export function toggleTheme() {
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
}
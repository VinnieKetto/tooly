import { main, menu, otherTools } from './script.js';

export function toggleMenu() {
	if (menu && otherTools) {
		menu.addEventListener("click", () => {
			document.body.classList.toggle("lock");
			menu.classList.toggle("active");
			otherTools.classList.toggle("active");
			main.classList.toggle("active");
		});
	}
}
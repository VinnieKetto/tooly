import { mainItems, menu, otherTools } from './script.js';

export function toggleMenu() {
	// Check if there is a hash in the URL
	if (!window.location.hash) {
		// If there is no hash, switch on the handler for the menu
		if (menu && otherTools) {
			menu.addEventListener("click", handleMenuToggle);
		}
	} else {
		// If the hash exists, disable the function
		if (menu && otherTools) {
			menu.removeEventListener("click", handleMenuToggle);
			menu.addEventListener("click", goBack);
		}
	}
}

// Function for processing menu switching
function handleMenuToggle() {
	document.body.classList.toggle("lock");
	menu.classList.toggle("active");
	otherTools.classList.toggle("active");
	mainItems.classList.toggle("active-left");
}

function goBack() {
	history.back()
}

// Tracking hash changes in URLs
window.addEventListener("hashchange", toggleMenu);

// Initialisation on page load
document.addEventListener("DOMContentLoaded", toggleMenu);

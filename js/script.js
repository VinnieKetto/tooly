"use strict";

import { toggleTheme } from './theme.js';
import { toggleMenu } from './menu.js';
import { setupHistoryAPI } from './navigation.js';

export const mainTools = document.querySelectorAll(".main__item");
export const main = document.querySelector(".main")
export const menu = document.querySelector(".header__menu");
export const otherTools = document.querySelector(".header__shell")
export const icon = document.querySelector(".header__theme");
export const mainImages = document.querySelectorAll(".main__item img");
export const info = document.querySelector(".footer__info");

document.addEventListener("DOMContentLoaded", () => {
	// Toggle menu
	toggleMenu();

	// Toggle theme
	toggleTheme();

	// Histroy API
	setupHistoryAPI();
});
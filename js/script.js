"use strict";

import { toggleTheme } from './theme.js';
import { toggleMenu } from './menu.js';
import { setupHashNavigation } from './navigation.js';

export const mainItem = document.querySelectorAll(".main__item");
export const mainItems = document.querySelector(".main__items");
export const mainTools = document.querySelector(".main__tools");
export const menu = document.querySelector(".header__menu");
export const menuArrow = document.querySelector(".header__menu-arrow");
export const menuBack = document.querySelector(".header__menu-back");
export const otherTools = document.querySelector(".header__shell");
export const icon = document.querySelector(".header__theme");
export const mainImages = document.querySelectorAll(".main__item img");
export const info = document.querySelector(".footer__info");

document.addEventListener("DOMContentLoaded", () => {
	// Toggle menu
	toggleMenu();

	// Toggle theme
	toggleTheme();

	// Histroy API
	setupHashNavigation();
});
"use strict";

import { toggleTheme } from './theme.js';
import { toggleMenu } from './menu.js';
import { setupHashNavigation } from './navigation.js';
import { setupTodo } from './to-do.js';
// import { setupStopwatch } from './stopwatch.js';

// Header
export const menu = document.querySelector(".header__menu");
export const title = document.querySelector(".header__title");
export const menuArrow = document.querySelector(".header__menu-arrow");
export const menuBack = document.querySelector(".header__menu-back");
export const otherTools = document.querySelector(".header__shell");
export const icon = document.querySelector(".header__theme");
// Main
export const mainItem = document.querySelectorAll(".main__item");
export const mainItems = document.querySelector(".main__items");
export const mainTools = document.querySelector(".main__tools");
export const mainImages = document.querySelectorAll(".main__item img");
// Footer
export const info = document.querySelector(".footer__info");
// Tools
export const todoInput = document.querySelector(".to-do__input");
export const todoItems = document.querySelector(".to-do__items");
export const todoStorageKey = "items";
export const stopwatchDisplay = document.querySelector("stopwatch__display");


document.addEventListener("DOMContentLoaded", () => {
	// Toggle menu
	toggleMenu();

	// Toggle theme
	toggleTheme();

	// Histroy API
	setupHashNavigation();

	// -- Tools --
	setupTodo();
	// setupStopwatch();
});
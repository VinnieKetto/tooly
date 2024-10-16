import { todoInput, todoItems, todoStorageKey } from './script.js';

export function setupTodo() {
	let items = [];

	todoInput.addEventListener("keydown", (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			document.getElementById("myBtn").click();
		}
	}); 
	
	function renderItems() {
		todoItems.innerHTML = null;
	
		for (const [idx, item] of Object.entries(items)) {
			const container = document.createElement("div");
			container.style.marginBottom = "10px";
	
			const text = document.createElement("p");
			text.style.display = "inline";
			text.style.marginRight = "20px"; 
			text.textContent = item;
	
			const button = document.createElement("button");
			button.classList.add("to-do__button-x");
			button.textContent = "x";
			button.style.fontSize = "2.5rem";
			button.style.alignSelf = "center"
			button.onclick = () => removeItem(idx);
	
			container.appendChild(text);
			container.appendChild(button);
	
			todoItems.appendChild(container);
		}
	}
	
	function loadItems() {
		const oldItems = localStorage.getItem(todoStorageKey);
		if (oldItems) items = JSON.parse(oldItems);
		renderItems();
	}
	
	function saveItems() {
		const stringItems = JSON.stringify(items);
		localStorage.setItem(todoStorageKey, stringItems);
	}
	
	function addItem() {
		const value = todoInput.value;
		if (!value && value.trim() == "") {
			placeholder = document.getElementById('itemInput').placeholder;
			document.getElementById('itemInput').placeholder = "You cannot add an empty item!";
			setTimeout(() => {document.getElementById('itemInput').placeholder = placeholder;}, 1000);
			return 
		}
	
		items.push(value);
		renderItems();
		todoInput.value = "";
		saveItems();
	}
	
	function removeItem(idx) {
		items.splice(idx, 1);
		renderItems();
		saveItems();
	}
	
	window.addItem = addItem;
	document.addEventListener("DOMContentLoaded", loadItems)
}


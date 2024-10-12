import { mainItems, mainItem, mainTools, menuArrow, menuBack } from './script.js';

export function setupHashNavigation() {
  // Processing a click on the tool icon
  mainItem.forEach(item => {
      item.addEventListener('click', () => {
          const tool = item.dataset.tool;
          navigateToTool(tool);
      });
  });

  // Checking the hash on page load
  window.addEventListener('hashchange', handleHashChange);
  handleHashChange(); // Processing the initial load
  // Navigating to a specific instrument via hash
  function navigateToTool(tool) {
      window.location.hash = `#${tool}`;
  }

    // Handling the hash change
  function handleHashChange() {
      const tool = window.location.hash.replace('#', '');
      if (tool) {
          showTool(tool);
      } else {
          resetMainItems(); // Return to initial state
      }
  }

  // Tool demonstration
  function showTool(tool) {
      resetMainItems(); // Removing active classes
      const toolElement = document.getElementById(tool);
      if (toolElement) {
					menuArrow.classList.add('active-right');
					menuBack.classList.add('active-right');
          mainItems.classList.add('active-right');
					mainTools.classList.add('active');
          toolElement.classList.add('active'); // Showing the right tool
      }
  }

  // Reset to original state
  function resetMainItems() {
			menuArrow.classList.remove('active-right');
			menuBack.classList.remove('active-right');
      mainItems.classList.remove('active-right');
      mainTools.querySelectorAll('.main__tool').forEach(tool => {
          tool.classList.remove('active');
      });
  }
}

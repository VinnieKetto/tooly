import { menu, mainItems, mainItem, mainTools } from './script.js';

export function setupHistoryAPI() {
  mainItem.forEach(tool => {
    tool.addEventListener("click", (e) => {
      const toolName = tool.getAttribute("data-tool");
      loadTool(toolName);
      history.pushState({ tool: toolName }, '', `/${toolName}`);
    });
  });

  function loadTool(toolName) {
    // Hide all main tools
		mainItems.classList.toggle("active-right")
    // Show the selected tool block
    const toolBlock = document.getElementById(toolName);
    if (toolBlock) {
			toolBlock.style.opacity = "1";
			mainTools.classList.toggle("active");
    }
  }

  // Handle the event when the ‘back’ button is pressed in the browser
  window.onpopstate = (event) => {
    if (event.state && event.state.tool) {
      loadTool(event.state.tool);
    }
  };

  // If the user accessed via a direct link
  const currentTool = window.location.pathname.slice(1); // Take the name of the tool from the URL
  if (currentTool) {
    loadTool(currentTool);
  }
}

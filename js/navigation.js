import { mainTools } from './script.js';

export function setupHistoryAPI() {
	/* 
  mainTools.forEach(tool => {
    tool.addEventListener("click", (e) => {
      const toolName = tool.getAttribute("data-tool");
      loadTool(toolName);
      history.pushState({ tool: toolName }, '', `/${toolName}`);
    });
  });

  function loadTool(toolName) {
    // Hide all main tools
    document.querySelectorAll(".tool-block").forEach(block => block.style.display = "none");
    // Show the selected tool block
    const toolBlock = document.getElementById(toolName);
    if (toolBlock) {
      toolBlock.style.display = "block";
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
	*/
}

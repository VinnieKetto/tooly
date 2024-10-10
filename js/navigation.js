import { mainItems, mainItem, mainTools } from './script.js';

export function setupHashNavigation() {
    // Обрабатываем клик по иконке инструмента
    mainItem.forEach(item => {
        item.addEventListener('click', () => {
            const tool = item.dataset.tool;
            navigateToTool(tool);
        });
    });

    // Проверяем хэш при загрузке страницы
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Обрабатываем начальную загрузку

    // Навигация к определенному инструменту через хэш
    function navigateToTool(tool) {
        window.location.hash = `#${tool}`;
    }

    // Обрабатываем изменение хэша
    function handleHashChange() {
        const tool = window.location.hash.replace('#', '');
        if (tool) {
            showTool(tool);
        } else {
            resetMainItems(); // Возврат к начальному состоянию
        }
    }

    // Показ инструмента
    function showTool(tool) {
        resetMainItems(); // Убираем активные классы
        const toolElement = document.getElementById(tool);
        if (toolElement) {
            mainItems.classList.add('active-right');
						mainTools.classList.add('active');
            toolElement.classList.add('active'); // Показываем нужный инструмент
        }
    }

    // Сброс к первоначальному состоянию
    function resetMainItems() {
        mainItems.classList.remove('active-right');
        mainTools.querySelectorAll('.main__tool').forEach(tool => {
            tool.classList.remove('active');
        });
    }
}

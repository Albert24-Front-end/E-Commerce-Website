document.querySelectorAll('.menu-btn').forEach(button => {
    button.addEventListener('click', () => {
        const menuItem = button.closest('.menu-item');
        const submenu = menuItem.querySelector('.submenu');

        if (submenu) {

            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';

            // Переключаем класс для анимации стрелки
            button.classList.toggle('open');
        } else {
            console.error('Подменю не найдено');
        }
    });
});
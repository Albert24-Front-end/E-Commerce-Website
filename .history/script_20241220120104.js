document.querySelectorAll('.menu-btn').forEach(button => {
    button.addEventListener('click', () => {
        const menuItem = document.querySelector('.menu-item');
        const submenu = menuItem.querySelector('.submenu');

        // Переключаем видимость подменю
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});

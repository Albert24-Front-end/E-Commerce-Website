document.querySelectorAll('.menu-btn').forEach(button => {
    button.addEventListener('click', () => {
        const submenu = button.nextElementSibling;

        // Переключаем видимость подменю
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});
document.querySelectorAll('.menu-btn').forEach(button => {
    button.addEventListener('click', () => {
        const 
        const submenu = button.parentNode.nextElementSibling;

        // Переключаем видимость подменю
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});

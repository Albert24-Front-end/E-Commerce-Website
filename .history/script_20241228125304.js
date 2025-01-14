document.querySelectorAll('.menu-btn').forEach(button => {
    button.addEventListener('click', () => {
        const menuItem = button.closest('.menu-item');
        const submenu = menuItem.querySelector('.submenu');

        if (submenu) {
            // Переключаем видимость подменю
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';

            // Переключаем класс для анимации стрелки
            button.classList.toggle('open');
        } else {
            console.error('Подменю не найдено');
        }
    });
});

document.querySelector('.header__lower-user-icon').addEventListener('click', ()=> {
    const new
})

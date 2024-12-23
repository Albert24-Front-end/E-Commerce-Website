document.querySelectorAll('.menu-btn').forEach(button => {
    button.addEventListener('click', () => {
        const menuItem = button.closest('.menu-item');
        const submenu = menuItem.querySelector('.submenu');

        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        button.classList.toggle('open');
    });
});

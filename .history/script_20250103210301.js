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


const userIcon = document.querySelector('.header__lower-user-icon');
const dropdown = document.querySelector('.header__lower-dropdown');
let isRed = false;

userIcon.addEventListener('click', ()=> {
    // const newUserIcon = document.querySelector('.header__lower-user-icon').setAttribute('src', './images/icons/user_red.svg');
    if (isRed) {
        userIcon.src = './images/icons/user.svg';
    }
    else {
        userIcon.src = './images/icons/user_red.svg';
    }
    isRed = !isRed;

    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (event)=> {
    if(event.target.closest('.header__lower-user')) {
         dropdown.style.display === 'none'
    }
})



document.addEventListener("DOMContentLoaded", () => {

    //Вызов модального окна
    document.querySelector('.header__button').onclick = function () {
        document.querySelector('.modal').classList.add('modal--active');
    };

    document.querySelector('.modal__close').onclick = function () {
        document.querySelector('.modal').classList.remove('modal--active');
    };

    document.querySelector('.modal__button').onclick = function () {
        document.querySelector('.modal').classList.remove('modal--active');
    };

    const modal = document.querySelector('.modal__content');
    document.addEventListener('mousedown', (e) => {
        if (!modal.contains(e.target)) {
            document.querySelector('.modal').classList.remove('modal--active');
        }
    });

    //Вызов каталога

    // document.querySelector('.header__catalog').onclick = function () {
    //     document.querySelector('.menu').classList.toggle('menu--active');
    //     document.querySelector('.header__line').classList.toggle('header__line--active');
    // };

    // const catalog = document.querySelector('.menu__wrapper');
    // document.addEventListener('mousedown', (e) => {
    //     if (!catalog.contains(e.target)) {
    //         document.querySelector('.menu').classList.remove('menu--active');
    //     }
    // });

    const btnMenu = document.querySelector('.header__catalog');
    const menu = document.querySelector('.menu');
    const toggleMenu = function () {
        document.querySelector('.header__line').classList.toggle('header__line--active');
        menu.classList.toggle('menu--active');
    }

    btnMenu.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', function (e) {
        const target = e.target;
        const its_menu = target == menu || menu.contains(target);
        const its_btnMenu = target == btnMenu;
        const menu_is_active = menu.classList.contains('menu--active');

        if (!its_menu && !its_btnMenu && menu_is_active) {
            toggleMenu();
        }
    });
});
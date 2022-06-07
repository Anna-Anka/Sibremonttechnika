document.addEventListener("DOMContentLoaded", () => {

    //Вызов модального окна
    document.querySelector('.header__button').onclick = function () {
        document.querySelector('.modal').classList.add('modal--active');
    };

    document.querySelector('.offer__button').onclick = function () {
        document.querySelector('.modal').classList.add('modal--active');
    };

    document.querySelector('.footer__button').onclick = function () {
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

    //Поиск 
    const btnSearch = document.querySelector('.header__mobile--search');
    const search_form = document.querySelector('.search-form');
    const toggleform = function () {
        search_form.classList.toggle('search-form--active');
    }

    btnSearch.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleform();
    });

    document.addEventListener('click', function (e) {
        const target = e.target;
        const its_search_form = target == search_form || search_form.contains(target);
        const its_btnSearch = target == btnSearch;
        const menu_is_active = search_form.classList.contains('search-form--active');

        if (!its_search_form && !its_btnSearch && menu_is_active) {
            toggleform();
        }
    });

    //Звонок 
    const btnCall = document.querySelector('.header__mobile--call');
    const call = document.querySelector('.header__call');
    const toggleCall = function () {
        call.classList.toggle('header__call--active');
    }

    btnCall.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleCall();
    });

    document.addEventListener('click', function (e) {
        const target = e.target;
        const its_call = target == call || call.contains(target);
        const its_btnCall = target == btnCall;
        const menu_is_active = call.classList.contains('header__call--active');

        if (!its_call && !its_btnCall && menu_is_active) {
            toggleCall();
        }
    });

    //Слайдер в отзывах
    const swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {    
            993: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20,
            },

            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
            },

            320: {
                slidesPerView: 1,
                spaceBetween: 1,
                spaceBetween: 20,
            },
        },
    });

    //Ответы на вопросы
    const question = document.querySelectorAll('.questions__top');
    question.forEach(item => {
        item.addEventListener('click', () => {
            item.parentNode.classList.toggle('questions__item--active');
        });

        item.addEventListener('mousedown', (e) => {
            if (!item.contains(e.target)) {
                alert ('dada');
                item.parentNode.classList.remove('questions__item--active');
            }
        });
    });

    // const questions = document.querySelectorAll('.questions__item');
    // document.addEventListener('mousedown', (e) => {
    //     if (!questions.contains(e.target)) {
    //         document.querySelectorAll('.questions__item').classList.remove('questions__item--active');
    //     }
    // });

});


// const mediaQuery = window.matchMedia('(max-width: 992px)')

// function handleTabletChange(e) {
//     if (e.matches) {
//         document.querySelector('.search-form__button').onclick = function () {
//             document.querySelector('.search-form__item').classList.toggle('search-form__item--active');
//         };
//     };
// };

// mediaQuery.addListener(handleTabletChange)
// handleTabletChange(mediaQuery)
const start = () => {
    const myInputs = document.querySelectorAll('.sample-input');
    myInputs.forEach(input => addEventListener('input', event => {
        console.log(event.target.value);
    }));

    const menu = document.querySelector('.menu');

    const button = document.querySelector('#button');

    button.addEventListener('click', () => {
        menu.classList.toggle('menu-show');
    });

    document.addEventListener('click', event => {
        const isClickInside = menu.contains(event.target);
        if (!isClickInside && menu.classList.contains('menu-show') && event.target !== button) {
            menu.classList.toggle('menu-show');
        }
    });
}

document.addEventListener('DOMContentLoaded', start);
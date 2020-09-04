const start = () => {
    const myInputs = document.querySelectorAll('.sample-input');
    myInputs.forEach(input => addEventListener('input', event => {
        console.log(event.target.value);
    }));

    const menu = document.querySelector('.menu');
    const button = document.querySelector('#button');
    const menuText = document.querySelector('.menu-text');
    const closeButton = document.querySelector('#close-button');

    button.addEventListener('click', () => {
        menu.classList.toggle('menu-show');
    });

    document.addEventListener('click', event => {
        const isClickOnMenu = event.target === menu;
        const condition = !isClickOnMenu && 
            menu.classList.contains('menu-show') &&
            event.target !== button ||
            event.target === closeButton;
        if (condition) {
            menuText.textContent = 'Пока...';
            closeButton.disabled = true;
            setTimeout(() => {
                menu.classList.toggle('menu-show');
                menuText.textContent = 'Привет!';
                closeButton.disabled = false;
            }, 1000);
        }
    });
}

document.addEventListener('DOMContentLoaded', start);
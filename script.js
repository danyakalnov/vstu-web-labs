const start = () => {
    const myInputs = document.querySelectorAll('.sample-input');

    const testInput = (targetInput) => {
        let testResult = regexp.test(targetInput.value);
        const resultIndicator = targetInput.nextElementSibling;
        if (testResult) {
            resultIndicator.textContent = 'There is a match!';
            resultIndicator.classList.add('answer');
            resultIndicator.classList.remove('no-match');
        }
        else {
            resultIndicator.textContent = 'No match :('
            resultIndicator.classList.add('no-match');
            resultIndicator.classList.remove('answer');
        }
    }

    // Регулярное выражение из textarea

    const regexpInput = document.querySelector('#regexp-input');
    let regexp = new RegExp(regexpInput.textContent);
    regexpInput.addEventListener('input', event => {
        let newRegexp = new RegExp(event.target.value);
        regexp = newRegexp;
        regexpInput.textContent = event.target.value;
        myInputs.forEach(input => {
            console.log();
            testInput(input);
        });
    });
    
    myInputs.forEach(input => input.addEventListener('input', event => {
        testInput(event.target);
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
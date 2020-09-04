const start = () => {
    const myInput = document.querySelector('.sample-input');
    myInput.addEventListener('input', event => {
        console.log(event.target.value);
    });
}

document.addEventListener('DOMContentLoaded', start);
const password = document.querySelector('#inputpass');
const icon = document.querySelector('#icon');

icon.addEventListener('click', showHide);

function showHide() {
    if(password.type === 'password'){
        password.setAttribute('type', 'text')
        icon.classList.add('hide')
    }
    else{
        password.setAttribute('type', 'password')
        icon.classList.remove('hide')
    }
}
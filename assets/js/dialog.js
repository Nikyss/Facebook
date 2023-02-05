const openButton = document.querySelector('.profile-one');
const cancelButton = document.querySelector('.button-exit');

openButton.addEventListener('click', abriu);
cancelButton.addEventListener('click', fechou);

const backy = document.querySelector('.background-dialog');
const modal = document.querySelector('dialog');

function abriu() {
    modal.showModal()
    document.documentElement.style.overflow = 'hidden';

    backy.style.visibility = 'visible'
}

function fechou() {
    modal.close()
    document.documentElement.style.overflow = 'auto'

    backy.style.visibility = 'hidden'
}
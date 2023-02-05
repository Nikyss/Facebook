const mouse = document.querySelector('.profile-one');

mouse.addEventListener('mouseenter', entrou);
mouse.addEventListener('mouseout', saiu);


const iconBack = document.querySelector('.back-icon');
const iconDialog = document.querySelector('#icon-dialog')

function entrou() {
    iconBack.style.backgroundColor = '#FFFFFF'
    iconBack.style.height = '20px'
    iconBack.style.width = '20px'
    
    iconDialog.classList.add('iconshow')
}

function saiu() {
    iconBack.style.backgroundColor = '#00000046'
    iconBack.style.height = '16px'
    iconBack.style.width = '16px'

    iconDialog.classList.remove('iconshow')
}
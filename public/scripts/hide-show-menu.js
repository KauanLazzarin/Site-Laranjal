const hideButton = document.querySelector('#hide-menu');
const showButton = document.querySelector('#show-menu');
const hiddedMenu = document.querySelector('#switched-menu');
const style = document.createElement('style');

showButton.onclick = () => {
    hiddedMenu.style.display = 'block';
};

hideButton.onclick = () => {
    hiddedMenu.style.display = 'none';
};


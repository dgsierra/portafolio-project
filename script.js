const hamburger = document.getElementById('menuimg');
const menu = document.getElementById('fullmenu');
const names = document.getElementById('logonav');
const closing = document.getElementById('closingbutton');
const envelope = document.getElementById('envelope');
const body = window.innerWidth;
const item1 = document.getElementById('menuitemport');
const item2 = document.getElementById('menuitemabout');
const item3 = document.getElementById('menuitemcontact');

const listener = () => {
  item1.classList.add('active');
  item2.classList.add('active');
  item3.classList.add('active');
  hamburger.classList.add('nodisplay');
  envelope.classList.add('nodisplay');
  menu.classList.add('response');
  menu.style.display = 'block';
  closing.classList.add('active');
  names.classList.add('nodisplay');
};

hamburger.addEventListener('click', listener);

if (body < 768) {
  document.querySelectorAll('.menuitem').forEach((n) => n.addEventListener('click', () => {
    menu.classList.remove('huevos');
    closing.classList.remove('active');
    hamburger.classList.remove('nodisplay');
    names.classList.remove('nodisplay');
    envelope.classList.remove('nodisplay');
    menu.style.display = 'none';
  }));
}

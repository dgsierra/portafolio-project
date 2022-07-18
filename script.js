let hamburger = document.getElementById('menuimg');
let menu = document.getElementById('fullmenu');
let name = document.getElementById('logonav')

hamburger.addEventListener('click', function () {
  hamburger.style.display = 'none';
  menu.style.display = 'block';
  menu.style.width = '100vw';
  menu.style.height = '100vh';
  logonav.style.display = 'none';
});

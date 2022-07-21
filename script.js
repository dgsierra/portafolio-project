const hamburger = document.getElementById('menuimg');
const menu = document.getElementById('fullmenu');
const names = document.getElementById('logonav');
const closingbutton = document.getElementById('closingbutton');
const envelope = document.getElementById('envelope');
const body = window.innerWidth;
const item1 = document.getElementById('menuitemport');
const item2 = document.getElementById('menuitemabout');
const item3 = document.getElementById('menuitemcontact');
const popcontainer = document.createElement('div');
const data = [
  {
    name: 'Website Protfolio',
    description: "Loret ipsum of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/popup.png',
    technology: ['HTML', 'CSS', 'Ruby'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn1',
    class: 'cardsbase',
  },

  {
    name: 'Profesional Art Printing Data',
    description: "Batman is the best superhero of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/popup.png',
    technology: ['React', 'CSS', 'Javascript'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn2',
    class: 'cardsbase',
  },

  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/popup.png',
    technology: ['HTML', 'CSS', 'Bootstrap'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn3',
    class: 'cardsbase',
  },

  {
    name: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/popup.png',
    technology: ['HTML', 'CSS', 'Bootstrap'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn4',
    class: 'cardsbase',
  },

  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/popup.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn5',
    class: 'cardsbase',
  },

  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/popup.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn6',
    class: 'cardsbase',
  },
];

const listener = () => {
  item1.classList.add('active');
  item2.classList.add('active');
  item3.classList.add('active');
  hamburger.classList.add('nodisplay');
  envelope.classList.add('nodisplay');
  menu.classList.add('response');
  menu.style.display = 'block';
  closingbutton.classList.add('active');
  names.classList.add('nodisplay');
};
popcontainer.classList.add('popupcontainer');
hamburger.addEventListener('click', listener);

if (body < 768) {
  document.querySelectorAll('.menuitem').forEach((n) => n.addEventListener('click', () => {
    menu.classList.remove('response');
    closingbutton.classList.remove('active');
    hamburger.classList.remove('nodisplay');
    names.classList.remove('nodisplay');
    envelope.classList.remove('nodisplay');
    menu.style.display = 'none';
  }));
}

const closing = () => {
  menu.classList.remove('response');
  closingbutton.classList.remove('active');
  hamburger.classList.remove('nodisplay');
  names.classList.remove('nodisplay');
  envelope.classList.remove('nodisplay');
  menu.style.display = 'none';
};

closingbutton.addEventListener('click', closing);

document.getElementById('cardsid').innerHTML = data.map((array, index) => `
<div class="card" id="cardsid_${index}">
<h2 class="projecttitle">${array.name}</h2>
<p class="projecttext">${array.description}</p>
<ul class="buttonsproject">
    <li class="button"><a class="smoke" href="#">${array.technology[0]}</a></li>
    <li class="button"><a class="smoke" href="#">${array.technology[1]}</a></li>
    <li class="button"><a class="smoke" href="#">${array.technology[2]}</a></li>
</ul>
<div class="cardbottom">
    <input id="button_${index}" class="orangebottom hovereffect" type="button" value="See Project" onclick="portfoliopopup(${index})">
</div>
</div>
`).join('');

const portfoliopopup = (value) => {
  popcontainer.innerHTML = `
  <div id="blurry"></div>
  <div class="popupcontainer">
      <div class="topcontainer">
          <h2 id="popid">${data[value].name}</h2>
          <i id="popclosingbutton" class="fa-solid fa-xmark"></i>
          <ul class="buttonsproject" id="popbuttonslist">
              <li class="popbuttons"><a href="#">${data[value].technology[0]}</a></li>
              <li class="popbuttons"><a href="#">${data[value].technology[1]}</a></li>
              <li class="popbuttons"><a href="#">${data[value].technology[2]}</a></li>
          </ul>
      </div>
      <div id="popcontainerid">
          <img src="./img/pop.img.png" id="popimage" alt="popup image ten">
          <div id="poptextbuttons">
              <p id="poptext">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
              </p>
              <div id="popbuttonsbottom">
                  <button class="poporange">See Live <i class="fa-solid fa-share-from-square"></i></button>
                  <button class="poporange">See Source <i class="fa-brands fa-github"></i></button>
              </div>
          </div>

      </div>
      
  </div>`;
  document.body.appendChild(popcontainer);
  const closingpop = document.querySelector('#popclosingbutton');
  closingpop.addEventListener('click', () => document.body.removeChild(document.querySelector('.popupcontainer')));
};

const buttonportfolio = document.querySelectorAll('.orangebottom');
buttonportfolio.forEach((button) => button.addEventListener('click', portfoliopopup));
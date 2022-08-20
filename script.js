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
    name: 'To Do List',
    description: "A small web app for keep track of your tasks. It's a simple web app that allows you to create tasks, mark them as done and delete them.",
    image: './img/to_do_screenshot.pop.png',
    technology: ['HTML', 'CSS', 'JavaScript'],
    livelink: 'https://dgonzalesi.github.io/To-Do-List-Webpack/',
    sourcelink: 'https://github.com/dgonzalesi/To-Do-List-Webpack',
    id: 'btn1',
    class: 'cardsbase',
  },

  {
    name: 'Awesome Books',
    description: 'a web app that allows you to add books and save them to your personal library.',
    image: './img/Awesome.Books.pop.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    livelink: 'https://dgonzalesi.github.io/Awesome-Books/',
    sourcelink: 'https://github.com/dgonzalesi/Awesome-Books',
    id: 'btn2',
    class: 'cardsbase',
  },

  {
    name: 'Web Page Mockup',
    description: 'This is a small web page that i build from 0 from screenshoots and mockups of a web page.',
    image: './img/capstone_project.pop.png',
    technology: ['HTML', 'CSS', 'JavaScript'],
    livelink: 'https://dgonzalesi.github.io/capstone-webpage/',
    sourcelink: 'https://github.com/dgonzalesi/capstone-webpage',
    id: 'btn3',
    class: 'cardsbase',
  },

  {
    name: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './img/pop.img.png',
    technology: ['HTML', 'CSS', 'Bootstrap'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn4',
    class: 'cardsbase',
  },

  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './img/pop.img.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn5',
    class: 'cardsbase',
  },

  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './img/pop.img.png',
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
popcontainer.classList.add('popupcontainermain');
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
          <img src="${data[value].image}" id="popimage" alt="popup image ten">
          <div id="poptextbuttons">
              <p id="poptext">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
              </p>
              <div id="popbuttonsbottom">
                  <a href="${data[value].livelink}" target="_blank" class="poporange">See Live <i class="fa-solid fa-share-from-square"></i></a>
                  <a href="${data[value].sourcelink}" target="_blank" class="poporange">See Source <i class="fa-brands fa-github"></i></a>
              </div>
          </div>

      </div>
      
  </div>`;
  document.body.appendChild(popcontainer);
  const closingpop = document.querySelector('#popclosingbutton');
  closingpop.addEventListener('click', () => document.body.removeChild(document.querySelector('.popupcontainermain')));
};

const buttonportfolio = document.querySelectorAll('.orangebottom');
buttonportfolio.forEach((button) => button.addEventListener('click', portfoliopopup));

// *FORM VALIDATION:

const formemail = document.getElementById('inputemail');
const form = document.getElementById('contactform');
const labelerror = document.getElementById('errormessage');
const labelcheck = document.getElementById('checkmessage');

form.addEventListener('submit', (e) => {
  if (formemail.value === formemail.value.toLowerCase()) {
    labelcheck.classList.remove('nodisplay');
    labelerror.classList.add('nodisplay');
  } else {
    labelerror.classList.remove('nodisplay');
    labelcheck.classList.add('nodisplay');
  }
  e.preventDefault();
});

// *DATA STORAGE:

const dataform = () => localStorage.setItem('userdata', [form.full_name.value, form.email.value, form.message.value]);

document.addEventListener('keydown', dataform);

const userstorage = localStorage.getItem('userdata').split(',');
const loadname = document.getElementById('inputname');
const loademail = document.getElementById('inputemail');
const loadtext = document.getElementById('textarea');
document.addEventListener('DOMContentLoaded', () => {
  [(loadname.value), (loademail.value), (loadtext.value)] = userstorage;
});
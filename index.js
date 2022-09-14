const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const lists = document.querySelectorAll('.list');

ham.addEventListener('click', () => {
  ham.classList.toggle('active');
  menu.classList.toggle('in-active');
  logo.classList.toggle('in-active');
});

logo.addEventListener('click', () => {
  ham.classList.toggle('active');
  menu.classList.toggle('in-active');
  logo.classList.toggle('in-active');
});

const spreadList = [...lists];
spreadList.forEach((list) => {
  list.addEventListener('click', () => {
    ham.classList.toggle('active');
    menu.classList.toggle('in-active');
    logo.classList.toggle('in-active');
  });
});

// Creating Elements
const speakers = [
  {
    id: 'speaker0',
    name: 'Tom Truitt',
    line: '',
    brief: 'Managing Director Smartest People in the Room',
    image: './images/Tom-Truitt.png',
    description:
      'He is the Managing Director of TurnKeyZRG’s Music Practice and focuses on senior level executive placements in music.',
  },
  {
    id: 'speaker1',
    name: 'Rachel Karry',
    line: '',
    brief: 'Co-Founder, World Artists United & Music Enteprenuer',
    image: './images/RACHEL-KARRY.jpg',
    description:
      'Karry leads a team of Innovative Creators in Music, Film, Sports, Health and Wellness.',
  },
  {
    id: 'speaker2',
    name: 'Natalia Portar',
    line: '',
    brief: 'Founder melody Band & Best Vocal Tearcher',
    image: './images/Natalie portar.jpg',
    description:
      'Natalia is one of the best Vocal singers in the world alternative rock scene and also a voice actress.',
  },
  {
    id: 'speaker3',
    name: 'Ezekiel Thankgod',
    line: '',
    brief: 'Founder & Owner Of Eezee Conceptz',
    image: './images/EeZee-Tee.jpg',
    description:
      'He is a gospel singer-songwriter, music producer,multi-instrumentalist,and lieutenant commander in the Nigerian navy.',
  },
  {
    id: 'speaker4',
    name: 'Sam Clarke',
    line: '',
    brief: 'Co-Founder, music Director & Music Enteprenuer',
    image: './images/team-4.jpg',
    description:
      'Sam is a keyboard genius, as we call her in our band. She can play even the most complex piano chords easily.',
  },
  {
    id: 'speaker5',
    name: 'Calvin Harris',
    line: '',
    brief: 'Co-Founder, World Artists United & Music Enteprenuer',
    image: './images/a520af377c8eeca6a1f65965c9dd3277.png',
    description:
      'He is a Scottish DJ, record producer, singer, and songwriter and is the richest DJ in the world.',
  },
];

const cover = document.querySelector('.speakers');

speakers.forEach((speaker) => {
  const div = document.createElement('div');
  div.innerHTML += `
  <img src="${speaker.image}" class="${speaker.className}" alt="">
                      <div class="first-speaker-div ${speaker.className}">
                          <h3 class="first-speaker-h3">${speaker.name}</h3>
                          <p class="first-speaker-p1">${speaker.brief}</p>
                          <p class="first-speaker-p2">${speaker.description}</p>
                      </div>
  `;
  div.classList.add('first-speaker');
  cover.append(div);
});

// see more
const speakDiv = document.querySelectorAll('.hide');
const btn = document.querySelector('.button');
const spreadLis = [...speakDiv];

btn.addEventListener('click', () => {
  btn.classList.toggle('select');
  spreadLis.forEach((list) => {
    list.classList.toggle('tap');
  });
});

const button = document.querySelector('.second-section-end-mobile');
const form = document.querySelector('.form');
const toggle = document.querySelector('.toggle');
const thirdSec = document.querySelector('.third-section');
const cards = document.querySelector('.cards');

button.addEventListener('click', () => {
  form.style.display = 'block';
  document.body.style.overflow = 'hidden';
  thirdSec.style.filter = 'blur(2px)';
  cards.style.filter = 'blur(4px)';
  button.style.filter = 'blur(4px)';
});

toggle.addEventListener('click', () => {
  form.style.display = 'none';
  document.body.style.overflow = 'initial';
  thirdSec.style.filter = 'none';
  cards.style.filter = 'none';
  button.style.filter = 'none';
});

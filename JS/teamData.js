const data = [
  {
    id: 1,
    name: 'Albert Noah',
    images: {
      img: './images/member1.png',
      alt: 'team_1',
    },
    about: 'President Gen. of Cloudflare Company.',
    work: 'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    id: 2,
    name: 'Albert Noah',
    images: {
      img: './images/member2.png',
      alt: 'team_2',
    },
    about: 'President Gen. of Cloudflare Company.',
    work: 'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    id: 3,
    name: 'Albert Noah',
    images: {
      img: './images/member3.png',
      alt: 'team_3',
    },
    about: 'President Gen. of Cloudflare Company.',
    work: 'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    id: 4,
    name: 'Albert Noah',
    images: {
      img: './images/member4.png',
      alt: 'team_4',
    },
    about: 'President Gen. of Cloudflare Company.',
    work: 'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    id: 5,
    name: 'Albert Noah',
    images: {
      img: './images/member3.png',
      alt: 'team_3',
    },
    about: 'President Gen. of Cloudflare Company.',
    work: 'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    id: 6,
    name: 'SohYeong Noh',
    images: {
      img: './images/member6.png',
      alt: 'team_6',
    },
    about: 'Head Manager of designers Company.',
    work: 'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
];

const teamContainer = document.querySelector('#Team .teams');

// Implementing the Flex card dynamically

function createCard(dataInfo) {
  const li = document.createElement('li');
  li.className = 'card d-flex';
  li.innerHTML = `<div class="card-img">
    <img src="${dataInfo.images.img}" alt="${dataInfo.images.alt}">
  </div>
  <div class="card-body">
    <h3>${dataInfo.name}</h3>
    <h4>${dataInfo.about}</h4>
    <p>${dataInfo.work}</p>
  </div>`;
  return li;
}

data.forEach((info) => {
  const card = createCard(info);
  teamContainer.appendChild(card);
});

// Implementing the Flex card dynamically

const teamList = document.querySelectorAll('#Team .teams li');
const moreBtn = document.querySelector('#Team button');
const btnSpan = document.querySelector('#Team button span');
const btnIcon = document.querySelector('#Team button i');

let state = false;

function displayMore() {
  if (!state) {
    teamList.forEach((team) => {
      team.style.display = 'flex';
    });
    btnSpan.textContent = 'LESS';
    btnIcon.classList.remove('fa', 'fa-chevron-down');
    btnIcon.classList.add('fa', 'fa-chevron-up');

    state = true;
  } else {
    teamList.forEach((team) => {
      team.style.display = 'none';
    });
    teamList[0].style.display = 'flex';
    teamList[1].style.display = 'flex';

    btnSpan.textContent = 'MORE';
    btnIcon.classList.remove('fa', 'fa-chevron-up');
    btnIcon.classList.add('fa', 'fa-chevron-down');

    state = false;
  }
}

moreBtn.addEventListener('click', displayMore);

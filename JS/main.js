const lockSubmit = document.getElementById('submit-lock')
const lockBox = document.getElementById('lock-box-container')
const questionContainer = document.getElementById('question-container')

const monthOne = document.getElementById('month-one');
const monthOneUp = document.getElementById('month-one-up');
const monthOneDown = document.getElementById('month-one-down');

const monthTwo = document.getElementById('month-two');
const monthTwoUp = document.getElementById('month-two-up');
const monthTwoDown = document.getElementById('month-two-down');

const dayOne = document.getElementById('day-one');
const dayOneUp = document.getElementById('day-one-up');
const dayOneDown = document.getElementById('day-one-down');

const dayTwo = document.getElementById('day-two');
const dayTwoUp = document.getElementById('day-two-up');
const dayTwoDown = document.getElementById('day-two-down');

const yearOne = document.getElementById('year-one');
const yearOneUp = document.getElementById('year-one-up');
const yearOneDown = document.getElementById('year-one-down');

const yearTwo = document.getElementById('year-two');
const yearTwoUp = document.getElementById('year-two-up');
const yearTwoDown = document.getElementById('year-two-down');

monthOneUp.onclick = () => monthOne.value = (Number(monthOne.value || 0) + 1) % 10;
monthOneDown.onclick = () => monthOne.value = (Number(monthOne.value || 0) + 9) % 10;

monthTwoUp.onclick = () => monthTwo.value = (Number(monthTwo.value || 0) + 1) % 10;
monthTwoDown.onclick = () => monthTwo.value = (Number(monthTwo.value || 0) + 9) % 10;

dayOneUp.onclick = () => dayOne.value = (Number(dayOne.value || 0) + 1) % 10;
dayOneDown.onclick = () => dayOne.value = (Number(dayOne.value || 0) + 9) % 10;

dayTwoUp.onclick = () => dayTwo.value = (Number(dayTwo.value || 0) + 1) % 10;
dayTwoDown.onclick = () => dayTwo.value = (Number(dayTwo.value || 0) + 9) % 10;

yearOneUp.onclick = () => yearOne.value = (Number(yearOne.value || 0) + 1) % 10;
yearOneDown.onclick = () => yearOne.value = (Number(yearOne.value || 0) + 9) % 10;

yearTwoUp.onclick = () => yearTwo.value = (Number(yearTwo.value || 0) + 1) % 10;
yearTwoDown.onclick = () => yearTwo.value = (Number(yearTwo.value || 0) + 9) % 10;

const date =
  monthOne.value +
  monthTwo.value +
  dayOne.value +
  dayTwo.value +
  yearOne.value +
  yearTwo.value;


lockSubmit.addEventListener('click', (e) => {
  e.preventDefault(); // stop form reload

  const date = `${monthOne.value}${monthTwo.value}${dayOne.value}${dayTwo.value}${yearOne.value}${yearTwo.value}`;

  if (date === '032724') {
    lockBox.classList.add('hidden')
    questionContainer.classList.remove('hidden')
  } else {
    console.log('Wrong date');
  }

});

monthOneUp.addEventListener('click', () => {
  monthOne.value = Number(monthOne.value || 0) + 1;
});

const child6Container = document.querySelector('.child-6');
const child1 = document.getElementById('child-1');
const child2 = document.getElementById('child-2');
const child3 = document.getElementById('child-3');
const child4 = document.getElementById('child-4');
const child5 = document.getElementById('child-5');
const child6 = document.getElementById('child-6');
const child7 = document.getElementById('child-7');
const child8 = document.getElementById('child-8');
const child9 = document.getElementById('child-9');
const child10 = document.getElementById('child-10');
const child11 = document.getElementById('child-11');

const allChildren = [
  child1, child2, child3, child4, child5,
  child7, child8, child9, child10, child11
];


child10.addEventListener('click', () => {
    child10.classList.add('hidden')
    child1.classList.remove('hidden')
})

child1.addEventListener('click', () => {
    child1.classList.add('hidden')
    child7.classList.remove('hidden')
})

child2.addEventListener('click', () => {
    child2.classList.add('hidden')
    child10.classList.remove('hidden')
})

child3.addEventListener('click', () => {
    child3.classList.add('hidden')
    child8.classList.remove('hidden')
})

child4.addEventListener('click', () => {
    child4.classList.add('hidden')
    child5.classList.remove('hidden')
})

child5.addEventListener('click', () => {
    child5.classList.add('hidden')
    child11.classList.remove('hidden')
})

child7.addEventListener('click', () => {
    child7.classList.add('hidden')
    child3.classList.remove('hidden')
})

child8.addEventListener('click', () => {
    child8.classList.add('hidden')
    child4.classList.remove('hidden')
})

child11.addEventListener('click', () => {
    child11.classList.add('hidden')
    child2.classList.remove('hidden')
})

child9.addEventListener('click', () => {
  allChildren.forEach(child => child.classList.add('hidden'));
  child6.innerText = 'You have officially signed the contract to be my Valentine! I love you so much and I hope you have a wonderful Valentine\'s Day <3';

  questionContainer.style.gridTemplateColumns = 'repeat(6, 1fr)';
  questionContainer.style.gridTemplateRows = 'repeat(3, 1fr)';

  questionContainer.style.gridTemplateAreas = `
  "child6 child6 child6 child6 child6 child6"
  "child6 child6 child6 child6 child6 child6"
  "child6 child6 child6 child6 child6 child6"
`;

child6Container.style.gridArea = 'child6';
child6Container.style.padding = '16px';

})

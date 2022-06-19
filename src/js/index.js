const content = document.querySelector('.content');

content.addEventListener('click', (event) => {
  const card = event.target.closest('.food-pack');
  const wrapper = event.target.closest('.pack-wrapper');
  const link = event.target.closest('.link');
  function toggleListner() {
    wrapper.classList.toggle('pack-wrapper--selected');
    wrapper.removeEventListener('mouseleave', toggleListner);
  }
  if (!card && !link) return;
  if (card || link) {
    wrapper.addEventListener('mouseleave', toggleListner);
  }
  const callBuy = wrapper.querySelector('.call-to-buy');
  if (wrapper.classList.contains('pack-wrapper--disabled')) return;
  switch (wrapper.dataset.size) {
    case 'small-pack':
      if (!wrapper.classList.contains('pack-wrapper--selected')) {
        callBuy.innerText = 'Печень утки разварная с артишоками.';
      } else if (wrapper.classList.contains('pack-wrapper--selected')) {
        callBuy.innerHTML = 'Чего сидишь? Порадуй котэ, <a class="link" href="##">купи</a>.';
      }
      break;
    case 'medium-pack':
      if (!wrapper.classList.contains('pack-wrapper--selected')) {
        callBuy.innerText = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
      } else if (wrapper.classList.contains('pack-wrapper--selected')) {
        callBuy.innerHTML = 'Чего сидишь? Порадуй котэ, <a class="link" href="##">купи</a>.';
      }
      break;
    case 'big-pack':
      if (!wrapper.classList.contains('pack-wrapper--selected')) {
        callBuy.innerText = 'Филе из цыплят с трюфелями в бульоне.';
      } else if (wrapper.classList.contains('pack-wrapper--selected')) {
        callBuy.innerHTML = 'Чего сидишь? Порадуй котэ, <a class="link" href="##">купи</a>.';
      }
      break;
    default:
  }
});

const cards = document.querySelectorAll('.pack-wrapper');
const checkBtn = document.querySelector('.check-btn');

function checkAvailability() {
  cards.forEach((el) => {
    const callBuy = el.querySelector('.call-to-buy');
    callBuy.innerHTML = 'Чего сидишь? Порадуй котэ, <a class="link" href="##">купи</a>.';
    el.classList.remove('pack-wrapper--selected');
    el.classList.remove('pack-wrapper--disabled');
  });
  const amountDisable = Math.floor(Math.random() * 3);
  let lastEl = -1;
  for (let i = 0; i < amountDisable; i += 1) {
    const curEl = Math.floor(Math.random() * 3);
    if (curEl !== lastEl) {
      const callBuy = cards[curEl].querySelector('.call-to-buy');
      lastEl = curEl;
      cards[curEl].classList.add('pack-wrapper--disabled');
      switch (cards[curEl].dataset.size) {
        case 'small-pack':
          callBuy.innerText = 'Печалька, с фуа-гра закончился.';
          break;
        case 'medium-pack':
          callBuy.innerText = 'Печалька, с рыбой закончился.';
          break;
        case 'big-pack':
          callBuy.innerText = 'Печалька, с курой закончился.';
          break;
        default:
      }
    }
  }
  return amountDisable;
}

checkBtn.addEventListener('click', checkAvailability);

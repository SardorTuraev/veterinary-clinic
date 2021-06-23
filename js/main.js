var elOpenModalButton = document.querySelector('.js-open-modal-button');
var elCloseModalButton = document.querySelector('.js-close-modal-button');
var elModal = document.querySelector('.js-modal');

elOpenModalButton.addEventListener('click', function () {
  elModal.classList.add('modal-open');
});

elCloseModalButton.addEventListener('click', function () {
  elModal.classList.remove('modal-open');
});


// FAQ
elsqaItem = document.querySelectorAll('.qa');
elsqaToggler = document.querySelectorAll('.qa-question__toggler');

elsqaToggler.forEach(function (toggler) {
  toggler.addEventListener('click',function () {
      toggler.closest('.qa').classList.toggle('qa--active');
  })
})


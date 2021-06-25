// Modalni ochuvchi hamma elementlarni topiladi
// Modal topiladi
// Modalni yopuvchi element topiladi

// Modalni ochuvchi funksiya (modalga mos klassni qo'shadi)


// Modalni yopuvchi funksiya (modaldan mos klassni olib tashlaydi)


// Agar modalni ochuvchi tugmalar bo'lsa
  // Ularning har biriga link deb murojaat qiladi
    // va har biriga click hodisasida
      // tabiiy reaksiyani to'xtatib
      // Modalni ochish funksiyasini ishga tushiradi


// Agar modalni yopuvchi tugma bo'lsa
  // U tugmaga click hodisasida
    // Modalni yopish funksiyasini ishga tushirishni buyuradi




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


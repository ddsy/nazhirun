$(function () {
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    grabCursor: true,
    centeredSlides: true,
    paginationClickable: true,
    initialSlide: 1,
    // autoplay: 5000,
    loop: true,
    spaceBetween: 40,
    keyboardControl: true,
    autoplayDisableOnInteraction: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 'auto',
    effect: 'coverflow',
    coverflow: {
      rotate: 40,
      stretch: 0,
      depth: 10,
      modifier: 1,
      slideShadows: true
    }
  });
});

$(function () {
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop: true,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 0
  });
});

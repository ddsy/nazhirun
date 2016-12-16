'use strict';

$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  var elQR = $('#jsQR');
  /* this is my input field */
  elQR.on('change', function (e) {
    var filesObj = e.target.files;
    /* all files*/
    var fileObj = filesObj[0];
    /* my one and only file */
    qrcode.decode(window.URL.createObjectURL(fileObj));
  });
  qrcode.callback = function (data) {
    if (/^http/.test(data)) {
      window.location = data;
    } else {
      console.log(data);
    }
  };

  $('.search a.qr-btn').on('click', function () {
    $(this).find('[node-type=jsbridge]')[0].click();
  });
  $('[node-type=jsbridge]').on('click', function (e) {
    e.stopPropagation();
  });

  $('#input_search').on('keyup', function (e) {
    var input = e.currentTarget;
    if (e.keyCode == 13) {
      $("#btn_search").trigger('click');
      $(input).blur();
    }

    if (e.keyCode > 65 && e.keyCode < 90 || e.keyCode > 48 && e.keyCode < 57) {
      input.value = input.value.replace(/\s/g, "").replace(/((\d|\w){4})/g, "$1 ");
    }
  }).on('click', function () {
    $('#input_search').tooltip('hide');
  });
  $('#btn_search').on('click', function () {
    var code = $.trim($("#input_search").val());

    if (code == '') {
      $('#input_search').attr('data-original-title', "请输入产品标识码").tooltip('show');
      return;
    }

    $.when($.ajax("https://api.yuncha.cn/client/query_product?id=" + code + "&user_type=1")).then(function (res) {
      if (res.status == '1') {
        window.location.href = 'https://www.yuncha.cn/verification.html?code=' + code;
      } else {
        $('#input_search').attr('data-original-title', res.err_msg).tooltip('show');
      }
    }, function () {
      $('#input_search').attr('data-original-title', '查询失败!').tooltip('show');
    });
  });

  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    grabCursor: true,
    centeredSlides: true,
    paginationClickable: true,
    initialSlide: 1,
    autoplay: 5000,
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
//# sourceMappingURL=nazhirun.js.map

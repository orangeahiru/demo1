$(function () {

  // スムーススクロール
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  // フェイドインアニメーション（セクション）
  function fadeinAnimation() {
    $('.fadein').each(function() {
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  }

  // トップボタン表示 & 非表示
  let $topBtn = $('#top_btn');
  $(window).scroll(function () {
    fadeinAnimation();
    if ($(this).scrollTop() > 700) {
      $topBtn.css('bottom','30px');
    } else {
      $topBtn.css('bottom','-100px');
    }
  });

});
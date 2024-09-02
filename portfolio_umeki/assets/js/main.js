// ハンバーガー
$(function () {
  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("open");
    $(".header-nav-sp").fadeToggle();
  });

  $(".header-nav-sp a").click(function () {
    $(".hamburger").removeClass("open");
    $(".header-nav-sp").fadeOut();
  });
});

    // スクロールして紙飛行機動く
    $(window).on('scroll', function() {
  $('.animate-on-scroll').each(function() {
    if ($(window).scrollTop() + $(window).height() > $(this).offset().top + 100) {
      $(this).addClass('active');
    }
  });
});

$(document).ready(function () {
  $(window).on('scroll', function () {
    $('.section-works_list li').each(function (i) {
      var elementPosition = $(this).offset().top;
      var scrollPosition = $(window).scrollTop();
      var windowHeight = $(window).height();
      
      if (scrollPosition + windowHeight > elementPosition) {
        setTimeout(() => {
          $(this).addClass('active');
        }, i * 300); // 各画像のアニメーションを300ミリ秒ずつ遅らせる
      }
    });
  });
});

// works出現
$(window).on('scroll', function() {
  $('.animate-on-scroll').each(function() {
    // 要素のトップ位置がウィンドウの底に近づいたときにアニメーションを適用
    if ($(window).scrollTop() + $(window).height() > $(this).offset().top + 100) {
      $(this).addClass('active');
    }
  });
});
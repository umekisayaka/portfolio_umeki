//ローディング
$(window).on('load', function() {
  const loading = $('#loading');
  const mainContent = $('#top-content');

  // 3.5秒後にローディング画面をフェードアウト
  setTimeout(() => {
    loading.addClass('hidden'); // ローディング画面をフェードアウト
    setTimeout(() => {
      loading.css('display', 'none'); // 完全に非表示にする
      mainContent.addClass('visible'); // ズームアウトとフェードインを開始
    }, 1000); // ローディング画面がフェードアウトしてから1秒後にメインコンテンツを表示
  }, 3500); // 3.5秒後にフェードアウト開始
});

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
  const airplaneLayer = $('#AirplaneLayer');
  const elementPosition = airplaneLayer.offset().top;
  const scrollPosition = $(window).scrollTop() + $(window).height();

  if (scrollPosition > elementPosition + 200) {
    $('.pass_airplane1.about').addClass('active');
    $('.pass_airplane2.about').addClass('active');
    $('.pass_line.about').addClass('active');
  }
});

//スクロールでキャッチコピー
$(window).on('scroll', function() {
  const copyContainer = $('.section-about_copy-container');
  const elementPosition = copyContainer.offset().top;
  const scrollPosition = $(window).scrollTop() + $(window).height();

  if (scrollPosition > elementPosition + 200) {
    copyContainer.addClass('visible');
  }
});



//works
$(document).ready(function () {
  $(window).on('scroll', function () {
    $('.section-works_list li').each(function (i) {
      const elementPosition = $(this).offset().top;
      const scrollPosition = $(window).scrollTop();
      const windowHeight = $(window).height();
      
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
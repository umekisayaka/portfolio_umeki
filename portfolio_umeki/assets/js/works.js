$(document).ready(function() {
  // カテゴリリストのタブをクリックしたときの処理
  $('.categoly_list li').click(function() {
    // すべてのタブから active クラスを削除
    $('.categoly_list li').removeClass('active');
    // クリックされたタブに active クラスを追加
    $(this).addClass('active');

    // 選択されたカテゴリに応じて作品リストをフィルタリング
    const category = $(this).text().toLowerCase();
    if (category === 'all') {
      $('.section-works_list li').show(); // 全て表示
    } else {
      $('.section-works_list li').hide(); // 全て隠す
      $('.' + category).show(); // 選択されたカテゴリだけ表示
    }
  });
});
